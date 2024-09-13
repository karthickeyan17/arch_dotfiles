import pandas as pd
import scraper as Scraper
from datetime import datetime
import os, sys, argparse, logging
from concurrent.futures import ProcessPoolExecutor
import asyncio

# Setup logging
DB_PATH = 'Student_db.csv'
CACHE = 'cache.txt'
OUTPUT_PATH = 'progress.csv'
logging.basicConfig(filename="fetch_stats.log", level=logging.INFO, 
                    format="%(asctime)s - %(levelname)s - %(message)s")

def process_stats(val, name, rollno):
    if not val:
        val = {'Easy': 0, 'Medium': 0, 'Hard': 0}
    return pd.DataFrame(val, index=[f"{rollno}-{name}"])

async def fetch_student_stats(student_row):
    name, rollno, leetcode_id = student_row['Name'], student_row['Roll No.'], student_row['Leetcode ID']
    problems_by_date = await Scraper.getProblems(leetcode_id)
    date = datetime.now().date()
    val = problems_by_date.get(date)
    return process_stats(val, name, rollno)

async def fetch_stats():
    try:
        df = pd.read_csv(DB_PATH)
    except Exception as e:
        logging.error(f"Error reading the input file: {e}")
        sys.exit(1)

    # Use asyncio.gather to run all fetch_student_stats coroutines concurrently
    tasks = [fetch_student_stats(row) for _, row in df.iterrows()]
    results = await asyncio.gather(*tasks)

    df2 = pd.concat({datetime.now().date(): pd.concat(results, axis=0)}, axis=1, names=['Date', 'Difficulty'])

    if os.path.isfile(OUTPUT_PATH):
        try:
            df1 = pd.read_csv(OUTPUT_PATH, header=[0, 1], index_col=[0])

            if str(datetime.now().date()) in df1.columns.get_level_values(0):
                df1 = df1.drop(columns=[str(datetime.now().date())], level=0)

            df2 = df2.merge(df1, left_index=True, right_index=True, how='outer')
        except Exception as e:
            logging.error(f"Error reading or merging the output file: {e}")
            sys.exit(1)

    try:
        df2.to_csv(OUTPUT_PATH)
        logging.info(f"Statistics successfully fetched and saved for date {datetime.now().date()}")
    except Exception as e:
        logging.error(f"Error saving the output file: {e}")
        sys.exit(1)

if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("-o", "--output", help="Output File")
    parser.add_argument("-i", "--input", help="Input File")
    args = parser.parse_args()

    if len(sys.argv) <= 1:
        parser.print_help()
        sys.exit(1)

    if args.output:
        OUTPUT_PATH = args.output
    
    if args.input:
        DB_PATH = args.input
        if not os.path.isfile(DB_PATH):
            print("Invalid input")
            sys.exit(1)

    if not os.path.isfile(CACHE):
        open(CACHE, 'w').close()

    asyncio.run(fetch_stats())

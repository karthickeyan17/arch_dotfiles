import requests
import json
from datetime import datetime, timezone
import pandas as pd

# Load the CSV file containing student data
db = pd.read_csv("Student_db.csv")

# Define the GraphQL query to retrieve user problem solved data
query = '''
query userCalendar($username: String!) {
  matchedUser(username: $username) {
    userCalendar {
      submissionCalendar
    }
  }
}
'''

# Function to convert Unix timestamp to date
def timestamp_to_date(timestamp):
    return datetime.fromtimestamp(int(timestamp), timezone.utc).strftime('%Y-%m-%d')

# Function to list problems solved within a date range
def list_problems_solved(data, start_date, end_date):
    if 'data' in data and 'matchedUser' in data['data']:
        matched_user = data['data']['matchedUser']
        if matched_user and 'userCalendar' in matched_user:
            calendar_data = matched_user['userCalendar']['submissionCalendar']
            submission_calendar = json.loads(calendar_data)

            start_timestamp = int(datetime.strptime(start_date, '%Y-%m-%d').timestamp())
            end_timestamp = int(datetime.strptime(end_date, '%Y-%m-%d').timestamp())

            problems_solved = {}
            for timestamp, count in submission_calendar.items():
                date = timestamp_to_date(timestamp)
                if start_date <= date <= end_date:
                    problems_solved[date] = count

            return problems_solved
        else:
            print("Error: 'userCalendar' field not found or 'matchedUser' is None.")
            return {}
    else:
        print("Error: 'data' or 'matchedUser' field not found in response.")
        print("Response data:", json.dumps(data, indent=2))  # Debugging line
        return {}

# Define your date range
start_date = '2024-02-01'  # Start date in 'YYYY-MM-DD' format
end_date = '2024-08-31'    # End date in 'YYYY-MM-DD' format

# Prepare to collect all results
results = {}

# Loop through each student in the CSV and fetch their problem-solving data
for index, row in db.iterrows():
    # Extract the LeetCode username from the LeetCode URL
    leetcode_username = row['Leetcode ID'].split('/')[-2]
    
    # Define the variables for the current student
    variables = {
        "username": leetcode_username
    }
    
    # Send the POST request to the GraphQL endpoint
    response = requests.post(
        "https://leetcode.com/graphql/",
        json={"query": query, "variables": variables}
    )
    
    # Parse the response as JSON
    data = response.json()
    
    # Print the response for debugging
    print(f"Response for {leetcode_username}:")
    print(json.dumps(data, indent=2))
    
    # List the problems solved within the date range
    problems_solved = list_problems_solved(data, start_date, end_date)
    
    # Collect results for each student
    results[row['Name']] = problems_solved

# Convert results to a DataFrame
dates = pd.date_range(start_date, end_date).strftime('%Y-%m-%d').tolist()
results_df = pd.DataFrame(index=db['Name'], columns=dates)

# Populate the DataFrame
for student, data in results.items():
    for date in dates:
        results_df.at[student, date] = data.get(date, 0)

# Save the results to a CSV file
results_df.to_csv('student_progress.csv')

print("Results saved to 'student_progress.csv'.")
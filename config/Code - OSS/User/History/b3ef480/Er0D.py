from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from bs4 import BeautifulSoup

# Set up the WebDriver (e.g., Firefox)
driver = webdriver.Firefox()

# Define the URL for the LeetCode login and progress page
login_url = 'https://leetcode.com/accounts/login/'
progress_url = 'https://leetcode.com/progress/'

# Navigate to the login page
driver.get(progress_url)

# Wait until the user logs in
logged_in = False

while not logged_in:
    try:
        # Check if the page has redirected to the homepage
        WebDriverWait(driver, 10).until(EC.url_to_be('https://leetcode.com/'))
        
        # Wait for the security check to be completed manually by the user
        input("Please complete the CAPTCHA or security check manually, then press Enter...")
        
        # Check for an element that only appears after login (e.g., profile icon or user dropdown)
        WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.XPATH, "//a[contains(@href, '/progress/')]"))
        )
        logged_in = True
        print("User is logged in and redirected to the homepage.")
    except Exception as e:
        print("User is not logged in yet. Waiting...", e)

# After confirming login, navigate to the progress page manually
driver.get(progress_url)
page_source = driver.page_source

# Parse the page with BeautifulSoup
soup = BeautifulSoup(page_source, 'html.parser')

progress_bars = soup.find_all('div', class_='flex')

for bar in progress_bars:
    # Extract the width of each progress bar
    width_elements = bar.find_all('div', class_='w-full')
    widths = [elem.get('style') for elem in width_elements]
    
    print("Progress bar widths:", widths)

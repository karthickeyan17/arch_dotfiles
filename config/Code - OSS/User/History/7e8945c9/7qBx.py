import requests

# Define the GraphQL query
query = '''
query recentAcSubmissions($username: String!, $limit: Int!) {
  recentAcSubmissionList(username: $username, limit: $limit) {
    titleSlug
    timestamp
  }
}
'''

# Define the variables
variables = {
    "username": "karthickeyan_s",  # Replace with the desired username
    "limit": 50  # Adjust the limit as needed
}

# Send the POST request to the GraphQL endpoint
response = requests.post(
    "https://leetcode.com/graphql/",
    json={"query": query, "variables": variables}
)

# Print the response
d = eval(str(response.json()))
key=list(d.keys())
for s in d['data']['recentAcSubmissionList']:
    print(s)
print(len(d['data']['recentAcSubmissionList']))
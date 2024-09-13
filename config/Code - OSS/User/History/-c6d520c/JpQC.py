import leetcode

# Setup the configuration as per your setup
leetcode_session = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfYXV0aF91c2VyX2lkIjoiMTAwMzgzOTIiLCJfYXV0aF91c2VyX2JhY2tlbmQiOiJkamFuZ28uY29udHJpYi5hdXRoLmJhY2tlbmRzLk1vZGVsQmFja2VuZCIsIl9hdXRoX3VzZXJfaGFzaCI6IjRmZThhOWE3NThkM2I2NzcwMjM2ZmU2Y2U0OTUxZWU4MDA3MzgxZjJlOTk0N2ZiOThhYmE1Y2E4YTc0MzU2ZGIiLCJpZCI6MTAwMzgzOTIsImVtYWlsIjoic2thcnRoaWNrZXlhbjcwN0BnbWFpbC5jb20iLCJ1c2VybmFtZSI6ImthcnRoaWNrZXlhbl9TIiwidXNlcl9zbHVnIjoia2FydGhpY2tleWFuX1MiLCJhdmF0YXIiOiJodHRwczovL2Fzc2V0cy5sZWV0Y29kZS5jb20vdXNlcnMvYXZhdGFycy9hdmF0YXJfMTY4ODgwMTg5OS5wbmciLCJyZWZyZXNoZWRfYXQiOjE3MjQ0MDk0MTUsImlwIjoiMTAzLjE5Ni4yOC4xNzkiLCJpZGVudGl0eSI6IjY3NjM5NDNiMWE0MWE1ZTZlZDQ3MmQ3NDYwNWY0YTVkIiwiZGV2aWNlX3dpdGhfaXAiOlsiMWZlZjBjMGE3YzkyZmRjZmRhYzRlOWIwNWM4MDgxMDEiLCIxMDMuMTk2LjI4LjE3OSJdLCJzZXNzaW9uX2lkIjo2ODM2OTIyOSwiX3Nlc3Npb25fZXhwaXJ5IjoxMjA5NjAwfQ.2M7TTG4ccSTgg7O28bEV15CIvYhRP4XHi_btbeGfrWA"
csrf_token = "SlEdJr4ui152zQ25bSdAUHwwNhieMLI8Ub2T8BRNxVpeDargrZQ2Vn3eFRByGhJp"
configuration = leetcode.Configuration()
configuration.api_key["x-csrftoken"] = csrf_token
configuration.api_key["csrftoken"] = csrf_token
configuration.api_key["LEETCODE_SESSION"] = leetcode_session
configuration.api_key["Referer"] = "https://leetcode.com"
configuration.debug = False

# Initialize API instance
api_instance = leetcode.DefaultApi(leetcode.ApiClient(configuration))

# Fetch problems from a specific topic
api_response = api_instance.api_problems_topic_get(topic="algorithms")
graphql_request = leetcode.GraphqlQuery(
query="""
     {
       user {
            username
            isCurrentUserPremium
         }
     }
     """,
variables=leetcode.GraphqlQueryVariables(),
)
print(api_instance.graphql_post(body=graphql_request))
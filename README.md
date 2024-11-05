# Install dependencies

npm i

# Test local

npm run dev

# Create token

curl --request GET \
  --url http://localhost:3000/auth/generate-token

# Verify token

curl --request GET \
  --url http://localhost:3000/protected/resource \
  --header 'Authorization: Bearer xxxx-token-here-xxxx            '
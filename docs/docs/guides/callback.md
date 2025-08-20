---
title: Handle the Callback
---

# Handle the Callback

Exchange the authorization `code` for tokens on your **server**:

```http title="POST /oauth/token"
grant_type=authorization_code
code=...
redirect_uri=https://yourapp.com/callback
client_id=YOUR_CLIENT_ID
client_secret=YOUR_CLIENT_SECRET
```

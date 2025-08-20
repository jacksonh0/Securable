---
title: /oauth/token
---

# POST /oauth/token

Exchange the authorization `code` for tokens.

**Body (x-www-form-urlencoded)**

- `grant_type=authorization_code`
- `code` — The code from the callback
- `redirect_uri` — Must match your app's redirect
- `client_id`
- `client_secret`

**Response**

```json
{
  "access_token": "…",
  "id_token": "…",
  "refresh_token": "…",
  "token_type": "Bearer",
  "expires_in": 3600
}
```

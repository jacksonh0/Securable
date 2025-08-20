---
title: /oauth/authorize
---

# GET /oauth/authorize

Starts the OAuth 2.0 Authorization Code flow.

**Query Params**

| Name | Required | Description |
| --- | --- | --- |
| `client_id` | ✅ | Your app's Client ID |
| `redirect_uri` | ✅ | Must match one of your app's redirects |
| `response_type` | ✅ | Always `code` |
| `scope` | ✅ | Space-separated scopes (e.g., `openid profile email`) |
| `state` | ✅ | Random string to prevent CSRF |

**Response**  
Redirects back to `redirect_uri` with `?code=...&state=...`.

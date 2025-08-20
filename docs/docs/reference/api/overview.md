---
title: Auth API Overview
---

# Auth API Overview

Base URL: `https://auth.securable.dev`

- `/oauth/authorize` — Start the OAuth flow
- `/oauth/token` — Exchange authorization code for tokens
- `/oauth/userinfo` — Returns user profile claims
- `/oauth/revoke` — Revoke tokens
- `/.well-known/jwks.json` — Public signing keys for JWT verification

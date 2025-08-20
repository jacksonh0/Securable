---
title: Webhooks
---

# Webhooks

Receive events like `user.login`, `token.revoked`, `app.created`.

- Add your endpoint in **Dashboard → Webhooks**.
- We'll `POST` JSON with an HMAC signature header.
- Verify with your webhook secret.

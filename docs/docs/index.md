---
id: index
title: Welcome to Securable
sidebar_position: 1
---

# Securable Docs

**Securable** is a universal login platform with OAuth 2.0 & OpenID Connect (OIDC).  
**Tagline:** *Sign in once, use it everywhere.*

## What you'll build

- A developer app in the Securable dashboard
- A login button that starts the OAuth flow
- A backend callback that exchanges the `code` for tokens
- Auth-protected routes using JWT verification

## Prerequisites

- Node 18+ or PHP 8.2+
- A Securable account
- A registered app (Client ID & Secret)
- Redirect URL configured (e.g., `https://yourapp.com/callback`)

## TL;DR

1. Create an app in the dashboard → copy **Client ID**.
2. Add the **Login with Securable** button.
3. Handle the callback on your server to exchange the `code` for tokens.
4. Verify JWTs to protect APIs and routes.

Get started with a framework:
- 👉 **[React Quickstart](quickstarts/react.md)**
- 👉 **[Next.js Quickstart](quickstarts/nextjs.md)**
- 👉 **[Laravel Quickstart](quickstarts/php-laravel.md)**

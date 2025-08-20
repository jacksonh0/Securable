---
title: React Quickstart
sidebar_position: 1
---

# React Quickstart

Install the SDK:

```bash
npm install @securable/react
```

Add the login button:

```jsx
import { SecurableButton } from "@securable/react";

export default function Login() {
  return (
    <SecurableButton
      clientId="YOUR_CLIENT_ID"
      redirectUri={`${window.location.origin}/callback`}
      scopes={["openid", "profile", "email"]}
    />
  );
}
```

Handle the callback (example with Vite dev server + a small Node proxy) or see the **Next.js** guide for a full SSR example.

> See also: [Tokens & Claims](../concepts/tokens.md)

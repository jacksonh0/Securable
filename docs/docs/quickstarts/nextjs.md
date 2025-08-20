---
title: Next.js Quickstart
sidebar_position: 2
---

# Next.js Quickstart

1) Add an API route to handle the callback:

```ts title="app/api/callback/route.ts"
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const code = req.nextUrl.searchParams.get('code');
  if (!code) return NextResponse.redirect('/');

  // Exchange the code for tokens (server-side)
  // POST https://auth.securable.dev/oauth/token
  // body: grant_type=authorization_code, code, redirect_uri, client_id, client_secret

  // Set a session cookie, then redirect
  return NextResponse.redirect('/');
}
```

2) Trigger the OAuth flow from your page:

```tsx
const params = new URLSearchParams({
  client_id: process.env.NEXT_PUBLIC_SECURABLE_CLIENT_ID!,
  redirect_uri: `${location.origin}/api/callback`,
  response_type: 'code',
  scope: 'openid profile email',
  state: crypto.randomUUID()
});
location.href = `https://auth.securable.dev/oauth/authorize?${params}`;
```

> Need middleware-based route protection? See: [Protect Routes](../guides/protect-routes.md).

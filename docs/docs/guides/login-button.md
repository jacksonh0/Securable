---
title: Add a Login Button
---

# Add a Login Button

Vanilla JS:

```html
<button id="login">Login with Securable</button>
<script>
document.querySelector('#login').addEventListener('click', () => {
  const params = new URLSearchParams({
    client_id: 'YOUR_CLIENT_ID',
    redirect_uri: 'https://yourapp.com/callback',
    response_type: 'code',
    scope: 'openid profile email',
    state: crypto.randomUUID()
  });
  location.href = `https://auth.securable.dev/oauth/authorize?${params}`;
});
</script>
```

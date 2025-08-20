---
title: Laravel (PHP) Quickstart
sidebar_position: 3
---

# Laravel Quickstart

**Install** dependencies and set env vars:

```env title=".env"
SECURABLE_CLIENT_ID=your_client_id
SECURABLE_CLIENT_SECRET=your_client_secret
SECURABLE_REDIRECT_URI=https://yourapp.com/callback
```

**routes/web.php**

```php
use Illuminate\\Support\\Str;
use Illuminate\\Support\\Facades\\Http;

Route::get('/login', function() {
  $query = http_build_query([
    'client_id' => env('SECURABLE_CLIENT_ID'),
    'redirect_uri' => env('SECURABLE_REDIRECT_URI'),
    'response_type' => 'code',
    'scope' => 'openid profile email',
    'state' => Str::uuid(),
  ]);
  return redirect('https://auth.securable.dev/oauth/authorize?'.$query);
});

Route::get('/callback', function() {
  $code = request('code');
  $resp = Http::asForm()->post('https://auth.securable.dev/oauth/token', [
    'grant_type' => 'authorization_code',
    'code' => $code,
    'redirect_uri' => env('SECURABLE_REDIRECT_URI'),
    'client_id' => env('SECURABLE_CLIENT_ID'),
    'client_secret' => env('SECURABLE_CLIENT_SECRET'),
  ])->json();
  // TODO: store tokens in session & redirect
  return redirect('/');
});
```

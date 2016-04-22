# Angular Web User

It contains tools for you to create token based front-end user system.

## client side

We provider a angular module.

This module integrate satellizer, angular-permission and ui-router.

### directive

- **login**

  invoke login method when clicked.

  example:

  ```html
  <form>
    <div><input ng-model="credential.username"></div>
    <div><input ng-model="credential.password"></div>
    <div><button login="credential"></button></div>
  </form>
  ```

- **logout**

  place anywhere

  ```html
  <button logout></button>
  ```

- **signup**

  just like login

### provider

- ** $webUserProvider **

  config permission for routing

  ```js
  function ($webUserProvider) {
    $webUserProvider.allowAnonymous(false);
    $webUserProvider.scopes([
      'consumer'
    ]);
  }
  ```

### router params

- **redirectTo**

  when login success. it will auto redirect to this address

  example:

  ```html
  <a href="login({redirectTo: 'dashboard'})"></a>
  ```

## server side

We use passport, passport-local and passport-local-sequelize implement storage.

inspired by this article: https://blog.hyphe.me/token-based-authentication-with-node/

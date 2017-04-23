# bukalapak-api

> 🎁 Promise-based Javascript wrapper for Bukalapak API

## Usage

```js
const {authentication} = require('bukalapak-api')

const USER = {
  username: 'hello@me.com',
  password: 'hunter2'
}

async function logToken (user) {
  try {
    const { status, token, confirmed } = await getApiToken(user)
    console.log(token)
  } catch (error) {
    const {message} = error
    console.log(message)
  }
}

logToken(USER)
```

## API


### Authentication

#### Get API Token

- `getApiToken({ username: String, password: String })`

##### Success Response

```json
{
  "status"    : "OK",
  "user_id"   : "157324",
  "user_name" : "Sayur Kangkung",
  "confirmed" : true,
  "token"     : "U8Ch2LigkVhdI3XwYRA",
  "email"     : "sayur@kangkung.com",
  "omnikey"   : "a15d3e8835c69f1c4fd6b38fe9098b4b",
  "message"   : null
}
```

##### Failure response

```json
{
  "status"    : "ERROR",
  "user_id"   : null,
  "user_name" : null,
  "confirmed" : false,
  "token"     : null,
  "email"     : null,
  "omnikey"   : null,
  "message"   : "Username atau password tidak valid"
}
```

#### Facebook Login

- `facebookLogin({ facebookId: String, facebookToken: String })`

##### Success Response

```json
{
  "status": "OK",
  "user_id": "157324",
  "user_name": "Sayur Kangkung",
  "token": "U8Ch2LigkVhdI3XwYRA",
  "message": null
}
```

##### Failure response

```json
{
    "status": "ERROR",
    "message": "User tidak ditemukan"
}
```

#### Google Login

- `googleLogin({ email: String, googleToken: String })`

##### Success Response

```json
{
  "status": "OK",
  "user_id": "157324",
  "user_name": "Sayur Kangkung",
  "token": "U8Ch2LigkVhdI3XwYRA",
  "message": null
}
```

##### Failure response

```json
{
    "status": "ERROR",
    "message": "User tidak ditemukan"
}
```

### Categories

(WIP)

### Carts

(WIP)

### Deals

(WIP)

### Dompet

(WIP)

### Errors

(WIP)

### Favorites

(WIP)

### Images

(WIP)

### Additional Informations

(WIP)

### Labels

(WIP)

### Messages

(WIP)

### Negotiations

(WIP)

### Notifications

(WIP)

### Products

(WIP)

### Product Reviews

(WIP)

### Pushes

(WIP)

### SEO Pages

(WIP)

### Shipping Fees

(WIP)

### Subscriptions

(WIP)

### Supports

(WIP)

### Transactions

(WIP)

### Users

(WIP)


(WIP)### User Addresses

## Contributing

Looking for contributors! Feel free to open issues and create PR's. Lint your code using `prettier`.

## License

MIT. See [LICENSE](./LICENSE).

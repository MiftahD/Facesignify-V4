### Autentikasi dan Pengelolaan Pengguna
# Method Path API
#### 1. Registrasi Pengguna

- **URL:** `/register`
- **Metode:** `POST`
- **Deskripsi:** Mendaftarkan pengguna baru.
- **Request Payload:**
```json
{
  "username": "string",
  "email": "string",
  "password": "string"
}

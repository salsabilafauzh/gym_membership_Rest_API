# REST-API_gym_membership
REST API database gym membership sederhana menggunakan end-point dalam memanipulasi database. penggunaan demo dilakukan dengan post-man untuk melihat keberhasilan request dan respon dari setiap end-point yang ada.

## Langkah awal dibutuhkan config environment untuk koneksi database anda pada file .env sebagai berikut:
file .env-example akan dijadikan file penyimpan environtment yaitu .env dengan isi konfigurasi database anda.
pada post-man file contoh url menggunakan database localhost.
```js
NODE_ENV ="development"
PORT=5000

# Database Config
DB_HOST=
DB_PORT=
DB_USER=
DB_PASSWORD=
DB_NAME=
```

## Migration database:
melakukan migration tabel dalam API yaitu tabel gym_membership
```js
$ knex migrate:up
```
atau 
```js
$ knex migrate:latest
```

menambahkan data ke dalam tabel dengan seed
```js
$ knex seed:run
```

## menjalankan server
menjalankan server dengan mode development
```js
$ npm run dev
```
atau

menjalankan server dengan mode production
```js
$ npm run start
```

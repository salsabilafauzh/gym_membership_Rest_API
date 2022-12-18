# REST-API_gym_membership
REST API database gym membership sederhana menggunakan end-point dalam memanipulasi database


#Installation
membutuhkan setup awal instal [Knex](http://knexjs.org/), dan  `mysql`.

```js
$ npm install knex

# kemudian install:
$ npm install mysql
```

# Langkah awal dibutuhkan config environment untuk koneksi database anda pada file .env sebagai berikut:
file .env-example akan dijadikan file penyimpan environtment yaitu .env dengan isi konfigurasi database anda.

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

## Selanjutnya, jalankan perintah berikut:
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

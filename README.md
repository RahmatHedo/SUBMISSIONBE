#  Backend Submission REST API (Dockerized)

Sebuah RESTful API sederhana untuk manajemen data buku (CRUD). Proyek ini dibangun menggunakan **Node.js, Express, dan MySQL**, serta di- *containerize* sepenuhnya menggunakan **Docker** untuk memudahkan proses instalasi dan *deployment* di lingkungan manapun.

## Teknologi yang Digunakan
* **Backend:** Node.js, Express.js
* **Database:** MySQL 8.0
* **Infrastruktur:** Docker & Docker Compose
* **Environment:** dotenv

---

## ⚙️ Persyaratan Sistem
Sebelum menjalankan aplikasi ini, pastikan komputer Anda sudah terinstal:
* [Git](https://git-scm.com/)
* [Docker Desktop](https://www.docker.com/products/docker-desktop) (Pastikan Docker Engine sudah dalam keadaan *Running*)
* [Postman](https://www.postman.com/) atau Insomnia (Untuk pengujian API)

---

##  Cara Instalasi & Menjalankan Aplikasi

Ikuti langkah-langkah di bawah ini untuk menjalankan aplikasi secara lokal di komputer Anda:

### 1. Clone Repository
Buka terminal Anda dan jalankan perintah berikut untuk mengunduh *source code*:
```bash
git clone https://github.com/RahmatHedo/SUBMISSIONBE.git

2. Konfigurasi Environment Variables
Aplikasi ini membutuhkan variabel lingkungan (environment variables) untuk berjalan.

Duplikat file .env.example yang ada di root directory.

Ubah nama file hasil duplikat tersebut menjadi .env.

Secara default, konfigurasi di dalamnya sudah disesuaikan untuk berjalan di dalam Docker, jadi Anda tidak perlu mengubah nilainya untuk pengetesan lokal.

3. Build dan Jalankan Container (Docker)
Pastikan tidak ada aplikasi lokal yang menggunakan Port 3000 (Node.js) dan Port 3306 (MySQL). Setelah itu, jalankan perintah sakti ini di terminal:

Bash
docker-compose up -d --build
Tunggu beberapa saat hingga proses pull image dan build selesai. Docker akan menyalakan dua container: mysql_db dan api_backend.

4. Verifikasi Status Container
Pastikan kedua container berjalan dengan normal (Status: Up):

Bash
docker ps
Untuk memastikan aplikasi Node.js sudah berhasil terhubung ke database MySQL, cek log aplikasi dengan perintah:

Bash
docker logs api_backend
Jika muncul pesan  Terhubung ke database MySQL lokal!, aplikasi sudah siap digunakan!

🧪 Pengujian API (API Endpoints)
Aplikasi berjalan pada http://localhost:3000. Berikut adalah contoh pengujian untuk menambahkan data buku baru menggunakan Postman.

1. Create Book (POST)

URL: http://localhost:3000/api/books

Method: POST

Headers: Content-Type: application/json

Body (raw JSON):

JSON
{
    "title": "Mahir Docker dalam 1 Hari",
    "author": "Rahmat Hedo",
    "published_year": 2026
}
Expected Response (201 Created):

JSON
{
    "message": "Buku berhasil ditambahkan",
    "id": 1
}
🗄️ Akses Database (Opsional)
Jika Anda ingin melihat data yang tersimpan secara langsung di dalam database MySQL yang berjalan di Docker, jalankan perintah ini di terminal:

Bash
docker exec -it mysql_db mysql -u root -prootpassword
Lalu eksekusi perintah SQL berikut:

SQL
USE book_db;
SELECT * FROM books;
Dibuat oleh Rahmat Hedo - 2026

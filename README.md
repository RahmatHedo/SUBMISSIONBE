# BE Submission REST API (Dockerized)

<div align="center">

![Node.js](https://img.shields.io/badge/Node.js-18-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-8.0-00000F?style=for-the-badge&logo=mysql&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)

RESTful API yang tangguh dan ter-containerize sepenuhnya untuk operasi CRUD data buku.  
Dibangun dengan **Node.js**, **Express**, dan **MySQL**, proyek ini menggunakan **Docker Compose** untuk setup lingkungan yang terisolasi dan bebas masalah dependensi lokal.

</div>

---

## ✨ Fitur Utama

- ✅ **Operasi CRUD Lengkap** — Tambah, Baca, Perbarui, dan Hapus data buku
- 🐳 **Infrastruktur Docker** — Setup *zero-config* untuk database dan aplikasi backend
- 🗄️ **Relational Database** — Manajemen data terstruktur menggunakan MySQL 8.0
- 🔒 **Keamanan Konfigurasi** — Menggunakan variabel lingkungan melalui file `.env`

---

## ⚙️ Persyaratan Sistem

Pastikan perangkat lunak berikut sudah terinstal sebelum memulai:

| Perangkat Lunak | Keterangan |
|---|---|
| [Git](https://git-scm.com/) | Version control |
| [Docker Desktop](https://www.docker.com/products/docker-desktop) | Pastikan Docker Engine berstatus *Running* |
| [Postman](https://www.postman.com/) / Insomnia | Untuk pengujian endpoint API |

---

##  Cara Instalasi & Menjalankan Aplikasi

### 1. Clone Repository

```bash
git clone https://github.com/RahmatHedo/SUBMISSIONBE.git
```

### 2. Setup Environment

Duplikat file template dan ubah namanya menjadi `.env`:

```bash
cp .env.example .env
```

> ⚠️ **Penting:** Sebelum menjalankan aplikasi, buka file `.env` dan **isi semua nilai variabel** yang dibutuhkan terlebih dahulu.

Berikut contoh isi file `.env` yang perlu disesuaikan:

```env
# Konfigurasi Database
DB_HOST=db
DB_PORT=3306
DB_NAME=book_db
DB_USER=root
DB_PASSWORD=isi_password_kamu_di_sini

# Konfigurasi Aplikasi
APP_PORT=3000
```

### 3. Build & Jalankan Container

Nyalakan database dan aplikasi Node.js hanya dengan satu perintah:

```bash
docker-compose up -d --build
```

### 4. Verifikasi Container

Pastikan container `api_backend` dan `mysql_db` berjalan normal (Status: `Up`):

```bash
docker ps
```

Cek log backend untuk memastikan koneksi ke MySQL berhasil:

```bash
docker logs api_backend
```

---

## 📌 Referensi API Endpoints

**Base URL:** `http://localhost:3000`

| Method | Endpoint | Deskripsi |
|---|---|---|
| `GET` | `/api/books` | Mengambil daftar semua buku |
| `GET` | `/api/books/:id` | Mengambil detail satu buku berdasarkan ID |
| `POST` | `/api/books` | Menambahkan data buku baru |
| `PUT` | `/api/books/:id` | Memperbarui data buku yang sudah ada |
| `DELETE` | `/api/books/:id` | Menghapus data buku |

---

---

##  Akses Langsung ke Database

Untuk melihat atau mengelola tabel langsung di dalam container MySQL:

```bash
docker exec -it mysql_db mysql -u root -p
```

Setelah masuk ke MySQL shell (`mysql>`), jalankan perintah berikut:

```sql
USE book_db;
SELECT * FROM books;
```

---

## 📸 Bukti Pengujian

Seluruh endpoint API (`POST`, `GET`, `PUT`, `DELETE`) telah diuji menggunakan **Postman**.

### ➕ Create — `POST /api/books`
<img width="883" height="798" alt="Delete" src="https://github.com/user-attachments/assets/9537495b-ce51-400f-9925-06446ccf5e54" />

---

### 📋 Read All — `GET /api/books`
<img width="877" height="793" alt="Update" src="https://github.com/user-attachments/assets/95adad84-ab58-4cb1-b63c-2279b4bb038e" />

---

### 🔍 Read by ID — `GET /api/books/:id`
<img width="875" height="793" alt="Read by ID" src="https://github.com/user-attachments/assets/8b9febf6-cdf3-41fd-9147-3ce304cb0e1b" />

---

### ✏️ Update — `PUT /api/books/:id`
<img width="868" height="794" alt="Read All" src="https://github.com/user-attachments/assets/4d466ae3-fff4-4129-9dbb-9d8f0da5a428" />

---

### 🗑️ Delete — `DELETE /api/books/:id`
<img width="866" height="791" alt="Create" src="https://github.com/user-attachments/assets/27e2a431-d54a-454b-8433-6093c5cd1fa7" />

---

### 🗄️ Database — Raw Data MySQL
<img width="590" height="129" alt="Database" src="https://github.com/user-attachments/assets/ecbb5d45-2995-4646-a911-c594e9ce577e" />

---

## 👤 Author

**Rahmat Hedo Alfikri**  
*Member Backend Dev — GDGoC Unsri 2026*

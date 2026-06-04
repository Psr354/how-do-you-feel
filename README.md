# 🩺 How Do You Feel?

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen)](https://github.com/psr354/how-do-you-feel)
[![Version](https://img.shields.io/badge/version-1.0.0-blue)](https://github.com/psr354/how-do-you-feel/releases)
[![License](https://img.shields.io/badge/license-MIT-green)](#lisensi)
[![Live Demo](https://img.shields.io/badge/demo-online-success)](https://psr354.github.io/how-do-you-feel/)

**How Do You Feel?** adalah aplikasi web interaktif untuk menjelajahi titik akupunktur berdasarkan keluhan yang ditulis dengan bahasa sehari-hari. Aplikasi ini membantu pengguna menghubungkan gejala dengan titik akupunktur, meridian, area tubuh, dan informasi keamanan dalam satu antarmuka yang mudah digunakan.

> [!IMPORTANT]
> Aplikasi ini hanya merupakan alat bantu referensi dan edukasi, bukan pengganti diagnosis, saran, atau tindakan dari tenaga kesehatan dan praktisi akupunktur profesional.

## ✨ Fitur Utama

- Pencarian titik akupunktur berdasarkan satu atau beberapa keluhan.
- Dukungan query berbobot, seperti `maag^2 + mual + cemas`.
- Dataset berisi 391 titik akupunktur meridian dan ekstra.
- Pemeringkatan hasil berdasarkan relevansi keluhan, meridian, dan area tubuh.
- Filter dan katalog untuk menjelajahi berbagai meridian.
- Peta tubuh interaktif dengan layer permukaan, organ, dan meridian.
- Detail titik yang mencakup lokasi, indikasi, titik terkait, dan metadata atlas.
- Peringatan keamanan konservatif untuk titik yang memerlukan perhatian khusus.
- Riwayat pencarian yang tersimpan secara lokal di browser.
- Tautan pencarian yang dapat dibagikan dan ringkasan hasil yang dapat disalin.
- Desain responsif untuk desktop dan perangkat mobile.

## 🛠️ Tech Stack

| Teknologi | Penggunaan |
| --- | --- |
| HTML5 | Struktur dan elemen semantik aplikasi |
| CSS3 | Layout responsif, visualisasi, dan styling |
| JavaScript (Vanilla) | Logika pencarian, state, dan interaksi antarmuka |
| Local Storage API | Penyimpanan riwayat pencarian di browser |
| Web Share & Clipboard API | Berbagi tautan dan menyalin ringkasan |
| GitHub Pages | Hosting aplikasi statis |

Proyek ini tidak menggunakan framework, proses build, atau package dependency yang perlu diinstal.

## 📋 Prasyarat

Untuk menjalankan proyek secara lokal, siapkan:

- Git
- Browser modern, seperti Chrome, Firefox, Edge, atau Safari
- Salah satu server HTTP lokal:
  - Python 3.9+; atau
  - Node.js 18+ dengan `npx`

## 🚀 Instalasi & Setup

1. Clone repository:

   ```bash
   git clone https://github.com/psr354/how-do-you-feel.git
   cd how-do-you-feel
   ```

2. Jalankan server lokal menggunakan salah satu opsi berikut:

   ```bash
   # Opsi 1: Python
   python3 -m http.server 8000
   ```

   ```bash
   # Opsi 2: Node.js
   npx serve .
   ```

3. Buka aplikasi melalui browser:

   ```text
   http://localhost:8000
   ```

Tidak diperlukan instalasi dependency atau konfigurasi environment variable.

## 💡 Cara Penggunaan

Versi publik dapat langsung digunakan di:

**https://psr354.github.io/how-do-you-feel/**

Masukkan keluhan pada kolom pencarian, lalu pilih hasil untuk melihat detail titik, lokasi tubuh, dan peringatan keamanannya.

Contoh query:

```text
maag + mual
insomnia + cemas
nyeri pinggang + lutut sakit
maag^2 + mual + cemas
```

Gunakan `^` untuk memberikan bobot lebih besar pada keluhan tertentu. Sebagai contoh, `maag^2` membuat keluhan maag memiliki prioritas lebih tinggi dibandingkan keluhan lain dalam query yang sama.

## 📁 Struktur Folder

```text
how-do-you-feel/
├── index.html          # Struktur halaman utama
├── styles.css          # Styling dan layout responsif
├── app.js              # State aplikasi dan interaksi antarmuka
├── search-engine.js    # Parsing query dan pemeringkatan hasil
├── points-data.js      # Dataset titik akupunktur
├── atlas-data.js       # Metadata atlas tubuh dan meridian
├── .nojekyll           # Konfigurasi publikasi GitHub Pages
└── README.md           # Dokumentasi proyek
```

## 🤝 Cara Berkontribusi

Kontribusi berupa perbaikan bug, peningkatan aksesibilitas, penyempurnaan dokumentasi, dan peningkatan kualitas data sangat diterima.

1. Fork repository ini.
2. Buat branch baru:

   ```bash
   git checkout -b feature/nama-perubahan
   ```

3. Lakukan perubahan dan uji aplikasi di browser.
4. Commit perubahan:

   ```bash
   git commit -m "feat: jelaskan perubahan"
   ```

5. Push branch dan buat Pull Request:

   ```bash
   git push origin feature/nama-perubahan
   ```

Pastikan perubahan tetap berjalan tanpa proses build dan tidak menghilangkan disclaimer atau informasi keamanan yang tersedia.

## 📄 Lisensi

Proyek ini didistribusikan di bawah **MIT License**. Anda bebas menggunakan, memodifikasi, dan mendistribusikan proyek ini sesuai ketentuan lisensi tersebut.

## 📬 Kontak

- **Maintainer:** [@psr354](https://github.com/psr354)
- **Email:** [azzamazhimmuntazhar@gmail.com](mailto:azzamazhimmuntazhar@gmail.com)
- **Live Demo:** [psr354.github.io/how-do-you-feel](https://psr354.github.io/how-do-you-feel/)

---
title: "Sistem Manajemen Akademik DigiKidz"
description: "Aplikasi manajemen lembaga coding berbasis Java Swing — mengelola data siswa, jadwal kelas, laporan progress, dan histori pembayaran."
status: "Selesai"
tags: ["Java", "Swing", "OOP", "SQLite", "JDBC"]
category: "Mengajar"
metric: "Mengelola 4 kelas aktif, 40+ siswa"
date: "2024-09-10"
featured: false
github: "https://github.com/angg4ra/siadak-digikidz"
---

## Latar Belakang

Sebagai Coding Educator di PT DigiKidz Indonesia, saya menyadari bahwa pencatatan progress siswa masih dilakukan secara manual — spreadsheet yang tidak terintegrasi, laporan yang harus ditulis ulang tiap minggu, dan tidak ada satu tempat untuk melihat gambaran besar perkembangan kelas.

Proyek ini lahir dari frustrasi itu.

## Apa yang Dibangun

Aplikasi desktop berbasis Java Swing dengan arsitektur OOP yang memanfaatkan konsep inheritance, encapsulation, polymorphism, dan abstract class. Database lokal menggunakan SQLite via JDBC.

Fitur utama:
- Manajemen data siswa dan wali murid
- Penjadwalan kelas dan sesi mengajar
- Laporan progress per siswa dengan histori sesi
- Pencatatan pembayaran dan status tagihan
- Dashboard ringkasan kondisi kelas

## Tantangan Teknis

Tantangan terbesar adalah desain skema database yang cukup fleksibel untuk menampung variasi jadwal, sekaligus tetap sederhana untuk diquery. Saya akhirnya memilih normalisasi tiga tabel utama — siswa, sesi, pembayaran — dengan relasi foreign key yang eksplisit.

## Yang Saya Pelajari

Membangun untuk diri sendiri sebagai pengguna adalah pengalaman yang berbeda. Setiap keputusan UI terasa langsung. Ini yang mengajarkan saya bahwa software yang bagus bukan yang punya fitur paling banyak — yang paling sering dipakai tanpa frustrasi.

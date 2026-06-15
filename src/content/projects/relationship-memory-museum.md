---
title: "Relationship Memory Museum"
description: "Website personal berbentuk museum digital — menyimpan kenangan dalam format artefak interaktif yang bisa dieksplorasi layaknya pameran."
status: "Selesai"
tags: ["HTML", "CSS", "JavaScript", "Framer Motion", "Vite"]
category: "Web"
metric: "Proyek personal paling ambisius secara desain"
date: "2024-07-20"
featured: false
demo: "https://memory-museum.pages.dev"
---

## Konsep

Setiap kenangan punya bobot yang berbeda. Sebagian orang menyimpannya di galeri foto, sebagian di jurnal. Saya membangunnya sebagai museum — ruang yang bisa dimasuki, dijelajahi, dan dirasakan.

Proyek ini adalah eksplorasi murni: bagaimana web bisa menjadi medium naratif yang lebih dari sekadar halaman scrolling.

## Pendekatan Desain

Tiap "ruang" di museum mewakili satu bab waktu. Pengunjung bisa berjalan dari satu ruangan ke ruangan lain, menemukan artefak — foto, kutipan, catatan suara, tanggal — yang tersusun seperti pameran kuratorial.

Estetiknya sengaja ditarik ke arah analog: tekstur kertas, tipografi serif, warna yang pudar seperti foto lama. Kontras langsung dengan tumpukan JavaScript di baliknya.

## Teknis

Dibangun dengan vanilla JS + Vite untuk bundling. Animasi transisi antar ruangan menggunakan Framer Motion versi vanilla. Tidak ada backend — semua data tersimpan di JSON statis yang dikurasi manual.

Tantangan terbesar: membuat navigasi spatial yang intuitif tanpa peta atau instruksi eksplisit. Saya menguji ke beberapa orang — iterasi ketiga baru terasa natural.

## Refleksi

Ini bukan proyek yang punya metrik keberhasilan yang jelas. Tidak ada user, tidak ada conversion rate. Hanya satu pertanyaan: apakah orang yang masuk merasakannya?

Dari beberapa orang yang mencobanya, jawabannya cukup untuk membuat proyek ini terasa selesai.

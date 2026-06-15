---
title: "Kenapa SHAP Lebih Penting dari Akurasi"
date: "2024-12-01"
language: "id"
tags: ["Machine Learning", "Explainability", "SHAP"]
readingTime: 5
excerpt: "Model dengan akurasi 95% yang tidak bisa dijelaskan lebih berbahaya dari model 80% yang transparan."
---

Waktu mengerjakan proyek prediksi kualitas udara Jakarta, saya punya masalah yang kelihatannya bukan masalah: Random Forest saya akurasinya 94.2%. Angka yang bagus. Tapi ketika saya coba jelaskan *mengapa* model itu memprediksi sebuah hari sebagai "Tidak Sehat", saya tidak bisa menjawab dengan meyakinkan.

Itulah momen pertama saya benar-benar memahami beda antara model yang akurat dan model yang bisa dipercaya.

## Akurasi Itu Angka, Bukan Jawaban

Bayangkan model prediksi penyakit yang akurasinya 92%. Kedengarannya luar biasa. Tapi kalau 92% itu tercapai karena model hanya memprediksi "tidak sakit" untuk semua pasien — dan memang 92% dari dataset adalah pasien sehat — maka angka itu tidak bermakna apa-apa.

Ini bukan skenario hipotetis. Ini problem nyata yang punya nama: class imbalance. Dan model saya mengalaminya persis pada kelas "Sangat Tidak Sehat" — kelas yang justru paling penting untuk diprediksi dengan benar.

Akurasi tidak akan memberitahu saya itu. SHAP yang memberitahu.

## Apa Sebenarnya SHAP

SHAP (SHapley Additive exPlanations) berakar dari teori permainan kooperatif. Idenya sederhana: setiap fitur dalam model mendapat "kredit" atas sebuah prediksi, secara adil dan konsisten.

Untuk setiap prediksi, SHAP menghitung berapa besar kontribusi masing-masing fitur — apakah mendorong prediksi naik atau turun, dan seberapa besar. Hasilnya adalah angka yang bisa dibandingkan antar sampel, antar fitur, bahkan antar model.

Dalam proyek saya, ini berarti saya bisa menjawab: "Hari ini diprediksi Tidak Sehat terutama karena konsentrasi PM2.5 yang tinggi (kontribusi +0.34) dan NO2 yang di atas rata-rata (+0.18), bukan karena ozon atau SO2."

Itu bukan sekadar debugging. Itu pemahaman.

## Yang Saya Temukan

Tiga hal yang tidak akan ketahuan tanpa SHAP:

**PM2.5 mendominasi hampir semua prediksi.** Fitur lain ada, tapi skalanya jauh lebih kecil. Ini memunculkan pertanyaan: apakah model saya benar-benar belajar pola kualitas udara, atau sekadar belajar pola PM2.5? Dua hal yang berbeda implikasinya.

**Model saya tidak adil terhadap kondisi ekstrem.** Pada hari-hari dengan nilai yang sangat tinggi di semua polutan, SHAP values justru lebih rendah dari yang seharusnya. Model terlalu "konservatif" di kasus yang paling butuh ketelitian.

**Ada fitur yang hampir tidak berkontribusi.** Beberapa kolom yang saya pikir penting ternyata SHAP values-nya mendekati nol di hampir semua sampel. Data preparation yang lebih ketat bisa membuat model lebih ringkas tanpa kehilangan performa.

## Implikasinya untuk Cara Saya Bekerja

Sekarang SHAP masuk ke workflow saya sejak awal, bukan di akhir sebagai lapisan tambahan. Karena sering kali, apa yang SHAP tunjukkan mengubah keputusan tentang preprocessing, bukan hanya interpretasi akhir.

Ada juga pertanyaan etis yang tidak bisa diabaikan. Model yang tidak bisa dijelaskan lebih mudah disalahgunakan — atau lebih berbahaya lagi, digunakan dengan keyakinan penuh tanpa tahu di mana batas keandalannya.

Di domain seperti kesehatan publik, kualitas udara, atau penilaian pendidikan, "saya tidak tahu kenapa model ini bilang begitu" bukan jawaban yang bisa diterima.

Akurasi 80% yang bisa dijelaskan sering kali lebih berguna dari 95% yang tidak bisa.

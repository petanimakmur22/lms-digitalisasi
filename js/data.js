/* ===== LMS DATA: Modules, Materials, & Quizzes ===== */

const MODULES = [
  {
    id: 1,
    title: "Inspirasi Penggunaan Bahan Ajar Interaktif Berbasis Digital",
    shortTitle: "Bahan Ajar Interaktif Digital",
    description: "Pelajari konsep, prinsip, dan ragam bahan ajar interaktif berbasis digital untuk pembelajaran yang lebih bermakna.",
    color: "indigo",
    icon: "📖",
    materials: [
      {
        id: "m1-1",
        title: "Apa Itu Bahan Ajar Interaktif?",
        content: `
<h3>🎯 Pengertian Bahan Ajar Interaktif</h3>
<p>Bahan ajar interaktif adalah <strong>bahan ajar yang memungkinkan murid berinteraksi langsung dengan isi pembelajaran</strong>, sehingga mereka aktif berpikir, mencoba, dan merespons untuk membantu mencapai tujuan pembelajaran.</p>

<p>Berbeda dengan bahan ajar biasa yang hanya dibaca atau dilihat, bahan ajar interaktif membuat murid <strong>terlibat aktif</strong> dalam proses belajar.</p>

<div class="highlight-box">
<strong>💡 Ingat!</strong><br>
Penggunaan bahan ajar akan lebih bermakna ketika murid tidak hanya melihat dan mendengar, tetapi juga terlibat aktif dalam proses belajar untuk mencapai tujuan pembelajaran.
</div>

<h3>🔍 Ciri-Ciri Bahan Ajar Interaktif</h3>
<ol>
<li><strong>Membutuhkan aksi dari pengguna</strong> — klik, geser, ketik, atau pilih. Bahan ajar interaktif tidak akan bergerak atau memberikan informasi baru sampai murid melakukan sesuatu.</li>
<li><strong>Memberikan respons/umpan balik</strong> — Setelah murid melakukan aksi, bahan ajar akan memberikan umpan balik. Misalnya, jika murid menjawab pertanyaan, sistem memberi tahu apakah jawabannya benar atau salah.</li>
<li><strong>Bersifat dinamis dan adaptif</strong> — Bahan ajar interaktif tidak statis. Ia bisa berubah atau menyesuaikan diri berdasarkan interaksi murid.</li>
</ol>

<div class="tip-box">
<strong>💡 Tips:</strong> Mulailah dengan memahami kebutuhan murid Anda sebelum memilih bahan ajar interaktif. Bahan ajar terbaik adalah yang paling tepat membantu murid mencapai tujuan pembelajaran!
</div>
`
      },
      {
        id: "m1-2",
        title: "Manfaat Bahan Ajar Interaktif",
        content: `
<h3>🌟 5 Manfaat Utama Bahan Ajar Interaktif</h3>

<p>Penggunaan bahan ajar interaktif dalam pembelajaran memiliki banyak manfaat yang signifikan:</p>

<ol>
<li><strong>Membantu murid mencapai tujuan pembelajaran</strong> — Bahan ajar interaktif dirancang untuk mendukung proses belajar agar tujuan pembelajaran dapat tercapai secara efektif.</li>
<li><strong>Memfasilitasi pemahaman yang lebih mendalam</strong> — Melalui interaksi langsung, murid dapat memahami materi dengan lebih baik karena mereka mengalami langsung, bukan hanya membaca.</li>
<li><strong>Memberikan umpan balik</strong> — Umpan balik langsung membantu murid mengetahui sejauh mana pemahaman mereka dan apa yang perlu diperbaiki.</li>
<li><strong>Mendorong berpikir kritis dan pemecahan masalah</strong> — Aktivitas interaktif menantang murid untuk berpikir lebih dalam dan menyelesaikan masalah.</li>
<li><strong>Meningkatkan keterlibatan murid dalam proses belajar</strong> — Murid menjadi lebih antusias dan terlibat aktif saat menggunakan bahan ajar yang menarik dan interaktif.</li>
</ol>

<div class="example-box">
<strong>📝 Contoh:</strong> Bu Lestari menggunakan bahan ajar interaktif di Ruang Murid untuk materi Tata Surya. Murid mengamati, berdiskusi, dan secara bergantian menyelesaikan aktivitas pada papan interaktif digital, sementara teman-temannya memberikan tanggapan. Hasilnya, murid lebih memahami materi karena mereka terlibat langsung!
</div>
`
      },
      {
        id: "m1-3",
        title: "Prinsip Pemilihan Bahan Ajar",
        content: `
<h3>📐 4 Prinsip Utama Pemilihan Bahan Ajar</h3>

<p>Saat memilih bahan ajar interaktif, ada 4 prinsip yang harus diperhatikan:</p>

<ol>
<li><strong>Keselarasan dengan Tujuan Pembelajaran</strong><br>
Bahan ajar adalah "kendaraan" untuk membantu mencapai tujuan pembelajaran. Bukan sekadar keren, tapi harus tepat sasaran!</li>

<li><strong>Kesesuaian dengan Karakteristik Murid</strong><br>
Sesuaikan dengan tingkat perkembangan kognitif dan kebutuhan murid. Murid kelas 1 SD tentu berbeda kebutuhannya dengan murid kelas 6.</li>

<li><strong>Konteks dan Aksesibilitas</strong><br>
Bahan ajar harus dapat diakses dengan mudah oleh murid dan disesuaikan dengan kondisi sekolah. Jika gawai murid terbatas, gunakan mode "Klasikal".</li>

<li><strong>Kecukupan Materi</strong><br>
Materi harus pas — tidak terlalu sedikit agar tujuan tercapai, dan tidak terlalu banyak agar tidak membebani murid.</li>
</ol>

<div class="highlight-box">
<strong>⚠️ Penting!</strong><br>
Saat merancang pembelajaran, jangan mulai dengan memilih aplikasi. Mulailah dengan menetapkan tujuan pembelajaran, memahami karakteristik murid, merancang aktivitas belajar, dan mempertimbangkan kondisi pembelajaran. Setelah itu, baru pilih bahan ajar interaktif yang paling tepat.
</div>
`
      },
      {
        id: "m1-4",
        title: "Ragam Bahan Ajar Interaktif Digital",
        content: `
<h3>🎮 3 Jenis Utama Bahan Ajar Interaktif Digital</h3>

<p>Terdapat tiga jenis utama bahan ajar interaktif berbasis digital yang bisa digunakan dalam pembelajaran:</p>

<h3>1. Media Pembelajaran Interaktif</h3>
<p>Materi pembelajaran bertema yang memiliki interaksi 2 arah — pengguna dapat memilih jawaban, melakukan aktivitas klik, atau memilih cabang cerita.</p>
<ul>
<li>Jenis: Pendalaman Materi, Pendalaman Konsep, Kuis dan Teka-teki, Seri Latihan Soal</li>
</ul>

<h3>2. Gim Edukasi</h3>
<p>Materi pembelajaran yang memiliki elemen permainan dan gamifikasi untuk mencapai suatu misi tertentu serta memungkinkan pengguna untuk belajar sambil bermain.</p>
<ul>
<li>Jenis: Gamifikasi (permainan edukatif)</li>
</ul>

<h3>3. Lab Maya (Virtual Lab)</h3>
<p>Materi pembelajaran yang memiliki interaksi 2 arah di mana pengguna dapat melakukan simulasi eksperimen secara virtual.</p>
<ul>
<li>Jenis: Eksperimen dan Simulasi Virtual</li>
</ul>

<div class="tip-box">
<strong>💡 Tips:</strong> Pilih jenis bahan ajar yang paling sesuai dengan tujuan pembelajaran Anda. Misalnya, untuk materi IPA tentang siklus air, Lab Maya bisa menjadi pilihan yang tepat karena murid dapat melakukan simulasi secara virtual.
</div>
`
      },
      {
        id: "m1-5",
        title: "Mengenal Ruang Murid",
        content: `
<h3>🏠 Apa Itu Ruang Murid?</h3>

<p><strong>Ruang Murid</strong> adalah platform pembelajaran digital yang membantu guru dan murid mengakses pembelajaran digital secara <strong>gratis, inklusif, dan dapat digunakan sesuai kondisi belajar</strong> yang tersedia.</p>

<h3>Manfaat Ruang Murid</h3>
<ol>
<li><strong>Pembelajaran yang Lebih Mudah Diakses</strong> — Menyediakan ribuan materi pembelajaran dalam berbagai format untuk mendukung pengalaman belajar yang interaktif.</li>
<li><strong>Belajar Jadi Lebih Menyenangkan</strong> — Sudah tersedia 4.800+ materi video dan teks bacaan untuk ragam jenjang.</li>
<li><strong>Belajar Tidak Berhenti di Kelas</strong> — Guru dapat membagikan sumber belajar agar murid bisa melanjutkan belajar mandiri di rumah.</li>
</ol>

<h3>Cara Akses Ruang Murid</h3>
<p>Untuk mengakses Ruang Murid, ikuti langkah-langkah berikut:</p>
<ol>
<li>Buka browser kemudian ketikkan: <strong>rumah.pendidikan.go.id</strong></li>
<li>Klik "Ruang Murid"</li>
<li>Pilih menu "Sumber Belajar"</li>
<li>Sesuaikan jenjang pendidikan dan kelas</li>
<li>Eksplorasi bahan ajar berdasarkan mata pelajaran</li>
</ol>

<div class="example-box">
<strong>📱 Info:</strong> Ruang Murid dapat diakses melalui Papan Interaktif Digital, Laptop, Tablet, dan HP. Saat ini juga telah tersedia dalam versi offline!
</div>
`
      },
      {
        id: "m1-6",
        title: "Platform Bahan Ajar Interaktif (Bagian 1)",
        content: `
<h3>🛠️ Platform untuk Mengembangkan Bahan Ajar Interaktif</h3>

<p>Berikut beberapa platform yang dapat digunakan untuk mengakses dan mengembangkan bahan ajar interaktif:</p>

<h3>1. Canva (canva.com)</h3>
<p>Platform untuk membuat presentasi, video, dan media interaktif untuk semua mata pelajaran. Canva memungkinkan guru menambahkan video, animasi, musik, dan rekaman suara ke dalam materi ajar.</p>

<h3>2. Wordwall (wordwall.net)</h3>
<p>Platform untuk membuat aktivitas seperti mencocokkan, roda acak, teka-teki, dan banyak lagi. Aktivitas bisa langsung dimainkan di layar interaktif untuk semua mata pelajaran.</p>

<h3>3. Wayground (wayground.com)</h3>
<p>Platform untuk membuat presentasi dan video pembelajaran interaktif serta kuis interaktif berbasis gim yang bisa diakses murid.</p>

<h3>4. Polypad (polypad.amplify.com)</h3>
<p>Platform khusus untuk memvisualisasikan konsep matematika yang abstrak. Mendukung pembelajaran berbasis eksplorasi dan diskusi.</p>

<div class="tip-box">
<strong>💡 Tips:</strong> Mulailah dengan satu platform yang paling nyaman bagi Anda. Anda tidak perlu menguasai semuanya sekaligus. Yang penting, platform tersebut membantu mencapai tujuan pembelajaran.
</div>
`
      },
      {
        id: "m1-7",
        title: "Platform Bahan Ajar Interaktif (Bagian 2)",
        content: `
<h3>🔬 Platform Lanjutan untuk Bahan Ajar Interaktif</h3>

<p>Selain platform yang sudah dibahas, berikut platform tambahan yang sangat bermanfaat:</p>

<h3>5. Qreatif Educative (qreatif.id)</h3>
<p>Kumpulan Gim Edukasi, Media Pembelajaran Interaktif, Simulasi, dan Virtual Lab. Tersedia bahan ajar untuk berbagai mata pelajaran.</p>

<h3>6. PhET Interactive Simulation (phet.colorado.edu)</h3>
<p>Media Simulasi Interaktif/praktikum virtual yang lebih kompleks. Cocok untuk muatan pelajaran IPAS dan Matematika.</p>

<h3>7. Google Earth (earth.google.com)</h3>
<p>Memberikan eksplorasi peta secara visual dan interaktif. Sangat cocok untuk muatan pelajaran IPS.</p>

<h3>8. Sketchfab (sketchfab.com)</h3>
<p>Tersedia media pembelajaran 3D untuk muatan IPAS.</p>

<h3>Platform Lainnya:</h3>
<ul>
<li><strong>Coolmath4kids</strong> — Game edukasi interaktif untuk mata pelajaran Matematika</li>
<li><strong>ScratchJr</strong> — Bahasa pemrograman visual gratis untuk dasar-dasar coding</li>
<li><strong>Musicca</strong> — Alat musik digital untuk pelajaran Seni Musik</li>
<li><strong>Education.com</strong> — Simulasi interaktif dan game untuk berbagai mata pelajaran</li>
</ul>

<div class="highlight-box">
<strong>🔑 Kunci Sukses:</strong> Bahan ajar terbaik bukan yang paling canggih, tetapi yang paling tepat membantu murid mencapai tujuan pembelajaran.
</div>
`
      },
      {
        id: "m1-8",
        title: "Studi Kasus: Tepat vs Kurang Tepat",
        content: `
<h3>📋 Studi Kasus Penggunaan Bahan Ajar Interaktif</h3>

<h3>✅ Contoh TEPAT:</h3>
<div class="example-box">
<p><strong>Bu Lestari</strong> menggunakan bahan ajar Ruang Murid dengan tipe materi interaktif tentang Tata Surya. Materi berisi pembelajaran, video, aktivitas menyusun tata surya, serta latihan mencocokkan planet dengan ciri-cirinya.</p>
<p>Murid mengamati, berdiskusi, dan secara bergantian menyelesaikan aktivitas pada papan interaktif digital, sementara teman-temannya memberikan tanggapan.</p>
<p><strong>Mengapa tepat?</strong> Setiap fitur mendukung tujuan pembelajaran. Video membantu memahami konsep secara visual, sedangkan latihan interaktif memperkuat pemahaman melalui kegiatan mengurutkan dan mencocokkan.</p>
</div>

<h3>❌ Contoh KURANG TEPAT:</h3>
<div class="tip-box">
<p><strong>Pak Dedi</strong> menjelaskan tahapan siklus air pada papan tulis digital, kemudian menggunakan Wordwall untuk permainan mencocokkan istilah tahapan siklus air dengan definisinya. Murid tampak antusias bermain hingga selesai.</p>
<p><strong>Mengapa kurang tepat?</strong> Tujuan pembelajaran mengharapkan murid memahami proses dan menjelaskan hubungan antar tahapan. Wordwall lebih tepat digunakan sebagai latihan atau penguatan setelah murid memahami konsep. Untuk mencapai tujuan tersebut, guru sebaiknya menggunakan bahan ajar yang memungkinkan murid mengamati atau mengeksplorasi proses siklus air, misalnya simulasi di Ruang Murid.</p>
</div>

<div class="highlight-box">
<strong>🎯 Kesimpulan:</strong> Selalu pastikan bahan ajar interaktif yang dipilih selaras dengan tujuan pembelajaran, bukan sekadar membuat murid senang atau terhibur.
</div>
`
      }
    ],
    quiz: [
      {
        question: "Apa yang dimaksud dengan bahan ajar interaktif?",
        options: [
          "Bahan ajar yang hanya berupa teks dan gambar statis",
          "Bahan ajar yang memungkinkan murid berinteraksi langsung dengan isi pembelajaran",
          "Bahan ajar yang hanya bisa diakses melalui komputer",
          "Bahan ajar yang dibuat oleh pemerintah"
        ],
        correct: 1,
        explanation: "Bahan ajar interaktif adalah bahan ajar yang memungkinkan murid berinteraksi langsung dengan isi pembelajaran, sehingga mereka aktif berpikir, mencoba, dan merespons."
      },
      {
        question: "Manakah yang BUKAN merupakan ciri-ciri bahan ajar interaktif?",
        options: [
          "Membutuhkan aksi dari pengguna (klik, geser, ketik)",
          "Memberikan umpan balik berdasarkan interaksi",
          "Bersifat statis dan tidak berubah",
          "Bersifat dinamis dan adaptif"
        ],
        correct: 2,
        explanation: "Bahan ajar interaktif bersifat dinamis dan adaptif, bukan statis. Ia bisa berubah atau menyesuaikan berdasarkan interaksi murid."
      },
      {
        question: "Apa prinsip pertama dalam memilih bahan ajar interaktif?",
        options: [
          "Pilih yang paling canggih dan modern",
          "Keselarasan dengan tujuan pembelajaran",
          "Pilih yang paling murah",
          "Pilih yang paling populer"
        ],
        correct: 1,
        explanation: "Prinsip pertama adalah keselarasan dengan tujuan pembelajaran. Bahan ajar adalah 'kendaraan' untuk membantu mencapai tujuan, bukan sekadar keren."
      },
      {
        question: "Platform apa yang cocok untuk memvisualisasikan konsep matematika yang abstrak?",
        options: [
          "Canva",
          "Wordwall",
          "Polypad",
          "Google Earth"
        ],
        correct: 2,
        explanation: "Polypad (polypad.amplify.com) dirancang khusus untuk memvisualisasikan konsep matematika yang abstrak dan mendukung pembelajaran berbasis eksplorasi."
      },
      {
        question: "Berapa banyak materi yang telah tersedia di Ruang Murid?",
        options: [
          "1.000+ materi",
          "2.500+ materi",
          "4.800+ materi",
          "10.000+ materi"
        ],
        correct: 2,
        explanation: "Sudah tersedia 4.800+ materi video dan teks bacaan di Ruang Murid untuk ragam jenjang dan akan terus bertambah."
      },
      {
        question: "Apa yang dimaksud dengan Lab Maya dalam konteks bahan ajar interaktif?",
        options: [
          "Laboratorium fisik di sekolah",
          "Materi yang memungkinkan simulasi eksperimen secara virtual",
          "Ruang kelas khusus untuk belajar komputer",
          "Aplikasi untuk membuat video pembelajaran"
        ],
        correct: 1,
        explanation: "Lab Maya adalah materi pembelajaran yang memiliki interaksi 2 arah di mana pengguna dapat melakukan simulasi eksperimen secara virtual."
      },
      {
        question: "Mengapa penggunaan Wordwall oleh Pak Dedi untuk materi siklus air dinilai kurang tepat?",
        options: [
          "Karena Wordwall berbayar",
          "Karena murid tidak menyukai Wordwall",
          "Karena tujuan pembelajaran mengharapkan murid memahami proses, bukan sekadar mencocokkan istilah",
          "Karena Wordwall tidak bisa diakses di sekolah"
        ],
        correct: 2,
        explanation: "Wordwall lebih tepat sebagai latihan atau penguatan. Untuk memahami proses siklus air, diperlukan bahan ajar yang memungkinkan murid mengamati atau mengeksplorasi proses tersebut."
      },
      {
        question: "Apa yang harus dilakukan PERTAMA kali saat merancang pembelajaran?",
        options: [
          "Memilih aplikasi yang menarik",
          "Menetapkan tujuan pembelajaran",
          "Membuat soal ujian",
          "Mencari video di YouTube"
        ],
        correct: 1,
        explanation: "Mulailah dengan menetapkan tujuan pembelajaran, memahami karakteristik murid, merancang aktivitas belajar, lalu pilih bahan ajar interaktif yang paling tepat."
      }
    ]
  },
  {
    id: 2,
    title: "Pengembangan dan Pembuatan Media Pembelajaran Interaktif",
    shortTitle: "Media Pembelajaran Interaktif",
    description: "Pelajari cara mengembangkan dan membuat media pembelajaran interaktif menggunakan berbagai platform, termasuk Canva AI.",
    color: "amber",
    icon: "🎨",
    materials: [
      {
        id: "m2-1",
        title: "Pentingnya Media Pembelajaran Interaktif",
        content: `
<h3>🎯 Mengapa Media Pembelajaran Interaktif Penting?</h3>

<p>Dalam konteks implementasi pembelajaran abad ke-21, teknologi menjadi komponen yang tak terpisahkan. Perangkat Papan Interaktif yang memuat Media Pembelajaran Interaktif berpotensi besar untuk mendukung terwujudnya <strong>pembelajaran mendalam</strong> apabila digunakan dengan pendekatan pedagogis yang tepat.</p>

<div class="highlight-box">
<strong>💡 Kunci:</strong> Pembelajaran yang bermakna dimulai dari keterlibatan murid. Media Pembelajaran Interaktif membuat murid tidak hanya melihat dan mendengar, tetapi juga aktif berpikir, mencoba, dan memberikan respons.
</div>

<h3>📌 Pengertian Media Pembelajaran Interaktif</h3>
<p>Media Pembelajaran Interaktif adalah <strong>bahan ajar digital bertema</strong> yang memiliki pola interaksi dua arah: murid dapat memilih jawaban, melakukan aktivitas klik, atau menentukan cabang alur yang memengaruhi penyajian materi, serta memperoleh umpan balik atas setiap interaksinya.</p>

<div class="tip-box">
<strong>📝 Catatan:</strong> Media interaktif bukan berarti banyak animasi, tetapi mampu melibatkan murid secara aktif untuk mencapai tujuan pembelajaran melalui aktivitas dan umpan balik.
</div>
`
      },
      {
        id: "m2-2",
        title: "Karakteristik Media Pembelajaran Interaktif",
        content: `
<h3>📋 6 Karakteristik Utama</h3>

<p>Media Pembelajaran Interaktif memiliki enam karakteristik utama yang membedakannya dari media biasa:</p>

<ol>
<li><strong>Interaktif</strong> — Adanya interaksi dua arah antara pengguna dan media. Murid bukan hanya penonton pasif.</li>
<li><strong>Partisipatif</strong> — Mendorong keterlibatan aktif murid dalam pembelajaran. Murid harus melakukan sesuatu.</li>
<li><strong>Umpan Balik</strong> — Memberikan umpan balik agar murid mengetahui kemajuan dan memperbaiki hasil belajarnya.</li>
<li><strong>Terarah</strong> — Memiliki alur eksplorasi yang jelas dan instruksi penggunaan yang mudah dipahami.</li>
<li><strong>Multimedia</strong> — Menggabungkan teks, gambar, audio, video, animasi, dan simulasi.</li>
<li><strong>Bermakna</strong> — Membantu murid memahami konsep secara lebih mendalam, bukan sekadar hiburan.</li>
</ol>

<div class="example-box">
<strong>📝 Contoh Prinsip Kerja:</strong><br>
<strong>Input:</strong> Murid mengklik gambar "Berudu (Berkaki)" pada media tentang metamorfosis katak.<br>
<strong>Proses:</strong> Sistem memvalidasi apakah pilihan murid benar sesuai urutan metamorfosis.<br>
<strong>Umpan Balik:</strong> Muncul tepuk tangan, teks "Benar! Berudu mulai tumbuh kaki" dan penjelasan singkat.<br>
<strong>Hasil:</strong> Murid memahami tahapan metamorfosis katak dan dapat menjelaskan urutannya.
</div>
`
      },
      {
        id: "m2-3",
        title: "Jenis-Jenis Media Pembelajaran Interaktif",
        content: `
<h3>🎭 3 Jenis Media Pembelajaran Interaktif</h3>

<h3>1. Media Interaktif</h3>
<p>Memiliki alur eksplorasi berbasis konsep keilmuan dengan pola interaksi dua arah. Pilihan yang dibuat murid akan mempengaruhi penyajian materi.</p>
<ul>
<li>Struktur materi linier</li>
<li>Terdapat umpan balik sesuai interaksi</li>
<li>Contoh: Kuis interaktif, video interaktif, drag and drop</li>
</ul>

<h3>2. Gim Edukasi</h3>
<p>Memiliki alur menyelesaikan misi (pathway) dengan instruksi awal, skor, dan hasil akhir.</p>
<ul>
<li>Tipe interaksi: drag and drop, susun gambar (puzzle), menjodohkan</li>
<li>Ada skor dan hasil akhir</li>
<li>Contoh: Permainan mengurutkan tahapan siklus air</li>
</ul>

<h3>3. Lab Maya</h3>
<p>Memuat eksperimen atau simulasi virtual berbasis konsep keilmuan tertentu.</p>
<ul>
<li>Memiliki pola interaksi dua arah</li>
<li>Pilihan yang dibuat mempengaruhi hasil simulasi</li>
<li>Contoh: Simulasi orbit planet, percobaan kimia virtual</li>
</ul>

<div class="highlight-box">
<strong>🎯 Contoh Penerapan:</strong>
<ul>
<li><strong>IPA (Tata Surya):</strong> Klik planet untuk informasi, simulasi orbit, kuis interaktif</li>
<li><strong>Sejarah (Proklamasi):</strong> Klik tombol informasi, jelajahi timeline peristiwa</li>
<li><strong>Matematika (Pengukuran):</strong> Drag & drop jawaban, umpan balik benar/salah</li>
<li><strong>Bahasa Indonesia (Jenis Kata):</strong> Pilih jawaban, umpan balik langsung</li>
</ul>
</div>
`
      },
      {
        id: "m2-4",
        title: "Platform Pembuatan Media Interaktif",
        content: `
<h3>🛠️ Platform untuk Membuat Media Pembelajaran Interaktif</h3>

<p>Ada tiga kategori utama platform yang dapat digunakan:</p>

<h3>1. Canva — Sangat Fleksibel dan Profesional</h3>
<p>Canva adalah platform desain serbaguna yang kini dilengkapi dengan fitur AI untuk membuat media pembelajaran interaktif. Dengan Canva, Anda dapat membuat:</p>
<ul>
<li>Presentasi interaktif</li>
<li>Gim edukasi</li>
<li>Video pembelajaran</li>
<li>Media dengan animasi dan interaksi</li>
</ul>

<h3>2. Wordwall — Cepat dan Banyak Aktivitas</h3>
<p>Platform yang menyediakan berbagai template aktivitas interaktif yang siap pakai:</p>
<ul>
<li>Mencocokkan (Match up)</li>
<li>Roda acak (Random wheel)</li>
<li>Teka-teki silang</li>
<li>Kuis interaktif</li>
</ul>

<h3>3. AI Tools — Mempercepat Produksi Konten</h3>
<p>Berbagai tools AI dapat membantu mempercepat proses berpikir dan produksi konten media pembelajaran.</p>

<div class="tip-box">
<strong>💡 Tips:</strong> Pilih platform yang paling sesuai dengan kebutuhan dan kemampuan Anda. Tidak perlu menguasai semuanya — yang penting bisa membantu murid mencapai tujuan pembelajaran.
</div>
`
      },
      {
        id: "m2-5",
        title: "Tahapan Pengembangan Media Interaktif",
        content: `
<h3>📝 Tahapan Pengembangan Media Pembelajaran Interaktif</h3>

<p>Proses pengembangan media pembelajaran interaktif mengikuti tahapan yang sistematis:</p>

<ol>
<li><strong>Analisis Kebutuhan</strong><br>
Tentukan tujuan pembelajaran, karakteristik murid, dan kondisi fasilitas yang tersedia.</li>

<li><strong>Perancangan (Design)</strong><br>
Buat alur media/flowchart yang jelas. Tentukan konten, jenis interaksi, dan umpan balik yang akan diberikan.</li>

<li><strong>Pengembangan (Development)</strong><br>
Buat media menggunakan platform yang dipilih. Pastikan semua elemen interaktif berfungsi dengan baik.</li>

<li><strong>Implementasi (Implementation)</strong><br>
Ujicobakan media di kelas. Amati respons dan interaksi murid.</li>

<li><strong>Evaluasi (Evaluation)</strong><br>
Evaluasi efektivitas media. Apakah tujuan pembelajaran tercapai? Lakukan perbaikan jika diperlukan.</li>
</ol>

<div class="highlight-box">
<strong>📌 Media pembelajaran interaktif yang baik memuat:</strong>
<ul>
<li>✔ Tujuan pembelajaran</li>
<li>✔ Panduan penggunaan</li>
<li>✔ Materi inti</li>
<li>✔ Aktivitas interaktif</li>
<li>✔ Evaluasi / umpan balik</li>
</ul>
</div>
`
      },
      {
        id: "m2-6",
        title: "Prinsip Desain Media Interaktif",
        content: `
<h3>🎨 7 Prinsip Mendesain Media Pembelajaran Interaktif</h3>

<p>Agar media pembelajaran interaktif efektif, perhatikan prinsip-prinsip berikut:</p>

<ol>
<li><strong>Gunakan Bahasa yang Mudah Dipahami</strong><br>
Bahasa sederhana membuat pesan mudah diterima semua murid.</li>

<li><strong>Materi Jangan Terlalu Panjang</strong><br>
Sampaikan inti materi secara singkat, jelas, dan padat.</li>

<li><strong>Gunakan Gambar Edukatif</strong><br>
Gambar edukatif membantu murid memahami materi lebih mudah.</li>

<li><strong>Gunakan Warna Kontras</strong><br>
Kontras teks dan latar terjaga. Hindari warna menyilaukan seperti neon.</li>

<li><strong>Tambahkan Animasi Sederhana</strong><br>
Animasi ringan membuat penyampaian materi lebih menyenangkan, tapi jangan berlebihan!</li>

<li><strong>Berikan Kuis atau Permainan</strong><br>
Kuis atau gim membuat pembelajaran lebih seru dan interaktif.</li>

<li><strong>Libatkan Murid Secara Aktif</strong><br>
Ajak murid bertanya, berpendapat, dan berpartisipasi.</li>
</ol>

<div class="tip-box">
<strong>⚠️ Hal yang Perlu DIHINDARI:</strong>
<ul>
<li>❌ Terlalu banyak animasi (mengalihkan perhatian)</li>
<li>❌ Fokus pada tampilan saja (belum tentu membantu belajar)</li>
<li>❌ Media hanya menjadi tontonan (seharusnya melibatkan murid)</li>
<li>❌ Tidak ada aktivitas murid</li>
<li>❌ Tidak ada feedback/umpan balik</li>
</ul>
</div>
`
      },
      {
        id: "m2-7",
        title: "Membuat Media Interaktif dengan Canva AI",
        content: `
<h3>🤖 Langkah Membuat Media Interaktif dengan Canva AI</h3>

<p>Canva AI memungkinkan Anda membuat media pembelajaran interaktif dengan mudah. Ikuti langkah-langkah berikut:</p>

<ol>
<li><strong>Buka Canva</strong><br>
Buka aplikasi Canva di www.canva.com atau aplikasi Canva di perangkat Anda.</li>

<li><strong>Pilih Canva AI</strong><br>
Klik menu Canva AI pada beranda Canva.</li>

<li><strong>Pilih Mode Kode</strong><br>
Pilih mode Kode untuk membuat media interaktif yang lebih kaya fitur.</li>

<li><strong>Ketik Prompt</strong><br>
Ketik instruksi/prompt sesuai media yang ingin dibuat, lalu klik Enter. Contoh: "Buatkan gim edukasi interaktif tentang metamorfosis kupu-kupu untuk siswa kelas 4 SD"</li>

<li><strong>Tunggu dan Sesuaikan Hasil</strong><br>
Akan muncul kode hasil dari prompt. Sesuaikan dengan keinginan, jika kurang tepat bisa diperbaiki di bagian promptnya.</li>

<li><strong>Publikasi</strong><br>
Jika semua tombol navigasi berfungsi baik, media siap dipublikasi dan digunakan untuk pembelajaran.</li>
</ol>

<div class="highlight-box">
<strong>🔑 Kunci Sukses:</strong> "Prompt menentukan kualitas hasil" — Semakin jelas dan detail prompt yang Anda tulis, semakin baik hasil media interaktif yang dihasilkan oleh Canva AI.
</div>
`
      },
      {
        id: "m2-8",
        title: "Praktik dan Refleksi",
        content: `
<h3>✍️ Panduan Praktik Membuat Media Interaktif</h3>

<p>Saatnya mempraktikkan apa yang telah dipelajari! Ikuti petunjuk berikut:</p>

<h3>📌 Langkah-Langkah Praktik:</h3>
<ol>
<li><strong>Tentukan materi dan tujuan pembelajaran</strong> yang akan dibuat</li>
<li><strong>Buat media pembelajaran interaktif</strong> menggunakan Canva AI atau platform pilihan Anda</li>
<li><strong>Lengkapi informasi:</strong>
  <ul>
    <li>Identitas peserta</li>
    <li>Mata pelajaran</li>
    <li>Jenjang/kelas</li>
    <li>Tujuan pembelajaran</li>
    <li>Alur media/flowchart</li>
    <li>Prompt yang digunakan</li>
    <li>Hasil Media Pembelajaran Interaktif</li>
  </ul>
</li>
<li><strong>Presentasikan hasil karya</strong> secara singkat</li>
</ol>

<h3>🪞 Refleksi</h3>
<div class="example-box">
<p>Jawablah pertanyaan refleksi berikut:</p>
<ol>
<li>Jenis media pembelajaran interaktif apa yang paling ingin Anda terapkan di kelas? Mengapa?</li>
<li>Bagaimana media pembelajaran interaktif dapat membantu murid memahami materi dengan lebih mudah?</li>
<li>Apa langkah kecil yang akan Anda lakukan setelah kegiatan ini untuk menerapkan media interaktif di sekolah?</li>
</ol>
</div>

<div class="highlight-box">
<strong>🌟 Pesan Penutup:</strong> Media pembelajaran interaktif bukan sekadar tentang teknologi, tetapi tentang menciptakan pengalaman belajar yang membuat murid aktif, berpikir, dan bahagia dalam belajar.
</div>
`
      }
    ],
    quiz: [
      {
        question: "Apa yang dimaksud dengan Media Pembelajaran Interaktif?",
        options: [
          "Media yang hanya bisa ditonton oleh murid",
          "Bahan ajar digital dengan pola interaksi dua arah dan umpan balik",
          "Buku teks yang didigitalkan",
          "Video pembelajaran di YouTube"
        ],
        correct: 1,
        explanation: "Media Pembelajaran Interaktif adalah bahan ajar digital bertema yang memiliki pola interaksi dua arah: murid dapat memilih, mengklik, atau menentukan alur yang memengaruhi penyajian materi."
      },
      {
        question: "Manakah yang BUKAN termasuk karakteristik Media Pembelajaran Interaktif?",
        options: [
          "Interaktif dan Partisipatif",
          "Memberikan Umpan Balik",
          "Bersifat satu arah tanpa respons",
          "Terarah dan Bermakna"
        ],
        correct: 2,
        explanation: "Media Pembelajaran Interaktif bersifat dua arah (interaktif), bukan satu arah. Murid harus dapat berinteraksi dan mendapat umpan balik."
      },
      {
        question: "Apa perbedaan utama antara Gim Edukasi dan Lab Maya?",
        options: [
          "Gim Edukasi lebih mahal dari Lab Maya",
          "Gim Edukasi memiliki alur misi dan skor, Lab Maya memuat eksperimen/simulasi virtual",
          "Gim Edukasi hanya untuk matematika, Lab Maya untuk IPA",
          "Tidak ada perbedaan, keduanya sama"
        ],
        correct: 1,
        explanation: "Gim Edukasi memiliki alur menyelesaikan misi (pathway) dengan skor dan hasil akhir, sedangkan Lab Maya memuat eksperimen atau simulasi virtual."
      },
      {
        question: "Platform apa yang cepat, sederhana, dan memiliki banyak aktivitas interaktif?",
        options: [
          "Canva",
          "Wordwall",
          "Google Earth",
          "PhET Simulation"
        ],
        correct: 1,
        explanation: "Wordwall dikenal cepat dan sederhana dengan banyak template aktivitas interaktif seperti mencocokkan, roda acak, dan teka-teki."
      },
      {
        question: "Apa tahapan pertama dalam pengembangan Media Pembelajaran Interaktif?",
        options: [
          "Membuat desain yang menarik",
          "Analisis kebutuhan",
          "Memilih platform",
          "Membuat animasi"
        ],
        correct: 1,
        explanation: "Tahapan pertama adalah Analisis Kebutuhan — menentukan tujuan pembelajaran, karakteristik murid, dan kondisi fasilitas."
      },
      {
        question: "Hal apa yang harus DIHINDARI saat mendesain media interaktif?",
        options: [
          "Menggunakan bahasa sederhana",
          "Memberikan kuis atau permainan",
          "Terlalu banyak animasi yang mengalihkan perhatian",
          "Menggunakan gambar edukatif"
        ],
        correct: 2,
        explanation: "Animasi berlebihan dapat mengalihkan perhatian murid dari tujuan pembelajaran. Media interaktif bukan berarti banyak animasi."
      },
      {
        question: "Apa mode yang harus dipilih di Canva AI untuk membuat media interaktif?",
        options: [
          "Mode Presentasi",
          "Mode Video",
          "Mode Kode",
          "Mode Gambar"
        ],
        correct: 2,
        explanation: "Untuk membuat media interaktif di Canva AI, pilih Mode Kode untuk menghasilkan media dengan fitur interaktif yang lebih kaya."
      },
      {
        question: "Apa yang menentukan kualitas hasil media yang dibuat dengan Canva AI?",
        options: [
          "Kecepatan internet",
          "Versi Canva yang digunakan",
          "Kualitas prompt/instruksi yang ditulis",
          "Ukuran layar komputer"
        ],
        correct: 2,
        explanation: "\"Prompt menentukan kualitas hasil\" — Semakin jelas dan detail prompt, semakin baik hasil media interaktif yang dihasilkan."
      }
    ]
  },
  {
    id: 3,
    title: "Inspirasi Asesmen Berbasis Digital",
    shortTitle: "Asesmen Digital",
    description: "Pelajari konsep asesmen, jenis-jenis asesmen formatif dan sumatif, serta platform digital untuk asesmen pembelajaran.",
    color: "coral",
    icon: "📝",
    materials: [
      {
        id: "m3-1",
        title: "Konsep Dasar Asesmen",
        content: `
<h3>📋 Apa Itu Asesmen?</h3>

<p>Berdasarkan Permendikbud No. 21 Tahun 2022, asesmen adalah <strong>proses pengumpulan dan pengolahan informasi untuk mengetahui kebutuhan belajar dan capaian perkembangan atau hasil belajar murid</strong>.</p>

<h3>Mengapa Asesmen Penting?</h3>
<ol>
<li><strong>Mengetahui pemahaman murid</strong> — Guru dapat mengetahui sejauh mana murid memahami materi yang diajarkan.</li>
<li><strong>Memberikan umpan balik</strong> — Asesmen memberikan informasi kepada murid tentang kemajuan belajar mereka.</li>
<li><strong>Memperbaiki strategi mengajar</strong> — Guru dapat menyesuaikan pendekatan pembelajaran berdasarkan hasil asesmen.</li>
<li><strong>Menentukan tindak lanjut</strong> — Hasil asesmen membantu guru menentukan langkah selanjutnya dalam pembelajaran.</li>
</ol>

<div class="highlight-box">
<strong>💡 Perubahan Mindset:</strong><br>
<strong>Alih-alih bertanya:</strong> "Nilai berapa?"<br>
<strong>Lebih baik bertanya:</strong> "Bisa apa?"<br><br>
Asesmen bukan hanya untuk memberi peringkat (to rank), tetapi untuk membuat murid menjadi lebih ahli (create expert).
</div>
`
      },
      {
        id: "m3-2",
        title: "Prinsip Asesmen yang Baik",
        content: `
<h3>⚖️ 3 Prinsip Utama Asesmen</h3>

<p>Asesmen yang baik harus memenuhi tiga prinsip utama:</p>

<ol>
<li><strong>Berkeadilan</strong><br>
Pendidik melakukan penilaian yang tidak bias oleh latar belakang, identitas, atau kebutuhan khusus murid. Setiap murid mendapat kesempatan yang sama untuk menunjukkan kemampuannya.</li>

<li><strong>Objektif</strong><br>
Penilaian didasarkan pada informasi faktual atas pencapaian perkembangan atau hasil belajar murid. Bukan berdasarkan perasaan atau kesan subjektif guru.</li>

<li><strong>Edukatif</strong><br>
Penilaian yang hasilnya digunakan sebagai umpan balik bagi pendidik, murid, dan orang tua untuk meningkatkan proses pembelajaran dan hasil belajar.</li>
</ol>

<div class="tip-box">
<strong>💡 Tips:</strong> Pastikan setiap asesmen yang Anda rancang memenuhi ketiga prinsip ini. Asesmen yang baik bukan tentang kecanggihannya, tetapi tentang seberapa besar ia membantu murid bertumbuh dalam belajar.
</div>
`
      },
      {
        id: "m3-3",
        title: "Asesmen Formatif vs Sumatif",
        content: `
<h3>📊 Perbedaan Asesmen Formatif dan Sumatif</h3>

<h3>Asesmen Formatif</h3>
<p>Asesmen yang dilakukan <strong>selama proses pembelajaran</strong> untuk memantau dan memperbaiki kualitas pembelajaran.</p>
<ul>
<li><strong>Tujuan:</strong> Memantau proses belajar</li>
<li><strong>Waktu:</strong> Sebelum, selama, dan sesudah proses pembelajaran</li>
<li><strong>Fokus:</strong> Perkembangan dan kebutuhan belajar murid</li>
<li><strong>Contoh:</strong> Tanya jawab, observasi, kuis singkat, exit ticket, refleksi, tugas kecil</li>
</ul>

<h3>Asesmen Sumatif</h3>
<p>Asesmen yang dilakukan <strong>di akhir periode pembelajaran</strong> untuk menilai pencapaian akhir belajar.</p>
<ul>
<li><strong>Tujuan:</strong> Menilai pencapaian akhir</li>
<li><strong>Waktu:</strong> Di akhir lingkup materi</li>
<li><strong>Fokus:</strong> Ketercapaian tujuan pembelajaran</li>
<li><strong>Contoh:</strong> Ulangan harian, ulangan akhir bab, ujian akhir semester, projek, penilaian performa</li>
</ul>

<div class="example-box">
<strong>🚗 Analogi Mudah:</strong><br>
<strong>Formatif = Rambu Perjalanan</strong> — Memberi tahu apakah Anda masih di jalur yang benar selama perjalanan.<br>
<strong>Sumatif = Akhir Tujuan Perjalanan</strong> — Menunjukkan apakah Anda sudah sampai di tujuan.
</div>
`
      },
      {
        id: "m3-4",
        title: "Jenis Asesmen Berdasarkan Fungsi",
        content: `
<h3>📚 3 Jenis Asesmen Berdasarkan Fungsinya</h3>

<h3>1. Assessment as Learning (Asesmen sebagai Proses Pembelajaran)</h3>
<p>Asesmen untuk refleksi proses pembelajaran dan refleksi diri murid. Berfungsi sebagai asesmen formatif.</p>
<div class="example-box">
<strong>Contoh:</strong> Jurnal reflektif, self-assessment, peer assessment, checklist kemajuan belajar
</div>

<h3>2. Assessment for Learning (Asesmen untuk Proses Pembelajaran)</h3>
<p>Asesmen untuk perbaikan proses pembelajaran. Berfungsi sebagai asesmen formatif.</p>
<div class="example-box">
<strong>Contoh:</strong> Peta konsep, umpan balik formatif, Classroom Assessment Technique (CATs), observasi
</div>

<h3>3. Assessment of Learning (Asesmen pada Akhir Proses Pembelajaran)</h3>
<p>Asesmen untuk evaluasi pada akhir proses pembelajaran. Berfungsi sebagai asesmen sumatif.</p>
<div class="example-box">
<strong>Contoh:</strong> Tes lisan, tes tertulis, laporan, penilaian proyek, portofolio
</div>

<div class="highlight-box">
<strong>💡 Penting:</strong> Ketiga jenis asesmen ini saling melengkapi. Guru yang baik menggunakan kombinasi ketiganya untuk mendukung proses belajar murid secara menyeluruh.
</div>
`
      },
      {
        id: "m3-5",
        title: "Teknik-Teknik Asesmen",
        content: `
<h3>🔧 9 Teknik Asesmen yang Dapat Digunakan</h3>

<ol>
<li><strong>Observasi</strong> — Mengamati langsung perilaku atau aktivitas murid dalam pembelajaran.</li>
<li><strong>Lisan</strong> — Menilai pemahaman murid secara langsung melalui komunikasi verbal.</li>
<li><strong>Kinerja</strong> — Menilai kemampuan murid melakukan tugas atau aktivitas nyata terkait keterampilan proses.</li>
<li><strong>Tes Tertulis</strong> — Menilai pemahaman konsep melalui soal tertulis (pilihan ganda, isian, uraian).</li>
<li><strong>Penugasan</strong> — Tugas individu atau kelompok sebagai bentuk latihan atau penguatan.</li>
<li><strong>Penilaian Antar Teman</strong> — Murid menilai pekerjaan atau performa teman menggunakan rubrik yang disepakati.</li>
<li><strong>Penilaian Diri</strong> — Murid mengevaluasi sendiri hasil dan proses belajar berdasarkan kriteria tertentu.</li>
<li><strong>Portofolio</strong> — Kumpulan dokumen/karya murid yang menunjukkan perkembangan belajar.</li>
<li><strong>Projek</strong> — Asesmen terhadap serangkaian aktivitas terencana yang menghasilkan produk tertentu.</li>
</ol>

<div class="tip-box">
<strong>💡 Tips:</strong> Teknik asesmen dapat dilakukan secara berbeda di setiap jenjang. Sesuaikan dengan karakteristik dan tujuan pembelajaran!
</div>
`
      },
      {
        id: "m3-6",
        title: "Asesmen Konvensional vs Digital",
        content: `
<h3>📱 Perbandingan Asesmen Konvensional dan Digital</h3>

<table style="width:100%; border-collapse:collapse; margin: 16px 0;">
<tr style="background: var(--indigo); color: white;">
<th style="padding: 12px; text-align: left; border-radius: 8px 0 0 0;">Aspek</th>
<th style="padding: 12px; text-align: left;">Konvensional</th>
<th style="padding: 12px; text-align: left; border-radius: 0 8px 0 0;">Digital</th>
</tr>
<tr><td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Media</strong></td><td style="padding: 10px; border-bottom: 1px solid #eee;">Kertas, notes tempel</td><td style="padding: 10px; border-bottom: 1px solid #eee;">Berbasis online</td></tr>
<tr><td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Koreksi</strong></td><td style="padding: 10px; border-bottom: 1px solid #eee;">Manual</td><td style="padding: 10px; border-bottom: 1px solid #eee;">Otomatis</td></tr>
<tr><td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Rekap Data</strong></td><td style="padding: 10px; border-bottom: 1px solid #eee;">Manual</td><td style="padding: 10px; border-bottom: 1px solid #eee;">Cepat & otomatis</td></tr>
<tr><td style="padding: 10px;"><strong>Waktu</strong></td><td style="padding: 10px;">Memerlukan banyak waktu</td><td style="padding: 10px;">Cepat & efisien</td></tr>
</table>

<div class="highlight-box">
<strong>⚠️ Penting!</strong><br>
Konvensional bukan berarti ketinggalan zaman. Pakai sesuai tujuan dan fungsi asesmennya. Tidak semua asesmen harus digital — yang penting, asesmen tersebut efektif membantu murid belajar.
</div>
`
      },
      {
        id: "m3-7",
        title: "Platform Digital untuk Asesmen",
        content: `
<h3>🖥️ Inspirasi Platform Digital untuk Asesmen</h3>

<p>Berikut platform digital yang dapat digunakan untuk membuat asesmen yang menarik dan efektif:</p>

<h3>1. Google Form</h3>
<p>Platform gratis dari Google untuk membuat kuis dan survei. Mudah digunakan, otomatis menghitung skor, dan hasilnya langsung terekap di spreadsheet.</p>

<h3>2. Wayground (wayground.com)</h3>
<p>Platform untuk membuat asesmen interaktif dengan berbagai format pertanyaan yang menarik.</p>

<h3>3. Kahoot (kahoot.com)</h3>
<p>Platform kuis interaktif berbasis gim yang sangat populer. Murid menjawab pertanyaan secara real-time dengan suasana kompetisi yang seru.</p>

<h3>4. Wordwall (wordwall.net)</h3>
<p>Menyediakan berbagai template asesmen interaktif seperti kuis, mencocokkan, dan teka-teki silang.</p>

<h3>5. Ruang Murid (rumah.pendidikan.go.id)</h3>
<p>Platform resmi pemerintah yang juga menyediakan fitur asesmen untuk berbagai jenjang pendidikan.</p>

<div class="tip-box">
<strong>💡 Tips Memilih Platform:</strong> Pertimbangkan ketersediaan internet, kemampuan murid, dan jenis asesmen yang ingin dibuat. Mulailah dengan platform yang paling familiar bagi Anda.
</div>
`
      },
      {
        id: "m3-8",
        title: "Merancang Asesmen yang Efektif",
        content: `
<h3>🎯 Tahapan Merancang Asesmen</h3>

<p>Untuk merancang asesmen yang efektif, ikuti alur berikut:</p>

<ol>
<li><strong>Menentukan kompetensi yang dicapai pada tujuan pembelajaran</strong><br>
Apa yang ingin dicapai oleh murid? Tentukan dengan jelas dan spesifik.</li>

<li><strong>Menentukan bukti ketercapaian tujuan pembelajaran</strong><br>
Asesmen apa yang dapat membuktikan bahwa murid sudah mencapai tujuan? Ini adalah bukti nyata yang bisa diamati atau diukur.</li>

<li><strong>Menentukan teknik asesmen yang sesuai</strong><br>
Kegiatan pembelajaran apa yang dapat dilakukan untuk memperoleh bukti tersebut?</li>
</ol>

<h3>Pendekatan Backward Design</h3>
<div class="highlight-box">
<p>Alih-alih merancang tujuan → kegiatan → asesmen (forward design), coba gunakan pendekatan <strong>Backward Design</strong>:</p>
<ol>
<li>🎯 <strong>Tujuan Pembelajaran</strong> — Apa yang ingin dicapai murid?</li>
<li>📋 <strong>Asesmen</strong> — Apa buktinya kalau murid sudah paham?</li>
<li>📝 <strong>Kegiatan Pembelajaran</strong> — Bagaimana murid dapat mencapainya?</li>
</ol>
</div>

<div class="example-box">
<strong>📝 Contoh:</strong><br>
🎯 <strong>Tujuan:</strong> Murid mampu membandingkan pecahan<br>
📋 <strong>Asesmen:</strong> Rubrik kinerja, jawaban latihan soal<br>
📝 <strong>Kegiatan:</strong> Praktik membandingkan pecahan dengan manipulatif
</div>

<div class="highlight-box">
<strong>🌟 Pesan Penutup:</strong> Asesmen terbaik bukan tentang kecanggihannya, tetapi tentang seberapa besar ia membantu murid bertumbuh dalam belajar dan mencapai tujuan pembelajaran.
</div>
`
      }
    ],
    quiz: [
      {
        question: "Berdasarkan Permendikbud No. 21 Tahun 2022, apa yang dimaksud dengan asesmen?",
        options: [
          "Proses pemberian nilai angka kepada murid",
          "Proses pengumpulan dan pengolahan informasi untuk mengetahui kebutuhan belajar dan capaian murid",
          "Ujian akhir semester saja",
          "Proses membandingkan murid satu dengan lainnya"
        ],
        correct: 1,
        explanation: "Asesmen adalah proses pengumpulan dan pengolahan informasi untuk mengetahui kebutuhan belajar dan capaian perkembangan atau hasil belajar murid."
      },
      {
        question: "Asesmen yang dilakukan selama proses pembelajaran untuk memantau dan memperbaiki kualitas pembelajaran disebut?",
        options: [
          "Asesmen Sumatif",
          "Asesmen Formatif",
          "Asesmen Diagnostik",
          "Asesmen Normatif"
        ],
        correct: 1,
        explanation: "Asesmen Formatif dilakukan selama proses pembelajaran (sebelum, selama, sesudah) untuk memantau dan memperbaiki kualitas pembelajaran."
      },
      {
        question: "Manakah yang merupakan contoh asesmen formatif?",
        options: [
          "Ujian Akhir Semester",
          "Exit ticket dan kuis singkat",
          "Ujian Nasional",
          "Ujian Praktik akhir tahun"
        ],
        correct: 1,
        explanation: "Exit ticket dan kuis singkat adalah contoh asesmen formatif yang dilakukan selama proses pembelajaran."
      },
      {
        question: "Apa analogi yang tepat untuk membedakan asesmen formatif dan sumatif?",
        options: [
          "Formatif = Peta, Sumatif = Kompas",
          "Formatif = Rambu perjalanan, Sumatif = Akhir tujuan perjalanan",
          "Formatif = Bensin, Sumatif = Mobil",
          "Formatif = Jalan, Sumatif = Kendaraan"
        ],
        correct: 1,
        explanation: "Formatif seperti rambu perjalanan yang memberi tahu apakah masih di jalur benar, sedangkan sumatif menunjukkan apakah sudah sampai di tujuan."
      },
      {
        question: "Assessment as Learning berfungsi sebagai apa?",
        options: [
          "Asesmen sumatif untuk evaluasi akhir",
          "Asesmen formatif untuk refleksi diri murid",
          "Asesmen diagnostik untuk mendeteksi masalah",
          "Asesmen seleksi untuk memilih murid terbaik"
        ],
        correct: 1,
        explanation: "Assessment as Learning adalah asesmen untuk refleksi proses pembelajaran dan refleksi diri murid, berfungsi sebagai asesmen formatif."
      },
      {
        question: "Apa kelebihan utama asesmen digital dibanding konvensional?",
        options: [
          "Lebih murah dan tidak perlu listrik",
          "Koreksi otomatis dan rekap data cepat",
          "Tidak memerlukan internet",
          "Selalu lebih akurat"
        ],
        correct: 1,
        explanation: "Asesmen digital memiliki kelebihan koreksi otomatis dan rekap data yang cepat dibanding asesmen konvensional yang manual."
      },
      {
        question: "Dalam pendekatan Backward Design, apa yang ditentukan setelah tujuan pembelajaran?",
        options: [
          "Kegiatan pembelajaran",
          "Asesmen (bukti ketercapaian)",
          "Media pembelajaran",
          "Jadwal pembelajaran"
        ],
        correct: 1,
        explanation: "Dalam Backward Design, urutannya: Tujuan → Asesmen → Kegiatan Pembelajaran. Asesmen ditentukan setelah tujuan untuk memastikan ada bukti ketercapaian."
      },
      {
        question: "Platform apa yang menyediakan kuis interaktif berbasis gim dengan suasana kompetisi?",
        options: [
          "Google Form",
          "Kahoot",
          "Wayground",
          "Google Earth"
        ],
        correct: 1,
        explanation: "Kahoot adalah platform kuis interaktif berbasis gim yang populer di mana murid menjawab pertanyaan secara real-time dengan suasana kompetisi."
      }
    ]
  }
];

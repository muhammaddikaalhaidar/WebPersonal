function showInfo(stage) {
    let info = document.getElementById("info");
    let content = "";

    if (stage === 1) {
        content = `
            <h2>Revolusi Industri 1.0</h2>
            <p>📅 Periode: Akhir abad ke-18 (sekitar tahun 1784 - 1840)<br>
               📍 Lokasi Awal: Inggris<br>
               🔑 Ciri Utama: Mekanisasi produksi dengan tenaga mesin uap.</p>
             <hr>
           <p>  🔹<strong> Latar Belakang: </strong> <br>
            Sebelum Revolusi Industri 1.0, produksi barang masih dilakukan secara manual (handmade) menggunakan tenaga manusia atau hewan. 
            Produksi dalam skala besar sulit dilakukan, sehingga barang menjadi mahal dan langka.
            Namun, dengan ditemukannya mesin uap oleh<strong> James Watt</strong> pada akhir abad ke-18, terjadi perubahan besar dalam sistem produksi.
             Mesin uap memungkinkan manusia menggunakan tenaga mekanik untuk menjalankan alat produksi secara lebih cepat dan efisien.<br></p>
           <p> <strong>Dampak Revolusi Industri 1.0: </strong> <br></p>
           ✅ Produksi massal: Barang dapat diproduksi lebih banyak dengan biaya lebih murah.<br>
           ✅ Perkembangan pabrik: Banyak pabrik bermunculan, terutama di Inggris.<br>
           ✅ Urbanisasi: Orang-orang pindah ke kota untuk bekerja di pabrik.<br>
           ✅ Perubahan sosial: Munculnya kelas pekerja (buruh) dan kelas pemilik modal (kapitalis).<br>
           ✅ Peningkatan perdagangan: Dengan transportasi yang lebih cepat, barang dapat dikirim ke seluruh dunia.</p>
            <div class="image-container">
                <img src="revolusi 1.0.jpg" alt="Mesin Uap">
                <p><small>Sumber info: chat gpt</small></p>
                  <p><small>Sumber gambar: pinterest</small></p>
            </div>
        `;
    } else if (stage === 2) {
        content = `
            <h2>Revolusi Industri 2.0</h2>
            <p>📅 Periode: Sekitar tahun 1870 - 1914 <br>
               📍 Lokasi Awal: Eropa dan Amerika Serikat <br>
                🔑 Ciri Utama: Elektrifikasi, produksi massal, dan penggunaan jalur perakitan.</p>
                <hr>
            <p> 🔹<strong> Latar Belakang :</strong> <br>
            Setelah Revolusi Industri 1.0, dunia mulai memasuki era baru dengan penemuan teknologi yang lebih canggih
            , salah satunya adalah listrik. Perkembangan teknologi ini, ditambah dengan penemuan baru dalam bidang kimia dan mekanik,
             memungkinkan produksi barang dengan efisiensi yang jauh lebih tinggi dan lebih cepat dibandingkan sebelumnya.<strong> Thomas Edison </strong> dan <strong> Nikola Tesla  </strong> berperan 
             besar dalam pengembangan listrik dan sistem distribusinya, yang menjadi dasar bagi Revolusi Industri 2.0. Selain itu, <strong> Henry Ford </strong> memperkenalkan konsep jalur 
             perakitan untuk memproduksi barang dalam jumlah besar secara lebih efisien.<p>
               <p><strong> Dampak Revolusi Industri 2.0: </strong> <br>
               ✅ <strong> Elektrifikasi: </strong> <br>
                Penemuan dan penerapan listrik membawa perubahan besar dalam industri. Mesin-mesin dan peralatan mulai digerakkan dengan tenaga listrik, menggantikan tenaga uap.
                Hal ini memudahkan proses produksi di pabrik-pabrik, meningkatkan efisiensi, dan membuka jalan untuk inovasi teknologi lainnya.
               <br> ✅ <strong> Produksi Massal dengan Jalur Perakitan: </strong> <br>
               <strong> Henry Ford </strong> memperkenalkan jalur perakitan pada awal abad ke-20 yang memungkinkan produksi barang dalam jumlah besar dengan biaya yang lebih murah. Mobil, terutama <strong> Model T</strong>,
                menjadi contoh terkenal dari produksi massal menggunakan jalur perakitan, yang mengurangi waktu produksi dan meningkatkan output.
               <br>✅ <strong> Peningkatan Transportasi dan Komunikasi: </strong> <br>
                 Pembangunan kereta api yang lebih efisien, mobil massal, dan penggunaan telepon menghubungkan dunia lebih cepat daripada sebelumnya. Perdagangan internasional semakin meningkat karena pengiriman barang menjadi 
                 lebih cepat dan lebih murah.
               <br> ✅ <strong>  Perubahan dalam Tenaga Kerja: </strong> <br>
                 Banyak pekerjaan yang sebelumnya dilakukan secara manual digantikan oleh mesin dan peralatan listrik, yang mengarah pada pengurangan jumlah pekerja di sektor tertentu.
                 Meskipun demikian, banyak pekerjaan baru juga tercipta di sektor industri dan teknologi.
               <br> ✅ <strong>Meningkatnya Urbanisasi dan Konsumsi Barang:</strong> <br>
                 Urbanisasi yang sudah dimulai pada Revolusi Industri 1.0 semakin meningkat. Orang-orang semakin berbondong-bondong ke kota untuk bekerja di pabrik. Dengan produksi barang yang lebih murah dan lebih banyak, 
                 masyarakat mulai mengonsumsi barang-barang industri dalam jumlah yang lebih besar.
               <br> ✅ <strong> Kemajuan dalam Ilmu Pengetahuan dan Teknologi:</strong> <br>
                Revolusi Industri 2.0 juga memperkenalkan inovasi teknologi baru dalam bidang <strong> kimia </strong>,<strong> automotif</strong>, dan <strong> transportasi </strong>. Penemuan seperti mobil dan pesawat terbang mulai
                 mempengaruhi cara hidup dan bergeraknya barang serta orang di seluruh dunia.</p>
            <div class="image-container">
                <img src="2.0.webp" alt="Jalur Perakitan">
                <p><small>Sumber: Wikipedia</small></p>
                <p><small>Sumber: Google</small></p>
            </div>
        `;
    } else if (stage === 3) {
        content = `
            <h2>Revolusi Industri 3.0</h2>
             <p>📅 Periode: Sekitar tahun 1969 - awal 2000-a <br>
                📍 Lokasi Awal: Amerika Serikat  → Jepang →Eropa Barat <br>
                🔑 Ciri Utama: Otomatisasi dan Komputerisasi,Perkembangan Mikroprosesor dan Semikonduktor.</p>
                <hr>
                <p>🔹<strong> Latar Belakang </strong> <br>
                Revolusi Industri 3.0 terjadi karena kebutuhan akan efisiensi, otomatisasi, dan kecepatan dalam produksi dan komunikasi.
                 Kemajuan dalam komputer, mikroprosesor, robotika, serta internet mendorong perubahan besar dalam dunia industri, ekonomi, dan gaya hidup manusia. 🚀💻<br></p>
                <p><strong>Dampak Revolusi Industri 2.0</strong><br>
                1️⃣ Dampak dalam Dunia Industri dan Pekerjaan: <br>
                    ✅ Otomatisasi dan Efisiensi Produksi<br>
                    ✅ Perubahan Jenis Pekerjaan<br>
                    ✅ Peningkatan Kualitas Produk<br>

               <br>2️⃣ Dampak dalam Ekonomi dan Bisnis:<br>
                     ✅ Munculnya Industri Berbasis Teknologi<br>
                     ✅ Perubahan Model Bisnis<br>
                     ✅ Globalisasi Ekonomi
                   
                </p>
            <div class="image-container">
                <img src="3.0.jpg" alt="Komputer Awal">
                <p><small>Sumber: Wikipedia</small></p>
            </div>
        `;
    } else if (stage === 4) {
        content = `
            <h2>Revolusi Industri 4.0</h2>
            <p>📅 Periode:abad ke-21 <br>
               📍 Lokasi awal:Jerman <br>
               🔑 Ciri Utama: Perangkat dan sistem terhubung secara online melalui Internet of Things (IoT).</p>
               <hr>
             <p>🔹<strong> Latar Belakang </strong> <br>
             perubahan fundamental dalam kehidupan manusia yang disebabkan oleh integrasi teknologi digital, fisik, dan manusia. <br></p>
               <p><strong>Dampak Revolusi Industri 4.0</strong><br>
               ✅ Efisiensi dan Produktivitas Meningkat <br>
               ✅ Munculnya Model Bisnis Baru <br>
               ✅ Kemudahan Akses Informasi dan Komunikasi <br>
               ✅ Peningkatan Kualitas Hidup 
            <div class="image-container">
                <img src="4.0.jpg" alt="Industri 4.0">
                <p><small>Sumber: Wikipedia</small></p>
            </div>
        `;
    }

    info.innerHTML = content;
}



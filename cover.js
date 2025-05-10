// window.addEventListener('DOMContentLoaded', () => {
//   const namaTersimpan = localStorage.getItem('namaTamu');
//   if (namaTersimpan) {
//     document.getElementById('namaTamu').value = namaTersimpan;
//   }
// });


// // Bungkus logika validasi ke fungsi terpisah
// function bukaUndangan() {
//   const nama = document.getElementById('namaTamu').value.trim();
//   const regexHurufSpasi = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/;
//   const regexDigit      = /\d/;

//   // 1. Cek kosong
//   if (!nama) {
//     alert("Masukkan namamu dulu ya 😄");
//     return;
//   }

//   // 2. Minimal 3 huruf
//   if (nama.length <= 2) {
//     alert("Nama terlalu pendek, minimal 3 huruf 😉");
//     return;
//   }

//   // 3. Tanpa angka
//   if (regexDigit.test(nama)) {
//     alert("Nama tidak boleh mengandung angka 😅");
//     return;
//   }

//   // 4. Tanpa simbol atau emot
//   if (!regexHurufSpasi.test(nama)) {
//     alert("Nama hanya boleh huruf dan spasi—tanpa simbol atau emotikon 🚫");
//     return;
//   }

//   // Deteksi kata tidak sopan
//   const kataTerlarang = ["anjing",
//   "babi",
//   "bangsat",
//   "tolol",
//   "goblok",
//   "kontol",
//   "memek",
//   "ngentot",
//   "asu",
//   "tai",
//   "sinting",
//   "idiot",
//   "kampret",
//   "jancuk",
//   "jembut",
//   "pepek",
//   "pler",
//   "ngentod",
//   "bencong",
//   "banci",
//   "lonte",
//   "pelacur",
//   "perek",
//   "sange",
//   "bejat",
//   "brengsek",
//   "sialan",
//   "keparat",
//   "bokep",
//   "bajingan",
//   "setan",
//   "iblis",
//   "anjir",      // kadang digunakan dalam konteks kasar juga
//   "ngaceng",
//   "anjiong",
//   "oyang",
//   "omang",
//   "pantek","pantex","panteq",
//   "cunek","cunex","cuneq",
//   "galodiu","galodiuw"
// ];
//   const namaLower = nama.toLowerCase();

//   for (let kata of kataTerlarang) {
//     if (namaLower.includes(kata)) {
//       alert("Ups! Nama yang kamu masukkan mengandung kata tidak pantas 😳");
//       return;
//     }
//   }

//   // Format huruf awal tiap kata jadi kapital
//   const namaFormat = nama
//     .toLowerCase()
//     .split(' ')
//     .map(kata => kata.charAt(0).toUpperCase() + kata.slice(1))
//     .join(' ');

//   // Semua validasi lolos → tampilkan undangan
//   document.getElementById('formNama').style.display = 'none';
//   document.getElementById('namaTampil').textContent = namaFormat;
//   document.getElementById('namaTampil2').textContent = namaFormat;
//   document.getElementById('undangan').classList.add('show');

  
 

//   // Simpan nama yang sudah diformat ke localStorage
//   localStorage.setItem('namaTamu', namaFormat);
// }

// // Event klik tombol
// document.getElementById('btnBuka').addEventListener('click', bukaUndangan);

// // Event tekan Enter di input
// document.getElementById('namaTamu').addEventListener('keydown', function(e) {
//   if (e.key === 'Enter') {
//     e.preventDefault();   // mencegah form submit default
//     bukaUndangan();
//   }
// });



// // menampilkan web undangan
//   document.getElementById('undangan1').style.display = 'none';
  




// function mulaiAudio() {
//       const musik = document.getElementById('musik');
//       musik.muted = false;
//       musik.play();
//       document.getElementById('cover').style.display = 'none'; }// sembunyikan tombol


function bukaUndangan() {
  const nama = document.getElementById('namaTamu').value.trim();
  const regexHurufSpasi = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/;
  const regexDigit = /\d/;

  // 1. Cek kosong
  if (!nama) {
    alert("Masukkan namamu dulu ya 😄");
    return;
  }

  // 2. Minimal 3 huruf
  if (nama.length <= 2) {
    alert("Nama terlalu pendek, minimal 3 huruf 😉");
    return;
  }

  // 3. Tanpa angka
  if (regexDigit.test(nama)) {
    alert("Nama tidak boleh mengandung angka 😅");
    return;
  }

  // 4. Tanpa simbol atau emot
  if (!regexHurufSpasi.test(nama)) {
    alert("Nama hanya boleh huruf dan spasi—tanpa simbol atau emotikon 🚫");
    return;
  }

  // Deteksi kata tidak sopan
  const kataTerlarang = ["anjing", "babi", "bangsat", "tolol", "goblok", "kontol", "memek", "ngentot", "asu", "tai", "sinting",
     "idiot", "kampret", "jancuk", "jembut", "pepek", "pler", "ngentod", "bencong", "banci", "lonte", "pelacur", "perek", "sange",
      "bejat", "brengsek", "sialan", "keparat", "bokep", "bajingan", "setan", "iblis", "anjir", "ngaceng", "anjiong", "oyang", "omang",
       "pantek", "pantex", "panteq", "cunek", "cunex", "cuneq", "galodiu", "galodiuw"];
  const namaLower = nama.toLowerCase();

  for (let kata of kataTerlarang) {
    if (namaLower.includes(kata)) {
      alert("Ups! Nama yang kamu masukkan mengandung kata tidak pantas 😳");
      return;
    }
  }

  // Format huruf awal tiap kata jadi kapital
  const namaFormat = nama
    .toLowerCase()
    .split(' ')
    .map(kata => kata.charAt(0).toUpperCase() + kata.slice(1))
    .join(' ');

  // Semua validasi lolos → tampilkan nama dan tombol lihat undangan
  document.getElementById('formNama').style.display = 'none'; // sembunyikan form input
  document.getElementById('namaTampil').textContent = namaFormat;
  document.getElementById('namaTampil2').textContent = namaFormat;
  document.getElementById('undangan').classList.add('show');

  // Tampilkan tombol "Lihat Undangan"
  document.getElementById('lihatUndangan').style.display = 'block';

  // Simpan nama yang sudah diformat ke localStorage
  localStorage.setItem('namaTamu', namaFormat);
}

// Event klik tombol
document.getElementById('btnBuka').addEventListener('click', bukaUndangan);

// Event klik tombol lihat undangan
document.getElementById('lihatundangan').addEventListener('click', function() {
  // Sembunyikan cover dan tampilkan undangan1
  document.getElementById('cover').style.display = 'none';     // sembunyikan cover
  document.getElementById('undangan1').style.display = 'block'; // tampilkan undangan1
});


// Event klik tombol lihat undangan
document.getElementById('lihatundangan').addEventListener('click', function() {
  // Sembunyikan cover dan tampilkan undangan1
  document.getElementById('cover').style.display = 'none';     // sembunyikan cover
  document.getElementById('undangan1').style.display = 'block'; // tampilkan undangan1

  // Memutar audio
  const musik = document.getElementById('musik');
  musik.muted = false;  // pastikan suara tidak dimatikan
  musik.play();         // mulai memutar musik
});

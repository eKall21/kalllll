let mahasiswa1 = {
  nama: 'Haikal Ammar Ramadhan',
  nim: '231011700461',
  jurusan: 'Sistem Informasi'
};

let mahasiswa2 = {
  nama: 'Jane Doe',
  nim: '67890',
  jurusan: 'Manajemen'
};

let mahasiswa3 = {
  nama: 'Alice Smith',
  nim: '54321',
  jurusan: 'Psikologi'
};


const dataMahasiswaElement = document.getElementById('dataMahasiswa');


dataMahasiswaElement.innerHTML += `
  <h2>Data Mahasiswa:</h2>
  <p>Nama: ${mahasiswa1.nama} - NIM: ${mahasiswa1.nim} - Jurusan: ${mahasiswa1.jurusan}</p>
  <p>Nama: ${mahasiswa2.nama} - NIM: ${mahasiswa2.nim} - Jurusan: ${mahasiswa2.jurusan}</p>
  <p>Nama: ${mahasiswa3.nama} - NIM: ${mahasiswa3.nim} - Jurusan: ${mahasiswa3.jurusan}</p>
`;

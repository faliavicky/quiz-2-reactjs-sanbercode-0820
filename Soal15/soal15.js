let warna =["biru", "merah", "kuning", "hijau"]

let dataBukuTambahan = {
    penulis: "John Doe",
    tahunTerbit : 2020
}

let buku = {
    nama: "pemrograman dasar",
    jumlahHalaman: 172,
    warnaSampul: ["hitam"]
}
buku.warnaSampul.push(warna);

let semua = {
    ...buku,
    ...dataBukuTambahan,
}

console.log(semua);
const dataPenjualanNovel = [
  {
    idProduct: "BOOK002421",
    namaProduk: "Pulang - Pergi",
    penulis: "Tere Liye",
    hargaBeli: 60000,
    hargaJual: 86000,
    totalTerjual: 150,
    sisaStok: 17,
  },
  {
    idProduct: "BOOK002351",
    namaProduk: "Selamat Tinggal",
    penulis: "Tere Liye",
    hargaBeli: 75000,
    hargaJual: 103000,
    totalTerjual: 171,
    sisaStok: 20,
  },
  {
    idProduct: "BOOK002941",
    namaProduk: "Garis Waktu",
    penulis: "Fiersa Besari",
    hargaBeli: 67000,
    hargaJual: 99000,
    totalTerjual: 213,
    sisaStok: 5,
  },
  {
    idProduct: "BOOK002941",
    namaProduk: "Laskar Pelangi",
    penulis: "Andrea Hirata",
    hargaBeli: 55000,
    hargaJual: 68000,
    totalTerjual: 20,
    sisaStok: 56,
  },
];

function formatRupiah(angka) {
  const formatter = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  });
  return formatter.format(angka);
}

function getInfoPenjualan(dataPenjualan) {
  if (Array.isArray(dataPenjualan)) {
    let totalKeuntungan = 0;
    let totalModal = 0;
    const namaPenulis = {};
    let produkBukuTerlaris = 0;
    let jumlahTerjualTerbanyak = 0;

    for (let i = 0; i < dataPenjualan.length; i++) {
      const product = dataPenjualan[i];
      if (
        typeof product.hargaBeli !== "number" ||
        typeof product.hargaJual !== "number" ||
        typeof product.totalTerjual !== "number" ||
        typeof product.sisaStok !== "number"
      ) {
        return "Properti hargaBeli, hargaJual, totalTerjual, dan sisaStok harus berupa angka";
      } else if (
        typeof product.namaProduk !== "string" ||
        typeof product.penulis !== "string"
      ) {
        return "Properti namaProduk, dan penulis harus berupa huruf";
      }

      // Menghitung keuntungan dan modal per produk
      const keuntunganPerProduk =
        (product.hargaJual - product.hargaBeli) * product.totalTerjual;
      totalKeuntungan += keuntunganPerProduk;
      totalModal +=
        product.hargaBeli * (product.totalTerjual + product.sisaStok);

      // Menghitung penjualan per penulis
      if (namaPenulis[product.penulis]) {
        namaPenulis[product.penulis] += product.totalTerjual;
      } else {
        namaPenulis[product.penulis] = product.totalTerjual;
      }

      // Memeriksa produk buku terlaris
      if (product.totalTerjual >= jumlahTerjualTerbanyak) {
        produkBukuTerlaris = product.namaProduk;
        jumlahTerjualTerbanyak = product.totalTerjual;
      }
    }

    // Menghitung penulis buku terlaris
    let penulisTerlaris = null;
    let penjualanTerbanyak = 0;
    for (const penulis in namaPenulis) {
      if (namaPenulis[penulis] >= penjualanTerbanyak) {
        penulisTerlaris = penulis;
        penjualanTerbanyak = namaPenulis[penulis];
      }
    }

    // Menghitung persentase keuntungan
    const persentaseKeuntungan = (totalKeuntungan / totalModal) * 100;

    const infoPenjualan = {
      totalKeuntungan: formatRupiah(totalKeuntungan),
      totalModal: formatRupiah(totalModal),
      produkBukuTerlaris,
      persentaseKeuntungan: persentaseKeuntungan.toFixed(0) + "%",
      penulisTerlaris,
    };

    return infoPenjualan;
  } else {
    return "ERROR: Invalid data type";
  }
}

console.log(getInfoPenjualan(dataPenjualanNovel));

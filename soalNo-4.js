const dataPenjualanPakAldi = [
  {
    namaProduct: "Sepatu Futsal Nike Vapor Academy 8",
    hargaSatuan: 760000,
    kategori: "Sepatu Sport",
    totalTerjual: 90,
  },
  {
    namaProduct: "Sepatu Warrior Tristan Black Brown High - Original",
    hargaSatuan: 960000,
    kategori: "Sepatu Sneaker",
    totalTerjual: 37,
  },
  {
    namaProduct: "Sepatu Warrior Tristan Maroon High - Original",
    hargaSatuan: 360000,
    kategori: "Sepatu Sport",
    totalTerjual: 90,
  },
  {
    namaProduct: "Sepatu Warrior Rainbow Tosca Corduroy - [BNIB] Orginal",
    hargaSatuan: 120000,
    kategori: "Sepatu Sport",
    totalTerjual: 90,
  },
];

function hitungTotalPenjualan(dataPenjualan) {
  if (Array.isArray(dataPenjualan)) {
    let total = 0;
    for (let i = 0; i < dataPenjualan.length; i++) {
      const product = dataPenjualan[i];
      if (typeof product.totalTerjual !== "number") {
        return "ERROR: Property is not number";
      }
      total += product.totalTerjual;
    }
    return total;
  } else {
    return "ERROR: Invalid data type";
  }
}

console.log(hitungTotalPenjualan(dataPenjualanPakAldi));

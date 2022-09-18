function mataUang() {
    var namaPembeli = document.getElementById('pembeli').value;
    var namaBarang = document.getElementById('barang').value;
    var jumlahBarang = document.getElementById('jumlah').value;
    var mataUang = document.getElementById('uang').value;

    var verifNama = (namaPembeli == "") ? '* Masukan nama' : '';
    document.getElementById('notif').innerHTML = verifNama;
    var verifJumlah = (jumlahBarang == "") ? '* Masukan jumlah Barang' : '';
    document.getElementById('notiff').innerHTML = verifJumlah;

    var tv = 1500000;
    var kulkas = 2000000;
    var hp = 8000000;
    var kamera = 23000000;

    switch (mataUang) {
        case 'USD':
            var hrg = 14944;
            var barang1 = tv / hrg;
            var barang2 = kulkas / hrg;
            var barang3 = hp / hrg;
            var barang4 = kamera / hrg;

            document.getElementById('tv').innerHTML = `$ ${barang1.toFixed(2)}`
            document.getElementById('kulkas').innerHTML = `$ ${barang2.toFixed(2)}`
            document.getElementById('hp').innerHTML = `$ ${barang3.toFixed(2)}`
            document.getElementById('kamera').innerHTML = `$ ${barang4.toFixed(2)}`

            if (namaBarang == 'Tv') {
                nilai = '$ 100.37';
                var total = barang1 * jumlahBarang;
            }

            else if (namaBarang == 'Kulkas') {
                nilai = '$ 133.83'
                var total = barang2 * jumlahBarang;
            }

            else if (namaBarang == 'hp') {
                nilai = '$ 535.33'
                var total = barang3 * jumlahBarang;
            }
            else if (namaBarang == 'kamera') {
                nilai = '$ 1539.08'
                var total = barang4 * jumlahBarang;
            }

            document.getElementById('tPembeli').innerHTML = namaPembeli;
            document.getElementById('tBarang').innerHTML = namaBarang;
            document.getElementById('tHarga').innerHTML = nilai;
            document.getElementById('tJumlah').innerHTML = jumlahBarang;
            document.getElementById('tValuta').innerHTML = mataUang;
            document.getElementById('tBayar').innerHTML = `$ ${total.toFixed(2)}`;

            break;

        case 'SGD':
            var hrg = 10595;
            var barang1 = tv / hrg;
            var barang2 = kulkas / hrg;
            var barang3 = hp / hrg;
            var barang4 = kamera / hrg;

            document.getElementById('tv').innerHTML = `S$ ${barang1.toFixed(2)}`
            document.getElementById('kulkas').innerHTML = `S$ ${barang2.toFixed(2)}`
            document.getElementById('hp').innerHTML = `S$ ${barang3.toFixed(2)}`
            document.getElementById('kamera').innerHTML = `S$ ${barang4.toFixed(2)}`

            if (namaBarang == 'Tv') {
                nilai = 'S$ 141.58'
                var total = barang1 * jumlahBarang;
            }

            else if (namaBarang == 'Kulkas') {
                nilai = 'S$ 188.77'
                var total = barang2 * jumlahBarang;
            }

            else if (namaBarang == 'hp') {
                nilai = 'S$ 755.07'
                var total = barang3 * jumlahBarang;
            }

            else if (namaBarang == 'kamera') {
                nilai = 'S$ 2170.84'
                var total = barang4 * jumlahBarang;
            }

            document.getElementById('tPembeli').innerHTML = namaPembeli;
            document.getElementById('tBarang').innerHTML = namaBarang;
            document.getElementById('tHarga').innerHTML = nilai;
            document.getElementById('tJumlah').innerHTML = jumlahBarang;
            document.getElementById('tValuta').innerHTML = mataUang;
            document.getElementById('tBayar').innerHTML = `S$ ${total.toFixed(2)}`;

            break;

        case 'EUR':
            var hrg = 14877;
            var barang1 = tv / hrg;
            var barang2 = kulkas / hrg;
            var barang3 = hp / hrg;
            var barang4 = kamera / hrg;

            document.getElementById('tv').innerHTML = `€ ${barang1.toFixed(2)}`
            document.getElementById('kulkas').innerHTML = `€ ${barang2.toFixed(2)}`
            document.getElementById('hp').innerHTML = `€ ${barang3.toFixed(2)}`
            document.getElementById('kamera').innerHTML = `€ ${barang4.toFixed(2)}`

            if (namaBarang == 'Tv') {
                nilai = '€ 100.83'
                var total = barang1 * jumlahBarang;
            }

            else if (namaBarang == 'Kulkas') {
                nilai = '€ 134.44'
                var total = barang2 * jumlahBarang;
            }

            else if (namaBarang == 'hp') {
                nilai = '€ 537.74'
                var total = barang3 * jumlahBarang;
            }

            else if (namaBarang == 'kamera') {
                nilai = '€ 1546.01'
                var total = barang4 * jumlahBarang;
            }

            document.getElementById('tPembeli').innerHTML = namaPembeli;
            document.getElementById('tBarang').innerHTML = namaBarang;
            document.getElementById('tHarga').innerHTML = nilai;
            document.getElementById('tJumlah').innerHTML = jumlahBarang;
            document.getElementById('tValuta').innerHTML = mataUang;
            document.getElementById('tBayar').innerHTML = `€ ${total.toFixed(2)}`;

            break;
    }

}
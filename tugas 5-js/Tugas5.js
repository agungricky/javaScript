function hitung(tombol) {
    var frm = document.getElementById('calcForm');
    var a1 = frm.angka1.value;
    var a2 = frm.angka2.value;

    switch (tombol) {
        case '+':
            if (isNaN(a1) || isNaN(a2)) {
                alert('Harap Masukan Angka dengan benar!');
            } else {
                var total = (Number(a1) + Number(a2));
                frm.hasil.value = total;
            }; break;


        case '-':
            if (isNaN(a1) || isNaN(a2)) {
                alert('Harap Masukan Angka dengan benar!');
            } else {
                var total = (Number(a1) - Number(a2));
                frm.hasil.value = total;
            }; break;


        case '*':
            if (isNaN(a1) || isNaN(a2)) {
                alert('Harap Masukan Angka dengan benar!');
            } else {
                var total = (Number(a1) * Number(a2));
                frm.hasil.value = total;
            }; break;


        case '/':
            if (isNaN(a1) || isNaN(a2)) {
                alert('Harap Masukan Angka dengan benar!');
            } else {
                var total = (Number(a1) / Number(a2));
                frm.hasil.value = total;
            }; break;


        case '^':
            if (isNaN(a1) || isNaN(a2)) {
                alert('Harap Masukan Angka dengan benar!');
            } else {
                var total = (Number(a1) ^ Number(a2));
                frm.hasil.value = total;
            }; break;

        case 'clear':
            if (isNaN(a1) || isNaN(a2)) {
                alert('Harap Masukan Angka dengan benar!');
            } else {
                var total = (Number("") ^ Number(""));
                frm.hasil.value = total;
            }; break;
    }
}
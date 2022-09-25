$(document).ready(function () {
    $("p").hide();
    $(".btn").hide();
    $("small").show();

    $(".btn").click(function () {
        $("p").hide(800);
        $(".btn").hide(900);
        $("small").show(900);
        $(".music").hide();
        $('.music').html('<audio controls stop></audio>');
        $('.card').css('background-color', 'white');
        $('img').css('border-radius', '0px');
        $('.btn').css('font-weight', 'normal');
    });
});

function fungsi(hewan) {
    switch (hewan) {
        case angsa:
            $(document).ready(function () {
                $("#angsa").show(800);
                $("#btn_angsa").show(800);
                $("small").hide();
                $("#music_angsa").hide();
                $('#music_angsa').html('<audio controls autoplay> <source src="audio/angsa.mp3"  type="audio/mpeg"> </audio>');
                $('#card_angsa').css('background-color', 'rgba(9, 255, 9, 0.622)');
                $('#img_angsa').css('border-radius', '100px');
                $('.btn').css('color', 'white');
                $('.btn').css('font-weight', 'bold');
            }); break;

        case ayam:
            $(document).ready(function () {
                $("#ayam").show(800);
                $("#btn_ayam").show(800);
                $("small").hide();
                $("#music_ayam").hide();
                $('#music_ayam').html('<audio controls autoplay> <source src="audio/ayam.mp3"  type="audio/mpeg"></audio>');
                $('#card_ayam').css('background-color', 'rgba(255, 191, 0, 0.736)');
                $('#img_ayam').css('border-radius', '100px');
                $('.btn').css('color', 'white');
                $('.btn').css('font-weight', 'bold');
            }); break;

        case pipit:
            $(document).ready(function () {
                $("#pipit").show(800);
                $("#btn_pipit").show(800);
                $("small").hide();
                $("#music_pipit").hide();
                $('#music_pipit').html('<audio controls autoplay> <source src="audio/pipit.mp3"  type="audio/mpeg"></audio>');
                $('#card_pipit').css('background-color', 'rgb(115, 255, 216)');
                $('#img_pipit').css('border-radius', '100px');
                $('.btn').css('color', 'white');
                $('.btn').css('font-weight', 'bold');
            }); break;

        case bebek:
            $(document).ready(function () {
                $("#bebek").show(800);
                $("#btn_bebek").show(800);
                $("small").hide();
                $("#music_bebek").hide();
                $('#music_bebek').html('<audio controls autoplay> <source src="audio/bebek.mp3"  type="audio/mpeg"></audio>');
                $('#card_bebek').css('background-color', ' 	rgb(127, 255, 1)');
                $('#img_bebek').css('border-radius', '100px');
                $('.btn').css('color', 'white');
                $('.btn').css('font-weight', 'bold');
            }); break;

        case singa:
            $(document).ready(function () {
                $("#singa").show(800);
                $("#btn_singa").show(800);
                $("small").hide();
                $("#music_singa").hide();
                $('#music_singa').html('<audio controls autoplay> <source src="audio/singa.mp3"  type="audio/mpeg"></audio>');
                $('#card_singa').css('background-color', 'rgb(210, 105, 30)');
                $('#img_singa').css('border-radius', '100px');
                $('.btn').css('color', 'white');
                $('.btn').css('font-weight', 'bold');
            }); break;

        case buaya:
            $(document).ready(function () {
                $("#buaya").show(800);
                $("#btn_buaya").show(800);
                $("small").hide();
                $("#music_buaya").hide();
                $('#music_buaya').html('<audio controls autoplay> <source src="audio/buaya.mp3"  type="audio/mpeg"></audio>');
                $('#card_buaya').css('background-color', ' 	rgb(205, 92, 92)');
                $('#img_buaya').css('border-radius', '100px');
                $('.btn').css('color', 'white');
                $('.btn').css('font-weight', 'bold');
            }); break;

        case srigala:
            $(document).ready(function () {
                $("#srigala").show(800);
                $("#btn_srigala").show(800);
                $("small").hide();
                $("#music_srigala").hide();
                $('#music_srigala').html('<audio controls autoplay> <source src="audio/srigala.mp3"  type="audio/mpeg"></audio>');
                $('#card_srigala').css('background-color', 'rgb(34, 139, 35)');
                $('#img_srigala').css('border-radius', '100px');
                $('.btn').css('color', 'white');
                $('.btn').css('font-weight', 'bold');
            }); break;

        case macan:
            $(document).ready(function () {
                $("#macan").show(800);
                $("#btn_macan").show(800);
                $("small").hide();
                $("#music_macan").hide();
                $('#music_macan').html('<audio controls autoplay> <source src="audio/macan.mp3"  type="audio/mpeg"></audio>');
                $('#card_macan').css('background-color', 'rgb(173, 255, 48)');
                $('#img_macan').css('border-radius', '100px');
                $('.btn').css('color', 'white');
                $('.btn').css('font-weight', 'bold');
            }); break;

        case sapi:
            $(document).ready(function () {
                $("#sapi").show(800);
                $("#btn_sapi").show(800);
                $("small").hide();
                $("#music_sapi").hide();
                $('#music_sapi').html('<audio controls autoplay> <source src="audio/sapi.mp3"  type="audio/mpeg"></audio>');
                $('#card_sapi').css('background-color', 'rgb(40, 178, 170)');
                $('#img_sapi').css('border-radius', '100px');
                $('.btn').css('color', 'white');
                $('.btn').css('font-weight', 'bold');
            }); break;

        case kuda:
            $(document).ready(function () {
                $("#kuda").show(800);
                $("#btn_kuda").show(800);
                $("small").hide();
                $("#music_kuda").hide();
                $('#music_kuda').html('<audio controls autoplay> <source src="audio/kuda.mp3"  type="audio/mpeg"></audio>');
                $('#card_kuda').css('background-color', 'rgb(143, 188, 144)');
                $('#img_kuda').css('border-radius', '100px');
                $('.btn').css('color', 'white');
                $('.btn').css('font-weight', 'bold');
            }); break;

        case kambing:
            $(document).ready(function () {
                $("#kambing").show(800);
                $("#btn_kambing").show(800);
                $("small").hide();
                $("#music_kambing").hide();
                $('#music_kambing').html('<audio controls autoplay> <source src="audio/kambing.mp3"  type="audio/mpeg"></audio>');
                $('#card_kambing').css('background-color', 'rgb(169, 169, 169)');
                $('#img_kambing').css('border-radius', '100px');
                $('.btn').css('color', 'white');
                $('.btn').css('font-weight', 'bold');
            }); break;

        case kerbau:
            $(document).ready(function () {
                $("#kerbau").show(800);
                $("#btn_kerbau").show(800);
                $("small").hide();
                $("#music_kerbau").hide();
                $('#music_kerbau').html('<audio controls autoplay> <source src="audio/kerbau.mp3"  type="audio/mpeg"></audio>');
                $('#card_kerbau').css('background-color', 'rgb(62, 254, 255)');
                $('#img_kerbau').css('border-radius', '100px');
                $('.btn').css('color', 'white');
                $('.btn').css('font-weight', 'bold');
            }); break;

        default:

            break;
    }
}

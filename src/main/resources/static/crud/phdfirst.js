$(document).ready(function () {
    //for creating user
    $('.nBtn').on('click', function (event) {
        event.preventDefault();
        $('.myForm #reja').val('');
        $('.myForm #dastur').val('');
        $('.myForm #respublikadaMaqola').val('');
        $('.myForm #konferensiyadaMaruza').val('');
        $('.myForm #umumlashtiruvchiMalumot').val('');
        $('.myForm #seminardaMaruza').val('');
        $('.myForm #yil').val('');
        $('.myForm #modalLabel').text("Ma'lumot qo'shish");
        $('.myForm .forma').attr('action', "save");
        $('.myForm #phdfirstModal').modal();
    });

    //for update user
    $('.table .eBtn').on('click', function (event) {
        event.preventDefault();
        let href = "edit/";
        let id = $(this).attr('href');
        href = href + id;
        $.get(href, function (phdfirst, status) {
            $('.myForm #reja').val(phdfirst.reja);
            $('.myForm #dastur').val(phdfirst.dastur);
            $('.myForm #respublikadaMaqola').val(phdfirst.respublikadaMaqola);
            $('.myForm #konferensiyadaMaruza').val(phdfirst.konferensiyadaMaruza);
            $('.myForm #umumlashtiruvchiMalumot').val(phdfirst.umumlashtiruvchiMalumot);
            $('.myForm #seminardaMaruza').val(phdfirst.seminardaMaruza);
            $('.myForm #yil').val(phdfirst.yil);
            $('.myForm #modalLabel').text("Tahrirlash");
            $('.myForm .forma').attr('action', "edit/" + phdfirst.id);

            console.log(name);
        });
        $('.myForm #phdfirstModal').modal();
    });
    //for delete user
    $('.table .delBtn').on('click', function (event) {
        event.preventDefault();
        let href = "delete/";
        let id = $(this).attr('href');
        href = href + id;
        $('#removeModalCenter #delRef').attr('href', href);
        $('#removeModalCenter').modal();
    });

    //progress bar

    let reja = $('.reja').text();
    let dastur = $('.dastur').text();
    let respublikadaMaqola = $('.respublikadaMaqola').text();
    let konferensiyadaMaruza = $('.konferensiyadaMaruza').text();
    let umumlashtiruvchiMalumot = $('.umumlashtiruvchiMalumot').text();
    let seminardaMaruza = $('.seminardaMaruza').text();
    let row = $('.xrow').length;
    console.log(row);
    for (let i = 0; i < row; i++) {

        if ( reja !== "-" && dastur !== "-") {
            $('.progress-bar')[i].setAttribute("style", "width:33%");
        }
        if (reja !=="+" && dastur !=="-"){
            $('.progress-bar')[i].setAttribute("style", "width:70%");
        }
        console.log("dastur");
    }

});

// document.getElementsByClassName("progress-bar").style.width = "width:30%";

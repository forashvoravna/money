
$(document).ready(function () {
    //for creating user
    $('.nBtn').on('click', function (event) {
        event.preventDefault();
        $('.myForm #ilmiyMaqola').val('');
        $('.myForm #maruzaTezisi').val('');
        $('.myForm #xorijdaMaqola').val('');
        $('.myForm #seminardaMaruza').val('');
        $('.myForm #rejaBuyichaHisobot').val('');
        $('.myForm #yil').val('');
        $('.myForm #modalLabel').text("Ma'lumot Qo'shish");
        $('.myForm .forma').attr('action',"save");
        $('.myForm #phdsecondModal').modal();
    });
    //for update user
    $('.table .eBtn').on('click', function (event) {
        event.preventDefault();
        let href = "edit/";
        let id = $(this).attr('href');
        href = href + id;
        $.get(href, function (phdsecond, status) {
            $('.myForm #ilmiyMaqola').val(phdsecond.ilmiyMaqola);
            $('.myForm #maruzaTezisi').val(phdsecond.maruzaTezisi);
            $('.myForm #xorijdaMaqola').val(phdsecond.xorijdaMaqola);
            $('.myForm #seminardaMaruza').val(phdsecond.seminardaMaruza);
            $('.myForm #rejaBuyichaHisobot').val(phdsecond.rejaBuyichaHisobot);
            $('.myForm #yil').val(phdsecond.yil);
            $('.myForm #modalLabel').text("Tahrirlash");
            $('.myForm .forma').attr('action',"edit/"+phdsecond.id);

            console.log(name);
        });
        $('.myForm #phdsecondModal').modal();
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
});





$(document).ready(function () {
    //for creating user
    $('.nBtn').on('click', function (event) {
        event.preventDefault();
        $('.myForm #fish').val('');
        $('.myForm #ilmiyUnvon').val('');
        $('.myForm #ilmiyDaraja').val('');
        $('.myForm #ixtisoslikShifri').val('');
        $('.myForm #modalLabel').text("Azo Yaratish");
        $('.myForm .forma').attr('action',"save");
        $('.myForm #ilmiyKengashAzolariModal').modal();
    });
    //for update user
    $('.table .eBtn').on('click', function (event) {
        event.preventDefault();
        let href = "edit/";
        let id = $(this).attr('href');
        href = href + id;
        $.get(href, function (azo, status) {
            $('.myForm #fish').val(azo.fish);
            $('.myForm #ilmiyUnvon').val(azo.ilmiyUnvon);
            $('.myForm #ilmiyDaraja').val(azo.ilmiyDaraja);
            $('.myForm #ixtisoslikShifri').val(azo.ixtisoslikShifri);
            $('.myForm #modalLabel').text("Tahrirlash");
            $('.myForm .forma').attr('action',"edit/"+azo.id);
            console.log(name);
        });
        $('.myForm #ilmiyKengashAzolariModal').modal();
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




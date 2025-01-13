
$(document).ready(function () {
    //for creating user
    $('.nBtn').on('click', function (event) {
        event.preventDefault();
        $('.myForm #name').val('tarmoqModal');
        $('.myForm #modalLabel').text("Tarmoq yaratish");
        // $('.myForm .forma').attr('action',"/admin/tarmoq/save");
        $('.myForm #tarmoqModal').modal();
    });
    //for update user
    $('.table .eBtn').on('click', function (event) {
        event.preventDefault();
        let href = "edit/";
        let id = $(this).attr('href');
        href = href + id;
        $.get(href, function (tarmoq, status) {
            $('.myForm #name').val(tarmoq.name);
            $('.myForm #modalLabel').text("Tarmoqni tahrirlash");
            $('.myForm .forma').attr('action',"edit/"+tarmoq.id);

            console.log(tarmoq.id);
        });
        $('.myForm #tarmoqModal').modal();
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




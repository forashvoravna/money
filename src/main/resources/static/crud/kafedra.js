
$(document).ready(function () {
    //for creating user
    $('.nBtn').on('click', function (event) {
        event.preventDefault();
        $('.myForm #number').val('');
        $('.myForm #name').val('');
        $('.myForm #modalLabel').text("Kafedra Yaratish");
        // $('.myForm .forma').attr('action',"save");
        $('.myForm #kafedraModal').modal();
    });
    //for update user
    $('.table .eBtn').on('click', function (event) {
        event.preventDefault();
        let href = "edit/";
        let id = $(this).attr('href');
        href = href + id;
        $.get(href, function (kafedra, status) {
            $('.myForm #number').val(kafedra.number);
            $('.myForm #name').val(kafedra.name);
            $('.myForm #modalLabel').text("Kafedrani tahrirlash");
            $('.myForm .forma').attr('action',"edit/"+kafedra.id);

            console.log(kafedra.id);
        });
        $('.myForm #kafedraModal').modal();
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




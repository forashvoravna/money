
$(document).ready(function () {
    //for creating user
    $('.nBtn').on('click', function (event) {
        event.preventDefault();
        $('.myForm #loyihaNomi').val('');
        $('.myForm #yil').val('');
        $('.myForm #modalLabel').text("Loyiha Yaratish");
        $('.myForm .forma').attr('action',"save");
        $('.myForm #loyihaModal').modal();
    });
    //for update user
    $('.table .eBtn').on('click', function (event) {
        event.preventDefault();
        let href = "edit/";
        let id = $(this).attr('href');
        href = href + id;
        $.get(href, function (loyiha, status) {
            $('.myForm #loyihaNomi').val(loyiha.loyihaNomi);
            $('.myForm #yil').val(loyiha.yil);
            $('.myForm #modalLabel').text("Loyihani tahrirlash");
            $('.myForm .forma').attr('action',"edit/"+loyiha.id);

            console.log(name);
        });
        $('.myForm #loyihaModal').modal();
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




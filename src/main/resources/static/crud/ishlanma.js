
$(document).ready(function () {
    //for creating user
    $('.nBtn').on('click', function (event) {
        event.preventDefault();
        $('.myForm #modalLabel').text("Ishlanma Yaratish");
        $('.myForm .forma').attr('action',"save");
        $('.myForm #ishlanmaModal').modal();
    });
    //for update user
    $('.table .eBtn').on('click', function (event) {
        event.preventDefault();
        let href = "edit/";
        let id = $(this).attr('href');
        href = href + id;
        $.get(href, function (ishlanma, status) {
            $('.myForm #ishlanmaNomi').val(ishlanma.ishlanmaNomi);
            $('.myForm #yil').val(ishlanma.yil);
            $('.myForm #modalLabel').text("Ishlanmani tahrirlash");
            $('.myForm .forma').attr('action',"edit/"+ishlanma.id);
        });
        $('.myForm #ishlanmaModal').modal();
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




$(document).ready(function () {
    //for creating user
    $('.nBtn').on('click', function (event) {
        event.preventDefault();
        $('.myForm #modalLabel').text("Yangi Tadbir yaratish");
        $('.myForm .forma').attr('action',"save");
        $('.myForm #tadbirModal').modal();
    });
    //for update user
    $('.table .eBtn').on('click', function (event) {
        event.preventDefault();
        let href = "edit/";
        let id = $(this).attr('href');
        href = href + id;
        $.get(href, function (tadbir, status) {
            $('.myForm #tadbirNomi').val(tadbir.tadbirNomi);
            $('.myForm #utkazilganJoy').val(tadbir.utkazilganJoy);
            $('.myForm #utkazilganSana').val(tadbir.utkazilganSana);
            $('.myForm #modalLabel').text("Tadbirni tahrirlash");
            $('.myForm .forma').attr('action',"edit/"+tadbir.id);
        });
        $('.myForm #tadbirModal').modal();
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




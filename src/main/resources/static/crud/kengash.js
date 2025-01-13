
$(document).ready(function () {
    //for creating user
    $('.nBtn').on('click', function (event) {
        event.preventDefault();
        $('.myForm #modalLabel').text("Himoyachi qo'shish");
        $('.myForm .forma').attr('action',"save");
        $('.myForm #kengashModal').modal();
    });
    //for update user
    $('.table .eBtn').on('click', function (event) {
        event.preventDefault();
        let href = "edit/";
        let id = $(this).attr('href');
        href = href + id;
        $.get(href, function (kengash, status) {
            $('.myForm #kengashgaQabulSana').val(kengash.kengashgaQabulSana);
            $('.myForm #himoyaSana').val(kengash.himoyaSana);
            $('.myForm #seminar').val(kengash.seminar);
            $('.myForm #muhokama').val(kengash.muhokama);
            $('.myForm #natija').val(kengash.natija);
            $('.myForm #modalLabel').text("Ishni tahrirlash");
            $('.myForm .forma').attr('action',"edit/"+kengash.id);
        });
        $('.myForm #kengashModal').modal();
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




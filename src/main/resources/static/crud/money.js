$(document).ready(function () {
    //for creating user
    $('.nBtn').on('click', function (event) {
        console.log("htgdfkfyfjj");
        event.preventDefault();
        $('.myForm #description').val('');
        $('.myForm #quantity').val('');
        $('.myForm #moneyType').val('');
        $('.myForm #modalLabel').text("Kirim chiqim qo'shish");
        $('.myForm .forma').attr('action',"save");
        $('.myForm #moneyModal').modal();
    });
    //for update user
    $('.table .eBtn').on('click', function (event) {
        event.preventDefault();
        let href = "edit/";
        let id = $(this).attr('href');
        href = href + id;
        $.get(href, function (money) {
            $('.myForm #description').val(money.description);
            $('.myForm #quantity').val(money.quantity);
            $('.myForm #modalLabel').text("Kirim chiqimni tahrirlash");
            $('.myForm .forma').attr('action',"edit/"+money.id);

            console.log(money.id);
        });
        $('.myForm #moneyModal').modal();
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




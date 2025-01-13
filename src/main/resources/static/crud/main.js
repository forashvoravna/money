$(document).ready(function () {
    //for creating user
    $('.nBtn').on('click', function (event) {
        console.log("htgdfkfyfjj");
        event.preventDefault();
        $('.myForm #fullName').val('');
        $('.myForm #password').val('');
        $('.myForm #role').val('');
        $('.myForm #modalLabel').text("Foydalanuvchi Qo'shish");
        $('.myForm .forma').attr('action',"save");
        $('.myForm #userModal').modal();
    });
    //for update user
    $('.table .eBtn').on('click', function (event) {
        event.preventDefault();
        let href = "edit/";
        let id = $(this).attr('href');
        href = href + id;
        $.get(href, function (users, status) {
            $('.myForm #username').val(users.username);
            $('.myForm #modalLabel').text("Foydalanuvchi ma'lumotlarini tahrirlash");
            $('.myForm .forma').attr('action',"edit/"+users.id);

            console.log(users.id);
        });
        $('.myForm #userModal').modal();
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




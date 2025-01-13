
$(document).ready(function () {
    //for creating user
    $('.nBtn').on('click', function (event) {
        event.preventDefault();
        $('.myForm #maqolalarMavjud').val('');
        $('.myForm #tugallanganDisIshi').val('');
        $('.myForm #avtoreferat').val('');
        $('.myForm #seminardaMuhokama').val('');
        $('.myForm #yil').val('');
        $('.myForm #modalLabel').text("Ma'lumot qo'shish");
        $('.myForm .forma').attr('action',"save");
        $('.myForm #phdthirdModal').modal();
    });
    //for update user
    $('.table .eBtn').on('click', function (event) {
        event.preventDefault();
        let href = "edit/";
        let id = $(this).attr('href');
        href = href + id;
        $.get(href, function (phdthird, status) {
            $('.myForm #maqolalarMavjud').val(phdthird.maqolalarMavjud);
            $('.myForm #tugallanganDisIshi').val(phdthird.tugallanganDisIshi);
            $('.myForm #avtoreferat').val(phdthird.avtoreferat);
            $('.myForm #seminardaMuhokama').val(phdthird.seminardaMuhokama);
            $('.myForm #yil').val(phdthird.yil);
            $('.myForm #modalLabel').text("Tahrirlash");
            $('.myForm .forma').attr('action',"edit/"+phdthird.id);

            console.log(name);
        });
        $('.myForm #phdthirdModal').modal();
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




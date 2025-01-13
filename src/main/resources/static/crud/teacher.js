
$(document).ready(function () {
    //for creating user
    $('.nBtn').on('click', function (event) {
        event.preventDefault();
        $('.myForm #fish').val('');
        $('.myForm #ishJoyi').val('');
        $('.myForm #ilmiyUnvon').val('');
        $('.myForm #ilmiyDaraja').val('');
        $('.myForm #lavozim').val('');
        $('.myForm #modalLabel').text("O'qituvchi Yaratish");
        $('.myForm .forma').attr('action',"save");
        $('.myForm #teacherModal').modal();
    });
    //for update user
    $('.table .eBtn').on('click', function (event) {
        event.preventDefault();
        let href = "edit/";
        let id = $(this).attr('href');
        href = href + id;
        $.get(href, function (teacher, status) {
            $('.myForm #fish').val(teacher.fish);
            $('.myForm #ishJoyi').val(teacher.ishJoyi);
            $('.myForm #ilmiyUnvon').val(teacher.ilmiyUnvon);
            $('.myForm #ilmiyDaraja').val(teacher.ilmiyDaraja);
            $('.myForm #lavozim').val(teacher.lavozim);
            $('.myForm #modalLabel').text("O'qituvchini Tahrirlash");
            $('.myForm .forma').attr('action',"edit/"+teacher.id);

            console.log(name);
        });
        $('.myForm #teacherModal').modal();
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





$(document).ready(function () {
    //for creating user
    $('.nBtn').on('click', function (event) {
        event.preventDefault();
        $('.myForm #fish').val('');
        $('.myForm #mutaxasisslik').val('');
        $('.myForm #ilmiyDaraja').val('');
        $('.myForm #ilmiyUnvon').val('');
        $('.myForm #ruxsatShakli').val('');
        $('.myForm #modalLabel').text("Taqrizchi Yaratish");
        $('.myForm .forma').attr('action',"save");
        $('.myForm #taqrizchiModal').modal();
    });
    //for update user
    $('.table .eBtn').on('click', function (event) {
        event.preventDefault();
        let href = "edit/";
        let id = $(this).attr('href');
        href = href + id;
        $.get(href, function (taqrizchi, status) {
            $('.myForm #fish').val(taqrizchi.fish);
            $('.myForm #mutaxasisslik').val(taqrizchi.mutaxasisslik);
            $('.myForm #ilmiyDaraja').val(taqrizchi.ilmiyDaraja);
            $('.myForm #ilmiyUnvon').val(taqrizchi.ilmiyUnvon);
            $('.myForm #ruxsatShakli').val(taqrizchi.ruxsatShakli);
            $('.myForm #modalLabel').text("Taqrizchini Tahrirlash");
            $('.myForm .forma').attr('action',"edit/"+taqrizchi.id);

            console.log(name);
        });
        $('.myForm #taqrizchiModal').modal();
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




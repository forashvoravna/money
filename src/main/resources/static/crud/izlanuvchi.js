
$(document).ready(function () {
    //for creating user
    $('.nBtn').on('click', function (event) {
        event.preventDefault();
        $('.myForm #fish').val('');
        $('.myForm #ishJoyi').val('');
        $('.myForm #mavzu').val('');
        $('.myForm #qabulYili').val('');
        $('.myForm #tugatganYili').val('');
        $('.myForm #malakaImtihonIxtisoslik').val('');
        $('.myForm #malakaImtihonChetTili').val('');
        $('.myForm #kafedraMuhokama').val('');
        $('.myForm #kafedralarAroMuhokama').val('');
        $('.myForm #kafedralarAroMuhokamaSana').val('');
        $('.myForm #modalLabel').text("Izlanuvchi Yaratish");
        $('.myForm .forma').attr('action',"save");
        $('.myForm #izlanuvchiModal').modal();
    });
    //for update user
    $('.table .eBtn').on('click', function (event) {
        event.preventDefault();
        let href = "edit/";
        let id = $(this).attr('href');
        href = href + id;
        $.get(href, function (student, status) {
            $('.myForm #fish').val(student.fish);
            $('.myForm #ishJoyi').val(student.ishJoyi);
            $('.myForm #mavzu').val(student.mavzu);
            $('.myForm #qabulYili').val(student.qabulYili);
            $('.myForm #tugatganYili').val(student.tugatganYili);
            $('.myForm #malakaImtihonIxtisoslik').val(student.malakaImtihonIxtisoslik);
            $('.myForm #malakaImtihonChetTili').val(student.malakaImtihonChetTili);
            $('.myForm #kafedraMuhokama').val(student.kafedraMuhokama);
            $('.myForm #kafedralarAroMuhokama').val(student.kafedralarAroMuhokama);
            $('.myForm #kafedralarAroMuhokamaSana').val(student.kafedralarAroMuhokamaSana);
            $('.myForm #modalLabel').text("Izlanuvchini Tahrirlash");
            $('.myForm .forma').attr('action',"edit/"+student.id);

            console.log(name);
        });
        $('.myForm #izlanuvchiModal').modal();
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




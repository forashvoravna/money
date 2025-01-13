$(document).ready(function () {
    //for creating user
    $('.nBtn').on('click', function (event) {
        event.preventDefault();
        $('.myForm #maqolaNomi').val('');
        $('.myForm #chopEtilganJurnal').val('');
        $('.myForm #jurnalSoni').val('');
        $('.myForm #jurnalBeti').val('');
        $('.myForm #yil').val('');
        $('.myForm #modalLabel').text("Maqola yaratish");
        $('.myForm .forma').attr('action', "save");
        $('.myForm #maqolaModal').modal();
    });
    //for update user
    $('.table .eBtn').on('click', function (event) {
        event.preventDefault();
        let href = "edit/";
        let id = $(this).attr('href');
        href = href + id;
        $.get(href, function (maqola, status) {
            $('.myForm #maqolaNomi').val(maqola.maqolaNomi);
            $('.myForm #chopEtilganJurnal').val(maqola.chopEtilganJurnal);
            $('.myForm #jurnalSoni').val(maqola.jurnalSoni);
            $('.myForm #jurnalBeti').val(maqola.jurnalBeti);
            $('.myForm #yil').val(maqola.yil);
            $('.myForm #modalLabel').text("Maqolani tahrirlash");
            $('.myForm .forma').attr('action', "edit/" + maqola.id);

            console.log(name);
        });
        $('.myForm #maqolaModal').modal();
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




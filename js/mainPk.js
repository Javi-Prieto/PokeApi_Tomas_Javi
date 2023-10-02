$(document).ready(function () {
    $(document).on('click', '#searchBtn', function () {
        $('#collapseSearch').show();
        $(document).on('click', '#findBtn', function () { 
            $('#collapseSearch').hide();
         })
    });
});
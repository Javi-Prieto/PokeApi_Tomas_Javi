$(document).ready(function () {
    $(document).on('click', '#searchBtn', function () {
        $('#collapseSearch').show();
        $('#searchBtn').hide();
        $('#xClose').show();
    });
    $(document).on('click', '.closeSearch', function () { 
        $('#collapseSearch').hide();
        $('#searchBtn').show();
        $('#xClose').hide();
     });
});
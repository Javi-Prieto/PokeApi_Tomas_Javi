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
/*
PARA EL COLOR DE CADA UNO DE LOS POKEMONS TENDRE QUE COGER EL ARRAY DE TIPOS 
EL PRIMERO DE LOS ELEMENTOS Y DE ESTE EL NOMBRE Y COMPARANDOLO SEGUN EL TIPO
PONER EL COLOR
https://pokeapi.co/docs/v2
*/
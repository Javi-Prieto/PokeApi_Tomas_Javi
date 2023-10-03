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
    $.ajax({
        type: "GET",
        url: "https://pokeapi.co/api/v2/pokemon/?limit=700"
    }).done(function(resp){
        var pokeList = resp.results;
        pokeList.forEach(i => {
            $.ajax({
                type: "GET",
                url: i.url
            }).done(function (poke) {

                var pokeId = poke.id;
                var template = `
                <button type="button" id="${pokeId}" data-bs-toggle="modal" data-bs-target="#pokeModal" class="col-xl-3 col-md-6 mb-2 mx-1 col-sm-12 pb-2
                 border border-3 rounded-3 d-flex p-0 pokeCards" style="border-color: ${assignBorderColor(poke)}!important;">
                    <div class="w-75">
                    <div class="row m-auto align-self-center p-1">
                        <div class="col-5 p-0"><img src="${poke.sprites.front_default}" alt="" class="w-75"/></div>
                        <div class="col-6 text-center align-self-center p-0"><p class="text-start m-0">${poke.name}</p></div>
                    </div>
                    </div>
                </button>`;
                $('#pokeList').append(template);
            });
        });
        
    });
    function assignBorderColor(pokemon){
        var type = pokemon.types[0].type.name;
        switch (type) {
            case 'grass':
                return '#7AC74C';
            case 'normal':
                return '#A8A77A';
            case 'fighting':
                return '#C22E28';
            case 'flying':
                return '#A98FF3';
            case 'poison':
                return '#A33EA1';
            case 'ground':
                return '#E2BF65';
            case 'rock':
                return '#B6A136';
            case 'bug':
                return '#A6B91A';
            case 'ghost':
                return '#735797';
            case 'steel':
                return '#B7B7CE';
            case 'fire':
                return '#EE8130';
            case 'water':
                return '#6390F0';
            case 'electric':
                return '#F7D02C';
            case 'psychic':
                return '#F95587';
            case 'ice':
                return '#96D9D6';
            case 'dragon':
                return '#6F35FC';
            case 'dark':
                return '#705746';
            case 'fairy':
                return '#D685AD';
            case 'shadow':
                return 'darkgrey';
            default:
                return 'black';


        }
    }

    function getId(url){
        return url.charAt(url.length - 2);
    }

    // $(document).on("click",".pokeCards", function(){ 
    //     var pokeId = $(".pokecards").id;

    //     // Hago una llamada ajax usando este id específico

    //     $.ajax({
    //         type:'GET',
    //         url: `https://pokeapi.co/api/v2/pokemon/${pokeId}`
    //     }).done(function(){

    //     })
    // });
});
/*
PARA EL COLOR DE CADA UNO DE LOS POKEMONS TENDRE QUE COGER EL ARRAY DE TIPOS 
EL PRIMERO DE LOS ELEMENTOS Y DE ESTE EL NOMBRE Y COMPARANDOLO SEGUN EL TIPO
PONER EL COLOR
https://pokeapi.co/docs/v2
*/
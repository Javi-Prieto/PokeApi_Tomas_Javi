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

    var selectedPage = 0;
    var numPages = Math.ceil(1200 / 18);

    for (var i = 0; i <= numPages; i++) {
        $('#pages').append(`<button id="Page${i}" class="btn btn-danger pageBtn" value=${i} >${i}</button>`);
    }

    //Initialize data
    loadPokemon(0);

    $(document).on('click', ".pageBtn", function () {
        loadPokemon(this);
    });

});

function loadPokemon(clickedButton){
    $('#pokeList').empty();

        selectedPage= clickedButton.value;

        $.ajax({
            type: "GET",
            url: `https://pokeapi.co/api/v2/pokemon/?limit=18&offset=${selectedPage * 18}`
        }).done(function (resp) {
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
                                    <div class="col-5 p-0"><img src="https://img.pokemondb.net/sprites/home/normal/${poke.name}.png" alt="" class="w-75"/></div>
                                    <div class="col-6 text-center align-self-center p-0"><p class="text-start m-0">${poke.name}</p></div>
                                </div>
                                </div>
                            </button>`;
                    $('#pokeList').append(template);
                });
            })

        });
}

function assignBorderColor(pokemon) {
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

function getId(url) {
    return url.charAt(url.length - 2);
}

$(document).on("click", ".pokeCards", function () {
    var pokeId = $(this).attr("id");

    // Hago una llamada ajax usando este id específico

    $.ajax({
        type: 'GET',
        url: `https://pokeapi.co/api/v2/pokemon/${pokeId}`
    }).done(function (fullPokemon) {

        //Seteo toda la info
        $('.modal-content').addClass(`${fullPokemon.types[0].type.name}`);
        $('#pokemonImage').attr('src', `https://img.pokemondb.net/sprites/home/normal/${fullPokemon.name}.png`);
        $('#pokemonName').text(`Name: ${fullPokemon.name}`);

        $('#pokemonType').text(`Type: ${getTypes(fullPokemon)}`);

        $('#pokemonSpecies').text(`Species: ${fullPokemon.species.name}`);
        $('#pokemonHeight').text(`Height: ${fullPokemon.name}`);

        $('#pokemonModal').modal('show');

        $(document).on('click', '#closeModal', function () {
            $('.modal-content').removeClass(`${fullPokemon.types[0].type.name}`);
        })
    })

});

function getTypes(fullPokemon) {
    var numOfTypes = fullPokemon.types.length;
    var types = "";

    for (var i = 0; i < numOfTypes; i++) {
        types = types + fullPokemon.types[i].type.name;
        if (i < numOfTypes - 1)
            types = types + "+";

    }
    return types.trim();
}

/*
PARA EL COLOR DE CADA UNO DE LOS POKEMONS TENDRE QUE COGER EL ARRAY DE TIPOS 
EL PRIMERO DE LOS ELEMENTOS Y DE ESTE EL NOMBRE Y COMPARANDOLO SEGUN EL TIPO
PONER EL COLOR
https://pokeapi.co/docs/v2
*/
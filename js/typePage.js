$(document).ready(function () {


    const itemCount = 18;
    const circleContainer = $("#circle-container");
    const radius = 357;
    const angleStep = (2 * Math.PI) / itemCount;
    var showTypeToggle = false;


    for (var i = 0; i < itemCount; i++) {
        const x = radius * Math.cos(i * angleStep) + radius;
        const y = radius * Math.sin(i * angleStep) + radius;

        var item = `
            <button value= "${i + 1}" class = "circle-item btn z-2" style= "top:${y}px; left:${x}px;">
                <img src="../img/${i + 1}.png" alt="" />
            </button>
        `;

        circleContainer.append(item);
    }


    var midScreenHCircle = ($('main').width() / 2) - (radius + 20);
    var midScreenVCircle = ($('main').height() / 2) - (radius + 82);
    var topCircle = midScreenVCircle + 'px';
    var leftCircle = midScreenHCircle + 'px';


    var midScreenHPokeball = ($('main').width() / 2) - ($('#showTypes>img').width() / 2);
    var midScreenVPokeball = ($('main').height() / 2) - ($('#showTypes>img').height() / 2 - 44);
    var topPokeball = midScreenVPokeball + 'px';
    var leftPokeball = midScreenHPokeball + 'px';

    circleContainer.css({
        'top': topCircle,
        'left': leftCircle
    });
    $('#showTypes').css({
        'top': topPokeball,
        'left': leftPokeball
    });
    $('#closeTypes').css({
        'top': topPokeball,
        'left': leftPokeball
    });
    $(document).on('click', '#showTypes', function () {
        if (showTypeToggle) {
            circleContainer.show().fadeOut();
            showTypeToggle = false;
        } else {
            circleContainer.hide().fadeIn();
            showTypeToggle = true;
        }

    })

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


    // $.ajax({
    //     type: "GET",
    //     url: "https://pokeapi.co/api/v2/type/"
    // }).done(resp => {
    //     var types = resp.results;
    //     for(var i = 0; i <= 18; i++){
    //         var template = 
    //         `
    //         <button class="col-lg-3 col-md-3 col-sm-6 border rounded-3 row bg-light m-1" >
    //             <div class ="w-75 ">
    //                 <div class="col-4"><img src="../img/${i+1}.png" alt="" /></div>
    //                 <div class="col-4 m-auto"><h6 class="h6 text-center">${types[i].name}</h6></div>
    //             </div>
    //         </button>
    //         `;
    //         $('#typesList').append(template);
    //     }

    // });

    $(document).on('click', '.circle-item', function () {
        $('.modal-content').empty();

        $.ajax({
            type: "GET",
            url: `https://pokeapi.co/api/v2/type/${this.value}`
        }).done(type => {
            var imgSrc = $(this).find('img').attr('src');
            var template = `<div class="modal-header border-0">

    <img class="typeImage" src="${imgSrc}" alt="">
    <h5 class="modal-title">
      ${type.names[7].name} Type</h5>
    <button type="button" class="btn-close m-0" data-bs-dismiss="modal" aria-label="Close"></button>
  </div>
  <div class="modal-body p-0 text-center">
    <p class="bg-dark text-success">Deals double damage:</p>
    <p class="damage">${getTypes(type.damage_relations.double_damage_to)}</p>
    <p class="bg-dark text-danger">Takes double damage:</p>
    <p class="damage">${getTypes(type.damage_relations.double_damage_from)}</p>
    <p class="bg-dark text-warning">Deals half damage to:</p>
    <p class="damage">${getTypes(type.damage_relations.half_damage_to)}</p>
    <p class="bg-dark text-info">Takes half damage from:</p>
    <p class="damage">${getTypes(type.damage_relations.half_damage_from)}</p>
  </div>`

            $('.modal-content').append(template);
            $('#typeRelationModal').modal('show');
        });
    })

    function getTypes(typesArray){
        var result = "";

        if(typesArray.length === 0)
            return "None";

        typesArray.forEach(type => {
            result = result + type.name.charAt(0).toUpperCase() + type.name.slice(1) + " ";
        });

        return result.trim("|");
    }
});
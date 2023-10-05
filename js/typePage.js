$(document).ready(function () {
    
    
    const itemCount = 18;
    const circleContainer = $("#circle-container");
    const radius = 357; 
    const angleStep = (2 * Math.PI) / itemCount;
    var showTypeToggle = true;

    
    for (var i = 0; i < itemCount; i++) {
        const x = radius * Math.cos(i * angleStep) + radius;
        const y = radius * Math.sin(i * angleStep) + radius;

        var item = `
            <button class = "circle-item btn" style= "top:${y}px; left:${x}px;">
                <img src="../img/${i+1}.png" alt="" />
            </button>
        `;
        
        circleContainer.append(item);
    } 

   
    var midScreenHCircle = ($('main').width() / 2) - (radius + 20);
    var midScreenVCircle  = ($('main').height() / 2) - (radius + 82);
    var topCircle = midScreenVCircle + 'px';
    var leftCircle = midScreenHCircle + 'px';


    var midScreenHPokeball = ($('main').width() / 2) - ($('#showTypes>img').width()/2);
    var midScreenVPokeball  = ($('main').height() / 2) - ($('#showTypes>img').height()/2 - 44);
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
        if(showTypeToggle){
            circleContainer.show().fadeOut();
            showTypeToggle = false;
        }else{
            circleContainer.hide().fadeIn();
            showTypeToggle = true;
        }
        
    });
   
    
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
        url: "https://pokeapi.co/api/v2/type/"
    }).done(resp => {
        var types = resp.results;
        types.forEach(type => {
            var template = 
            `
            <div class="col-lg-3 col-md-3 col-sm-6 border border-warning row bg-light">
                <div class="col-6"><img src="../img/1.png" alt="" /></div>
                <div class="col-6"><h6 class="h6">${type.name}</h6></div>
            </div>
            `;
            $('#typesList').append(template);
        });
        
    });
    

    
});
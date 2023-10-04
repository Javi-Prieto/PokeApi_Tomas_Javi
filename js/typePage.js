$(document).ready(function () {
    const itemCount = 18;
    const circleContainer = $("#circle-container");
    const radius = 357; 
    const angleStep = (2 * Math.PI) / itemCount;

    
    for (var i = 0; i < itemCount; i++) {
        const x = radius * Math.cos(i * angleStep) + radius;
        const y = radius * Math.sin(i * angleStep) + radius;

        var item = `
            <button class = "circle-item btn" style= "top:${y}px; left:${x}px;">
                <img src="../img/${i+1}.png" alt="" />
            </button>
        `;
        circleContainer.hide();
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


        

    $(document).on('click', '#showTypes', function () {
        circleContainer.show();
        $('#showTypes').hide();
        $('#closeTypes').show();
    });
    $(document).on('click', '#closeTypes', function () {
        circleContainer.hide();
        $('#showTypes').show();
        $('#closeTypes').hide();
    });
});
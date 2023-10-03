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

    const itemCount = 20;
    const circleContainer = $("#circle-container");
    const radius = 360; 
    const angleStep = (2 * Math.PI) / itemCount;

    for (var i = 0; i < itemCount; i++) {
        const x = radius * Math.cos(i * angleStep) + radius;
        const y = radius * Math.sin(i * angleStep) + radius;

        var item = `
            <div class = "circle-item" style= "top:${y}px; left:${x}px;">
                ${i+1}
            </div>

        `;
        circleContainer.hide();
        circleContainer.append(item);
    }
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
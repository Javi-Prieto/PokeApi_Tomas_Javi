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


        const itemCount = 18;
        const circleContainer = $("#circle-container");
        const radius = 360; 
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
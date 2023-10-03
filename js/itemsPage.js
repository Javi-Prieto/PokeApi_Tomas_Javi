$(document).ready(function () {
    $.ajax({
        url: 'https://pokeapi.co/api/v2/item',
        type: 'GET'
    }).done(function (resp) {
        var itemList = resp.results;

        itemList.forEach(item => { //Need to search for the specific items to get 
            //access to all the attributes
            $.ajax({
                url: `${item.url}`,
                type: 'GET'
            }).done(function (fullItem) {

                var template = `
                <tr>
                    <td>${fullItem.names[7].name}</td>
                    <td>${fullItem.category.name}</td>
                    <td>${fullItem.effect_entries[0].effect}</td>
                </tr>`;

                $("#tableBody").append(template);
            });
        });
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
});

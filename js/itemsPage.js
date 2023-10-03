$(document).ready(function () {
    $.ajax({
        url: 'https://pokeapi.co/api/v2/item',
        type: 'GET'
    }).done(function (resp) {
        var itemList = resp.results;
        itemList.forEach(item => {
            var template = `
            <tr>
                <td>${item.name}</td>
                <td></td>
                <td></td>
            </tr>`;

            $("#tableBody").append(template);
        });
    })
});
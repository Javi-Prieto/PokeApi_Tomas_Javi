$(document).ready(function () {
    var selectedPage = 1;
    loadPage(selectedPage);
    function loadPage(selectedPage){
        $.ajax({
            url: 'https://pokeapi.co/api/v2/item/?offset=' + (20*(selectedPage-1)) + '&limit=20',
            type: 'GET'
        }).done(function (answ) {
            var itemList = answ.results;
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
            if(selectedPage == 1){
                var templatePagination = `
                <li class = 'page-item'> <span class ='page-link disabled' pageSelected='${parseInt(selectedPage)}'>${parseInt(selectedPage)}</span></li>
                <li class = 'page-item'> <span class ='page-link' pageSelected='${parseInt(selectedPage)+1}'>${parseInt(selectedPage)+1}</span></li>
                <li class = 'page-item'> <span class ='page-link disabled'>...</span></li>
                <li class = 'page-item'> <span class ='page-link' pageSelected='${parseInt(selectedPage)+1}'><i class="bi bi-chevron-double-right"></i></span></li>
            `;
            }else if(selectedPage == 2){
                var templatePagination = `
                <li class = 'page-item'> <span class ='page-link' pageSelected='${parseInt(selectedPage)-1}'><i class="bi bi-chevron-double-left"></i></span></li>
                <li class = 'page-item'> <span class ='page-link' pageSelected='${parseInt(selectedPage)-1}'>${parseInt(selectedPage) -1}</span></li>
                <li class = 'page-item'> <span class ='page-link disabled' pageSelected='${parseInt(selectedPage)}'>${parseInt(selectedPage)}</span></li>
                <li class = 'page-item'> <span class ='page-link ' pageSelected='${parseInt(selectedPage)+1}'>3</span></li>
                <li class = 'page-item'> <span class ='page-link disabled'>...</span></li>
                <li class = 'page-item'> <span class ='page-link' pageSelected='${parseInt(selectedPage)+1}'><i class="bi bi-chevron-double-right"></i></span></li>
            `;
            }else{
                var templatePagination = `
                <li class = 'page-item'> <span class ='page-link' pageSelected='${parseInt(selectedPage)-1}'><i class="bi bi-chevron-double-left"></i></span></li>
                <li class = 'page-item'> <span class ='page-link disabled'>...</span></li>
                <li class = 'page-item'> <span class ='page-link' pageSelected='${parseInt(selectedPage)-1}'>${parseInt(selectedPage) -1}</span></li>
                <li class = 'page-item'> <span class ='page-link disabled' pageSelected='${parseInt(selectedPage)}'>${parseInt(selectedPage)}</span></li>
                <li class = 'page-item'> <span class ='page-link' pageSelected='${parseInt(selectedPage)+1}'>${parseInt(selectedPage) + 1}</span></li>
                <li class = 'page-item'> <span class ='page-link disabled'>...</span></li>
                <li class = 'page-item'> <span class ='page-link' pageSelected='${parseInt(selectedPage)+1}'><i class="bi bi-chevron-double-right"></i></span></li>
            `;
            }
            
            $('#itemsPagination').append(templatePagination);
        });
    }
    $(document).on('click', '.page-link', function () {
        $('#tableBody').empty();
        $('#itemsPagination').empty();
        loadPage($(this).attr('pageSelected'));
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
});

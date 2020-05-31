

function loadSearchQuery(searchQuery)
{
    fetch("https://restcountries.eu/rest/v2/name/"+searchQuery)
    .then(function(response){
        return response.json();
    })
    .then(function(response){
        console.log(response);
        var country=response[1];
        var flag=country.flag;
        $(".jumbotron").toggle(3000);
        $("#message").html("<img src="+flag+" style='width:100%;'> <br>Name : "+ country.name )

    })
    .catch(function(error)
    {
        console.log(error);
        alert(" Failed");
    })
}

function getSearchQuery()
{
    var query=$("#country").val();
    loadSearchQuery(query);
    
}


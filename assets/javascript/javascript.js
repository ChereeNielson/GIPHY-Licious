$(document).ready(function () {

    // Array for list of TV sitcoms //
    let sitcomList = ["Friends", "Will & Grace", "Arrested Development", "Parks and Recreation", "The Office", "Scrubs", "That '70s Show", "3rd Rock from the Sun", "It's Always Sunny in Philadelphia", "Community", "The Big Bang Theory", "Two and a Half Men", "Modern Family", "Seinfeld", "New Girl", "Mr. Bean", "Rules of Engagement",];
    sitcomList.sort();


    // Global variable that link to their $counterparts //
    let sitcomButton = $("#sitcomButton");
    let mainText = $("#mainText");


    // Create for loop to capture each sitcom from the array and turn it into a button //
    for (let i = 0; i < sitcomList.length; i++) {
        let sitcom = $('<button type="button" class="btn btn-success p-2 m-1">').text(sitcomList[i]);
           
        sitcom.attr("sitcom-name", sitcomList[i]);
        sitcomButton.append(sitcom);
        
    }


    // Button click function for what happens when you click on a sitcomButton //
    button.click(function () {
        mainText.empty();
        let newSitcom = $(this).attr("sitcom-name");
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + newSitcom +"&api_key=3cIsIeloVUjq1nketG9GZn3hRsKSFI3S&limit=10";
       
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
                
            });
        });
    }

    // Button click function for what happens when you click on the giphy or still //
});
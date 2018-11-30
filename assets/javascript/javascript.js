$(document).ready(function () {

    //An array with a list of TV sitcoms//
    var sitcomList = ["Friends", "Will & Grace", "Arrested Development", "Parks and Recreation", "The Office", "Scrubs", "That '70s Show", "3rd Rock from the Sun", "It's Always Sunny in Philadelphia", "Community", "The Big Bang Theory", "Two and a Half Men", "I Love Lucy", "Three's Company", "Modern Family", "Seinfeld", "The Middle", "Mr. Bean", "Rules of Engagement",];
    sitcomList.sort();


    //Global var that link to their $counterparts//
    var btnHolder = $("#btnHolder");
    var button = $(".btn");
    var mainText = $("#mainText");


    //A for loop which takes each item from the array and makes it into a button//
    for (i = 0; i < sitcomList.length; i++) {
        var sitcom = $('<button type="button" class="btn btn-success p-2 m-1">').text
            (sitcomList[i]);
        sitcom.attr('id', sitcomList[i]);
        btnHolder.append(sitcom);
        clickFunction();
    }


    //A function for what happens when you click on a button//

    function clickFunction() {
        button = $(".btn");
        button.click(function () {
            console.log(this.id);
            var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + this.id +"&api_key=3cIsIeloVUjq1nketG9GZn3hRsKSFI3S&limit=10";
            console.log(queryURL);

            $.ajax({
                url: queryURL,
                method: "GET"
            }).then(function (response) {
                console.log(response);
                console.log(response.data[0].embed_url);
            });
        });
    }
});
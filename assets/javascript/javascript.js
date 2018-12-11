// Initial array of TV Sitcoms //
let sitcomList = ["Friends", "Will & Grace", "Arrested Development", "Parks and Recreation", "The Office", "Scrubs", "That '70s Show", "Archer", "Community", "Bob's Burgers", "The Big Bang Theory", "Two and a Half Men", "Seinfeld", "New Girl", "Mr. Bean", "Rules of Engagement",];
sitcomList.sort();

// Global variables that link to their $counterparts //
let sitcomButtons = $("#sitcom-buttons");

// Function re-renders the HTML to display the appropriate sitcom //
function displaySitcom() {
        
    let sitcom = $(this).attr("data-name");
    console.log(sitcom);
    // API Key = 7ZEtITN9IDn8IgivJV70LFjUj7FnFZ6s //
    let queryURL = "http://api.giphy.com/v1/gifs/search?q=" + sitcom + "&api_key=7ZEtITN9IDn8IgivJV70LFjUj7FnFZ6s&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        let {data, meta} = response
        console.log(response);

        // Loop through each result item //
        for (let i = 0; i < response.data.length; i++) {
            
            // Create a div to hold the sitcom //
            let sitcomDiv = $("<div class='sitcom'>");

            // Storing the rating data //
            let results = response.data;
            let rating = response.Rated;

            // Create an element to display the rating //
            let p = $("<p>").text("Rating: " + results[i].rating);
            
            // Create an element to hold the image //
            let sitcomImage = $("<img class='image'>");

            sitcomImage.attr("src", results[i].images.fixed_height_still.url);
            sitcomImage.attr("data-still", results[i].images.fixed_height_still.url);
            sitcomImage.attr("data-state", "still");
            sitcomImage.addClass("gif");
            sitcomImage.attr("data-animate", results[i].images.fixed_height.url);

            // Display the rating and the image //
            sitcomDiv.append(p);
            sitcomDiv.append(sitcomImage);

            // Putting the entire sitcom above the previous sitcoms //
            $("#sitcom-view").prepend(sitcomDiv);
        }
    });
};

// Function for displaying sitcom data //
function renderButtons() {
    // Delete the sitcoms prior to adding new sitcoms (this is necessary otherwise you will have repeat buttons) //
    $("#sitcom-buttons").empty();

    // Loop through the array of sitcoms //
    for (let i = 0; i < sitcomList.length; i++) {
        // Then dynamicaly generate buttons for each sitcom in the array //
        let a = $("<button>");
        // Add a class of sitcom-btn to the button //
        a.addClass("sitcom-btn");
        // Add a data-attribute //
        a.attr("data-name", sitcomList[i]);
        // Provide the initial button text //
        a.text(sitcomList[i]);
        // Add the button to the buttons-view div //
        $("#sitcom-buttons").append(a);
    }
}

// Function to handle events where a sitcom button is clicked //
$("#add-sitcom").on("click", function(event) {
    event.preventDefault();
    // This line grabs the input from the textbox //
    let sitcom = $("#sitcom-input").val().trim();

    // Adding sitcom from the textbox to the array //
    sitcomList.push(sitcom);

    // Calling renderButtons which handles the processing of the sitcom array //
    renderButtons();
    $("#sitcom-input").val("");
});

// Click function to toggle between active GIPHY and still GIPHY //
$("#sitcom-view").on("click", ".image", function() {

    // The attr jQuery method allows us to get or set the value of any attribute on our HTML element //
    let state = $(this).attr("data-state");
        // If the clicked image's state is still, update its src attribute to what its data-animate value is // Then, set the image's data-state to animate //
        if (state === "still") {
                $(this).attr("src", $(this).data("animate"));
                $(this).attr("data-state", "animate");
            // Else set src to the data-still value //
            } else {
                $(this).attr("src", $(this).data("still"));
                $(this).attr("data-state", "still");
            };
        })

// Add a click event listener to all elements with a class of "sitcom-btn" //
$(document).on("click", ".sitcom-btn", displaySitcom);
    // $("#sitcom-view").empty();

// Calling the renderButtons function to display the intial buttons //
renderButtons();

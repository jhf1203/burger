$(function () {
    $(".devour-burger").on("click", function (event) {
        var id = $(this).data("id");
        var valDevoured = $(this).data("devoured");

        var newValDevoured = {
            devoured: valDevoured
        };

        // Send the PUT request.
        $.ajax("/api/cats/" + id, {
            type: "PUT",
            data: newvalDevoured
        }).then(
            function () {
                console.log("changed devoured to", newValDevoured);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".new-burger-form").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
        console.log("i clicked frontend post")

        let newBurger = {
            burger_name: $("name-input").val().trim(),
            devoured: false
        };

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("created new burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});
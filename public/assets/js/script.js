$(function () {
    $(".devour-burger").on("click", function (event) {
        const id = $(this).data("id");
        const valDevoured = $(this).data("devour");
        console.log(`${valDevoured}`)
        const newValDevoured = {
            devoured: valDevoured
        };

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newValDevoured
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
            burger_name: $("#name-input").val().trim(),
            devoured: 1
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
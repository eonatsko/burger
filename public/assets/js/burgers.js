$(function() {
    $(".change-eat").on("click", function(event) {
      var id = $(this).data("id");
      var newEat = $(this).data("neweat");
  
      var newEatState = {
        devoured: newEat
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newEatState
      }).then(
        function() {
          console.log("changed eat to", newEat);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
    $(".delete").on("click", function(event) {
      var id = $(this).data("id");
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "DELETE",
      }).then(
        function() {
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        burger_name: $("#ca").val().trim(),
        //devoured : $("[burger_name=devoured]:checked").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
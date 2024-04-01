$(document).ready(function() {
    $('#movieForm').submit(function(event) {
        event.preventDefault(); // Prevent form submission

        // Get input values
        let title = $('#titleInput').val();
        let rating = $('#ratingInput').val();

        // Append to the DOM
        let movieItem = $('<div class="movie-item">').text(title + ' - Rating: ' + rating);
        let removeButton = $('<button class="remove-btn">').text('Remove');
        movieItem.append(removeButton);
        $('#moviesList').append(movieItem);

        // Clear input fields
        $('#titleInput').val('');
        $('#ratingInput').val('');
    });

    // Remove movie on button click
    $(document).on('click', '.remove-btn', function() {
        $(this).parent().remove();
    });
});
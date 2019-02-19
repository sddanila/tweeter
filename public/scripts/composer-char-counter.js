// $(document).ready runs a callback when the DOM is ready to be manipulated with jQuery

$(document).ready(function() {
    console.log('This is working!');
    let charactersAllowed = 140;
    $('#textarea').on('keydown', function (){
        let length = ($(this).val().length);
        if (length > charactersAllowed){
            $('#textarea').addClass("overlimit");
        } else {
            $('#textarea').removeClass("overlimit");
        }
        let charactersLeft = charactersAllowed - $(this).val().length;
        $('.counter').text(charactersLeft);
    })
});
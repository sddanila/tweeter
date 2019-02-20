<script>
$(function() {
  let $form = $('#tweet-form');
  $form.on('submit', function (event) {
    event.preventDefault();
    console.log('Form submitted, performing ajax call...');
    $.ajax({ 
      method: 'POST',
      url: 'http://localhost:8080/tweets',
      data: $form.serialize(),
      success: function (data) {
      console.log('Success', data);
      },
      error: function(){
        console.log('error');
      }
    })
  });
});
</script>
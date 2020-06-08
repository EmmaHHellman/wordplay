$(document).ready(function() {
  $("form#wordplay").submit(function(event) {
    const sentence = $("input#sentence").val();
    const splitsentence = sentence.split(' ');
    console.log(splitsentence);
  });
});
$(document).ready(function() {
  $("form#wordplay").submit(function(event) {
    const sentence = $("input#sentence").val();
    const splitsentence = sentence.split(' ');
    console.log(splitsentence);
    event.preventDefault();
    let newArray = []
    splitsentence.forEach(function(word) {
      newArray.push(word); 
      console.log(newArray);   
      ;  
  });
  });
});
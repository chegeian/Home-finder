
const text=" SOMETIMES THE KEY TO HAPPINESS IS FINDING THE KEY TO THE RIGHT HOME ! "; 

let index=0;

function autowrite(){
    document.querySelector('.underText').innerHTML=text.slice(0,index);
    ++index;

    if(index>text.length){
        index=0;
    }
}

setInterval(autowrite,100);

 //sending message function
 $('form#contactForm').submit(function (event) {
    event.preventDefault();
    const name = $('#name').val();
    const pass = $('#email').val();
    const mess = $('#mess').val();
    alert("Hello " + name + "....Thank you we have received your message and we will respond to you as soon as possible. Thank you for contacting us.");
});

$(document).ready(function(){
  console.log("main.js");


  $("#findHere").click(function(){
      var status = $("[name='status']").val()
      var rooms = $("[name='rooms']").val()
      var type = $("[name='type']").val()
      var location = $("[name='location']").val()

      if(status == 0){
          localStorage.removeItem("status");
      }
      else{
          localStorage.setItem("status", status);
      }
      if(rooms == 0){
          localStorage.removeItem("room");
      }
      else{
          localStorage.setItem("room", rooms);
      }
      if(type == 0){
          localStorage.removeItem("type");
      }
      else{
          localStorage.setItem("type", type);
      }
      if(location == 0){
          localStorage.removeItem("location");
      }
      else{
          localStorage.setItem("location", location);
      }

     alert ("Hello there,we are working on getting you the house with the preference you keyed in we wil send you the results via email in a few minutes")
  })
})


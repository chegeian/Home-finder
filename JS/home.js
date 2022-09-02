
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

const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://mailcheck3.p.rapidapi.com/email/email@example.com',
  headers: {
    'X-RapidAPI-Key': 'b419e37f05mshd27b5c832e320e7p1103a0jsn415a25655385',
    'X-RapidAPI-Host': 'mailcheck3.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});


$(document).ready(function(){
  console.log("main.js");


  $('form#log').submit(function (event) {
    event.preventDefault();
    var email= $('#typeEmailX-2').val();
    var password= $('#typePasswordX-2').val();
     alert("Email must be entered in a proper and valid format including unique characters e.g Mohamedlee27@gmail.com");
});


  $("#findHere").click(function(){
      const status = $("[name='status']").val()
      const rooms = $("[name='rooms']").val()
      const type = $("[name='type']").val()
      const location = $("[name='location']").val()

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





 //sending message function
 $('form#contactForm').submit(function (event) {
    event.preventDefault();
    const name = $('#name').val();
    const pass = $('#email').val();
    const mess = $('#mess').val();
    alert("Hello " + name + "....Thank you we have received your message and we will respond to you as soon as possible. Thank you for contacting us.");
});


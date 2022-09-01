
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


///login

$('form#contactForm').submit(function (event) {
    event.preventDefault();
    const email= $('#typeEmailX-2').val();
    const password= $('#typePasswordX-2').val();
     alert("Email must be entered in a proper and valid format including unique characters e.g johndoe27@gmail.com");
});
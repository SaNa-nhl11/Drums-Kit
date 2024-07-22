//Mouse clicking Drums//
for(i=0;i<document.querySelectorAll(".drum").length;i++){ 

    document.querySelectorAll("button")[i].addEventListener("click",clicking);  //what happens when click detected, eventlistener use a type of event and a function as parameter//
   
}

function clicking() {
    var ButtonClicked = this.innerHTML;  //to get the correspond letter of the button clicked//
    MakeSound(ButtonClicked);
    console.log(ButtonClicked);

    ButtonAnimation(ButtonClicked);
}

//Key press Drums//
    document.addEventListener("keypress",pressing)  //applying eventlistener to the whole page//
       

     function pressing(event){      //the event that triggered the function//
        MakeSound(event.key);
        console.log(event);

        ButtonAnimation(event.key);
     }   
        

//function to produce sounds//
function MakeSound(key) { 
    switch(key) {
        case "z" :
            var audio1 = new Audio("sounds/tom-1.mp3");
            audio1.play();
         break;

        case "q" : 
           var audio2 = new Audio("sounds/tom-2.mp3");
           audio2.play();
        break;

        case "s" :
            var audio3 = new Audio("sounds/tom-3.mp3");
            audio3.play();
         break;

        case "d" :
            var audio4 = new Audio("sounds/tom-4.mp3");
            audio4.play();
         break;

        case "j" :
            var audio5 = new Audio("sounds/crash.mp3");
            audio5.play();
        break;

        case "k" :
            var audio6 = new Audio("sounds/kick-bass.mp3");
            audio6.play();
        break;

        case "l" :
            var audio7 = new Audio("sounds/snare.mp3");
            audio7.play();
         break;
    }
}

function ButtonAnimation(currentB) {
    var Active = document.querySelector("." + currentB);  
    Active.classList.add("pressed");   //to add the class //
    setTimeout(function(){
      Active.classList.remove("pressed");} , 100)  //what function works and after how much time//

}



    const buttons = document.querySelectorAll('.button')
const body= document.querySelector("body")

buttons.forEach( function (button){
  //console.log(button);
  button.addEventListener('click',function(event){
    console.log(event);
    console.log(event.target);
    const buttonid = event.target.id
    switch(buttonid){
      case 'grey':
         body.style.backgroundColor = buttonid;
         break;
         
      case 'blue' :
         body.style.backgroundColor = buttonid
         break;
      case 'white' :
         body.style.backgroundColor = buttonid
         break;
      case 'yellow' :
         body.style.backgroundColor = buttonid
         break;
    }


  })
})
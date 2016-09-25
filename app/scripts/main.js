
//event listener for when bubble is clicked
function bubbleClicked(){
  console.log("I'm clicked!");
}

//generates a single bubble
function generateBubble(){
  let bubble = document.createElement("div");
  bubble.className += "bubble";

  //get width of screen
  let screenWidth = document.getElementById("bubblesAreaWrapper").offsetWidth;

  //generate a random number between 0 and bubblesAreaWrapper width
  let randomWidth = Math.floor(Math.random() * ((screenWidth - 25) - 25 ) + 25);
  bubble.style.left = randomWidth + "px";
  bubble.style.top = 0 + "px";

  //add event listener for mouse clicks
  bubble.addEventListener("click",bubbleClicked);


  return bubble;
}

//generate and return an array of bubbles
function generateBubbles(){
  //generate a random number for bubbles
  const numberOfBubbles = Math.floor((Math.random() * 10) + 1);

  //bubbles array to hold the generated bubbles
  const bubblesArray = [];

  for (let i = 0; i < numberOfBubbles; i++)
    bubblesArray.push(generateBubble());

  //append bubbles to html
  for (let i = 0; i < numberOfBubbles; i++){
    document.getElementById("bubblesArea").appendChild(bubblesArray[i]);
  }
  return bubblesArray;
}


function animate(bubblesArray){

  let timer = setInterval(function(){

    for (let i = 0; i < bubblesArray.length; i++) {
      bubblesArray[i].style.top = (parseInt(bubblesArray[i].style.top) + 10) + "px";
      if (parseInt(bubblesArray[i].style.top) > 400) {
        clearInterval(timer);
      }

    }

  },16);

  // for (let i = 0; i < bubblesArray.length; i++){
  //
  //   bubblesArray[i].style.top  = (parseInt(bubblesArray[i].style.top) + 10) + "px";
  //
  //   console.log(bubblesArray[i]);
  // }
  //
  // //console.log(bubblesArray);
  // setTimeout(animate(bubblesArray), 10);

}


let bubblesArray = generateBubbles();

animate(bubblesArray);

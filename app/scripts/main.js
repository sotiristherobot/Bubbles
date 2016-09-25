
//event listener for when bubble is clicked
function bubbleClicked(){
  console.log("I'm clicked!");
  $(this).addClass('animated bounceOutLeft');

}

//generates a single bubble
function generateBubble(){
  const bubble = document.createElement("div");
  bubble.className += "bubble";

  //get width of screen
  let screenWidth = document.getElementById("bubblesAreaWrapper").offsetWidth;

  //generate a random number between 0 and bubblesAreaWrapper width
  let randomWidth = Math.floor(Math.random() * ((screenWidth - 25) - 25 ) + 25);
  bubble.style.left = randomWidth + "px";

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

//animate bubbles
function animate(bubblesArray){






}

let bubblesArray = generateBubbles();
animate(bubblesArray);

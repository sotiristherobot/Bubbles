//generate and return an array of bubbles
function generateBubbles(){
  //generate a random number for bubbles
  const numberOfBubbles = Math.floor((Math.random() * 10) + 1);

  //bubbles array to hold the generated bubbles
  const bubblesArray = [];

  for (let i = 0; i < numberOfBubbles; i++)
    bubblesArray.push(createBubble());

  return bubblesArray;
}

generateBubbles();

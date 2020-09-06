const images = [
    {
      image_name: "bananas.jpg",
      number_of_items: 6,
    },
    {
      image_name: "birthday candles.jpg",
      number_of_items: 7,
    },
    {
      image_name: "blocks.jpg",
      number_of_items: 6,
    },
    {
      image_name: "brushes.jpg",
      number_of_items: 7,
    },
    {
      image_name: "cakes.jpg",
      number_of_items: 7,
    },
    {
      image_name: "cars.jpg",
      number_of_items: 2,
    },
    {
      image_name: "crayons.jpg",
      number_of_items: 8,
    },
    {
      image_name: "cupcakes.jpg",
      number_of_items: 7,
    },
    {
      image_name: "deer.jpg",
      number_of_items: 3,
    },
    {
      image_name: "donuts.jpg",
      number_of_items: 6,
    },
    {
      image_name: "ducks.jpg",
      number_of_items: 6,
    },
    {
      image_name: "eggs.jpg",
      number_of_items: 8,
    },
    {
      image_name: "elephants.jpg",
      number_of_items: 7,
    },
    {
      image_name: "hot air balloons.jpg",
      number_of_items: 5,
    },
    {
      image_name: "jelly beans.jpg",
      number_of_items: 9,
    },
    {
      image_name: "macaroons.jpg",
      number_of_items: 7,
    },
    {
      image_name: "pencils.jpg",
      number_of_items: 12,
    },
    {
      image_name: "people.jpg",
      number_of_items: 6,
    },
    {
      image_name: "peppers.jpg",
      number_of_items: 2,
    },
    {
      image_name: "pizza slices.jpg",
      number_of_items: 8,
    },
  ];
  
  let currentImageValue = 0, 
  displayNumber = 0, // don't need to use let keyword in this occurence because we have seperated the variables by a comma
  score = 0 // set current score
  
  const setImageSrc = (randomImageName) => {
    const imageContainer = document.getElementById("imageContainer");
    if (imageContainer.hasChildNodes()) {
      imageContainer.removeChild(imageContainer.firstElementChild);
    }
    const image = document.createElement("img");
    image.src = `images/${randomImageName}`;
    imageContainer.appendChild(image);
  };


  generateDisplayNumber = (numberOfItems, plusOrMinus) => {
    const split = Math.floor(Math.random() * 2)
    if(split === 0) {
        // display real number
        document.getElementById("number").innerHTML = numberOfItems;
        displayNumber = numberOfItems;
    } else {
        //or display a false number that is one higher or one lower
        document.getElementById("number").innerHTML = `${
            numberOfItems + plusOrMinus
        }`; 
        displayNumber = numberOfItems + plusOrMinus;
    }
    currentImageValue = numberOfItems;
  };

  const generatePlusOrMinus = () => {
    const number0to1 = Math.floor(Math.random() * 2);
    return number0to1 === 0 ? -1 : +1;
  };

  const setImageName = (randomImageName) => {
    // captue only the image name by using slice. start at beginning of name "0" then take length of image name which would stop at letter g from .jpeg, then go back 4 spaces "-4" so you're removing the .jpeg
    const imageName = randomImageName.slice(0, randomImageName.length - 4);
    document.getElementById("item-name").innerHTML = imageName + "?";
  }

  const generate = () => {
    if (images.length === 0) {
      stopTimer();
      return;
    }
    const randomNumber = Math.floor(Math.random() * images.length);
    const randomImageName = images[randomNumber].image_name;
    setImageSrc(randomImageName);
    setImageName(randomImageName);
    const plusOrMinus = generatePlusOrMinus();
    const numberOfItems = images[randomNumber].number_of_items;
    generateDisplayNumber(numberOfItems, plusOrMinus);
    images.splice(randomNumber, 1);
  };
  
  let timerRef;

  const match = () => {
      currentImageValue === displayNumber ? score++ : score-- // if user got it correct, the score will increase, if not the score will decrease by 1
      document.getElementById("currentScore").innerHTML = score;
  }

  const noMatch = () => {
    currentImageValue !== displayNumber ? score++ : score-- 
    document.getElementById("currentScore").innerHTML = score;
}

  const timer = () => {
    timerRef = setInterval(generate, 5000);
  };
  
  const play = () => {
    generate();
    timer();
  };
  
  const stopTimer = () => {
    clearInterval(timerRef);
  };
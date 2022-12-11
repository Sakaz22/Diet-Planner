let carbohydrates = []
let protein = []
let vegetables = []
let sugcarbs = []
let sugprotein = []
let sugveges = []

function preloadImage(img) {
  const src = img.getAttribute("data-src");
  if(!src){
    return;
  }

  img.src = src;
}

const imgOptions = {};
const imgObserver = new IntersectionObserver((entries, imgObserver) => {
entries.forEach(entry => {
  if (!entry.isIntersection){
    return;
  } else {
    preloadImage(entry.target);
    imgObserver.unobserve(entry.target)
  }
})
}, imgOptions);
images.forEach(image => {
  imgObserver.observe(image)
})

//carbs
function item1 (){
  let carbsBtn = document.getElementById("itemOne"); 
  sugcarbs = carbohydrates
  sugcarbs.push(carbsBtn.textContent)
  document.getElementById("carbs").innerText = carbsBtn.textContent;
  if(carbsBtn.onclick){
    carbsBtn.disabled = true;
  }
}
function item2 (){
  let carbsBtn = document.getElementById("itemTwo");
  sugcarbs = carbohydrates
  sugcarbs.push(carbsBtn.textContent)
  document.getElementById("carbs").innerText = carbsBtn.textContent;
  if(carbsBtn.onclick){
    carbsBtn.disabled = true;
  }
}
function item3 (){
  let carbsBtn = document.getElementById("itemThree");
  sugcarbs = carbohydrates
  sugcarbs.push(carbsBtn.textContent)
  document.getElementById("carbs").innerText = carbsBtn.textContent;
  if(carbsBtn.onclick){
    carbsBtn.disabled = true;
  }
}

//protein
function item1P (){
  let proteinBtn = document.getElementById("itemOneP");
  sugprotein = protein
  sugprotein.push(proteinBtn.textContent)
  document.getElementById("protein").innerText = proteinBtn.textContent;
  if(proteinBtn.onclick){
    proteinBtn.disabled = true;
  }
}
function item2P (){
  let proteinBtn = document.getElementById("itemTwoP");
  sugprotein = protein
  sugprotein.push(proteinBtn.textContent)
  document.getElementById("protein").innerText = proteinBtn.textContent;
  if(proteinBtn.onclick){
    proteinBtn.disabled = true;
  }
}
function item3P (){
  let proteinBtn = document.getElementById("itemThreeP");
  sugprotein = protein
  sugprotein.push(proteinBtn.textContent)
  document.getElementById("protein").innerText = proteinBtn.textContent;
  if(proteinBtn.onclick){
    proteinBtn.disabled = true;
  }
}

//veges
function item1V (){
  let vegesBtn = document.getElementById("itemOneV");
  sugveges = vegetables
  sugveges.push(vegesBtn.textContent)
  document.getElementById("veges").innerText = vegesBtn.textContent;
  if(vegesBtn.onclick){
    vegesBtn.disabled = true;
  }
  
}
function item2V (){
  let vegesBtn = document.getElementById("itemTwoV");
  sugveges = vegetables
  sugveges.push(vegesBtn.textContent)
  document.getElementById("veges").innerText = vegesBtn.textContent;
  if(vegesBtn.onclick){
    vegesBtn.disabled = true;
  }
}
function item3V (){
  let vegesBtn = document.getElementById("itemThreeV");
  sugveges = vegetables
  sugveges.push(vegesBtn.textContent)
  document.getElementById("veges").innerText = vegesBtn.textContent;
  if(vegesBtn.onclick){
    vegesBtn.disabled = true;
  }
}

  function addcarbs () {
    // create a new div element
    const create = document.createElement("li");
  
    // and give it some content
    create.innerHTML = prompt();
    
    // add the text node to the newly created div
    if(create.textContent){
      carbohydrates.push(create.textContent)
    } else{
      
    }
    document.getElementById("carbs").innerText = carbohydrates
    // add the newly created element and its content into the DOM
  }


  function addprotein () {
    // create a new div element
    const create = document.createElement("li");
  
    // and give it some content
    create.innerHTML = prompt();
    
    // add the text node to the newly created div
    if(create.textContent){
      protein.push(create.textContent)
    } else{
      
    }
    document.getElementById("protein").innerText = protein
    // add the newly created element and its content into the DOM
  }

  function addvegetables () {
    // create a new div element
    const create = document.createElement("li");
  
    // and give it some content
    create.innerHTML = prompt();
    
    // add the text node to the newly created div
    if(create.textContent){
      vegetables.push(create.textContent)
    } else{
      
    }
    document.getElementById("veges").innerText = vegetables
    // add the newly created element and its content into the DOM
    
  }

 function display(array) {
    //var Today = carbohydrates[0] + " " + protein[0] + " " + vegetables[0];

    for (let c = 0; c <carbohydrates.length;c++){
      var j = Math.floor(Math.random() * (c + 1));
      var s = c * j;
      if (carbohydrates[s]){
        document.getElementById("randpresultcarbs").innerText = "Your carbohydrate for the day is: " + carbohydrates[s];
      } else {
        
      }
    }
    for (let p = 0; p <protein.length;p++){
      var j = Math.floor(Math.random() * (p + 1));
      var s = p * j;
      if (protein[s]){
        document.getElementById("randpresultprotein").innerText = "Your protein for the day is: " + protein[s];
      } else {
        
      }
    }
    for (let v = 0; v <vegetables.length;v++){
      var j = Math.floor(Math.random() * (v + 1));
      var s = v * j;
      if (vegetables[s]){
        document.getElementById("randpresultveges").innerText = "Your vegetable for the day is: " + vegetables[s];
      } else {
        
      }
    }


}



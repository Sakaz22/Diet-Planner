let carbohydrates = []
let meat = []
let protein = []
let vegetables = []

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



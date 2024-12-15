numOfItems = 60;

for(i=0;i<numOfItems;i++){
  arrObjects[i].price = parseInt(arrObjects[i].price.replace(' ', ''));
  arrObjects[i].inch = arrObjects[i].inch.replace(' ″', '');
}

arr2 = [];
arrId = [];
arrAllBrands = ["Iphone", "Samsung", "Xiaomi"];
arrBrands = [];
arrPrices = [];

for (i = 0; i < numOfItems; i++) {
  arrId[i] = `id${i}`;
  arrPrices[i] = arrObjects[i].price;
  createItem(i);
}

function createItem(i) {
  
  // Main div
  phoneDiv = document.createElement('div');
  itemsDiv.appendChild(phoneDiv);
  //phoneDiv.style.float = 'left';
  phoneDiv.id = "phoneDiv";
  phoneDiv.className = "divs";
  
  // Div with image
  imgDiv = document.createElement("div");
  phoneDiv.appendChild(imgDiv);
  imgDiv.id = "imgDiv";
  imgDiv.style.marginLeft = '10px';
  imgDiv.style.marginTop = '10px';
  img = document.createElement("img");
  img.src = arrObjects[i].imgLink;
  img.style.float = 'left';
  imgDiv.appendChild(img);
  
  // Div with parameters
  infoDiv = document.createElement("div");
  phoneDiv.appendChild(infoDiv);
  infoDiv.id = "infoDiv";
  infoDiv.style.float = 'left';
  
  // Name
  nameDiv = document.createElement("div");
  infoDiv.appendChild(nameDiv);
  pName = document.createElement('p');
  nameDiv.appendChild(pName);
  pName.style.float = 'left';
  pName.innerText = arrObjects[i].name;
  pName.style.marginLeft = '10px';

  function createParameter(name, value, styleO){
    descriptionDiv = document.createElement("div");
    infoDiv.appendChild(descriptionDiv);
    descriptionDiv.id = "descriptionDiv";
    descriptionDiv.style.width = "200px"
    descriptionDiv.style.height = "20px"
    
    pNameOfParameter = document.createElement('p');
    descriptionDiv.appendChild(pNameOfParameter);
    pNameOfParameter.innerText = name;
    pNameOfParameter.style.marginLeft = '10px';
    pNameOfParameter.style.float = "left";
  
    pParameter = document.createElement('p');
    descriptionDiv.appendChild(pParameter);
    pParameter.innerHTML = value;
    pParameter.style.marginLeft = '10px';
    pParameter.style.float = "left";
  }
  
  createParameter("Screen size:", arrObjects[i].inch);
  createParameter("RAM:", arrObjects[i].ram);
  createParameter("Storage:", arrObjects[i].rom);
  createParameter("Price:", arrObjects[i].price);

  buttonBag = document.createElement("button");
  buttonBag.id = `${"buttonBag"+(i+1)}`;
  buttonBag.style.float = "right";
  phoneDiv.appendChild(buttonBag);
  buttonBag.appendChild(document.createTextNode("Add to cart"));
  buttonBag.setAttribute("onclick", `${"addToCart"+"("+(i)+")"}`);
  
  phoneDiv.id = arrId[i];
  
}


newItems = [];
//newItems = arrObjects;

function sortPrice() {
  inputNumFrom = document.getElementById("inpPriceFrom");
  inputNumTo = document.getElementById("inpPriceTo");
  
  newItems.length = 0;
  
  priceFrom = inputNumFrom.value;
  if (priceFrom == '') priceFrom = 0;
  priceTo = inputNumTo.value;
  if (priceTo == '') priceTo = Math.max(...arrPrices);
  //console.log(priceTo);
  itemsDiv.innerHTML = '';

  for (i = 0; i < numOfItems; i++) {
    if (arrObjects[i].price <= priceTo && arrObjects[i].price >= priceFrom) {
      //console.log(arrObjects[i])
      newItems.push(arrObjects[i]);
      //createItem(i);
    } else newItems.push('');
    //console.log(newItems[i] + i);
  }
  sortBrand(newItems);
  
  for(i=0;i<newItems.length;i++){
    console.log(newItems[i]+i);
  }
}



function sortBrand(arr) {
  
  if(arr.length == 0) arr = arrObjects;
    
  itemsDiv.innerHTML = '';

  const chBoxApple = document.getElementById('Apple');
  const chBoxSamsung = document.getElementById('Samsung');
  const chBoxXiaomi = document.getElementById('Xiaomi');
  const chBoxVivo = document.getElementById('Vivo');
  const chBoxUlefone = document.getElementById('Ulefone');
  const chBoxRealme = document.getElementById('Realme');

  if (chBoxApple.checked) {
    for (i = 0; i < numOfItems; i++) {
      if (arr[i] !== '' && arr[i].brand == chBoxApple.id){
        //newItems.push(arrObjects[i]);
        createItem(i);
      //}else newItems.push('');
      }
    }
  }

  if (chBoxSamsung.checked) {
    for (i = 0; i < numOfItems; i++) {
      if (arr[i] !== '' && arr[i].brand == chBoxSamsung.id) createItem(i);
    }
  }

  if (chBoxXiaomi.checked) {
    for (i = 0; i < numOfItems; i++) {
      if (arr[i] !== '' && arr[i].brand == chBoxXiaomi.id) createItem(i);
    }
  }

  if (chBoxVivo.checked) {
    for (i = 0; i < numOfItems; i++) {
      if (arr[i] !== '' && arr[i].brand == chBoxVivo.id) createItem(i);
    }
  }

  if (chBoxRealme.checked) {
    for (i = 0; i < numOfItems; i++) {
      if (arr[i] !== '' && arr[i].brand == chBoxRealme.id) createItem(i);
    }
  }

  if (chBoxUlefone.checked) {
    for (i = 0; i < numOfItems; i++) {
      if (arr[i] !== '' && arr[i].brand == chBoxUlefone.id) createItem(i);
    }
  }

  if (!chBoxApple.checked && !chBoxSamsung.checked && !chBoxXiaomi.checked && !chBoxVivo.checked && !chBoxRealme.checked && !chBoxUlefone.checked) {
    for (i = 0; i < numOfItems; i++) {
      if (arr[i] !== '') createItem(i);
    }
  }
  
}

function sortElements(){
  selection = document.getElementById("sortTypes").selectedIndex;
  options = document.getElementById("sortTypes").options;
  sortItems = [];
  for (i = 0; i < numOfItems; i++) {
    if(newItems.length == 0){
      sortItems.push({
      price: arrObjects[i].price,
      itemPos: i,
    });
    }else if(newItems[i] == ''){
      sortItems.push({itemPos:i});
    }else if(newItems[i] != ''){
      sortItems.push({
      price: newItems[i].price,
      itemPos: i,
    });
    }
    console.log(sortItems[i]);
  }
  
  if (options[selection].value == "none"){
    itemsDiv.innerHTML = '';
    for (i = 0; i < numOfItems; i++) {
      createItem(i);
    }
  }
  
  if (options[selection].value == "decrease"){
    itemsDiv.innerHTML = '';
    for (i = 0; i < sortItems.length; i++) {
      for (j = 0; j < sortItems.length - 1; j++) {
        if (sortItems[j].price < sortItems[j + 1].price) {
          change = sortItems[j].price;
          sortItems[j].price = sortItems[j + 1].price;
          sortItems[j + 1].price = change;

          changePos = sortItems[j].itemPos;
          sortItems[j].itemPos = sortItems[j + 1].itemPos;
          sortItems[j + 1].itemPos = changePos;
        }
      }
    }
    for (i = 0; i < sortItems.length; i++) {
      createItem(sortItems[i].itemPos);
    }
  }

  if (options[selection].value == "increase"){
    itemsDiv.innerHTML = '';
    for (i = 0; i < sortItems.length; i++) {
      for (j = 0; j < sortItems.length - 1; j++) {
        if (sortItems[j].price > sortItems[j + 1].price) {
          change = sortItems[j].price;
          sortItems[j].price = sortItems[j + 1].price;
          sortItems[j + 1].price = change;

          changePos = sortItems[j].itemPos;
          sortItems[j].itemPos = sortItems[j + 1].itemPos;
          sortItems[j + 1].itemPos = changePos;
        }
      }
    }
    for (i = 0; i < sortItems.length; i++) {
      createItem(sortItems[i].itemPos);
    }
  }
  
}

function addToCart(i){
  localStorage.setItem(i, arrObjects[i].name);
  test = localStorage.getItem(i);
  bagDiv.innerHTML += localStorage.getItem(i)+"<br>";
}

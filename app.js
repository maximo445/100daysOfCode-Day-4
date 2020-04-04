  //Adding people constants
  const addPassengerInput = document.querySelector('.addPassengerInput');
  const addPassengerButton = document.querySelector('.addPassengerButton');
  const addList = document.querySelector('.atCourtList');
  const addBackButton = document.querySelector('.addBackButton');
  const historyList = document.querySelector('.historyList');
  const content = document.querySelector('.content');
  const deleteButton = document.querySelector('.deleteButton');

  content.addEventListener('mouseover', (event) => {
    if (event.target.tagName === 'BUTTON') {
      event.target.style.color = 'purple';
      event.target.style.border = '3px solid grey';
    }
  });

  content.addEventListener('mouseout', (event) => {
    if (event.target.tagName === 'BUTTON') {
      event.target.style.color = 'white';
      event.target.style.border = 'none';
    }
  });

  //Revoming people constants
  const removeButton = document.querySelector('.removeButton');

  //Adding people to list component
  let addLiElement;

  addPassengerButton.addEventListener('click', () => {

    addLiElement = document.createElement('li');
    addLiElement.className = "atCourtPeople";

    if (addPassengerInput.value === "") {
      addPassengerInput.value = "Unknown";
    }
    addLiElement.innerHTML = addPassengerInput.value + "   " + '<input  class="removeCheckBoxes" type="checkbox" name="" value="">';

    addList.appendChild(addLiElement);
    addPassengerInput.value = "";

 });

  //Removing people from list component
  let removeCheckBoxes;
  let atCourtPeople;

  let itemToHistory;

  removeButton.addEventListener('click', () => {
    removeCheckBoxes = document.querySelectorAll('.removeCheckBoxes');
    atCourtPeople = document.querySelectorAll('.atCourtPeople');

    for (let i = 0; i < atCourtPeople.length; i++) {
      if(removeCheckBoxes[i].checked === true){
        itemToHistory = document.createElement('li');
        itemToHistory.className = "atHistoryPeople";
        itemToHistory.innerHTML = atCourtPeople[i].textContent + "   " + '<input  class="historyCheckBoxes" type="checkbox" name="" value="">';
        historyList.appendChild(itemToHistory);

        atCourtPeople[i].parentNode.removeChild(atCourtPeople[i]);
        removeCheckBoxes[i].remove;
      }
    }
  });



  //Adding back passengers to court list
  let historyCheckBoxes;
  let atHistoryPeople;

  addBackButton.addEventListener('click', () => {
    historyCheckBoxes = document.querySelectorAll('.historyCheckBoxes');
    atHistoryPeople = document.querySelectorAll('.atHistoryPeople');

    for (let i = 0; i < atHistoryPeople.length; i++) {
      if(historyCheckBoxes[i].checked === true){

        addLiElement = document.createElement('li');
        addLiElement.className = "atCourtPeople";
        addLiElement.innerHTML = atHistoryPeople[i].textContent + '<input  class="removeCheckBoxes" type="checkbox" name="" value="">';

        addList.appendChild(addLiElement);

        atHistoryPeople[i].parentNode.removeChild(atHistoryPeople[i]);
        historyCheckBoxes[i].remove;
      }

    }
  });

  deleteButton.addEventListener('click', () => {
    historyCheckBoxes = document.querySelectorAll('.historyCheckBoxes');
    atHistoryPeople = document.querySelectorAll('.atHistoryPeople');

    for (let i = 0; i < atHistoryPeople.length; i++) {
      if(historyCheckBoxes[i].checked === true){
        atHistoryPeople[i].parentNode.removeChild(atHistoryPeople[i]);
        historyCheckBoxes[i].remove;
      }
    }
  });

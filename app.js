  //Adding people constants
  const addPassengerInput = document.querySelector('.addPassengerInput');
  const addPassengerButton = document.querySelector('.addPassengerButton');
  const addList = document.querySelector('.atCourtList');
  const addBackButton = document.querySelector('.addBackButton');
  const historyList = document.querySelector('.historyList');
  const content = document.querySelector('.content');
  const deleteButton = document.querySelector('.deleteButton');
  const notification = document.querySelector('.notification');
  const removeButton = document.querySelector('.removeButton');

  let removeCheckBoxes;
  let atCourtPeople;
  let itemToHistory;
  let historyCheckBoxes;
  let atHistoryPeople;


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

  content.addEventListener('click', (event) => {
    if (event.target.className == 'addPassengerButton') {

      let addLiElement = document.createElement('li');
      addLiElement.className = "atCourtPeople";

      let addInputElement = document.createElement('input')
      addInputElement.className = "removeCheckBoxes";
      addInputElement.type = "checkbox";

      if (addPassengerInput.value === "") {
        addPassengerInput.value = "Unknown";
      }

      addLiElement.textContent = addPassengerInput.value
      addLiElement.appendChild(addInputElement);

      addList.appendChild(addLiElement);
      addPassengerInput.value = "";
    }

    if (event.target.className == 'removeButton') {
      loop('.atCourtPeople', '.removeCheckBoxes', 'removeButton')
    }

    if (event.target.className == 'addBackButton') {
      loop('.atHistoryPeople','.historyCheckBoxes','addBackButton');
    }

    if (event.target.className == 'deleteButton') {
      loop('.atHistoryPeople', '.historyCheckBoxes', 'deleteButton');
    }
  });

  function loop (peopleClass, checkboxesClass, myEvent) {
    let people = document.querySelectorAll(peopleClass);
    let checkboxes = document.querySelectorAll(checkboxesClass);

    let person = [];

    if (myEvent == 'removeButton') {
      for (let i = 0; i < people.length; i++) {
        if(checkboxes[i].checked === true){
          let itemToHistory = document.createElement('li');
          itemToHistory.className = "atHistoryPeople";
          itemToHistory.innerHTML = people[i].textContent + "   " + '<input  class="historyCheckBoxes" type="checkbox" name="" value="">';
          historyList.appendChild(itemToHistory);

          people[i].parentNode.removeChild(people[i]);
          checkboxes[i].remove;
        }
      }
    }

    if (myEvent == 'addBackButton') {
      for (let i = 0; i < people.length; i++) {
        if(checkboxes[i].checked === true){

          let addLiElement = document.createElement('li');
          addLiElement.className = "atCourtPeople";
          addLiElement.innerHTML = people[i].textContent + '<input  class="removeCheckBoxes" type="checkbox" name="" value="">';

          addList.appendChild(addLiElement);

          people[i].parentNode.removeChild(people[i]);
          checkboxes[i].remove;
        }
      }
    }

    if (myEvent == 'deleteButton') {
      for (let i = 0; i < people.length; i++) {
        if(checkboxes[i].checked === true){
          people[i].parentNode.removeChild(people[i]);
          checkboxes[i].remove;
          person.push(i);
        }
      }
      whoGotChanged(people[person]);
      person = [];
    }
  }

  function whoGotChanged (myPerson) {
    if (myPerson.length > 1) {
      notification.textContent = myPerson.length.toString() + ' deleted';
    } else {
      notification.textContent = myPerson.textContent + ' del';
    }

    window.setTimeout((myString) => {
      notification.textContent = myString;
    }, 1000, "");

  }

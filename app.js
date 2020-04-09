  const addPassengerInput = document.querySelector('.addPassengerInput');
  const addPassengerButton = document.querySelector('.addPassengerButton');
  const addList = document.querySelector('.atCourtList');
  const historyList = document.querySelector('.historyList');
  const content = document.querySelector('.content');
  const notification = document.querySelector('.notification');
  const tripHistoryBottom = document.querySelector('.tripHistoryBottom');

  content.addEventListener('click', (event) => {
    if (event.target.className == 'addPassengerButton') {

      let addLiElement = document.createElement('li');
      addLiElement.className = "atCourtPeople";

      let addInputElement = document.createElement('button')
      addInputElement.className = "removeButton";
      addInputElement.textContent = "Remove";

      if (addPassengerInput.value === "") {
        addPassengerInput.value = "Unknown";
      }

      addLiElement.textContent = addPassengerInput.value;
      addLiElement.appendChild(addInputElement);

      addList.appendChild(addLiElement);
      addPassengerInput.value = "";
    }

    if (event.target.className == 'tripHistoryHeading') {
      if (tripHistoryBottom.style.display == 'none') {
        tripHistoryBottom.style.display = 'block';
      } else {
        tripHistoryBottom.style.display = 'none';
      }
    }

    transporter(event.target);

  });

  function transporter (myEvent) {

    if (myEvent.className == 'removeButton') {
      let li = refactorLiElement('Add Back', 'addBackButton');
      let myDeleteButton = document.createElement('button');
      myDeleteButton.textContent = 'Delete';
      myDeleteButton.className = 'deleteButton';
      li.appendChild(myDeleteButton);
      historyList.appendChild(li);
    }

    if (myEvent.className == 'addBackButton') {
      let liToCourt = refactorLiElement('Remove', 'removeButton');
      addList.appendChild(liToCourt);
    }

    if (myEvent.className == 'deleteButton') {
      let liToDelete = myEvent.parentNode;
      let parentOl = liToDelete.parentNode;

      whoGotChanged(getText(liToDelete));

      parentOl.removeChild(liToDelete);
    }
  }

  function refactorLiElement (name, myClass) {
    let myButton = event.target;

    let temporalButton = document.createElement('button');
    temporalButton.className = myClass;
    temporalButton.textContent = name;

    let myLi = myButton.parentNode;
    let myOl = myLi.parentNode;

    let temporalLi = document.createElement('li');

    // let textArray = [].reduce.call(myLi.childNodes, (a, b) => {
    //
    //   return a + (b.nodeType === 3 ? b.textContent : '');
    //
    // } ,'');
    //
    // let text = "";
    //
    // for (let i = 0; i < textArray.length; i++) {
    //   text += textArray[i];
    // }

    temporalLi.textContent = getText(myLi);

    temporalLi.appendChild(temporalButton);

    myOl.removeChild(myLi);

    return temporalLi;
  }

  function whoGotChanged (myPerson) {

    notification.style.color = 'red';
    notification.textContent = myPerson.substr(0,7);

    window.setTimeout((myString) => {
      notification.textContent = myString;
    }, 1000, "");

  }

  function getText(parent) {
    let textArray = [].reduce.call(parent.childNodes, (a, b) => {

      return a + (b.nodeType === 3 ? b.textContent : '');

    } ,'');

    let text = "";

    for (let i = 0; i < textArray.length; i++) {
      text += textArray[i];
    }

    return text;
  }

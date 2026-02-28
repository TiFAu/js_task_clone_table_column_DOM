'use strict';

const allTr = [...document.querySelectorAll('tr')];

allTr.forEach((element) => {
  const allThAndTD = [...element.children];
  const insertableElement = allThAndTD
    .find((elem) => elem.previousElementSibling === null)
    .nextElementSibling.cloneNode(true);
  const lastElement = allThAndTD.find(
    (elem) => elem.nextElementSibling === null,
  );

  lastElement.insertAdjacentElement('beforebegin', insertableElement);
});

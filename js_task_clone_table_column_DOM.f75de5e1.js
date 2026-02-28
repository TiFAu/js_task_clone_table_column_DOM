'use strict';
const allTr = [
    ...document.querySelectorAll('tr')
];
allTr.forEach((element)=>{
    const allThAndTD = [
        ...element.children
    ];
    const elementToBeInserted = allThAndTD.find((elem)=>elem.previousElementSibling === null).nextElementSibling.cloneNode(true);
    const lastElement = allThAndTD.find((elem)=>elem.nextElementSibling === null);
    lastElement.insertAdjacentElement('beforebegin', elementToBeInserted);
});

//# sourceMappingURL=js_task_clone_table_column_DOM.f75de5e1.js.map

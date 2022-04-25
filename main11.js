
'use strict'


//*How to find the element in table?***

//*The table with id="age-table".
//const table = getElementById('age-table');
//*All label elements inside that table (there should be 3 of them).
//document.querySelectorAll('#age-table label');
//*The first td in that table (with the word Age).
//table.rows[0].cells[0];
//*The form with name="search".
//const form = document.querySelector('form[name="search"]');
//*The first input in that form.
//form.querySelector('input');
//*The last input in that form.
//const inputs = form.querySelectorAll('input');
//inputs[inputs.length - 1];

//***How to ge attributes** */
// const div = document.querySelector('[data-widget-name]');
// console.log(div.getAttribute('data-widget-name'));

 //***How to clear all elements*** */

//  function clear(elem) {
//     while (elem.firstChild) {
//       elem.firstChild.remove();
//     }
//   }


//***How to make an input list***/

let ul = document.createElement('ul');
document.body.append(ul);

while (true) {
  let info = prompt('Enter your text');

  if (!info) {
    break;
  }

  let li = document.createElement('li');
  li.textContent = info;
  ul.append(li);
}
    
//****Create a Tree************** */

const data = {
    'fruints': {
      'apple': {},
       'plum': {}
    },

    'vegetables': {
        'cucumber': {},
        'tomatow': {},
        'beans': {}
    },
    'drinks': {
        'tea': {},
        'coffee': {}
    }
  };

  function createTree(container, obj) {
    container.append(createTreeDom(obj));
  }

  function createTreeDom(obj) {
    
    if (!Object.keys(obj).length) {
        return ;
    }
    const ul = document.createElement('ul');

    for (const key in obj) {
      const li = document.createElement('li');
      li.innerHTML = key;

      const childrenUl = createTreeDom(obj[key]);
      if (childrenUl) {
        li.append(childrenUl);
      }

      ul.append(li);
    }

    return ul;
  }

  const container = document.getElementById('container');
  createTree(container, data);

  //*** Create a calendar ***/

  function createCalendar(elem, year, month) {
    
    let m = month - 1; // in JS months start at '0'
    let d = new Date(year, m);

    let table = '<table><tr><th>Mon</th><th>Tue</th><th>Wen</th><th>Thur</th><th>Fry</th><th>Sat</th><th>Sun</th></tr><tr>';

    // spaces for the first row when will be the first day of the month
    // * * * * * 1 2

    for (let i = 0; i < getDay(d); i++) {
      table += '<td></td>';
    }


    while (d.getMonth() === m) {
      table += '<td>' + d.getDate() + '</td>';

      if (getDay(d) % 7 === 6) { // Sunday, the last day in the row
        table += '</tr><tr>';
      }

      d.setDate(d.getDate() + 1);
    }

    // Spases for the last days
    // 29 30 * * * * *
    if (getDay(d) !== 0) {
      for (let i = getDay(d); i < 7; i++) {
        table += '<td></td>';
        
      }
      
    }

    table += '</tr></table>';

    elem.innerHTML = table;
  }

  function getDay(date) { 
    let day = date.getDay();
    if (day === 0) {
        day = 7; // to make Sunday tha last day of calendar
    }
    return day - 1;
  }



  createCalendar(calendar, 2022, 4);

// //*** Clock update with setInterval */

  function update(){

    let clock = document.getElementById('clock');

    let date = new Date();
    let hours = date.getHours();
    if(hours < 10){
        hours = '0' + hours;
    }
    clock.children[0].innerHTML = hours;

    let minutes = date.getMinutes();
    if(minutes < 10){
        minutes = '0' + minutes;
    }
    clock.children[1].innerHTML = minutes;

    let seconds = date.getSeconds();
    if(seconds < 10){
        seconds = '0' + seconds;
    }
    clock.children[2].innerHTML = seconds;
}

let timerId ;

 function clockStart(){
     timerId = setInterval(update, 1000);
     update();
}

function clockStop(){
    clearInterval(timerId);

}
//*** Sort the table ***/

// let sortedRows = Array.from(table.rows)
//   .slice(1)
//   .sort((rowA, rowB) => rowA.cells[0].innerHTML > rowB.cells[0].innerHTML ? 1 : -1);

// table.tBodies[0].append(...sortedRows);



//** Function showNotification(options), which will show <div class="notification"> */

     
function showNotification(options) {
    let div = document.createElement('div');
    div.innerHTML = `"How are you  ${i}"`;
    div.setAttribute('class', 'notification');
    document.body.prepend(div);
    setTimeout(() => div.remove(), 1500);
    
    for (let [elem, value] of Object.entries(options)) {
    div.style[elem] = value;
    }
    }

  // test 
  let i = 1;
  setInterval(() => {
    showNotification({
      html: ' How are you ' + i++,
      className: "welcome"
    });
  }, 2000);
   


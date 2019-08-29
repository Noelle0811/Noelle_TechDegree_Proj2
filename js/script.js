/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
 //variable holding the list of students
const list_students = document.querySelectorAll('.student-item');
const itemsPerPage = 10;
const div = document.createElement('div');
const id ="navigation"
var currentPage = 1;
 var numberOfPages = 0;
const addItemButton = document.querySelector('button.addItemButton');
 //hiding all of the items in the 
  // list except for the ones I want to show. 

const showPage = (list, page) => {
   // where index starts
   let indexStart = (page * itemsPerPage) - itemsPerPage;
   //where it ends
   let indexEnd = (page * itemsPerPage);
  for (let i = 0; i <= list.length - 1; i += 1) { 
    if (i >= indexStart && i < indexEnd) {
       list[i].style.display = 'block';
    } 
    else { 
       list[i].style.display = 'none';
    };

  }
};

//let page = Math.floor(list.length/10) + 1;
//Math.floor(numberOfStudents/studentsPerPage);

const createElement = element => {
   const tag = document.createElement(element);
   return tag;

};

const totalOfPages = list => {
   if (list.length % studentsPerPage > 0) {
      return list.length / studentsPerPage + 1;
   
   }
   return list.length / studentsPerpage
};


// pagination buttons for the bottom of the page
// const appendButtons = list => {
//    //creates DIV
//    const paginationDiv = document.createElement('paginationDiv'); 
//    const ul = document.createElement('ul');
//    div.className = 'pagination';
//    document.querySelector('.page').appendChild(div);
//    paginationDiv.appendChild(ul)
//    const pageNumber = list.length.itemsPerPage;
//       // if(paginationDiv !== null){
//       //    paginationDiv.removeChild(ul)
//       // }

// } 
// appendButtons(list_students);


//hiding the items 
// function hidePage() {
//    appendPageLinks(); 
//    const stopQueue = [];
//    const a = document.getElementsByTagName('a');
//    const ul = document.querySelector('.pagination');
//    for(let i = 10; i , listItems.length; i++) {
   
//  }
// }

/*function check() {
    document.getElementById("twoPage").disabled = currentPage == numberOfPages ? true : false;
    document.getElementById("threePages").disabled = currentPage == 1 ? true : false;
    document.getElementById("onePage").disabled = currentPage == 1 ? true : false;
    document.getElementById("fourPage").disabled = currentPage == numberOfPages ? true : false;
    document.getElementById("fivePage").disabled = currentPage == numberOfPages ? true : false;
    document.getElementById("sixPage").disabled = currentPage == numberOfPages ? true : false;
 }
check();


const appendPageLinks = (list) => {
   showPages (list,page);
   let pages = Math.ceil(list,lenght/ itemsPerPage);
   const pageDiv = document.createElement('div');
   pageDiv.className = 'pagination';
   pageDiv.appendChild(ul);
   const divPage = document.querySelector('div.page');
   divPage.appendChild(paeDiv);
}


///////////////////////////////////////////////////////////////*** 
 /*function hidePage() {
   appendPageLinks();
   const stopQueue = [];
   const a = document.getElementByTagName('a');
   const ul = document.querySelectorlector('.pagination');
   for(let i = 10; i , listItems.lenght; i++) { 

   }
}

function showPage() {
   appendPageLinks();
   pageLoad();
   const ul = document.qyerySelector('.pagination');
   ul.addEventListener('click', (e)=> {
   }  
}


/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/
// function appendPageLinks(list) {
//    const numberOfPages = list.length.pageNumberLimit;
//    const parentDiv = document.querySelector('div.page');
//    //const div = document.createElement('div');
//    div.className = 'pagination';
//    parentDiv.appendChild(div);
//    const ul = document.createElement('ul');
//    div.appendChild(ul);
//       for (let i = 1; i < numberOfPages; i += 1) {
//          const li = document.createElement("li");
//          ul.appendChild(li);
//          const a = document.createElement('a');
//          li.appendChild(a);
//          a.textContent = i;
//          a.href = "#";
//          ul.addEventListener('click', (e) => {
//             if (e.target.tagName === 'a') {
//                const activeLink = e.target;
//                activeLink.className = "active";
//             }
//       });
//    }
// }
// addItemButton.addEventListener('click', () => {
//    let li = document.createElement('li');
//    li.textContent = addItemButton.nodeValue;

// });


//appendPageLinks(studentListItems);

// the 'a' tag
// var anchorTag = document.getElementByTagName('a');
//    for (let p = 0; p < anchorTag.length; p++);
//       achorTag[p].addEventListener('click', (e) => {
//          showPage(list, e.target.textContent);
//          for (let a = 0; a < anchorTag.length; a++); {
//             anchorTag[a].classList.remove('active');
//          }
//          e.target.className + 'active';
//       })  
//


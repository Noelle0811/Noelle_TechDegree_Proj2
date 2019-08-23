/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing



 //variable holding the list of students
const list_students = document.querySelectorAll('.student-item');
const itemsPerPage = 10;
const div = document.createElement('div');
const divId ="navigation"
var page = 2;

 /*Create the `showPage` function to hide all of the items in the 
   list except for the ten you want to show. 

   Pro Tips: 
     - Keep in mind that with a list of 54 students, the last page 
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when 
       you initially define the function, and it acts as a variable 
       or a placeholder to represent the actual function `argument` 
       that will be passed into the parens later when you call or 
       "invoke" the function 
*/
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


function showPages(id) {

}
var totalNumberOfPages = 6;
for( i = 1; i <= totalNumberOfPages; i++)
 {
 if(document.getElementById('page'=i))
   document.getElementById('page'+i).style.display ='none';
 }
 if(document.getElementById('page'+id))
   document.getElementById('page'=id).style.display='block';



// pagination buttons for the bottom of the page
const appendButtons = list => {
   //creates DIV
   const paginationDiv = document.createElement('paginationDiv'); 
   const ul = document.createElement('ul');
   div.className = 'pagination';
   document.querySelector('.page').appendChild(div);
   paginationDiv.appendChild(ul)
   const pageNumber = list.length.itemsPerPage;
      // if(paginationDiv !== null){
      //    paginationDiv.removeChild(ul)
      // }

}
appendButtons(list_students);



}
//hiding the items 
function hidePage() {
   appendPageLinks(); 
   const stopQueue = [];
   const a = document.getElementsByTagName('a');
   const ul = document.querySelector('.pagination');
   for(let i = 10; i , listItems.length; i++) {
   
 }
}
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
function appendPageLinks(list) {
   const numberOfPages = list.length.pageNumberLimit;
   const parentDiv = document.querySelector('div.page');
   //const div = document.createElement('div');
   div.className = 'pagination';
   parentDiv.appendChild(div);
   const ul = document.createElement('ul');
   div.appendChild(ul);
      for (let i = 1; i < numberOfPages; i += 1) {
         const li = document.createElement("li");
         ul.appendChild(li);
         const a = document.createElement('a');
         li.appendChild(a);
         a.textContent = i;
         a.href = "#";
         ul.addEventListener('click', (e) => {
            if (e.target.tagName === 'a') {
               const activeLink = e.target;
               activeLink.className = "active";
            }
      });
   }
}

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
  




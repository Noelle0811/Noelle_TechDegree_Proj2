/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/*** 
   Add your global variables that store the DOM elements you will 
   need to reference and/or manipulate. 
   
   But be mindful of which variables should be global and which 
   should be locally scoped to one of the two main functions you're 
   going to create. A good general rule of thumb is if the variable 
   will only be used inside of a function, then it can be locally 
   scoped to that function.
***/
const studentList = document.querySelectorAll('.student-item');
const itemsPerPage = 10;



/*** 
   Create the `showPage` function to hide all of the items in the 
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
***/

function showPage(list, page) {
   //created a range of users
   let startIndex = (page * itemsPerPage) - itemsPerPage
   let endIndex = (page * itemsPerPage);
   console.log(startIndex, endIndex);
   //displays users that fall within range
   for (let i = 0; i <= list.length - 1; i += 1) { 
      if (i >= startIndex && i < endIndex) {
         list[i].style.display = 'block'; //displays
      }
      else { 
         list[i].style.display = 'none'; //hides
      };
  
    }
  };

console.log(showPage(studentList,1));


/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/

const appendPageLinks = (list) => {// add "list" parameter
var pageDiv = document.querySelector('.page'); //get parent
const buttonDiv = document.createElement('div'); // create the child
buttonDiv.className = 'pagination';
pageDiv.appendChild(buttonDiv);// append the child
var ul = document.createElement('ul');
buttonDiv.appendChild(ul);

const numberOfPages = Math.ceil(list.length / itemsPerPage);

 // loop pagination links
 for (let i = 1; i <= numberOfPages; i++) {
   const li = document.createElement('li');
   const a = document.createElement('a');
   a.href = '#';
   a.className = i === 1 ? 'active' : '';
   a.textContent = i;
   li.appendChild(a);
   ul.appendChild(li);
}

// pagination click
ul.addEventListener('click', (e) => {
   // Remove the active links
   for (let i = 0; i < numberOfPages; i++) {
       ul.children[i].firstElementChild.className = '';
   }
   if (e.target.tagName === 'a') {
       const page = e.target.textContent;
       // active link click
       e.target.className = 'active';

       showPage(studentList, page);
       showPage(list, page);
   }
});
};




//to load page
showPage(studentList, 1);
appendPageLinks(studentList);

var buttonLinks = document.querySelector('a');
var a = document.querySelector('a');

a.innerHTML= buttonLinks;
   a.addEventListener('click', (e) => {
      if(e.target.tagName === 'a'){
         a.children[0].children[0].classList.remove('active');
        for(let i=1; i<=numOfPage; i++){
           if(e.target.innerHTML.includes(i)){
               showPage(studentList, i);
           }
         }
      }
   })


//the page and name change when you click on the page buttons
// ul.addEventListener('click', (e) => {
//     showPage(list, event.target.textContent);
//     removeClass();
//       });
  


//appendPageLinks();


// for (let i = 1; i < numberOfPages; i += 1) {
//       const li = document.createElement("li");
//       ul.appendChild(li);
//       const a = document.createElement('a');
//       li.appendChild(a);
//       a.textContent = i;
//       a.href = "#";
//       ul.addEventListener('click'), (e) => {
//       if (e.target.tagName === ('a')) {
//       const activeLink = e.target;
//       activeLink.className = "active";
//       }
//    }
// }
// }


// Remember to delete the comments that came with this file, and replace them with your own code comments.
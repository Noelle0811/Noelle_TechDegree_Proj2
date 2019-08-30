/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing

const studentList = document.querySelectorAll('.student-item');
const itemsPerPage = 10;


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
   if (e.target.tagName === 'A') {
       const page = e.target.textContent;
       // active link click
       e.target.className = 'active';
       //calling everything to the page
       showPage(studentList, page);
       showPage(list, page);
   }
});
};

//to load page
showPage(studentList, 1);
appendPageLinks(studentList);


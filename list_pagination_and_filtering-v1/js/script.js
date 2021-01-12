/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/*** 
 global variables  
***/
const pageListItems = 10;
const pageDiv = document.querySelector('.page');
const pageHeader =document.querySelector('.page-header');
const listItems = document.querySelectorAll('li');
const paginationDiv = document.createElement('div');
paginationDiv.className = 'pagination';
pageDiv.appendChild(paginationDiv);


/*** 
   show page function  ensure that each page has 10 students details at a time
   listitem is the no of items that will be looped through.

***/
function showPage(index, listItem){
   const startIndex = (index * pageListItems) - pageListItems;
   const lastIndex = index * pageListItems;
   
   for(let i= 0; i < listItem.length; i++){
      if(i >= startIndex && i < lastIndex){
         listItem[i].style.display = 'block';
      } else {
         listItem[i].style.display = 'none';
      }
   }

}




/*** 
 * append pagelinks function - for adding links and number index to a page
 * step 1: get the number of pages
 * step2: create a list element that contain all the lins and page numbers
 * step 3: add the numbers of pages to the link created for page navigation
 * step 4: add a click event listener 
***/

function appendPageLinks(listItem){
   const pages = Math.ceil(listItem.length / pageListItems);
   const ul = document.createElement('ul');
   paginationDiv.appendChild(ul);

   for(let i= 1; i<=pages; i++){
      const li = document.createElement('li');
      const pagelink = document.createElement('a');

      ul.appendChild(li);
      li.appendChild(pagelink);

      pagelink.href = '#';
      pagelink.textContent = i;

      if(pagelink.textContent == 1){
         pagelink.className = 'active';
      }

      pagelink.addEventListener('click', (e) =>{
         showPage(i,listItem);
         document.querySelector('.active').classList.remove('active');
         const clickPageLink = e.target;
         clickPageLink.classList.add('active');

      })
   }

}
// EXCEEDS EXPECTATION
/**
 * filterStudent function matches the input field value with that of the student's names
 *  get the value of the input field and the list of all students
 *  Comparing the list of students and the value of the
   input field all in lowercase then transverse to the parentNode to get all the details
   of the student and adding them to the empty array if they match. If they don't match,
   the error message the no pagination should show.
 * If there is data in the array, it should show the details,
   paginated the page(s), make the first page active, no error
   message should be seen, no style to the pagination.
 * 
 * ** */
// filtered students functions

const removeData = document.createElement('div');
paginationDiv.appendChild(removeData);

function filterStudent(inputV) {
   const searchContent = inputV.value;
   const studentList = document.getElementsByTagName('h3');
   const dataMatched = [];
   paginationDiv.innerHTML = '';
   
   listItems.forEach(listItem => {
      listItem.style.display = 'none';
   });

   for(let j = 0; j < studentList.length; j++){
      if(studentList[j].textContent.toLowerCase().includes(searchContent.toLowerCase())){
         const studentDetails = studentList[j].parentNode.parentNode;
         dataMatched.push(studentDetails)
      } else{
         removeData.innerHTML = `<p> no student found in your search criteria </p>`
         paginationDiv.style.display  = 'none';

      }
   }
   
   if (dataMatched.length > 0){
      showPage(1,dataMatched);
      appendPageLinks(dataMatched);
      document.querySelector('a').className = 'active';
      paginationDiv.style.display = '';
      removeData.innerHTML = '';
   }
}

// search student function
/***
in the search function , search box is created , input field and buttons are addded to the search box
a click event listener added to the button 
also input event listener added to the input  


***/
function searchStudent() {
   const searchDiv = document.createElement('div');
   searchDiv.className = 'student-search';
   pageHeader.appendChild(searchDiv);


   const inputField = document.createElement('input');
   inputField.placeholder = 'search.....'
   searchDiv.appendChild(inputField);

   const button = document.createElement('button');
   button.textContent = 'Search';
   searchDiv.appendChild(button);

   button.addEventListener('click', () => filterStudent(inputField))
   inputField.addEventListener('input', () => filterStudent(inputField))
}



showPage(1, listItems);
appendPageLinks(listItems);
searchStudent();


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
const listItems = document.querySelector('li');
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
 * step 4: add a click event lsitener 
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
      pagelink.textContent = 1;

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



showPage(1, listItems);
appendPageLinks(listItems);


// Remember to delete the comments that came with this file, and replace them with your own code comments.
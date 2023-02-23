let menu = document.querySelector("#menu");

let sidebar = document.querySelector(".sidebar-filter");
let close = document.querySelector("#close-btn");




var checkboxes = document.querySelectorAll(".checkbox");


let filtersSection = document.querySelector(".filters-section");

var listArray = [];

// span
var filterList = document.querySelector(".filter-list");

var len = listArray.length;


// for(var checkbox of checkboxes){

//   checkbox.addEventListener("click", function(){

//     let text = `<span class="filter-list"><i class="bi bi-x" id="cross-icon"></i></span>`;

//         if(this.checked === true){
//           listArray.push(this.value);



//         }

//         else{
//              listArray = listArray.filter(e => e != this.value);

//             }




//     })

// }


for (var checkbox of checkboxes) {
  checkbox.addEventListener("click", function () {
    if (this.checked == true) {

      addElement(this, this.value);
      
    }
    else {

      removeElement(this.value);
      // console.log("unchecked");
    }
  })
}


function addElement(current, value) {
  let filtersSection = document.querySelector(".filters-section");

  let createdTag = document.createElement('span');
  createdTag.classList.add('filter-list');
  createdTag.classList.add('ps-3');
  createdTag.classList.add('pe-1');
  createdTag.classList.add('me-2');
  createdTag.innerHTML = value;
  listArray.push(value);
  createdTag.setAttribute('id', value);
  let crossButton = document.createElement('button');
  crossButton.classList.add("filter-close-button");
  let cross = '&times;'



  crossButton.addEventListener('click', function () {
    let elementToBeRemoved = document.getElementById(value);

    console.log(elementToBeRemoved);
    console.log(current);
    elementToBeRemoved.remove();

    current.checked = false;




  })

  crossButton.innerHTML = cross;


  // let crossButton = '&times;'

  createdTag.appendChild(crossButton);
  filtersSection.appendChild(createdTag);

}

function removeElement(value) {

  let filtersSection = document.querySelector(".filters-section");

  let elementToBeRemoved = document.getElementById(value);
  filtersSection.removeChild(elementToBeRemoved);

}









// Get the elements with class="column"
var elements = document.getElementsByClassName("column1");
var cards = document.getElementsByClassName("card");



// Declare a loop variable
var i;





// function showList(e) {
//   var $gridCont = $('.grid-container');
//   e.preventDefault();
//   $gridCont.hasClass('list-view') ? $gridCont.removeClass('list-view') : $gridCont.addClass('list-view');
// }
// function gridList(e) {
//   var $gridCont = $('.grid-container')
//   e.preventDefault();
//   $gridCont.removeClass('list-view');
// }

// $(document).on('click', '.btn-grid', gridList);
// $(document).on('click', '.btn-list', showList);



// function grid() {
//   let card = document.querySelectorAll(".card");

//   let cardBody = document.querySelectorAll(".card-body");

//   let ratings = document.querySelector(".ratings");
//   let star = document.querySelector(".star");
//   let applyButton = document.querySelector(".apply-btn");

//   ratings.classList.add("justify-content-between");
//   ratings.classList.remove("ms-1");

//   star.classList.remove("ms-2");
//   applyButton.classList.remove("ms-2");
//   applyButton.classList.add("d-block");

// }





// function list() {
//   let card = document.querySelectorAll(".card");

//   let cardBody = document.querySelectorAll(".card-body");
//   let geoLocation = document.querySelector(".geo-location");
//   let favourites = document.querySelector(".favourites");

//   let ratings = document.querySelector(".ratings");
//   let star = document.querySelector(".star");
//   let applyButton = document.querySelector(".apply-btn");

//   ratings.classList.remove("justify-content-between");
//   ratings.classList.add("ms-1");

//   star.classList.add("ms-2");
//   applyButton.classList.add("ms-2");



//   //  geoLocation.style.right = "0px";
//   //  geoLocation.style.left = "17rem";
//   //  geoLocation.style.top = "10px";

//   //  favourites.style.bottom = "8rem";
//   //  favourites.style.top = "0px";
//   //  favourites.style.left = "19rem";


// }

let navbarSearchIconInSmallDevices = document.querySelector('#navbar-search-in-small-devices');
let searchInputNavbarSmall = document.querySelector('#search-input-navbar-small');



navbarSearchIconInSmallDevices.addEventListener("click", () => {

  searchInputNavbarSmall.classList.toggle('open-search');
})



$(document).ready(function () {
  $('#list').click(function (event) { event.preventDefault(); $('#products .item').addClass('list-group-item'); });
  $('#grid').click(function (event) { event.preventDefault(); $('#products .item').removeClass('list-group-item'); $('#products .item').addClass('grid-group-item'); });
});

//js for rating system

// let stars = document.querySelectorAll(".bi-star");


// for(var star of stars){
//   star.addEventListener('click', ()=>{
//     console.log(star);
//   })
// }




//post comments js goes here
/* <div class="input-group d-flex flex-column">
                            <textarea class="p-2" rows="3" cols="100" maxlength="600" placeholder="Enter your comments..."></textarea>
                            <a class="btn mt-3 post-comment" href="#">
                                Post comments
                            </a>
                        </div> */

let commentText = document.getElementsByTagName("textarea").value;

let parentCommentDiv = document.querySelector('.comment-list');
let postButton = document.querySelector('.post-comment');


let commentToBeAdded = `<div class="single-comment d-flex gap-3">
<div class="user-profile-image">
    <img src="images/Assets/volunteer1.png" alt="">
</div>
<div class="user-details">
    <p id="comment-user-name" class="mt-1">User name</p>
    <p id="comment-posted-date" class="mt-1">Date posted</p>
    <p id="comment-actual-text" class="mt-3">${commentText}</p>
</div>
</div>` 



console.log(commentText);
var text;
function getVal(event){
   text = event.target.value;

}

postButton.addEventListener('click', ()=> {
  //text : is user comment
  let parentCommentDiv = document.querySelector('.comment-list');

  let mainDiv = document.createElement('div');
  mainDiv.classList.add('single-comment');
  mainDiv.classList.add('d-flex');
  mainDiv.classList.add('gap-3');

  parentCommentDiv.appendChild(mainDiv);

  let childDiv = document.createElement('div');
  childDiv.classList.add('user-profile-image');

  let imageTag = document.createElement('img');
  imageTag.setAttribute('src', 'images/Assets/volunteer1.png');


  childDiv.appendChild(imageTag);

  mainDiv.appendChild(childDiv);

  let commentLists = document.createElement('div');
  commentLists.classList.add('user-details');


  let detailsOfUserComment_name = document.createElement('p');
  detailsOfUserComment_name.classList.add('mt-1');
  detailsOfUserComment_name.setAttribute('id', 'comment-user-name');
  detailsOfUserComment_name.innerHTML = "Kaushal oza";

  commentLists.appendChild(detailsOfUserComment_name);

  let detailsOfUserComment_date = document.createElement('p');
  detailsOfUserComment_date.classList.add('mt-1');
  detailsOfUserComment_date.setAttribute('id', 'comment-posted-date');
  detailsOfUserComment_date.innerHTML = "17/05/2002";
  commentLists.appendChild(detailsOfUserComment_date);



  let detailsOfUserComment_text = document.createElement('p');
  detailsOfUserComment_text.classList.add('mt-3');
  detailsOfUserComment_text.setAttribute('id', 'comment-actual-text');
  detailsOfUserComment_text.innerHTML = text;

  commentLists.appendChild(detailsOfUserComment_text);


  mainDiv.appendChild(commentLists);

})




// below html should be added
/* <div class="single-comment d-flex gap-3">
                                <div class="user-profile-image">
                                    <img src="images/Assets/volunteer1.png" alt="">
                                </div>
                                <div class="user-details">
                                    <p id="comment-user-name" class="mt-1">User name</p>
                                    <p id="comment-posted-date" class="mt-1">Date posted</p>
                                    <p id="comment-actual-text" class="mt-3">comment text</p>
                                </div>
                            </div> */






menu.addEventListener("click", () => {
  sidebar.classList.toggle("show-sidebar");
})

close.addEventListener("click", () => {
  sidebar.classList.remove("show-sidebar");
})




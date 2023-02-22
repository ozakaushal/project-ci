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






menu.addEventListener("click", () => {
  sidebar.classList.toggle("show-sidebar");
})

close.addEventListener("click", () => {
  sidebar.classList.remove("show-sidebar");
})








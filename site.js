//====================== Navbar control ======================//
var menulist = document.getElementById("menulist");
menulist.style.maxHeight = "0px";

// control code for navbar menulist on smaller screen device
function menutoggle() {
  if (menulist.style.maxHeight == "0px") {
    menulist.style.maxHeight = "100vh";
  } else {
    menulist.style.maxHeight = "0px";
  }
}

// fixed navbar when "scroll top" exceeds 50px
$(window).on("scroll", function () {
  if ($(window).scrollTop() > 50) {
    $(".top-header").addClass("fixed-navbar");
  } else {
    $(".top-header").removeClass("fixed-navbar");
  }
});

//====================== Scroll to room section when "book now" button at the nav menu is clicked ======================//
// When "Book Now" button on "Navbar" or "Home page" is clicked
function scrollToRooms() {
  const roomsSection = document.getElementById("rooms");
  roomsSection.scrollIntoView();
}

//====================== Add & remove room card highlight upon mouse-enter event ======================//
const roomCards = document.querySelectorAll(".room-card");
roomCards.forEach(function (roomCard) {
  roomCard.addEventListener("mouseenter", function addHighlight(event) {
    roomCard.classList.add("room-card-effect");
  });

  roomCard.addEventListener("mouseleave", function removeHighlight(event) {
    roomCard.classList.remove("room-card-effect");
  });
});

//====================== Open room details in modal ======================//
const rooms = document.querySelectorAll(".room-details-btn");
const roomType = document.getElementById("roomModalLabel");
const roomDescription = document.querySelector(".room-carousel-text");

const firstCarouselImg = document.querySelector(".carousel-img1");
const secondCarouselImg = document.querySelector(".carousel-img2");
const thirdCarouselImg = document.querySelector(".carousel-img3");
const fourthCarouselImg = document.querySelector(".carousel-img4");

rooms.forEach(function (room) {
  room.addEventListener("click", function () {
    if (room.value === "apartment 1") {
      roomType.innerHTML = "Apartment 1";
      roomDescription.innerHTML = "Fully furnished room";

      firstCarouselImg.src = "Images/rooms/apartment1/img_1.JPG";
      secondCarouselImg.src = "Images/rooms/apartment1/img_2.JPG";
      thirdCarouselImg.src = "Images/rooms/apartment1/img_3.JPG";
      fourthCarouselImg.src = "Images/rooms/apartment1/img_4.JPG";
    } else if (room.value === "apartment 2") {
      roomType.innerHTML = "Apartment 2";
      roomDescription.innerHTML = "Fully furnished room";

      firstCarouselImg.src = "Images/rooms/apartment2/img_1.JPG";
      secondCarouselImg.src = "Images/rooms/apartment2/img_2.JPG";
      thirdCarouselImg.src = "Images/rooms/apartment2/img_3.JPG";
      fourthCarouselImg.src = "Images/rooms/apartment2/img_4.JPG";
    } else if (room.value === "apartment 3") {
      roomType.innerHTML = "Apartment 3";
      roomDescription.innerHTML = "Fully furnished room";

      firstCarouselImg.src = "Images/rooms/apartment3/img_1.JPG";
      secondCarouselImg.src = "Images/rooms/apartment3/img_2.JPG";
      thirdCarouselImg.src = "Images/rooms/apartment3/img_3.JPG";
      fourthCarouselImg.src = "Images/rooms/apartment3/img_4.JPG";
    } else if (room.value === "apartment 4") {
      roomType.innerHTML = "Apartment 4";
      roomDescription.innerHTML = "Fully furnished room";

      firstCarouselImg.src = "Images/rooms/apartment4/img_1.JPG";
      secondCarouselImg.src = "Images/rooms/apartment1/img_2.JPG";
      thirdCarouselImg.src = "Images/rooms/apartment1/img_3.JPG";
      fourthCarouselImg.src = "Images/rooms/apartment1/img_4.JPG";
    }
  });
});

//====================== Copyright Year ======================//
const today = new Date();
const currentYear = today.getFullYear();
const copyrightYear = document.querySelector(".year");
copyrightYear.innerHTML = currentYear;

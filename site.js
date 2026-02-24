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

const apartmentDescription =
  "Fully furnished 3 bedroom apartment with everything you need to make your stay comfortable";

const firstCarouselImg = document.querySelector(".carousel-img1");
// const secondCarouselImg = document.querySelector(".carousel-img2");
// const thirdCarouselImg = document.querySelector(".carousel-img3");
// const fourthCarouselImg = document.querySelector(".carousel-img4");
// const fifthCarouselImg = document.querySelector(".carousel-img5");
// const sixthCarouselImg = document.querySelector(".carousel-img6");
// const seventhCarouselImg = document.querySelector(".carousel-img7");
// const eightCarouselImg = document.querySelector(".carousel-img8");
// const ninthCarouselImg = document.querySelector(".carousel-img9");

rooms.forEach(function (room) {
  room.addEventListener("click", function () {
    if (room.value === "apartment 1") {
      roomType.textContent = "Apartment 1";
      roomDescription.textContent = apartmentDescription;

      firstCarouselImg.src = "images/living_room/apartment1.png";
      // secondCarouselImg.src = "images/rooms/1.jpg";
      // thirdCarouselImg.src = "images/rooms/2.jpg";
      // fourthCarouselImg.src = "images/rooms/3.jpg";
      // fifthCarouselImg.src = "images/gallery/img1.jpg";
      // sixthCarouselImg.src = "images/gallery/img2.jpg";
      // seventhCarouselImg.src = "images/gallery/img3.jpg";
      // eightCarouselImg.src = "images/gallery/img4.jpg";
      // ninthCarouselImg.src = "images/gallery/img5.jpg";
    } else if (room.value === "apartment 2") {
      roomType.textContent = "Apartment 2";
      roomDescription.textContent = apartmentDescription;

      firstCarouselImg.src = "images/living_room/apartment2.jpg";
      // secondCarouselImg.src = "images/rooms/1.jpg";
      // thirdCarouselImg.src = "images/rooms/2.jpg";
      // fourthCarouselImg.src = "images/rooms/3.jpg";
      // fifthCarouselImg.src = "images/gallery/img1.jpg";
      // sixthCarouselImg.src = "images/gallery/img2.jpg";
      // seventhCarouselImg.src = "images/gallery/img3.jpg";
      // eightCarouselImg.src = "images/gallery/img4.jpg";
      // ninthCarouselImg.src = "images/gallery/img5.jpg";
    } else if (room.value === "apartment 3") {
      roomType.textContent = "Apartment 3";
      roomDescription.textContent = apartmentDescription;

      firstCarouselImg.src = "images/living_room/apartment3.jpg";
      // secondCarouselImg.src = "images/rooms/1.jpg";
      // thirdCarouselImg.src = "images/rooms/2.jpg";
      // fourthCarouselImg.src = "images/rooms/3.jpg";
      // fifthCarouselImg.src = "images/gallery/img1.jpg";
      // sixthCarouselImg.src = "images/gallery/img2.jpg";
      // seventhCarouselImg.src = "images/gallery/img3.jpg";
      // eightCarouselImg.src = "images/gallery/img4.jpg";
      // ninthCarouselImg.src = "images/gallery/img5.jpg";
    } else if (room.value === "apartment 4") {
      roomType.textContent = "Apartment 4";
      roomDescription.textContent = apartmentDescription;

      firstCarouselImg.src = "images/living_room/apartment4.jpg";
      // secondCarouselImg.src = "images/rooms/1.jpg";
      // thirdCarouselImg.src = "images/rooms/2.jpg";
      // fourthCarouselImg.src = "images/rooms/3.jpg";
      // fifthCarouselImg.src = "images/gallery/img1.jpg";
      // sixthCarouselImg.src = "images/gallery/img2.jpg";
      // seventhCarouselImg.src = "images/gallery/img3.jpg";
      // eightCarouselImg.src = "images/gallery/img4.jpg";
      // ninthCarouselImg.src = "images/gallery/img5.jpg";
    }
  });
});

// ====================== Carousels ====================== //
$(".home-section-carousel").owlCarousel({
  loop: true,
  margin: 0,
  nav: true,
  dots: true,
  autoplay: true,
  autoplayTimeout: 6000,
  autoplayHoverPause: true,
  navText: [
    "<i class = 'fa fa-chevron-left'></i>",
    "<i class = 'fa fa-chevron-right'></i>",
  ],
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});

$(".room-section-carousel").owlCarousel({
  rewind: true,
  margin: 40,
  nav: true,
  dots: false,
  navText: [
    "<i class = 'fa fa-chevron-left'></i>",
    "<i class = 'fa fa-chevron-right'></i>",
  ],
  responsive: {
    0: {
      items: 1.25,
    },
    768: {
      items: 2.25,
      margin: 10,
    },
    1000: {
      items: 3.25,
    },
  },
});

$(".gallery-section-carousel").owlCarousel({
  rewind: true,
  // loop: true,
  margin: 3,
  dots: true,
  autoplay: true,
  autoplayTimeout: 2000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 4,
    },
    1000: {
      items: 6,
    },
  },
});

//====================== Copyright Year ======================//
const today = new Date();
const currentYear = today.getFullYear();
const copyrightYear = document.querySelector(".year");
copyrightYear.innerHTML = currentYear;

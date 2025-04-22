//Navigation bar effects on scroll
window.addEventListener("scroll", function(){
    const header = this.document.querySelector("header");
    header.classList.toggle("sticky", this.window.scrollY > 0);
});
//Services section - modal
const serviceModals = document.querySelectorAll(".service-modal");
const learnMoreBtns = document.querySelectorAll(".learn-more-btn");
const modalCloseBtns = document.querySelectorAll(".modal-close-btn");

var modal = function(modalClick){
    serviceModals[modalClick].classList.add("active");
}
learnMoreBtns.forEach((learnMoreBtns, i) => {
    learnMoreBtns.addEventListener("click", () => {
        modal(i);
    });
});
modalCloseBtns.forEach((modalCloseBtns) => {
    modalCloseBtns.addEventListener("click", () => {
        serviceModals.forEach((modalView) => {
            modalView.classList.remove("active");

        })
    })
})
//Portfolio section - Modal
// Select all the modals, image cards, and close buttons
const portfolioModals = document.querySelectorAll(".portfolio-model");
const imgCards = document.querySelectorAll(".img-card");
const portfolioCloseBtns = document.querySelectorAll(".portfolio-close-btn");

// Function to show a modal based on the index
var portfolioModal = function(modalClick) {
    portfolioModals[modalClick].classList.add("active");
};

// Add click event to each image card to show the modal
imgCards.forEach((imgCard, i) => {
    imgCard.addEventListener("click", () => {
        portfolioModal(i);
    });
});

// Add click event to each close button to hide the modal
portfolioCloseBtns.forEach((portfolioCloseBtn, i) => {
    portfolioCloseBtn.addEventListener("click", () => {
        portfolioModals[i].classList.remove("active");
    });
});

portfolioModals.forEach((portfolioModal) => {
    portfolioModal.addEventListener("click", (event) => {
        if (event.target === portfolioModal) {
            portfolioModal.classList.remove("active");
        }
    });
});

// Our clients - Swiper
var swiper = new Swiper(".client-swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    breakpoints: {
      // All screen sizes will still show 1 slide
      0: {
        slidesPerView: 1
      },
      730: {
        slidesPerView: 1
      },
      1070: {
        slidesPerView: 1
      },
      1200: {
        slidesPerView: 1
      }
    }
  });

//navigation menuitems active on page scroll
window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        let sectionHeight = current.offsetHeight;
        let sectionTop = current.offsetTop - 50;
        let id = current.getAttribute("id");

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelectorAll("nav-items a[href*=" + id + "]").classList.add("active");
        }
        else{
            document.querySelector(".nav-items a[href*=" + id + "]").classList.remove("active")
        }
    });
});

//responsive navigation menu toggle
const menuBtn = document.querySelector(".nav-menu-btn");
const closeBtn = document.querySelector(".nav-close-btn i");
const navigation = document.querySelector(".navigation");
const navLinks = document.querySelectorAll(".nav-items a");

menuBtn.addEventListener("click", () => {
  navigation.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  navigation.classList.remove("active");
});

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navigation.classList.remove("active");
  });
});


//scroll reveal animation

//common reveal options to create reveal animations

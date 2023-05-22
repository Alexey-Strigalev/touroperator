$(document).ready (function () {

  // slider
    $('.header-banner__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        fade: true,
        speed: 1000,
        infinite: false,
      });

  // Mobile-menu
  const mobileMenuButton = document.querySelector ('.header-nav__menu-button');
  const mobileMenu = document.querySelector ('.mobile-menu');

  if(mobileMenuButton !== null && mobileMenu !== null) {
    mobileMenuButton.addEventListener ('click', function() {
      mobileMenu.classList.add ('mobile-vizible')
    })
    mobileMenu.addEventListener ('click', function() {
      this.classList.remove ('mobile-vizible')
    })
  }



  // Houses cards tabs
  const housesCards = document.querySelectorAll ('[data-houses-card]');

  if(housesCards !== null) {
    housesCards.forEach (function (item) {
      item.addEventListener ('click', function() {
        const contentCard = document.querySelector('#' + this.dataset.housesCard);
        document.querySelectorAll ('[data-houses-card-content]').forEach (function (item) {
            item.classList.add ('none');
        });
        contentCard.classList.remove ('none');
      });
    });
  }

  // Fotogallery tabs
  const fotogalleryBtns = document.querySelectorAll ('[data-foto-btn]');

  if(fotogalleryBtns !== null) {
    fotogalleryBtns.forEach (function (item) {
      item.addEventListener ('click', function() {
        const fotogallery = document.getElementById('#' + this.dataset.fotoBtn);
        document.querySelectorAll ('[data-foto-cards]').forEach (function (item) {
            item.classList.add ('none');
        });
        fotogallery.classList.remove ('none');
      });
    });
  }

  // Modal window Offer
  const offerButton = document.querySelector ('.header-banner__offerbtn');
  const modalOfferWindow = document.querySelector ('.header-offer');

  if(offerButton !== null && modalOfferWindow !== null) {
    offerButton.addEventListener ('click', function() {
      modalOfferWindow.classList.remove ('none')
    })
    modalOfferWindow.addEventListener ('click', function() {
      this.classList.add ('none')
    })
  }


  // Modal window Registration
  const registrationButton = document.querySelector ('.registration-btn');
  const modalRegistrationWindow = document.querySelector ('.registrationn-modal');
  const modalRegistrationOverlay = document.querySelector ('.registrationn-modal__overlay');
  const modalClouseBtn = document.querySelector ('.registrationn-modal__clouse-btn');

  if(registrationButton !== null && modalRegistrationWindow !== null && modalRegistrationOverlay !== null && modalClouseBtn !== null) {
    registrationButton.addEventListener ('click', function() {
      modalRegistrationWindow.classList.remove ('none');
      modalRegistrationOverlay.classList.remove ('none')
    });
    modalRegistrationOverlay.addEventListener ('click', function() {
      this.classList.add ('none');
      modalRegistrationWindow.classList.add ('none')
    });
    modalClouseBtn.addEventListener ('click', function() {
      modalRegistrationOverlay.classList.add ('none');
      modalRegistrationWindow.classList.add ('none')
    });
  }



  // Fancybox initial
  Fancybox.bind("[data-fancybox]", {
    // Your custom options
  });
})

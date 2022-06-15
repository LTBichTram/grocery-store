const app = (function() {
    let searchBtn = document.querySelector('.header__control-search');
    let searchForm = document.querySelector('.header__search-form');
    searchBtn.onclick = function() {
        searchForm.classList.toggle('active');
        cartList.classList.remove('active');
        loginForm.classList.remove('active');
        menuList.classList.remove('active');
    }

    let cartBtn = document.querySelector('.header__control-cart');
    let cartList = document.querySelector('.header__cart');
    cartBtn.onclick = function() {
        cartList.classList.toggle('active');
        searchForm.classList.remove('active');
        loginForm.classList.remove('active');
        menuList.classList.remove('active');
    }

    let loginBtn = document.querySelector('.header__control-user');
    let loginForm = document.querySelector('.header__login-form');
    loginBtn.onclick = function() {
        loginForm.classList.toggle('active');
        cartList.classList.remove('active');
        searchForm.classList.remove('active');
        menuList.classList.remove('active');
    }

    let menuBtn = document.querySelector('.header__control-menu');
    let menuList = document.querySelector('.header__nav');
    menuBtn.onclick = function() {
        menuList.classList.toggle('active');
        cartList.classList.remove('active');
        searchForm.classList.remove('active');
        loginForm.classList.remove('active');
    }

    window.onscroll = () => {
      menuList.classList.remove('active');
      cartList.classList.remove('active');
      searchForm.classList.remove('active');
      loginForm.classList.remove('active');
    }

    var swiper = new Swiper(".products__slider", {
      loop:true,
      spaceBetween: 40,
      autoplay: {
          delay: 7500,
          disableOnInteraction: false,
      },
      centeredSlides: true,
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1020: {
          slidesPerView: 3,
        },
      },
  });

    var swiper = new Swiper(".products__slider", {
        loop: true,
        spaceBetween: 15,
        autoplay: {
            delay: 7500,
            disableOnInteraction: false,
        },
        breakpoints: {
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1020: {
            slidesPerView: 3,
          },
        },
      });

      var swiper = new Swiper(".review__slider", {
        loop: true,
        spaceBetween: 15,
        autoplay: {
            delay: 7500,
            disableOnInteraction: false,
        },
        centeredSlides: true,
        breakpoints: {
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1020: {
            slidesPerView: 3,
          },
        },
      });
})();
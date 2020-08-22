$(document).ready(function () {
  $('.item').slick({
    slidesToShow: 1,
    dots: true,
  });
});

//burger menu
const menuHeaderIcon = document.querySelector('.menu-header__icon');
const menuHeaderMenu = document.querySelector('.menu-header__menu');
menuHeaderIcon.addEventListener('click', () => {
  menuHeaderMenu.classList.toggle('active');
  menuHeaderIcon.classList.toggle('active')
});
$('.c').click(function (event) {
  $('.menu-header__menu').toggleClass('active');

});

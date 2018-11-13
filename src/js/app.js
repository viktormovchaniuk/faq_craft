import Swiper from './lib/swiper.js';
import 'bootstrap/js/dist/modal';
import 'bootstrap/js/dist/tooltip';

var swiperUi = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination-ui',
    clickable: true,
    bulletClass: 'btn-outline-primary',
    bulletActiveClass: 'active',
    renderBullet: function(index, className) {
      var btns = this.pagination.el.dataset.btns.split(',');
      return (
        '<button type="button" class="btn mr-0 mr-lg-2 btn-sm mb-2 mb-lg-0 ' +
        className +
        '">' +
        btns[index] +
        '</button>'
      );
    }
  }
});

$('#mainModal').on('shown.bs.modal', function() {
  $('#modalBtn').trigger('focus');
});

$(function() {
  $('[data-toggle="tooltip"]').tooltip();
});

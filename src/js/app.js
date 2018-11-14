import Swiper from './lib/swiper.js';
import 'bootstrap/js/dist/util';
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

const initialInputVal = $('#inputFilename').val();

$('#formFile').on('change', function() {
  let fileNames = [];
  let files = this.files;

  for (let i = 0; i < files.length; i++) {
    fileNames.push(files[i].name);
  }
  fileNames = files.length > 0 ? fileNames.map(i => ' ' + i) : initialInputVal;
  $('#inputFilename').val(fileNames);
});

let arr = $('.list-item');
let newArr = [];

$('#inputSearch').keyup(test);

function test() {
  let currentValue = $(this)
    .val()
    .toLowerCase();
  newArr = arr.filter((index, item) => {
    return (
      $(item)
        .text()
        .toLowerCase()
        .indexOf(currentValue) !== -1
    );
  });

  let newArrLength = newArr.length;

  $('#searchList').html(newArr);

  $('#searchCount').html('Найдено совпадений: ' + newArrLength);
}

$('#articleTabs a').on('click', function(e) {
  e.preventDefault();
  $('#articleTabs li').removeClass('active');
  $(this)
    .parent()
    .addClass('active');
  let target = $(this).attr('href');

  $('.custom-tabs .tab-pane').removeClass('show active');

  $(target).addClass('active');
  setTimeout(function() {
    $(target).addClass('show');
  }, 100);
});

$('#accordion a').on('click', function(e) {
  e.preventDefault();

  $('#accordion a').removeClass('active');
  $(this).addClass('active');

  let target = $(this).attr('href');
  $('#accordion .tab-pane')
    .slideUp()
    .removeClass('show active');
  // .slideToggle('active');

  $(target)
    .addClass('show')
    .slideToggle('active');
});

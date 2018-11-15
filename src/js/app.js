import {
  Swiper,
  Navigation,
  Pagination,
  EffectCoverflow
} from 'swiper/dist/js/swiper.esm.js';

import 'bootstrap/js/dist/util';
import 'bootstrap/js/dist/modal';
import 'bootstrap/js/dist/tooltip';
import 'bootstrap/js/dist/tab';
import 'bootstrap/js/dist/collapse';

Swiper.use([Navigation, Pagination, EffectCoverflow]);

var swiperUi = new Swiper('.swiper-container-h', {
  slidesPerView: 1,
  simulateTouch: false,
  effect: 'coverflow',
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

var swiperNested1 = new Swiper('.swiper-container-nested-1', {
  slidesPerView: 1,
  simulateTouch: false,
  autoHeight: true,
  pagination: {
    el: '.swiper-pagination-nested-1',
    clickable: true,
    bulletClass: 'ui-element',
    bulletActiveClass: 'active',
    renderBullet: function(index, className) {
      return `<span class="${className} ${className}-${index + 1}"></span>`;
    }
  },
  navigation: {
    nextEl: '.swiper-nested-next',
    prevEl: '.swiper-nested-prev'
  }
});

var swiperNested2 = new Swiper('.swiper-container-nested-2', {
  slidesPerView: 1,
  simulateTouch: false,
  autoHeight: true,
  pagination: {
    el: '.swiper-pagination-nested-2',
    clickable: true,
    bulletClass: 'ui-element',
    bulletActiveClass: 'active',
    renderBullet: function(index, className) {
      return `<span class="${className} ${className}-${index + 1}"></span>`;
    }
  },
  navigation: {
    nextEl: '.swiper-nested-next',
    prevEl: '.swiper-nested-prev'
  }
});

var swiperNested3 = new Swiper('.swiper-container-nested-3', {
  slidesPerView: 1,
  simulateTouch: false,
  autoHeight: true,
  pagination: {
    el: '.swiper-pagination-nested-3',
    clickable: true,
    bulletClass: 'ui-element',
    bulletActiveClass: 'active',
    renderBullet: function(index, className) {
      return `<span class="${className} ${className}-${index + 1}"></span>`;
    }
  },
  navigation: {
    nextEl: '.swiper-nested-next',
    prevEl: '.swiper-nested-prev'
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

$('#inputSearch').keyup(check);

function check() {
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
  $(this).tab('show');
});

// $('#accordion').collapse();

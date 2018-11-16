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

/*
Reference: http://jsfiddle.net/BB3JK/47/
*/

$('select').each(function() {
  var $this = $(this),
    numberOfOptions = $(this).children('option').length;

  $this.addClass('select-hidden');
  $this.wrap('<div class="select"></div>');
  $this.after('<div class="form-control"></div>');

  var $styledSelect = $this.next('div.form-control');
  $styledSelect.text(
    $this
      .children('option')
      .eq(0)
      .text()
  );

  var $list = $('<ul />', {
    class: 'select-options'
  }).insertAfter($styledSelect);

  for (var i = 0; i < numberOfOptions; i++) {
    $('<li />', {
      text: $this
        .children('option')
        .eq(i)
        .text(),
      rel: $this
        .children('option')
        .eq(i)
        .val()
    })
      .appendTo($list)
      .addClass('form-control');
  }

  var $listItems = $list.children('li');

  $styledSelect.click(function(e) {
    e.stopPropagation();
    $('div.form-control.active')
      .not(this)
      .each(function() {
        $(this)
          .removeClass('active')
          .next('ul.select-options')
          .hide();
      });
    $(this)
      .toggleClass('active')
      .next('ul.select-options')
      .toggle();
  });

  $listItems.click(function(e) {
    e.stopPropagation();
    $styledSelect.text($(this).text()).removeClass('active');
    $this.val($(this).attr('rel'));
    $list.hide();
  });

  $(document).click(function() {
    $styledSelect.removeClass('active');
    $list.hide();
  });
});

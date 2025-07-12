

document.querySelectorAll('.abonements_block_row1_item span').forEach(span => {
  span.addEventListener('click', function () {
    // Закрываем все открытые блоки, кроме текущего
    document.querySelectorAll('.abonements_block_row1_item span.expanded').forEach(openSpan => {
      if (openSpan !== this) {
        openSpan.classList.remove('expanded');
        openSpan.querySelectorAll('.ab_list_dn').forEach(block => {
          block.classList.remove('show');
        });
      }
    });

    // Переключаем состояние текущего элемента
    this.classList.toggle('expanded');

    // Управляем отображением .ab_list_dn внутри текущего span
    this.querySelectorAll('.ab_list_dn').forEach(block => {
      block.classList.toggle('show');
    });
  });
});







document.addEventListener('DOMContentLoaded', function () {
  // Объект с ценами для каждого типа абонемента
  const prices = {
    'item_pension': {
      gym: { 1: 1500, 3: 4200, 12: 7200 },
      fitness: { 1: 1800, 3: 4500, 12: 7800 }
    },
    // Добавьте другие типы абонементов по аналогии

    'item_school': {
      gym: { 1: 2000, 11: 1700, 3: 5000, 6: 8500, 12: 13000 },
      fitness: { 1: 2300, 11: 2300, 3: 5800, 6: 9000, 12: 13800 }
    },

    'item_student': {
      gym: { 1: 2200, 11: 1900, 3: 6000, 6: 9500, 12: 13500 },
      fitness: { 1: 2500, 11: 2300, 3: 6800, 6: 10800, 12: 14800 }
    },

    'item_adult': {
      gym: { 1: 2500, 3: 6500 },
      fitness: { 1: 3000, 3: 7500 }
    },


    'default': {
      gym: { 1: 1500, 3: 4500, 12: 15000 },
      fitness: { 1: 1800, 3: 5000, 12: 18000 }
    }
  };

  // Обрабатываем каждый блок абонемента
  document.querySelectorAll('.abonements_block_row1_item').forEach(item => {
    const itemClass = Array.from(item.classList).find(c => c !== 'abonements_block_row1_item') || 'default';
    const currentPrices = prices[itemClass] || prices['default'];

    const monthOptions = item.querySelectorAll('.mount1, .mount11, .mount3, .mount6, .mount12');
    const tab = item.querySelector('.abonements_tab');

    if (!tab) return;

    const priceParagraphs = tab.querySelectorAll('p');
    if (priceParagraphs.length < 4) return;

    const gymPriceElement = priceParagraphs[2];
    const fitnessPriceElement = priceParagraphs[3];

    function updatePrices(months) {
      gymPriceElement.textContent = `${currentPrices.gym[months]} ₽`;
      fitnessPriceElement.textContent = `${currentPrices.fitness[months]} ₽`;
    }

    monthOptions.forEach(option => {
      // Добавляем data-атрибут если его нет
      if (!option.dataset.months) {
        const match = option.className.match(/mount(\d+)/);
        if (match) option.dataset.months = match[1];
      }

      option.addEventListener('click', function () {
        const months = parseInt(this.dataset.months);

        monthOptions.forEach(opt => opt.classList.remove('active'));
        this.classList.add('active');
        updatePrices(months);
      });
    });

    // Инициализация
    const defaultOption = item.querySelector('.mount1, [data-months="1"]');
    if (defaultOption) {
      defaultOption.classList.add('active');
      updatePrices(1);
    }
  });
});












































setTimeout(() => {
  document.querySelector('.tagging')?.classList.add('show');
}, 1500);



document.querySelector('.burger_button').addEventListener('click', function () {
  const elements = {
    menu: document.querySelector('.header_mobile_menu'),
    header: document.querySelector('header'),
    icon_header: document.querySelector('.header_mobile_row svg'),
    main: document.querySelector('main'),
    header_top_wrapper: document.querySelector('.header_top_wrapper'),
    bg_stick1: document.querySelector('.burger_button div:nth-child(1)'),
    bg_stick2: document.querySelector('.burger_button div:nth-child(2)'),
    bg_stick3: document.querySelector('.burger_button div:nth-child(3)'),
    body: document.querySelector('body')
  };

  // Добавляем/удаляем класс active для всех элементов
  Object.values(elements).forEach(el => el.classList.toggle('active'));
});

// document.querySelectorAll('.directions_block div a').forEach(link => {
//     // Сохраняем HTML (включая SVG) и удаляем только текст
//     link.innerHTML = link.innerHTML.replace(/[^<]*/, '');
// });

document.addEventListener('DOMContentLoaded', function () {
  // Функция для обработки переключения радио-кнопок
  function setupRadioGroup(groupName) {
    const radios = document.querySelectorAll(`input[name="${groupName}"]`);

    radios.forEach(radio => {
      radio.addEventListener('change', function () {
        // Находим все иконки в этой группе
        document.querySelectorAll(`input[name="${groupName}"]`).forEach(r => {
          const icon = r.nextElementSibling;
          if (r.checked) {
            icon.innerHTML = `
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="12" fill="#FE7126"></circle>
                  <circle cx="12" cy="12" r="8.5" stroke="white"></circle>
                </svg>
              `;
          } else {
            icon.innerHTML = `
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="11.5" stroke="#FE7126"></circle>
                  <circle cx="12" cy="12" r="8.5" stroke="#FE7126"></circle>
                </svg>
              `;
          }
        });
      });
    });
  }

  // Инициализируем обе группы
  setupRadioGroup('radio-group-1');
  setupRadioGroup('radio-group-2');
  setupRadioGroup('radio-group-3');
});
















// JavaScript POPUP
function togglePopup() {
  document.querySelector('.popUp_call').classList.toggle('active');
  document.querySelector('.wrapper').classList.toggle('active');
  document.getElementById('popupOverlay').classList.add('active');
}

function closePopup() {
  document.querySelector('.popUp_call').classList.remove('active');
  document.querySelector('.wrapper').classList.remove('active');
  document.getElementById('popupOverlay').classList.remove('active');


}

// Закрытие по клику на оверлей
document.addEventListener('DOMContentLoaded', function () {
  const popupOverlay = document.getElementById('popupOverlay');
  if (popupOverlay) {
    popupOverlay.addEventListener('click', function (e) {
      if (e.target === this) {
        closePopup();
      }
    });
  }
});





// JavaScript cards open

// function toogleCard() {
//   document.querySelector('.club_openOne').classList.toggle('active');
//   document.querySelector('.club_open_itog_summ_block').classList.add('active');

 


// }

// function toogleCard2() {
//   document.querySelector('.club_openTwo').classList.toggle('active');
//   document.querySelector('.club_open_itog_summ_block').classList.add('active');

//   itemCard1.click()

// }


/**/


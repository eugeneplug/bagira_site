

document.querySelectorAll('.abonements_block_row1_item span').forEach(span => {
    span.addEventListener('click', function() {
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





  setTimeout(() => {
    document.querySelector('.tagging')?.classList.add('show');
  }, 1500);
  


document.querySelector('.burger_button').addEventListener('click', function() {
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

document.addEventListener('DOMContentLoaded', function() {
    // Функция для обработки переключения радио-кнопок
    function setupRadioGroup(groupName) {
      const radios = document.querySelectorAll(`input[name="${groupName}"]`);
      
      radios.forEach(radio => {
        radio.addEventListener('change', function() {
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
















  // JavaScript
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
  document.getElementById('popupOverlay').addEventListener('click', function(e) {
    if (e.target === this) {
        closePopup();
    }
});






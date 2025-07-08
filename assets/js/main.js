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



// // Объект с данными о ценах
// const priceData = {
//     'Пенсионный': {
//         'Тренажер. зал': [1500, 4000, 12000],
//         'Фитнесс зал': [1800, 4800, 14400]
//     },
//     'Школьный': {
//         'Тренажер. зал': [1500, 4000, 12000],
//         'Фитнесс зал': [1800, 4800, 14400]
//     },
//     'Студенческий': {
//         'Тренажер. зал': [1500, 4000, 12000],
//         'Фитнесс зал': [1800, 4800, 14400]
//     },
//     'Взрослый': {
//         'Тренажер. зал': [1500, 4000, 12000],
//         'Фитнесс зал': [1800, 4800, 14400]
//     }
// };

// // Функция для обновления цен в priceData
// function updatePriceData(title, gymPrices, fitnessPrices) {
//     priceData[title] = {
//         'Тренажер. зал': gymPrices,
//         'Фитнесс зал': fitnessPrices
//     };
// }

// document.querySelectorAll('.abonements_block_row1_item').forEach(item => {
//     const title = item.querySelector('h3').textContent;
    
//     // Пропускаем блок "Родитель + ребенок"
//     if (title === 'Родитель + ребенок') return;
    
//     const span = item.querySelector('span');
//     const priceBlocks = item.querySelectorAll('.abonements_tab p:nth-child(3), .abonements_tab p:nth-child(4)');
//     const monthDisplay = span.querySelector('div > p:first-child'); // Элемент, где отображается выбранный месяц
//     const dropdownArrow = span.querySelector('div > svg'); // Стрелка раскрытия
//     const monthContainer = span.querySelector('div'); // Контейнер месяца и стрелки
    
//     // Функция для переключения видимости списка месяцев
//     const toggleMonthList = () => {
//         const isExpanded = span.classList.contains('expanded');
        
//         // Закрываем все другие открытые списки
//         document.querySelectorAll('.abonements_block_row1_item span.expanded').forEach(openSpan => {
//             if (openSpan !== span) {
//                 openSpan.classList.remove('expanded');
//                 openSpan.querySelectorAll('.ab_list_dn').forEach(block => {
//                     block.classList.remove('show');
//                 });
//             }
//         });
        
//         // Открываем/закрываем текущий список
//         span.classList.toggle('expanded', !isExpanded);
//         span.querySelectorAll('.ab_list_dn').forEach(block => {
//             block.classList.toggle('show', !isExpanded);
//         });
//     };
    
//     // Обработчик клика на контейнер месяца и стрелку
//     monthContainer.addEventListener('click', function(e) {
//         // Если клик по стрелке или пустому месту - переключаем список
//         if (e.target === dropdownArrow || e.target === monthContainer) {
//             toggleMonthList();
//             return;
//         }
        
//         // Если клик по тексту месяца - сначала переключаем список, затем выбираем
//         if (e.target === monthDisplay) {
//             toggleMonthList();
            
//             // Если список был закрыт и мы его открыли - не выбираем месяц
//             if (!span.classList.contains('expanded')) {
//                 return;
//             }
//         }
//     });
    
//     // Обработчик клика по вариантам месяцев
//     span.addEventListener('click', function(e) {
//         // Если клик по варианту месяца (3 или 12 месяцев)
//         if (e.target.classList.contains('ab_list_dn')) {
//             const monthText = e.target.textContent.trim();
//             let monthIndex;
            
//             // Определяем индекс выбранного месяца
//             if (monthText === '3 месяца') monthIndex = 1;
//             else if (monthText === '12 месяцев') monthIndex = 2;
            
//             // Обновляем отображаемый месяц в основном блоке
//             if (monthIndex !== undefined) {
//                 monthDisplay.textContent = monthText;
                
//                 // Обновляем цены из массива данных
//                 if (priceData[title]) {
//                     priceBlocks[0].textContent = `${priceData[title]['Тренажер. зал'][monthIndex]} ₽`;
//                     priceBlocks[1].textContent = `${priceData[title]['Фитнесс зал'][monthIndex]} ₽`;
//                 }
                
//                 // Обновляем активный месяц
//                 span.querySelectorAll('p').forEach(p => p.classList.remove('active'));
//                 e.target.classList.add('active');
//             }
            
//             // Закрываем выпадающий список
//             span.classList.remove('expanded');
//             span.querySelectorAll('.ab_list_dn').forEach(block => {
//                 block.classList.remove('show');
//             });
//         }
//     });
    
//     // Обработчик клика по "1 месяц" (особый случай)
//     monthDisplay.addEventListener('click', function(e) {
//         // Если список открыт - выбираем "1 месяц"
//         if (span.classList.contains('expanded')) {
//             monthDisplay.textContent = '1 месяц';
            
//             // Обновляем цены из массива данных
//             if (priceData[title]) {
//                 priceBlocks[0].textContent = `${priceData[title]['Тренажер. зал'][0]} ₽`;
//                 priceBlocks[1].textContent = `${priceData[title]['Фитнесс зал'][0]} ₽`;
//             }
            
//             // Обновляем активный месяц
//             span.querySelectorAll('p').forEach(p => p.classList.remove('active'));
//             monthDisplay.classList.add('active');
            
//             // Закрываем выпадающий список
//             span.classList.remove('expanded');
//             span.querySelectorAll('.ab_list_dn').forEach(block => {
//                 block.classList.remove('show');
//             });
//         }
//     });
    
//     // Инициализация - показываем "1 месяц" по умолчанию
//     monthDisplay.textContent = '1 месяц';
//     monthDisplay.classList.add('active');
//     if (priceData[title]) {
//         priceBlocks[0].textContent = `${priceData[title]['Тренажер. зал'][0]} ₽`;
//         priceBlocks[1].textContent = `${priceData[title]['Фитнесс зал'][0]} ₽`;
//     }
// });


// let pSpecial = document.querySelector('.abonements_block_row1_item span > div p');



// Пример использования функции обновления цен:
// updatePriceData('Пенсионный', [1600, 4200, 12500], [1900, 5000, 15000]);

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

document.querySelectorAll('.directions_block div a').forEach(link => {
    // Сохраняем HTML (включая SVG) и удаляем только текст
    link.innerHTML = link.innerHTML.replace(/[^<]*/, '');
});




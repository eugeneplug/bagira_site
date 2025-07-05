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
  
let itemCard1 = document.getElementById('card_select2_item1');
let itemCard2 = document.getElementById('card_select2_item2');
let itemCard3 = document.getElementById('card_select2_item3');

let result_card2 =document.getElementById('result_card2');

itemCard1.addEventListener('click', function() {
    result_card2.textContent = '1000 ₽';
});

itemCard2.addEventListener('click', function() {
    result_card2.textContent = '2000 ₽';
});

itemCard3.addEventListener('click', function() {
    result_card2.textContent = '3000 ₽';
});






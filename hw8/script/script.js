//Task-1
let newElement = document.createElement('div');
newElement.style.color = "red";
newElement.innerText = 'New Element after existingElement';

let div1 = document.querySelector('#existingElement');
div1.after(newElement);

//Task-2
let newElement2 = document.createElement('li');
newElement2.style.color = 'blue';
newElement2.innerText = 'New Company';

let ul = document.querySelector('#parentElement');
ul.append(newElement2);

//Task-3
let elem = document.querySelector('.removeMe');
elem.remove();

//Task-4
let cardsArray = [
    {
        title:  'Outdoor Surveillance Camera',
        unit_price: 397,
        count: 10
    },
    {
        title:  'Large Jar Candle',
        unit_price: 20,
        count: 100
    },
    {
        title:  'Electric Wet and Dry Shaver',
        unit_price: 85,
        count: 20
    },
    {
        title:  'Computer Network Adapter',
        unit_price: 9,
        count: 75
    },
    {
        title:  'Puzzle Advent Calendar',
        unit_price: 30,
        count: 200
    }
];

//Task-5
let maindiv = document.createElement('div');
maindiv.classList.add('maindiv');
document.body.append(maindiv);

for(let i=0; i<cardsArray.length; i++){
    let card = document.createElement('div');
    card.classList.add('card');

    let titlediv = document.createElement('div');
    titlediv.classList.add('titlediv');
    titlediv.innerText = cardsArray[i].title;

    let captiondiv = document.createElement('div');
    captiondiv.classList.add('captiondiv');
    //подпись к карточкам
    captiondiv.insertAdjacentHTML('afterbegin', `<p><b>На общую сумму: </b>${cardsArray[i].unit_price*cardsArray[i].count}</p>`);
    captiondiv.insertAdjacentHTML('afterbegin', `<p><b>Количество товаров: </b>${cardsArray[i].count}<p>`);
    
    card.append(titlediv,captiondiv);

    maindiv.append(card);
}


let totaltov=0;
let sum=0;
for(let i=0; i<cardsArray.length; i++){
    console.log(`Title: ${cardsArray[i].title}`);
    console.log(`Price: ${cardsArray[i].unit_price}`);
    console.log(`Count: ${cardsArray[i].count}`);
    console.log(' ');
    totaltov += cardsArray[i].count;
    sum += (cardsArray[i].unit_price * cardsArray[i].count);
  
}
console.log(`Всего товаро: ${totaltov}`);
console.log(`На общую сумму: ${sum}`);



// Создайте новый элемент ,
// добавьте ему текст и добавьте его после элемента с id "existingElement".

// Создайте новый элемент , добавьте ему текст и вставьте его внутрь элемента с id "parentElement".

// Удалите элемент с классом "removeMe".

// Создать множество карточек с товарами (на основе массива с объектами. 
// У объекта свойства title, unit_price, count)

// Написать скрипт, который выводит карточки с товарами в интерфейс (на основе массива с объектами. 
// У объекта свойства title, unit_price, count), а внизу выводится итоговая сумма товаров и их количество.

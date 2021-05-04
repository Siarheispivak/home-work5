
let i = 1, p = 6;

let to = [
   'http://tut.by',
   'http://onliner.by',
   'http://google.com',
   'http://yandex.by',
   'http://mail.ru',
   'http://vk.com'
]
let to1 = [
   'заголовок 1',
   'заголовок 2',
   'заголовок 3',
   'заголовок 4',
   'заголовок 5',
   'заголовок 6',
]
let to2 = [
   'TextTextText 1 TextTextText 1 TextTextText 1 TextTextText 1 TextTextText 1 TextTextText 1',
   'TextTextText 2 TextTextText 2 TextTextText 2 TextTextText 2 TextTextText 2 TextTextText 2',
   'TextTextText 3 TextTextText 3 TextTextText 3 TextTextText 3 TextTextText 3 TextTextText 3',
   'TextTextText 4 TextTextText 4 TextTextText 4 TextTextText 4 TextTextText 4 TextTextText 4',
   'TextTextText 5 TextTextText 5 TextTextText 5 TextTextText 5 TextTextText 5 TextTextText 5',
   'TextTextText 6 TextTextText 6 TextTextText 6 TextTextText 6 TextTextText 6 TextTextText 6'
]



let to3 = [
   'http://tut.by',
   'http://onliner.by',
   'http://google.com',
   'http://yandex.by',
   'http://mail.ru',
   'http://vk.com'
]
let adress = to.join(" ");

let link1 = adress.substr(7, 6);
let link2 = adress.substr(21, 10);
let link3 = adress.substr(39, 10);
let link4 = adress.substr(57, 9);
let link5 = adress.substr(74, 7);
let link6 = adress.substr(89, 6);

let arrAdress = []
let arrAdress2 = arrAdress.concat(link1, link2, link3, link4, link5, link6);



function func() {

   s = '';
   s1 = '';
   s3 = '';
   if (i > 6) {
      i = 1
   }
   pic.src = `images/img${i}b.jpg`;
   myLink.href = to[i - 1];
   s = `<div class="main__box"><div class="title">${to1[i - 1]}</div><div class="text"><a href="${to3[i - 1]}">${to2[i - 1]}</a></div></div>`;
   s1 = `<div class="adress__way">${arrAdress2[i - 1]}</div>`;
   s3 = s + s1;
   i++
   panel.innerHTML = s3;
   timerId = setTimeout(func, 2000);

}

function stop() {

   clearTimeout(timerId);

}

function fr() {

   if (i >= p) {
      i = 1
   } else {
      i++
   }

   pic.src = `images/img${i}b.jpg`;
   myLink.href = to[i - 1];

   s = `<div class="main__box"><div class="title">${to1[i - 1]}</div><div class="text"><a href="${to3[i - 1]}">${to2[i - 1]}</a></div></div>`;
   s1 = `<div class="adress__way">${arrAdress2[i - 1]}</div>`;
   s3 = s + s1;
   panel.innerHTML = s3;

}

function bc() {

   if (i <= 1) {
      i = p
   } else {
      i--
   }

   pic.src = `images/img${i}b.jpg`;
   myLink.href = to[i - 1];

   s = `<div class="main__box"><div class="title">${to1[i - 1]}</div><div class="text"><a href="${to3[i - 1]}">${to2[i - 1]}</a></div></div>`;
   s1 = `<div class="adress__way">${arrAdress2[i - 1]}</div>`;
   s3 = s + s1;
   panel.innerHTML = s3;

}


addEventListener('load', func);
box.addEventListener('mouseover', stop);
panel.addEventListener('mouseover', stop);
// box.addEventListener('mouseout', func);

next.addEventListener('click', fr);
prev.addEventListener('click', bc);
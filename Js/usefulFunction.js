"use strict";
// // Получение словоформы для числа //////////////////////////////////////////////////////////////////////

// function getNumWord(num,word1,word2,word5) {
//     var dd=num%100;
//     if ( (dd>=11) && (dd<=19) ){
//         return word5;
//     }
//     var d=num%10;
//     if ( d==1 ){
//         return word1;
//     } 
//     if ( (d>=2) && (d<=4) ){
//         return word2;
//     }
//     return word5;
// }

// function test() {
//     var applesS=prompt('Сколько у вас яблок?');
//     var apples=parseInt(applesS);
//     alert( 'У вас ' + apples + ' ' + getNumWord(apples,'яблоко','яблока','яблок') + '!' );
// }

// ///////////////////////////////////////////////////////////////////////////////////////////////////////


// //Русскоязычное форматирование даты и времени (функция)
// // форматирует переданную дату-время в формате дд.мм.гггг чч:мм:сс
//   function formatDateTime(dt) {
//     var year=dt.getFullYear();
//     var month=dt.getMonth()+1;
//     var day=dt.getDate();
//     var hours=dt.getHours();
//     var minutes=dt.getMinutes();
//     var seconds=dt.getSeconds();
//     return (`${str0l(day,2)}.${str0l(month,2)}.${year} ${str0l(hours,2)}:${str0l(minutes,2)}:${str0l(seconds,2)}`);
// }
// // дополняет строку Val слева нулями до длины Len
// function str0l(val,len) {
//     var strVal=val.toString();
//     while ( strVal.length < len ){
//         strVal='0'+strVal;
//     }
//     return strVal;
// }
// var currTime=new Date();
// console.log( formatDateTime(currTime) );
// /////////////////////////////////////////////////////////////////////////////////////////////////////////

// // Если необходимо узнать реальный класс объекта, можно использовать следующую функцию:
// function getClassName(obj) {
//     if (obj.constructor && obj.constructor.name) {
//         return obj.constructor.name;
//     }
//     var c = Object.prototype.toString.apply(obj);
//     return c.substring(8, c.length - 1);
// }

// console.log(getClassName('asdfad'));
// console.log(getClassName(3));
// console.log(getClassName(true));
// console.log(getClassName([1, 2, 3]));
// console.log(getClassName({ a: 1, b: 2 }));
// // создадим класс RaceCar
// function RaceCar(carNum) {
//     let self = this;
//     self.num = carNum;
//     self.toString = function () {
//         return "racecar num=" + self.num;
//     };
// }
// // создадим объект car3 класса RaceCar
// let car3 = new RaceCar('6061-IB');
// // проверим является ли объектом сar3 класса RaceCar
// console.log(getClassName(car3));
// /////////////////////////////////////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////////////////////////////////////
// // Для вычисления положения элемента относительно левого верхнего угла окна браузера 
// // (не относительно начала документа!) можно использовать метод элемента getBoundingClientRect,
// // который возвращает хэш со свойствами top, left, right, bottom, а в современных браузерах — 
// // также и свойствами width и height.
// var elem = document.getElementById('proba');
// var pos = elem.getBoundingClientRect();
// // теперь pos - хэш вида {left:XXX, top:XXX, right:XXX, bottom:XXX}

// // Позицию элемента относительно левого верхнего угла страницы можно получить, 
// // добавив к результату getBoundingClientRect текущую прокрутку окна браузера:
// function getElementPos(elem) {
//     var bbox=elem.getBoundingClientRect();
//     return {
//       left: bbox.left+window.pageXOffset,
//       top: bbox.top+window.pageYOffset
//     };
//   }

//   console.log(pos);
//   //////////////////////////////////////////////////////////////////////////////////

//   //////////////////////////////////////////////////////////////////////////////////
// позициоируем землю относительно солнце на заданное расстояние и угол
function pos() {

  var red=document.getElementById('RED');
  var green=document.getElementById('GREEN');

  var form=document.forms.FPos;
  var radius=parseFloat(form.elements.Radius.value);
  var angle=parseFloat(form.elements.Angle.value)/180*Math.PI;

  var redCenterX=red.offsetLeft+red.offsetWidth/2;
  var redCenterY=red.offsetTop+red.offsetHeight/2;

  var greenCenterX=redCenterX+radius*Math.sin(angle);
  var greenCenterY=redCenterY-radius*Math.cos(angle);

  green.style.left=Math.round(greenCenterX-green.offsetWidth/2)+'px';
  green.style.top=Math.round(greenCenterY-green.offsetHeight/2)+'px';
}

pos();
//   //////////////////////////////////////////////////////////////////////////////////

// //////////////////////////////////////////////////////////////////////////////////
// позиция элемента оносительно веб страницы
// function getElementPos(elem) {
//   var bbox=elem.getBoundingClientRect();
//   return {
//       left: bbox.left+window.pageXOffset,
//       top: bbox.top+window.pageYOffset
//   };
// }
// console.log(getElementPos(document.getElementById('proba')));
// //////////////////////////////////////////////////////////////////////////////////

// // получение целевого элемента события
// // EO - объект события
// function getEventElement(EO) {
//   if ( window.event && window.event.srcElement )
//     return window.event.srcElement;

//   if ( EO.target )
//     return EO.target;

//   return null;
// }

// // остановка распространения события
// // EO - объект события
// function stopPropagation(EO) {
//   if ( EO.stopPropagation )
//     EO.stopPropagation();
//   else
//     EO.cancelBubble=true;
// }

// // отмена обработки события по умолчанию
// // EO - объект события
// function preventDefault(EO) {
//   if ( EO.preventDefault )
//     EO.preventDefault(); 
//   else
//     EO.returnValue=false;
// }

// // получение нажатой кнопки мыши
// // EO - объект события
// function getMouseWhich(EO) {
//   if ( EO.which ) return EO.which;
//   if ( EO.button&1 ) return 1;
//   if ( EO.button&4 ) return 2;
//   if ( EO.button&2 ) return 3;
//   return 0;
// }

// // получение нажатого на клавиатуре символа
// // EO - объект события
// function getKeyboardChar(EO) {
//   if ( EO.which==null ) {  // IE
//     if ( EO.keyCode<32) return null; // управляющая клавиша
//     return String.fromCharCode(EO.keyCode); // печатный символ
//   }
//   if ( EO.which!=0 && EO.charCode!=0 ) {  // остальные браузеры
//     if ( EO.which<32 ) return null; // управляющая клавиша
//     return String.fromCharCode(EO.which); // печатный символ
//   }
//   return null; // управляющая клавиша
// }
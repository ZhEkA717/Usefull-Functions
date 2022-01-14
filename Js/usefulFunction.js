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
function pos( ) {

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

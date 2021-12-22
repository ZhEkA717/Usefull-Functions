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
"user strict";
// =========== 1-misol =========== Uzunligi L berilgan Undagi to'liq metrlar sonini aniqlovchi programm tuzing?

// let a_son = +prompt("Siz kiritgan sonni metrda o'chash  sm " );
// console.log(a_son / 100, "metr");

// =========== 2-misol =========== Og'irligi M kg dan berilgan Uning to'liq tonnalar sonini aniqlang?

// let b_son = +prompt("Kiritilgan sonni tonnada o'lchash kg");
// console.log(b_son / 1000, "tonna");

// =========== 3-misol =========== A kesmada B sonini necha marta joylashtirsak bo'ladi?

//  let c_son= +prompt("A kesmani kiriting: ");
//  let d_son= +prompt("B kesmani kiriting: ");
//  console.log("A kesmani ichida B kesmani", Math.floor(c_son/d_son) ,"marta joylashtirsak bo'ladi" );

// =========== 4-misol =========== Ikki xonali son berilgan uning o'nlik xonasidagi va birlik xonasida sonlarni aniqlang?

// let e_son = +prompt("son kiriting:");

// let first_number = (Math.floor(e_son / 10)) * 10;
// let second_number = e_son % 10;
// console.log(first_number , second_number);

// =========== 5-misol =========== Ikki xonali son berilgan uning raqamlar yig'indisini topuvchi dastir tuzing?

// let f_son = +prompt("son kiriting:  M:10<son>100");

// let first_number = (Math.floor(f_son / 10));
// let second_number = f_son % 10;
// console.log(first_number + second_number);

// =========== 6-misol =========== Ikki xonali son berilgan Uning raqamlar ko'paytmasini topuvchi daatur tuzing?

// let g_son = +prompt("son kiriting: 10<son>100");

//  let first_number = (Math.floor(g_son / 10));
//  let second_number = g_son % 10;
//  console.log(first_number * second_number);

// =========== 7-misol =========== 999 dan katta son berilgan bo'lib butun olib va qoldiqli bo'lish operatsiyasidan foydalanib yuzlarni topuvchi dastur tuzing?

// let h_son = +prompt("Son kiriting: ");

// let butun_son=(h_son % 1000);
// alert(butun_son);

// =========== 8-misol =========== Kun boshidan N sekund o'tdi, kun boshidan necha soat, minut o'tganligini aniqlang?

// let i_son = +prompt("Enter second");

// let hour = 3600;
// let minut = 60;

// let soatqiymat = Math.floor(i_son/hour);
// let minutqiymat = i_son %= hour;
// let secondqiymat = minutqiymat %= minut;
// alert(`${soatqiymat}soat, ${minutqiymat}minut, ${secondqiymat}second`);

// Mantiqiy masalalar (if/else)

//                                                         =========== 1-misol ===========

// let j_son = +prompt("Enter number");

// if(j_son > 0 ){
//    alert("A son musbat")
// }else{
//    alert("Manfiyku jigarim")
// }

//                                                         =========== 2-3-misol ===========

//  let k_son = +prompt("Enter number");

//  if (k_son % 2 == 0) {
//   alert("A son juft");
//  } else if (k_son==1){
//    alert("son juft ham emas toq ham emas")
//  }else{
//    alert("A son toq");
//  }

//                                                         =========== 4-misol ===========

// let l_son = +prompt("enter_the_first_number");
// let m_son = +prompt("enter_the_second_number");

// if (l_son > 0 && m_son > 0) {
//     alert("numbers are positive")
// } else if (l_son < 0 && m_son > 0) {
//     alert("the first number is negative, the second number is positive")
// } else if (l_son > 0 && m_son < 0) {
//     alert("the first number is positive, the second number is negative")
// } else {
//     alert("numbers are negative")
// }

//                                                         =========== 5-misol ===========

// let n_son = +prompt("a sonni kiriting: ");
// let o_son = +prompt("b sonni kiriting: ");
// let p_son = +prompt("c sonni kiriting: ");

// if (n_son > o_son && o_son > p_son){
//    alert("true")
// }else{
//    alert("false")
// }

//                                                         =========== 6-misol ===========

// let q_son = +prompt("a sonni kiriting: ");
// let r_son = +prompt("b sonni kiriting: ");
// let s_son = +prompt("c sonni kiriting: ");

// if (q_son < r_son < s_son){
//    alert("true")
// }else{
//    alert("false")
// }

//                                                         =========== 7-misol ===========

// let t_son = +prompt("a sonni kiriting: ");
// let u_son = +prompt("b sonni kiriting: ");

// if(t_son % 2 == 0 && u_son % 2 == 0){
//    alert("false")
// }else{
//    alert("true")
// }

//                                                         =========== 8-misol ===========

// let u_son = +prompt("a sonni kiriting: "),
//   v_son = +prompt("b sonni kiriting: "),
//   w_son = +prompt("c sonni kiriting: "),
//   x_son = +prompt("d sonni kiriting: ");

// if (u_son > 0 && v_son > 0 && w_son > 0 && x_son > 0) {
//   alert("true");
// } else {
//   alert("false");
// }

//                                                         =========== 9-misol ===========

// let y_son = +prompt("a sonni kiriting: "),
//   z_son = +prompt("b sonni kiriting: "),
//   a_son = +prompt("c sonni kiriting: ");

// if (y_son > 0 && z_son > 0 && a_son < 0) {
//    alert("true")
// } else if (y_son < 0 && z_son > 0 && a_son > 0) {
//    alert("true")
// } else if (y_son > 0 && z_son < 0 && a_son > 0) {
//    alert("true")
// } else {
//   alert("false");
// }

//                                                         =========== 10-misol ===========

// let b_son = +prompt("Hafta kunini son orqali kiriting: ");
// if (b_son == 1) {
//   alert("Dushanba");
// } else if (b_son == 2) {
//   alert("Seshanba");
// } else if (b_son == 3) {
//   alert("Chorshanba");
// } else if (b_son == 4) {
//   alert("Payshanba");
// } else if (b_son == 5) {
//   alert("Juma");
// } else if (b_son == 6) {
//   alert("Shanba");
// } else if (b_son == 7) {
//   alert("Yakshanba");
// }

//                                                         =========== 11-misol ===========

// let c_son = +prompt("Company Uzbekistan");
// if (c_son == 90 && c_son == 91) {
//   alert("BEELINE");
// } else if (c_son == 97 && c_son == 98) {
//   alert("MobiUz");
// } else if (c_son == 94 && c_son == 93) {
//   alert("UCELL");
// } else if (c_son == 99 && c_son == 95) {
//   alert("UzMobile");
// } else if (c_son == 98) {
//   alert("Perfectum");
// }else{
//    alert("?????")
// }

//                                                         =========== 12-misol ===========

// let d_son = +prompt("Enter number: ");

// if (d_son > 0) {
//   d_son++;
//   alert(d_son);
// } else {
//   d_son--;
//   alert(d_son);
// }

//                                                         =========== 13-misol ===========

// let e_son = +prompt("Enter number: ");

// if (e_son > 0) {
//   alert(e_son + 3);
// } else {
//   alert(e_son - 2);
// }

//                                                        =========== 14-misol ===========

// let x_son = +prompt("Enter number: ");
// let y_son = +prompt("Enter number: ");
// if (x_son > y_son) {
//   alert(x_son);
// } else {
//   alert(y_son);
// }

//                                                        =========== 15-misol ===========

// let a = +prompt("Enter number_1: "),
//     b = +prompt("Enter number_2: "),
//     c = +prompt("Enter number_3: ");

// if(a > b && a > c){
// alert( a + " son katta")
// }else if( b > a && b > c){
//    alert( b + " soni katta")
// }else if (c > a && c > b){
//    alert(c + " soni katta")
// }else{
//    alert("????")
// }

//                                                        =========== 16-misol ===========

// let a = +prompt("Enter number_1: "),
//   b = +prompt("Enter number_2: "),
//   c = +prompt("Enter number_3: ");

// if (a < b && a < c) {
//   alert(a + " soni kichik");
// } else if (b < a && b < c) {
//   alert(b + " soni kichik");
// } else if (c < a && c < b) {
//   alert(c + " soni kichik");
// } else {
//   alert("????");
// }

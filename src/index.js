// /**
//  * const、let
//  */
// // let val2 = "let変数";
// // console.log(val2);

// // const val3 = "let変数";
// // console.log(val3);

// // const val3 = test;

// // constで定義したオブジェクトでも上書き可能;
// const val4 = {
//   name: "てすと",
//   age: 28
// };
// // console.log(val4);
// val4.name = "_TEST";
// console.log(val4);

// const val5 = ["dog", "cat"];
// val5[0] = "house";

// val5.push("bird");
// console.log(val5);

// /**
//  * テンプレート文字列
//  */
// const name = "かず";
// const age = 30;

// const message = `
// 私の名前は${name}です。
// `;
// console.log(message);

// // function func1(str) {
// //   return str;
// // }

// // const func1 = function (str) {
// //   return str;
// // };

// // const func1 = (str1) => str1;

// const func1 = (str1, str2) => {
//   return str1 + str2;
// };

// console.log(func1(10, 20));

// /**
//  *  分割代入
//  */
// const myProfile = {
//   name2: "てすと",
//   age2: 28
// };

// // const message2 = `
// //   名前は${myProfile.name2}です。
// //   年齢は${myProfile.age2}です。
// // `;
// const { name2, age2 } = myProfile;

// const message2 = `
//   名前は${name2}です。
//   年齢は${age2}です。
// `;

// console.log(message2);

// const myProfile3 = ["てすと", 28];

// const message3 = `名前は${myProfile3[0]}`;
// console.log(message3);

// const sayHello = (name4 = "ゲスト") => {
//   console.log(`こんにちわ、${name4}さん`);
// };

// sayHello();

// /**
//  * スプレッド構文 ...
//  */
// const arr1 = [1, 2];
// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

//まとめる

// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4, ...arr5];
// arr6[0] = 100;
// console.log(arr6);
// console.log(arr5);
// console.log(arr4);

// 以下のコピーは参照元が同じになるので使わない
// const arr8 = arr4;
// arr8[0] = 100;
// console.log(arr4 + "です");

/**
 * mapやfillter
 */
// const nameArr = ["田中", "岡", "安藤"];
// // console.log(nameArr);

// // const nameArr2 = nameArr.map((name) => {
// //   return name;
// // });

// // console.log(nameArr2);

// // nameArr.map((name) => console.log(name));

// const newArr = nameArr.map((name1) => {
//   if (name1 === "安藤") {
//     return name1;
//   } else {
//     return `${name1}さん`;
//   }
// });
// console.log(newArr);

/**
 * 三項演算子
 */
// const num = 1300;

// console.log(num.toLocaleString());

// const formatNum =
//   typeof num === "number" ? num.toLocaleString() : "数値ではありません";
// console.log(formatNum);
// const count = () => num1 + num2 > 100;
// const checkSum = (num1, num2) => {
//   return count ? "100こえてます！" : "100未満です";
// };
// console.log(checkSum(30, 90));

/**
 * 論理演算
 */

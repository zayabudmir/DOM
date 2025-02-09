// // 1. body дуудаж байгаа
// const body = document.querySelector("body");

// // 2. Шинэ эльмент үүсгэж байгаа
// const h1 = document.createElement("h1");
// const text = document.createElement("div");

// // 3. text нэртэй div дотор дурын техт бичих
// text.innerText = "дурын техт";

// // 4. body дотроо оруулж байгаа (broswer дээр гаргаж ирэх)
// body.appendChild(h1);
// body.appendChild(text);

// // 5. style бичих (class)
// h1.className = "h1";
// h1.style = "color: purple";
// text.className = "text";

// // 6. юм нэмж бичиж болно
// h1.innerText = "hello world, this is h1";

// // 1. body дуудаж байгаа
// const body = document.querySelector("body");

// // 2. Шинэ эльмент үүсгэж байгаа
// const text = document.createElement("div");

// // 3. text нэртэй div дотор дурын техт бичих
// text.innerText = "дурын техт";

// // 4. body дотроо оруулж байгаа (broswer дээр гаргаж ирэх)
// body.appendChild(text);

// // 5. style бичих (class)
// text.className = "text";

// // Дасгал 1:
// // <div class="btn">7</div>
// const body = document.querySelector("body");
// const div = document.createElement("div");
// div.innerText = "7";
// body.appendChild(div);
// div.className = "btn";

// const div1 = document.createElement("div");
// div1.innerText = "8";
// body.appendChild(div1);
// div1.className = "btn";

// дасгал 2: calculator
// const body = document.querySelector("body");
// const array = [
//   "(",
//   ")",
//   "%",
//   "AC",
//   "7",
//   "8",
//   "9",
//   "/",
//   "4",
//   "5",
//   "6",
//   "*",
//   "1",
//   "2",
//   "3",
//   "-",
//   "0",
//   ".",
//   "=",
//   "+",
// ];

// const container = document.createElement("div");
// const input = document.createElement("input");
// body.appendChild(input);

// for (let i = 0; i < array.length; i++) {
//   createElement("buttom", container, "btn", array[i]);
// }

// let array1 = [];
// let result = "";

// function createElement(elementName, appendElement, className, innerText) {
//   const element = document.createElement(elementName);
//   element.innerText = innerText;
//   element.className = className;
//   element.onclick = () => {
//     if (
//       innerText === "+" ||
//       innerText === "-" ||
//       innerText === "*" ||
//       innerText === "/"
//     ) {
//       input.value += " " + innerText + " ";
//     } else if (innerText === "=") {
//       let string = input.value;
//       array1 = string.split(" ");
//       if (array1[1] == "+") {
//         input.value = parseInt(array1[0]) + parseInt(array1[2]);
//       } else if (array[1] == "-") {
//         input.value = parseInt(array1[0]) - parseInt(array1[2]);
//       } else if (array1[1] == "*") {
//         input.value = parseInt(array1[0]) * parseInt(array1[2]);
//       } else if (array1[1] == "/") {
//         input.value = parseInt(array1[0]) / parseInt(array1[2]);
//       }
//     } else input.value += innerText;
//   };
//   appendElement.appendChild(element);
//   container.className = "container";
//   body.appendChild(container);
// }

// 1. isDone, isDone false

// if(isDone) icon or element
// isDone innerText test
// isDone false innerText number

// дасгал 3:
// function renderDay(isDone, innerText) {
//   const body = document.querySelector("body");
//   let div = document.createElement("div");

//   if (isDone) {
//     div.innerText = "test";
//   } else {
//     div.innerText = innerText;
//   }
//   div.className = "day";

//   body.appendChild(div);
// }

// const array = [
//   {
//     date: "1",
//     isDone: true,
//   },
//   {
//     date: "2",
//     isDone: true,
//   },
//   {
//     date: "3",
//     isDone: true,
//   },
//   {
//     date: "4",
//     isDone: false,
//   },
//   {
//     date: "5",
//     isDone: true,
//   },
//   {
//     date: "6",
//     isDone: false,
//   },
//   {
//     date: "7",
//     isDone: true,
//   },
// ];

// for (let i = 0; i < array.length; i++) {
//   renderDay(array[i].isDone, i + 1);
// }

// дасгал 4: 50%
// const body = document.querySelector("body");
// const bigContainer = document.createElement("div");
// bigContainer.className = "bigContainer";
// body.appendChild(bigContainer);
// let redWidth = 50;
// let blueWidth = 50;

// const red = document.createElement("div");
// red.innerText = redWidth;
// bigContainer.appendChild(red);
// red.className = "red";

// const blue = document.createElement("div");
// blue.innerText = blueWidth;
// bigContainer.appendChild(blue);
// blue.className = "blue";

// function blueWidthControl() {
//   blueWidth += 1;
//   redWidth -= 1;

//   blue.style.width = `${blueWidth}%`;
//   red.style.width = `${redWidth}%`;
//   blue.innerText = blue.style.width;
//   red.innerText = red.style.width;

//   if (blue.innerText > 100) {
//     console.log(red.innerText);
//   }
// }

// function redWidthControl() {
//   redWidth += 1;
//   blueWidth -= 1;
//   blue.style.width = `${blueWidth}%`;
//   red.style.width = `${redWidth}%`;
//   red.innerText = red.style.width;
//   blue.innerText = blue.style.width;
// }
// red.onclick = redWidthControl;

// blue.onclick = blueWidthControl;

// дасгал 5: дарах үед томордог button
// const body = document.querySelector("body");
// let btn = document.createElement("button");
// btn.innerText = "click me";
// btn.onclick = log;

// body.appendChild(btn);
// btn.style.width = "100px";
// let width = 100;

// function log() {
//   width += 10;
//   btn.style.width = `${width}px`;
//   console.log("btn clicked.....");
// }

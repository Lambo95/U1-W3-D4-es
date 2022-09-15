let stringa = "Hello World";
console.log(stringa);
console.log(stringa.length);

console.log(stringa.indexOf("Hello"));
console.log(stringa.indexOf("W"));
console.log(stringa.lastIndexOf("o"));

console.log(stringa.slice(0, 5));
//console.log(stringa.slice(-1, -6));
console.log(stringa.substring(6));
console.log(stringa.substr(5, 6));

console.log(stringa.replace("Hello", "Welcome"));
console.log(stringa.toLowerCase());
console.log(stringa.toUpperCase());

let stringaDue = stringa.replace("Hello", "Welcome");
console.log(stringaDue.concat("! Welcome JS"));

let personeArray = ["Mario", "Giovanni", "Sara", "Roberto", "Giorgia"];
console.log(personeArray);
console.log(personeArray[2]);
let aggiungoPersona = "Alice";
personeArray = personeArray.push(aggiungoPersona);
// personeArray[6] = 'Alice';
console.log(personeArray);

// let lengthArray = personeArray.length;
// let i = 0;

// while (i < lengthArray) {
//   console.log(personeArray[i]);
//   i++;
// }
// for (let i = 0; i < lengthArray; i++) {
//   console.log(personeArray[i]);
// }

let arrayNum = [1, 2, 3, 4, 5, 6, 7];
arrayNum[10] = 55;
//console.log(arrayNum.length);
for (let index = 0; index < arrayNum.length; index++) {
  const element = arrayNum[index];
  console.log(element);
}

console.log(arrayNum.push(10));

for (let index = 0; index < arrayNum.length; index++) {
  const element = arrayNum[index];
  console.log(element);
}

console.log(arrayNum.toString());

arrayNum.pop();

console.log(arrayNum.toString());

arrayNum.unshift(51);

console.log(arrayNum.toString());

arrayNum.shift();
console.log(arrayNum.toString());

let clacolo = (num1, num2) => num1 * num2;
console.log(clacolo(arrayNum[1], arrayNum[3]));
console.log(clacolo(arrayNum[0], arrayNum[4]));

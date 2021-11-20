/* console.log('Hello World!');
let name = prompt("Podaj mi swoją nazwę użytkownika :) ");
console.log(name);

let a = 5;
let b = 10;

console.log(a/b);
console.log(b+a);
console.log(b*a);
console.log (a==='a');  // '===' najpierw sprawdza czy typ porównywanych zmiennych sie zgadza

let greeting =`Hello ${name}!`;
console.log(greeting);

//OBIEKTÓWKA

let person = new Object();
person.name= "Aga";
person.age =  12;
person.height = 160;
console.log(person);

let person2 = {
  name: "Ola",
  age: 24,
  height: 173
};

console.log(person2);*/

// INSTRUKCJE WARUNKOWE

/*
//PEŁNA WERSJA//
let age = prompt("PODAJ SWÓJ WIEK");

if(age < 18){
  console.log("Nie jesteś pelnoletni");
  
} else if (age < 21) {
  console.log ("W stanach jeszcze nie"); 
  
} else {
  console.log('PEŁNOLETNI');
}

//SKRÓCONA WERSJA//

age >=18 ? console.log ('Pełnoletni'):consloe.log("NIEPEŁNOLETNI"); */

//PĘTLE

/*let password;
while(password != '1234'){
  passworld = prompt("PODAJ HASŁO");
} console.log ("PRAWIDŁOWE HASŁO");*/

/*for(let i=1; i<10; i++){
  console.log(i);
}*/

/*let i=1;

while(i<11){
  console.log(i);
  
  if(i==5) break;
  i++;
}*/

//DEFINIOWANIE FUKCJI 

/*function hello () {
  console.log("HELLO");
}

hello();

function sum(a,b){
  return a+b;
}

let result = sum(5,7);
console.log(result);


let ode = (c,d) => {
  console.log("odjęte");
  console.log(c-d);}

ode(5,2);*/

//KOLEKCJE

//TABLICE
/*
let names = ["Kasia", "Asia"];
//console.log(names[0]);
names.push("Jola") // dodaje na koniec tab
names.unshift("Ola") // dodaje na początek tab

for (let name of names){ //pętla for off
  console.log(name);
}

let lastName = names.pop(); // usuwa ostatni elem tab 

let firstName = names.shift(); // usuwa ostatni element tablicy


names.splice(2,1); // usunięcie jednego elementu, od pozycji 2

for (let i = 0; i < names.length; i++){
  console.log(names[i]);
}*/


//SET - elementy nie mogą się powtarzać
let names = new Set();
names.add("Dominika");
names.delete("Dominika");
console.log(names.has("Dominika")); //czy istnieje w secie

//MAPY - unikalne klucze, dowolny typ
/*
let products = new Map();
products.set(1,"Marchewka"); // (klucz, wartość)
products.set(2,"Mleko");

console.log(products.get(1));

console.log(products.has(2)); // czy istnieje klucz

for(let key of products.keys()){
  console.log(key);
}

for(let value of products.values()){
  console.log(value);
}

for(let entry of products.entries()){
  console.log(entry);
}*/
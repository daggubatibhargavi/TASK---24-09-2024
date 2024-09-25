//task1
//question1
var car = {
  make: "Rolls Royce",
  model: "phantom",
  year: "2023",
};
console.log(car);
Object.freeze(car);
(car.model = "Kia"), console.log(car);
//question2
var user = {
  name: "bhargavi",
  age: 45,
  email: "bhargavidaggubati@gmail.com",
};
console.log(user);
Object.freeze(user);
user.age = 47;
console.log(Object.isFrozen(user));
//question3
var product = {
  name: "smartphone",
  category: "electronics",
  price: "50000",
};
console.log(product);
Object.seal(product);
Object.price = "6000";
console.log(Object.isSealed(product));
//question4
var laptop = {
  brand: "Dell",
  model: "xps 13",
  price: "45000",
};
console.log(Object.keys(laptop));
//question5
var house = {
  location: "bnglr",
  size: "2000sq ft",
  price: "1cr",
};
console.log(house);
console.log(Object.values(house));
//question6
var smartphone = {
  brand: "Realme",
  model: "GT 2 Pro",
  price: "15000",
};
console.log(smartphone);
Object.seal(smartphone);
smartphone.price = "20000";
console.log(Object.isSealed(smartphone));
//question7
var book = {
  title: "Alice in Wonderland",
  author: "Lewis Carrol",
  publishedYear: "2005",
};
console.log(book);
Object.freeze(book);
(book.publishedYear = "2008"), console.log(Object.isFrozen(book));
//question8
var person = {
  firstname: "bhargavi",
  lastname: "daggubati",
  age: "22",
};
console.log(Object.keys(person));
console.log(Object.values(person));
//question9
var course = {
  title: "reactjs",
  instructor: "vamsi",
  duration: "6months",
};
console.log(course);
console.log(Object.entries(course));
delete course.duration;
console.log(course);
//question10
var employee = {
  name: "bhargavi",
  position: "manager",
  salary: "1lakh",
};
console.log(employee);
Object.seal(employee);
employee.position = "HR";
console.log(Object.keys(employee));
console.log(employee);
//task2
//string methods
// Question:1
var str = "bhargavi";
middlestr = str.slice(3, 5);
console.log(middlestr);
console.log("middlestr:" + middlestr.toUpperCase());
// Question:2
var str = "bhargavi";
console.log(str.toUpperCase(str).length);
// Question:3
var str = "bhargavi";
console.log(str.charAt(4));
console.log(str.charCodeAt(4));
// Question:4
var str = "     daggubati    ";
trimstr = str.trim(str);
console.log(trimstr);
strportion = trimstr.slice(2, 4);
console.log(strportion);
// Question:5
var str1 = "bhargavi";
var str2 = "Daggubati";
tolowercase = str2.toLowerCase(str2);
str = str1.concat(" ", tolowercase);
console.log(str);
// Question:6
var str = "     Daggubati";
trimstr = str.trimStart(str);
result = trimstr.slice(2, 9);
console.log(result);
// Question:7
var str = "Daggubati";
result = str.charAt(6);
toUpperCase = result.toUpperCase(result);
console.log(toUpperCase);
// Question:8
var str1 = "Daggubati   ";
trimstr = str1.trimEnd(str1);
var str2 = "bhavani";
result = trimstr.concat(" ", str2);
console.log(result);
// Question:9
var str = " good morning ";
trimstr = str.trim(str);
toUpperCase = trimstr.toUpperCase(trimstr);
result = toUpperCase.substring(2, 5);
console.log(result);
// Question:10
let string1 = "HELLO";
let string2 = "WORLD";
toLowerCasestr1 = string1.toLowerCase(string1);
toLowerCasestr2 = string2.toLowerCase(string2);
result = toLowerCasestr1.concat("  ", toLowerCasestr2);
console.log(result);
concatresult = result[1];
console.log(concatresult);

// Q1 - Given an array of numbers, use the map function with an arrow function to square each element of the array.

// let numbers=[1,2,3,4,5,6,7,8,9];

// let res=numbers.map((number) =>
// number *number
//     );

// console.log(res);

// Q2 - Write a JavaScript function that takes a student's score as a parameter and returns their grade (A, B, C, D, or F) using a series of ternary operators..
  
// function studentsGrade(score){
//     return score >=90 ? "A" :
//     score >=80 ? "B" :
//     score >=70 ? "C" :
//     score >=60 ? "D" : "f";
   
 
// }

// console.log(studentsGrade(99));
// console.log(studentsGrade(88));
// console.log(studentsGrade(77));
// console.log(studentsGrade(67));
// console.log(studentsGrade(50));


// Q3 - Create an object representing a car with properties like Company name, model, and year. Write a function to change the car's year property. Also use object destructuring to extract and print the car's Model and Year.


// const Car={
//     companyName:"TATA",
//     Model:"Punch",
//     Year:2023
// };

// function updateCaryear(Car,newYear){
//     Car.Year=newYear;
// }
// updateCaryear(Car,2024);

// 
// const {Model : carModel, Year : CarYear}=Car;

// console.log(`Updated Model: ${carModel}`);
// console.log(`Updated Year: ${CarYear}`);



// Q4 - Given an array of numbers, use the filter function to create a new array containing only the prime numbers.


// let numbers=[1,2,43,4,6,8,9,10];

// let primeNumber=numbers.filter((number)=> number % 2==0);

// console.log(primeNumber);


// Q5 -  State different use cases of map, filter and reduce functions.


// map 

// const arr=[2,4,6,7,9];

// const res= arr.map((x)=> x *2 );

// console.log(res)


// reduce 

// const arr=[2,3,4,5,6,7];

// const output=arr.reduce((acc,curr)=>{
// acc= acc+curr;
// return acc;

// },0);
// console.log("sum of the array is " ,output);


// Filter 

// const numbers = [4, 9, 16, 25, 36];
// const greaterThan10 = numbers.filter(num => num > 10);
// console.log(greaterThan10); 


// Q6 - Write an asynchronous function using async-await  to fetch data from an API (you can use the JSONPlaceholder API) and log the result.

// async function fetchdata() {
//     try
//     {
//         const response= await fetch('https://jsonplaceholder.typicode.com/posts');
// const data=await response.json();   
// console.log(data);

//     }catch (error) {
//         console.log("Eroor fetching data:",error);
//     }
// }

// fetchdata();


// Q7 - Define a nested object representing a person with properties like name, address, and contact. Use optional chaining to safely access the person's phone number, even if the contact property is missing.

const person = {
    name: 'John Doe',
    address: {
      street: '123 Main St',
      city: 'Anytown',
      state: 'CA',
      zip: '12345'
    },
    contact: {
      email: 'johndoe@example.com',
      phone: '555-1234'
    }
  };

  const phinenumber=person.contact?.phone;

  console.log(phinenumber);


//   without contact 

const person1={

    name:"starnger",
    address:{
        street:"123 mail ",
        city:"banglore",
        state:"karnataka",
        zip:"560088"
    }
};

const phoneNumber=person1.contact?.phone;

console.log(phoneNumber);
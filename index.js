// let FirstName = "John";
// let lastName = "Doe";

// function greet(FirstName, lastName){
//     console.log("Hello, " + FirstName + " "+ lastName)
// }
// greet(FirstName, lastName); 

// const num1 = 20;
// const num2 =30;
// function calculateSumFunction(num1, num2){
//     return num1 + num2;
// }

// const result = calculateSumFunction(num1, num2);
// const result2 =  calculateSumFunction(455, 56)
// console.log(result);
// console.log(result + result2);

// const calculateSumFunction = () => {
//     return num1 + num2;
// };

// console.log(calculateSumFunction(num1, num2));

// const a = 60;
// const b = 20;
// const c = 3;

// function calculateThis(a,b,c){
//     return a * b/c;
// };

// console.log(calculateThis(a,b,c));

const cart = [
    {productName: "T-shirt", price:20 },
    {productName: "Jeans", price: 50},
    {productName: "Sneakers", price: 80 },
    {productName: "Mask", price: 40 },
    {productName: "Dress", price: 90 },
    {productName: "Swim Suit", price: 100 },
]

function calculateTotal(){
    let totalPrice = 0;
    for(let item of cart){
         totalPrice = totalPrice + item.price;
    };
console.log(totalPrice);
}
 
const totalPrice = calculateTotal(cart);





let amounts = [61.00, 52.25, 112.99, 5.00]; 


let total = [];
for (let amount of amounts) {
  total += amount
}
console.log('Order total is: ', total);




const amounts = [65, 44, 12, 4];
let doubledAmounts = [];

amounts.forEach(item => {
  doubledAmounts.push(item * 2);
})

console.log(doubledAmounts);
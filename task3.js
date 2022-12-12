let someNumbers = [4, 5, 6, 78, 2, 3, 45, 34, 2, 23, 5, 45, 6, 7, 23];

let multiples = someNumbers.some((number)=>{
    if (number%3 === 0 || number%5 === 0 || number%60 === 0 || number%90 === 0)
return number
});
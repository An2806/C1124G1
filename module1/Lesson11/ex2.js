// let count = 0;
// for (let i = 1; i < 20; i++) {
//     if (i % 2 === 0) {
//         document.write(i + "<br>");
//         count++;
//     }
//     if ( count === 5 ) {
//         break;
//     }
// }

// let count = 0;
// let num = 2;
// while (count < 5) {
//     num += 2;
//     count++;
//     console.log(num);
// }

// let count = 0;
// let num = 5;
// while (count < 5) {
//     let isPrime =true;
//     if (num<2){
//     //     khong phai
//         isPrime=false;
//     }
//     else if (num>=4){
//         for (let i = 2; i < num; ++i){
//             if (num%i == 0){
//                 isPrime=false;
//             }
//         }
//     }
//
//     if (isPrime) {
//         count++;
//         console.log(num);
//     }
//     num++;
// }

let count = 0;
let num = 10;
while (count < 10) {
    let isPrime = true;
    if (num < 2) {
        isPrime = false;
    }
    else if (num >=5) {
        for (let i = 2; i <= num; i++) {
            if (num % i === 0) {
                isPrime = false;
            }
        }
    }
    if (isPrime) {
        count++;
        console.log(num);
    }
    num++;
}
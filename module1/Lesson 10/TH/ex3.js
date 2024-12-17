let num = +prompt("Enter a number:");
let total =0;
while (num != -1) {
    num =+prompt("Enter a number, too:");
    total += num;
    alert(total);
}
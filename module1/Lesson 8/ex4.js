let  browser = prompt("Enter browser name!")
// if (browser === 'Edge') {
//     alert("You've got the Edge!");
// } else if ( browser === 'Chrome' || browser === 'Firefox' || browser === 'Safari' || browser ===' Opera') {
//     alert('Okay we support these browsers too');
// } else {
//     alert('We hope that thiss page  looks ok!');
// }

switch (browser) {
    case'Edge':
        alert("you've got the Edge!");
        break;
    case 'Chrome':
    case 'Firefox':
    case 'Opera':
        alert('Okay we support these browser too');
        break;
    default:
        alert('We hope that this page looks ok!');
}



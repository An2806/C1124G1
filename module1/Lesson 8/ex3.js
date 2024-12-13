let userName =prompt("Who's there?",'');
if (userName ==='Admin') {
    let pass = prompt('password', '');
    if (pass === 'TheMaster') {
        alert('Welcome');
    } else if (pass == null) {
        alert('Canceled');
    } else {
        alert('Wrong password');
    }
} else if (userName == null) {
    alert('Canceld');
} else {
    alert("I don't know you")
}

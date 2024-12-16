let userName =prompt("Who's there?",'');
if (userName ==='Admin') {
    let pass = prompt('password', '');
    if (pass === 'TheMaster') {
        alert('Welcome');
    } else if (!pass) {
        alert('Canceled');
    } else {
        alert('Wrong password');
    }
} else if (!userName) {n
    alert('Canceled');
} else {
    alert("I don't know you")
}

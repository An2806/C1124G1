let value = prompt('What is the "official" name of JavaScript?','');
console.log(value.toUpperCase());
if (value.toLowerCase() === 'ecmascript') {
    alert('Right!');
} else {
    alert("Didn't know? ECMAScript!");
}
function demo1() {
    let weight = +document.getElementById("cannang");
    let height = +document.getElementById("chieucao").value;
    let BMI = weight / (height * height);
    if (BMI < 18.5) {
        document.getElementById("result").innerHTML = "Underweight";
    } else if (BMI < 25.0) {
        document.getElementById("result").innerHTML = "Normal";
    } else if (BMI < 30.0) {
        document.getElementById("result").innerHTML = "Overweight";
    } else {
        document.getElementById("result").innerHTML = "Obese";
    }
}

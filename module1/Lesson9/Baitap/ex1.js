function demo1(){
    let weight= + document.getElementById("cannang").value;
    let height= + document.getElementById("chieucao").value;
    let BMI = weight / (height * height);
    if (BMI<18.5) {
        document.write("Underweight");
    } else if (BMI<25.0) {
        document.write("Normal");
    } else if (BMI<30.0) {
        document.write("Overweight");
    } else {
        document.write("Obese");
    }
}
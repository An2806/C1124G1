var doC=document.getElementById("C").value;
function convertTemperature() {
    // Lấy giá trị từ input
    const celsius = parseFloat(document.getElementById("celsius").value);

    // Kiểm tra nếu người dùng nhập sai
    if (isNaN(celsius)) {
        document.getElementById("result").textContent = "Vui lòng nhập một số hợp lệ!";
        return;
    }

    // Chuyển đổi từ Celsius sang Fahrenheit
    const fahrenheit = (celsius * 9 / 5) + 32;

    // Hiển thị kết quả
    document.getElementById("result").textContent = `${celsius}°C bằng ${fahrenheit.toFixed(2)}°F.`;
}
function myFunction (){
    let F= (9*doC)/5 + 32
    document.write("Độ F là "+ F);
}

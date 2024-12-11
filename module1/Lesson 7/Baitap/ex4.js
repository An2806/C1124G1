// Hàm tính chu vi hình tròn
function calculateCircumference() {
    // Lấy giá trị bán kính từ ô input
    const radius = document.getElementById("radius").value;

    // Kiểm tra nếu người dùng chưa nhập hoặc nhập giá trị không hợp lệ
    if (radius === "" || radius <= 0) {
        document.getElementById("result").innerText = "Vui lòng nhập bán kính hợp lệ!";
        return;
    }
    // Tính chu vi (C = 2 * π * r)
    const circumference = 2 * Math.PI * radius;}
    // Hiển thị kết quả
     document.getElementById("result").innerText =
        `Chu vi hình tròn là: ${circumference.toFixed(2)};
}

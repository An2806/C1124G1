function checkMonth() {
    let t = parseInt(document.getElementById("month").value);
    switch (t) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            alert(`Thang ${t} có 31 ngày`);
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            alert(`Thang ${t} có 30 ngày`);
            break;
        case 2:
            alert(`Thang ${t} có 28 ngày hoặc 29 ngày`);
            break;
        default:
            alert(`Ko có tháng ${t} hợp lệ`);
    }
}

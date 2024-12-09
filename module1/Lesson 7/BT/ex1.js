inputvatly= prompt("Điểm Lý học")
inputhoahoc= prompt ("Điểm hóa học")
inputsinhhoc= prompt ("Điểm sinh học")
let Ly= parseInt(inputvatly);
let Hoa=parseInt(inputhoahoc);
let Sinh= parseInt(inputsinhhoc)
let area =Ly + Hoa + Sinh;
let dula = area /3
document.write("tổng của từng điểm là " + area)
document.write("<br>");
document.write("Điểm trung bình là " + dula);
let star1 =["Polaris", "Aldebaran", "Deneb", "Vega", "Altair", "Dubhe", "Regulus"]
let star2 = ["Ursa Minor", "Tarurus", "Cygnus","Lyra","Aquila", "Ursa Majo","Leo"]

function check_star(star) {
    let index_star = 0;
    let result = "";
    for (let i = 0; i < star1.length; i++) {
        if (star === star1[i]) {
            index_star = i;
            for (let j = i + 1; j < star2.length; j++) {
                if (index_star === star2[j]) {
                    result = star2[j];
                    return result;
                } else {
                    result = "Không tìm thấy chòm sao"
                    return result;
                }
            }
        } else {
            result = "Không tìm thấy chòm sao"
            return result;
        }
    }
}
var star =promt("Nhập vào tên của ngôi sao");
document.write(check_star(star));

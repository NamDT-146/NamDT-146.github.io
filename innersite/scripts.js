var i = 0;
var txt = 'CHÚC CHỊ TUỔI 19 VUI VẺ YÊU ĐỜI, XINH NHƯ BHX, SỐNG LÂU TRĂM TUỔI, KHÔNG ĐAU LƯNG MỎI GỐI NHƯNG CÓ NGƯỜI TRONG LÒNG ĐỂ MỎI MONG, ĐỘC TÔN TRÊN ĐƯỜNG QUAN LỘ NHƯNG KHÔNG ĐỘC HÀNH TRÊN ĐƯỜNG TÌNH DUYÊN';
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typing-text").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter()

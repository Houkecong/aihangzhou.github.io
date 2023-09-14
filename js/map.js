window.onload = function () {
    setTimeout(function () {
        var div = document.getElementById('tip_1');
        div.style.display = 'none';
    }, 1000);
    setTimeout(function () {
        var div1 = document.getElementById('cloud_left');
        div1.style.display = 'none';
        var div2 = document.getElementById('cloud_right');
        div2.style.display = 'none';
    }, 4000);
    
    
     // 获取参数
        var urlParams = new URLSearchParams(window.location.search);
        var pass_index = urlParams.get("param");
       if(pass_index=='1'){
        index=1;
       }
       if(pass_index=='2'){
        index=2;
       }
       if(pass_index=='3'){
        index=3;
       }
       if(pass_index=='4'){
        index=4;
       }
        switch (index) {
            case 2:
                var tong1 = document.getElementById("tong1");
                tong1.style.display = 'block';
                var san1 = document.getElementById("san1");
                san1.style.display = 'none';
                var san2 = document.getElementById("san2");
                san2.style.display = 'none';
                break;
            case 3:
                var tong1 = document.getElementById("tong1");
                tong1.style.display = 'block';
                var san1 = document.getElementById("san1");
                san1.style.display = 'none';
                var san2 = document.getElementById("san2");
                san2.style.display = 'none';
                var tong2 = document.getElementById("tong2");
                tong2.style.display = 'block';
                var qiu1 = document.getElementById("qiu1");
                qiu1.style.display = 'none';
                var qiu2 = document.getElementById("qiu2");
                qiu2.style.display = 'none';
                break;
                case 4:
                    var tong1 = document.getElementById("tong1");
                    tong1.style.display = 'block';
                    var tong3 = document.getElementById("tong3");
                    tong3.style.display = 'block';
                    var san1 = document.getElementById("san1");
                    san1.style.display = 'none';
                    var san2 = document.getElementById("san2");
                    san2.style.display = 'none';
                    var tong2 = document.getElementById("tong2");
                    tong2.style.display = 'block';
                    var qiu1 = document.getElementById("qiu1");
                    qiu1.style.display = 'none';
                    var qiu2 = document.getElementById("qiu2");
                    qiu2.style.display = 'none';

                    document.getElementById('jieshu').style.display='block';
                    break;
            default:
                break;
        }

    
    
}

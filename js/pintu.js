var oBox = document.getElementById("box")
    var box = document.querySelectorAll("span");

    function Box(boxName) {
        boxName.onmousedown = function (eve) {
            var e = eve || window.event;
            var cSpan = document.createElement("span");
            cSpan.style.background = getComputedStyle(boxName).background;
            cSpan.style.top = boxName.offsetTop + "px";
            cSpan.style.left = boxName.offsetLeft + "px";
            cSpan.className = "cBox"
            oBox.appendChild(cSpan)
            var offsetX = e.pageX - cSpan.offsetLeft;
            var offsetY = e.pageY - cSpan.offsetTop;
            document.onmousemove = function (eve) {
                var e = eve || window.event;
                cSpan.style.left = e.pageX - offsetX + "px";
                cSpan.style.top = e.pageY - offsetY + "px";
            }
            document.onmouseup = function () {
                document.onmousemove = null;
                var spans = oBox.getElementsByTagName("span")
                var minSpan = null;
                var min = 1000;
                for (var i = 0; i < spans.length - 1; i++) {
                    var span = spans[i];
                    var dis = distance(cSpan, span);
                    if (dis <= min) {
                        min = dis;
                        minSpan = span;
                    }
                }
                var lsColor = getComputedStyle(minSpan).background;
                minSpan.style.background = getComputedStyle(boxName).background;
                boxName.style.background = lsColor;
                oBox.removeChild(cSpan);
                document.onmouseup = null;
            }
            return false;
        }
    }

    function distance(span1, span2) {
        var a = span1.offsetLeft - span2.offsetLeft;
        var b = span1.offsetTop - span2.offsetTop;
        var c = Math.sqrt(a * a + b * b);
        return c;
    }
    for (var i = 0; i < box.length; i++) {
        Box(box[i]);
    }
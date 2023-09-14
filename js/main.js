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

}

var jieshao_cong1_word_index = 1;
function jieshao_cong1_changeContent() {

    var word = document.getElementById("word");
    var word1 = "你好，同学！欢迎来到《AI赋能杭州亚运》的科技之旅！我叫琮琮，我是杭州亚运会吉祥物之一。让我来为你介绍这趟旅程吧！";
    var word2 = "放眼杭城，杭州亚运会即将启幕。承载着历史古韵的杭州，迎接未来的潮流，AI与杭州亚运相融，续写新传奇。";
    var word3 = "这趟旅途，你将会去杭州三个著名的地方闻关，同时你会学习到人工智能知识，家家、莲莲两位杭州亚运会的吉祥物也会为你保驾护航!";
    var word4 = "接下来，你将进入地图，请选择你的关卡来完成这次旅程吧 !";
    jieshao_cong1_word_index += 1;
    switch (jieshao_cong1_word_index) {
        case 2:
            word.innerHTML = word2;
            break;
        case 3:
            word.innerHTML = word3;
            break;
        case 4:
            word.innerHTML = word4;
            break;
        case 5:
            window.location.href = "./map.html";
            break;
        default:
            break;
    }
}
var jieshao_cong2_word_index = 1;
function jieshao_cong2_changeContent() {

    var word = document.getElementById("word");
    var word1 = "欢迎来到第一关！人工智能在杭州亚运会中有着不可替代的作用，比如亚运在线平台、智能场馆应用、自动驾驶应用等。";
    var word2 = "这里有一本书，希望你能用心阅读，了解里面所讲的人工智能的知识，看完后会有题目等你来回答哦！";
    jieshao_cong2_word_index += 1;
    switch (jieshao_cong2_word_index) {
        case 2:
            word.innerHTML = word2;
            break;
        case 3:
            window.location.href = "./book.html";
            break;
        default:
            break;
    }
}
var first_index = 1;

function first_changeContent() {

    var word = document.getElementById("word");
    var word1 = "接下来，我将问你几个问题，然后你在上面的四个选项中点击你认为正确的答案就可以啦，让我们开始吧！";
    var word2 = "让我们开始第一轮。第一个问题是：“人工智能最主要的研究领域是什么？”";
    var word3 = "正确答案是A。机器学习是人工智能的一个重要研究领域它致力于让计算机通过从数据中学习和优化算法，自动改进和话应任务，从而实现智能化。";
    var word4 = "第二个问题是下面哪个不是人工智能的一个应用领域?";
    var word5 = "正确答案是C。虽然人工智能在医疗诊断和自动驾驶等领域有广泛应用，但尽管A可以辅助文学创作，但创造性的思维和情感理解仍然是人类独有的能力。";
    var word6 = "第三个问题是人工智能主要使用哪种类型的数据来进行学习和训练?";
    var word7 = "正确答案是B。";
    var word8 = "人工智能可以使用图像、文本和数值等不同类型的数据进行学习和训练。但在自然语言处理、丈本分析和机器翻译等领域，文本数据是非常重要的输入源。";
    var word9 = "问答环节结束。恭喜你，闯关成功！";
    var word10 = "接下来请进入下一关。";
    word1 = document.getElementById('word1');
    op1 = document.getElementById('op1');
    word2 = document.getElementById('word2');
    op2 = document.getElementById('op2');
    word3 = document.getElementById('word3');
    op3 = document.getElementById('op3');
    first_index += 1;
    switch (first_index) {
        case 2:
            word.innerHTML = "让我们开始第一轮。第一个问题是：“人工智能最主要的研究领域是什么？”";
            word1.style.display = 'block';
            op1.style.display = 'block';
            word2.style.display = 'block';
            op2.style.display = 'block';
            word3.style.display = 'block';
            op3.style.display = 'block';
            break;
        case 3:
            word.innerHTML = "正确答案是A。机器学习是人工智能的一个重要研究领域它致力于让计算机通过从数据中学习和优化算法，自动改进和话应任务，从而实现智能化。";
            break;
        case 4:
            word.innerHTML = word4;
            word1.innerHTML = 'A. 医疗诊断';
            word2.innerHTML = 'B. 自动驾驶';
            word3.innerHTML = 'C. 文学创作';
            break;
        case 5:
            word.innerHTML = word5;
            break;
        case 6:
            word.innerHTML = word6;
            word1.innerHTML = 'A. 图像数据';
            word2.innerHTML = 'B. 文本数据';
            word3.innerHTML = 'C. 数值数据';
            break;
        case 7:
            word.innerHTML = word7;
            break;
        case 8:
            word.innerHTML = word8;
            break;
        case 9:
            word.innerHTML = word9;
            word1.style.display = 'none';
            op1.style.display = 'none';
            word2.style.display = 'none';
            op2.style.display = 'none';
            word3.style.display = 'none';
            op3.style.display = 'none';
            break;
        case 10:
            word.innerHTML = word10;
            break;
        case 11:
            // 设置参数
            var paramValue = "2";
            var urlParams = new URLSearchParams(window.location.search);
            urlParams.set("param", paramValue);

            // 跳转到另一个网页，并将参数带上
            window.location.href = "map.html?" + urlParams.toString();

            break;
        default:
            break;
    }
}
    var chen_index = 1;
    function second() {
        var word = document.getElementById("word");
        var word1 = "接下来，我将问你几个问题，然你好，同学！欢迎来到《AI赋能杭州亚运》的科技之旅！我叫琮琮，我是杭州亚运会吉祥物之一。让我来陪你闯第二关吧！后你在上面的四个选项中点击你认为正确的答案就可以啦，让我们开始吧！";
        var word2 = "在这一关里，我将带领你了解机器学习算法。";
        var word3 = "机器学习算法是一种让计算机学习和变得更加聪明的技术。它通过大量的数据来训练计算机，使其能够自动识别模式、做出预测和做出决策。";
        var word4 = "接下来，我们来做一下水果分类的问题吧！在这个过程中，我会告诉你操作步骤，需要你点击相应按钮执行操作。";
        var word5 = "首先，我们需要收集许多关于水果的数据。我们可以测量水果的属性，例如重量、颜色、形状等。我们会在计算机中记录这些数据，以便后续使用。";
        var word6 = "点击上方的“记录”按钮就可以执行这个操作了。";
        var word7 = "接下来，我们需要使用机器学习算法来训练我们的模型。我们将向计算机展示大量已经正确分类的水果样本，并告诉它每种水果的特征。";
        var word8 = "点击上方的“导入”按钮，就可以把收集的数据导入到计算机里了。计算机将根据这些数据找出规律并进行学习。";
        var word9 = "然后，我们可以使用这个训练有素的模型来预测新水果的分类。";
        var word10 = "当我们有一种新水果时，我们只需提供该水果的特征，比如其重量和颜色。机器学习模型会根据之前所学到的知识，分析这些特征并预测出这个水果属于哪一类。";
        var word11 = "让我们来试试吧！点击上方的预测按钮就可以把这个水果的特征导入模型中，模型就会预测出这个水果的种类。";
        var word12 = "通过反复训练和测试，我们的机器学习模型会不断提高准确性，变得更加智能。这就是机器学习算法解决水果分类问题的基本过程。";
        var word13 = "这就是机器学习算法的水果分类问题解决的主要过程。"
        var word14 = "恭喜你！通过了第二关！";
        // word1 = document.getElementById('word1');
        // op1 = document.getElementById('op1');
        // word2 = document.getElementById('word2');
        // op2 = document.getElementById('op2');
        // word3 = document.getElementById('word3');
        // op3 = document.getElementById('op3');
        var ban = document.getElementById("ban");
        var shuiguo = document.getElementById("shuiguo");
        var biaoge = document.getElementById("biaoge");
        var button_op_word = document.getElementById("button_op_word");
        var jiantou = document.getElementById("jiantou");
        // var ban=document.getElementById("ban");
        chen_index+= 1;
        switch (chen_index) {
            case 2:
                // word.innerHTML = "让我们开始第一轮。第一个问题是：“人工智能最主要的研究领域是什么？”";
                // word1.style.display = 'block';
                // op1.style.display = 'block';
                // word2.style.display = 'block';
                // op2.style.display = 'block';
                // word3.style.display = 'block';
                // op3.style.display = 'block';
                word.innerHTML = word2;
                break;
            case 3:
                word.innerHTML = word3;
                // word.innerHTML = "正确答案是A。机器学习是人工智能的一个重要研究领域它致力于让计算机通过从数据中学习和优化算法，自动改进和话应任务，从而实现智能化。";
                break;
            case 4:
                word.innerHTML = word4;
                // word1.innerHTML = 'A. 医疗诊断';
                // word2.innerHTML = 'B. 自动驾驶';
                // word3.innerHTML = 'C. 文学创作';
                ban.style.display = "block";
                break;
            case 5:
                word.innerHTML = word5;
                break;
            case 6:
                word.innerHTML = word6;
                // word1.innerHTML = 'A. 图像数据';
                // word2.innerHTML = 'B. 文本数据';
                // word3.innerHTML = 'C. 数值数据';
                break;
            case 7:
                word.innerHTML = word7;
                shuiguo.style.backgroundImage="url(./image/second/daima.png)";
                shuiguo.style.top="36%"
                biaoge.style.backgroundImage="url(./image/second/biaoge.png)";
                button_op_word.innerHTML="导入";
                jiantou.style.backgroundImage="url(./image/second/jiantou_1.png)";
                break;
            case 8:
                word.innerHTML = word8;
                break;
            case 9:
                word.innerHTML = word9;
                // word1.style.display = 'none';
                // op1.style.display = 'none';
                // word2.style.display = 'none';
                // op2.style.display = 'none';
                // word3.style.display = 'none';
                // op3.style.display = 'none';
                break;
            case 10:
                word.innerHTML = word10;
                biaoge.style.backgroundImage="url(./image/second/lizhi.webp)";
                biaoge.style.height="30%";
                biaoge.style.top="28%";
                biaoge.style.left="64%";
                button_op_word.innerHTML="预测";
                break;
            case 11:
                word.innerHTML = word11;
                break;
            case 12:
                word.innerHTML = word12;
                break;
            case 13:
                ban.style.display="none";
                word.innerHTML = word13;
                break;
            case 14:
                word.innerHTML = word14;
                break;
            case 15:
                // 设置参数
                var paramValue = "3";
                var urlParams = new URLSearchParams(window.location.search);
                urlParams.set("param", paramValue);
                // 跳转到另一个网页，并将参数带上
                window.location.href = "map.html?" + urlParams.toString();
                break;
            default:
                break;
        }
    }
    var lian1_index = 1;
    function lian1_changeContent() {
    
        var word = document.getElementById("word");
        var word2 = "在学习开始之前，我们先完成一张拼图吧！待会儿，你将会学到更多东西！";
        var word3 = "拖动对应的拼图小块到相应位置就可以完成拼图哦！一起来试试吧！";
        jieshao_cong1_word_index += 1;
        switch (jieshao_cong1_word_index) {
            case 2:
                word.innerHTML = word2;
                break;
            case 3:
                word.innerHTML = word3;
                break;
            case 4:
                window.location.href = "./pintu.html";
                break;
            default:
                break;
        }
    }
    var lian2_index = 1;
    function lian2_changeContent() {
    
        var word = document.getElementById("word");
        var word2 = "你知道人工智能是怎么完成拼图的吗？让我来告诉你吧！";
        var word3 = "人工智能把拼图的每个块都用数字或标志表示，并记录它们的位置。就像玩具拼图中的每个块都有自己的形状和位置一样。";
        var word3 ="人工智能会试着找到一种移动方案，将拼图块一个个移动到正确的位置。它会尝试向上、向下、向左或向右移动拼图块，直到达到目标状态。";
        var word5="人工智能使用一种特殊的方法来估计当前拼图状态和目标状态之间的相似程度。它通过这个启发式函数来决定哪些移动更接近目标状态，从而指导它的搜索方向。";
        var word6="有些人工智能还会通过训练和学习来提高自己解决拼图问题的能力。它们会反复尝试不同的移动方式，并根据结果来调整自己的行为，逐渐学会更加有效地解决拼图。";
        var word7="通过抽象化、分解、算法设计、迭代和逻辑推理等思维方式，人工智能高效地搜索并找到最优的解决方案。这些思维方式也是编程中常见的，对于解决其他复杂问题也具有指导作用。";
        var word8="你还记得你在拼图过程中是怎么完成拼图的吗？和人工智能拼图的方式联系思考一下，你会发现更多的东西哦！";
        var word9="恭喜你顺利通过第三关！";
        
        
        lian2_index += 1;
        switch (lian2_index) {
            case 2:
                word.innerHTML = word2;
                break;
            case 3:
                word.innerHTML = word3;
                break;
            case 4:
                word.innerHTML = word4;
                break;
                case 5:
                word.innerHTML = word5;
                break;
                case 6:
                word.innerHTML = word6;
                break;
                case 7:
                word.innerHTML = word7;
                break;
                case 8:
                word.innerHTML = word8;
                break;
                case 9:
                word.innerHTML = word9;
                break;
                case 10:
                 // 设置参数
                var paramValue = "4";
                var urlParams = new URLSearchParams(window.location.search);
                urlParams.set("param", paramValue);
                // 跳转到另一个网页，并将参数带上
                window.location.href = "map.html?" + urlParams.toString();
                break;
            default:
                break;
        }
    }

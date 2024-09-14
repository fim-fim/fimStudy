//初期処理
//関数宣言
const displayChange = (id,change) => {
    //注意：document.getElementのみが対象です
    id.style.display = change;
}
//変数宣言(数値)
var minute = 0;
var hours = 0;
var view = 0;
var studyTime = 0;
//変数宣言(documentID)
var lobby = document.getElementById('lobby');
var main = document.getElementById('main');
var functionsDisplay = document.getElementById('functionsDisplay');
var calculatorDisplay = document.getElementById('calculatorDisplay');
var freeSpaceDisplay = document.getElementById('freeSpaceDisplay');
var infoDisplay = document.getElementById('infoDisplay');
var announceDisplay = document.getElementById('announceDisplay');
var siteInfoDisplay = document.getElementById('siteInfoDisplay');
//表示非表示処理
displayChange(lobby,"block");
displayChange(main,"none");
displayChange(functionsDisplay,"none");
displayChange(calculatorDisplay,"none");
displayChange(freeSpaceDisplay,"none");
displayChange(infoDisplay,"none");
displayChange(announceDisplay,"none");
displayChange(siteInfoDisplay,"none");

////////////////////////////////////////////////////////////////////////////////////////
//ホームボタン
document.getElementById('homeBtn').addEventListener("click",()=>{
    displayChange(lobby,"block");
    displayChange(main,"none");
    displayChange(functionsDisplay,"none");
    displayChange(infoDisplay,"none");
})
//お知らせ
document.getElementById('AnnounceBtn').addEventListener('click',()=>{
    displayChange(infoDisplay,"block");
    displayChange(announceDisplay,"block");
    displayChange(siteInfoDisplay,"none");
})
//サイト情報
document.getElementById('siteInfoBtn').addEventListener('click',()=>{
    displayChange(infoDisplay,"block");
    displayChange(announceDisplay,"none");
    displayChange(siteInfoDisplay,"block");
})
//機能一覧ボタン
document.getElementById('studyTimer').addEventListener("click",()=>{
    displayChange(lobby,"none");
    displayChange(main,"block");
})
//電卓
document.getElementById('calculator').addEventListener("click",()=>{
    displayChange(functionsDisplay,"block");
    displayChange(calculatorDisplay,"block");
    displayChange(freeSpaceDisplay,"none");
})
document.getElementById('calculatorSelect').addEventListener('click',()=>{
    var answerBf1 = Number(document.getElementById('calculatorInput1').value);
    var answerBf2 = Number(document.getElementById('calculatorInput2').value);
    console.log(typeof answerBf1)
    var calculatorOperator = document.getElementById('calculatorOperator');
    if(calculatorOperator.value == "+") document.getElementById('calculatorAnsText').textContent = answerBf1 + answerBf2;
    if(calculatorOperator.value == "-") document.getElementById('calculatorAnsText').textContent = answerBf1 - answerBf2;
    if(calculatorOperator.value == "×") document.getElementById('calculatorAnsText').textContent = answerBf1 * answerBf2;
    if(calculatorOperator.value == "÷") document.getElementById('calculatorAnsText').textContent = answerBf1 / answerBf2;
})
//フリースペース
document.getElementById('freeSpace').addEventListener('click',()=>{
    displayChange(functionsDisplay,"block");
    displayChange(freeSpaceDisplay,"block");
    displayChange(calculatorDisplay,"none");
})
//タイマー開始ボタン
document.getElementById('targetEditInputOption').addEventListener("click",()=>{
    var targetEditInput = document.getElementById('targetEditInput').value;
    var timerText = document.getElementById('timerText');
    minute = 0;
    hours = 0;
    document.getElementById('targetView2').textContent = targetEditInput + "（分）";
    minute = targetEditInput;
    if(targetEditInput < 10) {
        timerText.textContent = "00:0" + minute;
    }
    else if(targetEditInput < 60) {
        timerText.textContent = "00:"+minute;
    }
    else if(targetEditInput > 59) {
        while(true) {
            if(minute-60 > 2-3) {
                minute -= 60;
                hours ++;
            }
            else {
                break;
            }
        }
        if(hours < 10) {
            if(minute < 10) {
                timerText.textContent = "0"+hours+":"+"0"+minute;
            }
            else {
                timerText.textContent = "0"+hours+":"+minute;
            }
        }
        else {
            if(minute < 10) {
                timerText.textContent = hours+":"+"0"+minute;
            }
            else {
                timerText.textContent = hours+":"+minute;
            }
        }
    }
    var timer = setInterval(function() {
        minute --;
        studyTime ++;
        if(targetEditInput < 10) {
            timerText.textContent = "00:0" + minute;
        }
        else if(targetEditInput < 60) {
            timerText.textContent = "00:"+minute;
        }
        else if(targetEditInput > 59) {
            while(true) {
                if(minute-60 > 2-3) {
                    minute -= 60;
                    hours ++;
                }
                else {
                    break;
                }
            }
            if(hours < 10) {
                if(minute < 10) {
                    timerText.textContent = "0"+hours+":"+"0"+minute;
                }
                else {
                    timerText.textContent = "0"+hours+":"+minute;
                }
            }
            else {
                if(minute < 10) {
                    timerText.textContent = hours+":"+"0"+minute;
                }
                else {
                    timerText.textContent = hours+":"+minute;
                }
            }
        }
        var timeView = setInterval(function() {
            view ++;
            document.getElementById('targetView1').textContent = view + "（分）";
        },60000);
        if(minute == 0) {
            clearInterval(timer);
            clearInterval(timeView);
            document.getElementById('reportText').textContent = "目標達成";
            document.getElementById('reportText').style.color = "red";
            document.getElementById('studyTimeRecord').textContent = "合計勉強時間："+studyTime;
        }
    },60000)
})
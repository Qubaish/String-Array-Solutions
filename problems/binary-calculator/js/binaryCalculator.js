
function action(e) {
    const resVal = document.getElementById('res').innerHTML;
    document.getElementById('res').innerHTML = resVal + e.target.innerHTML;
}

function clear(e) {
    document.getElementById('res').innerHTML = '';
}

function calculate(e) {
    const resVal = document.getElementById('res').innerHTML;
    const dataArr = resVal.trim().split(/([\*\+-/])/g);
    const val1 = parseInt(dataArr[0], 2);
    const val2 = parseInt(dataArr[2], 2);
    const result = eval(`${val1} ${dataArr[1]} ${val2}`);
    document.getElementById('res').innerHTML = result.toString(2);
}


document.getElementById('btn0').onclick = action;
document.getElementById('btn1').onclick = action;
document.getElementById('btnSum').onclick = action;
document.getElementById('btnSub').onclick = action;
document.getElementById('btnMul').onclick = action;
document.getElementById('btnDiv').onclick = action;

document.getElementById('btnClr').onclick = clear;
document.getElementById('btnEql').onclick = calculate;

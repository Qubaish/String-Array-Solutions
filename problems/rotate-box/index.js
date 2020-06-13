function rotateBtns(){
    let obj = {
        1 : '',
        2 : '',
        3 : '',
        4 : '',
        5 : '5',
        6 : '',
        7 : '',
        8 : '',
        9 : '',
    }
    for(let i = 1; i < 10; i++){
        const data = String(i);
        if(data !== '5') {
            if( data === '1' || data === '4'){
                const data = document.getElementById("btn"+(i+3)).innerHTML;
                obj[i] = data;
            } else if( data === '6' || data === '9') {
                const data = document.getElementById("btn"+(i-3)).innerHTML;
                obj[i] = data;
            } else if (data === '7' || data === '8') {
                const data = document.getElementById("btn"+(i+1)).innerHTML;
                obj[i] = data;
            }else {
            const val = document.getElementById("btn"+(i-1)).innerHTML;
                obj[i] = val;
            }
        }
    }
    Object.keys(obj).forEach(key => {
        document.getElementById("btn"+key).innerHTML = obj[key];
    })
}
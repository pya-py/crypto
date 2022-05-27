export const seperateDigits = (num) => {
    let str = "";
    let res = "";
    let dotpassed =  false;
    if(Math.floor(num) === num){
        str = num.toString();
        dotpassed = true;
    }
    else str = num.toFixed(2);
    for (let i = str.length - 1, c = 0; i >= 0; i --) {
        if(str[i] === '.') dotpassed = true;
        if(c > 0 && c % 3 === 0) res = "," + res;
        res = str[i] + res;
        if(dotpassed) c++;
    }
    return res;
}
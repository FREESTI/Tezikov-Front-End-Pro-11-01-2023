let numOrStr = prompt('input number or string');
console.log(numOrStr);
switch (numOrStr && numOrStr.trim() && String(+numOrStr)) {
    case null:
        alert('ви скасували');
        break;
    case '':
        alert('Empty String');
        break
    case 'NaN':
        alert('number is Ba_NaN');
        break;
    default:
        alert('OK!');
}
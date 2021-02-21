// 不使用状态机
// function match(str) {
//     let findA = false;
//     let findB = false;
//     let findC = false;
//     let findD = false;
//     let findE = false;
//     for (let s of str) {
//         if (s === 'a') {
//             findA = true;
//         }else if (findA && s === 'b') {
//             findB = true;
//         }else if (findB && s === 'c') {
//             findC = true;
//         }else if (findC && s === 'd') {
//             findD = true;
//         }else if (findD && s === 'e') {
//             findE = true;
//         }else if (findE && s === 'f') {
//             return true;
//         }else {
//             findA = false;
//             findB = false;
//             findC = false;
//             findD = false;
//             findE = false;
//         }
//     }
//     return false;
// }


function match(str) {
    let state = start;
    for (let c of str) {
        state = state(c);
    }

    return state === end;
}

function start(c) {
    if (c === 'a') {
        return foundA;
    }else {
        return start;
    }
}

function end(c) {
    return end;
}

function foundA(c) {
    if (c === 'b') {
        return foundB;
    }else {
        return start(c);
    }
}

function foundB(c) {
    if (c === 'c') {
        return foundC;
    }else {
        return start(c);
    }
}

function foundC(c) {
    if (c === 'd') {
        return foundD;
    }else {
        return start(c);
    }
}

function foundD(c) {
    if (c === 'e') {
        return foundE;
    }else {
        return start(c);
    }
}

function foundE(c) {
    if (c === 'f') {
        return end;
    }else {
        return start(c);
    }
}

console.log(match('ababcdeef'));
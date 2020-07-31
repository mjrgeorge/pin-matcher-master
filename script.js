//GENERATE PIN BUTTON HANDLER
function pinGenerate() {
    let generatePin = Math.random() * 9000 + 1000;
    generatePin = Math.floor(generatePin);
    document.getElementById('generate_display').value = generatePin;
};

function insert(num) {
    document.getElementById('calc_display').value += num;
};

function backSpace() {
    let num = document.getElementById('calc_display').value;
    document.getElementById('calc_display').value = num.substring(0, num.length - 1);
};

function clean() {
    document.getElementById('calc_display').value = '';
};

// //SUBMIT BUTTON HANDLER
// let misMatchedCount = 0;

// function isMatched() {
//     let generatePin = document.getElementById('generate_display').value;
//     let displayPin = document.getElementById('calc_display').value;
//     if (generatePin == displayPin) {
//         document.getElementById('matched').style.display = 'block';
//         document.getElementById('mis_matched').style.display = 'none';
//     } else {
//         document.getElementById('matched').style.display = 'none';
//         document.getElementById('mis_matched').style.display = 'block';
//         misMatchedCount++;
//         tryLeft();
//     };
// };

// function tryLeft() {
//     switch (misMatchedCount) {
//         case 1:
//             document.getElementById('action_left').innerText = '2 try left';
//             break;
//         case 2:
//             document.getElementById('action_left').innerText = '1 try left';
//             break;
//         default:
//             document.getElementById('action_left').style.display = 'none';
//             document.getElementById('calc_display').setAttribute("disabled", "");
//             document.getElementById('submit_btn').setAttribute("disabled", "");
//             break;
//     };
// };
//SUBMIT BUTTON HANDLER
let misMatchedCount = 0;

function isMatched() {
    let generatePin = document.getElementById('generate_display').value;
    let displayPin = document.getElementById('calc_display').value;
    if (generatePin == displayPin) {
        document.getElementById('matched').style.display = 'block';
        document.getElementById('mis_matched').style.display = 'none';
    } else {
        document.getElementById('matched').style.display = 'none';
        document.getElementById('mis_matched').style.display = 'block';
        misMatchedCount++;
        tryLeft();
    };
};

function tryLeft() {
    switch (misMatchedCount) {
        case 1:
            document.getElementById('action_left').innerText = '2 try left';
            break;
        case 2:
            document.getElementById('action_left').innerText = '1 try left';
            break;
        case 3:
            document.getElementById('action_left').innerText = '0 try left';
            break;
        default:
            document.getElementById('action_left').innerText = 'Sorry, you are not eligible';
            document.getElementById('submit_btn').setAttribute("disabled", "");
            break;
    };
};
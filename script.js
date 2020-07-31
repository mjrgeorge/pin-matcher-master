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
    let n = document.getElementById('calc_display').value;
    document.getElementById('calc_display').value = n.substr(0, n.length - 1);
};

function clean() {
    document.getElementById('calc_display').value = '';
};

//SUBMIT BUTTON HANDLER
function isMatched() {
    let generatePin = document.getElementById('generate_display').value;
    let displayPin = document.getElementById('calc_display').value;

    if (generatePin == displayPin) {
        document.getElementById('matched').style.display = 'block';
        document.getElementById('mis_matched').style.display = 'none';
    } else {
        document.getElementById('matched').style.display = 'none';
        document.getElementById('mis_matched').style.display = 'block';
    }
};
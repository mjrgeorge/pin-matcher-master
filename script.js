//GENERATE PIN BUTTON HANDLER
document.getElementById('generate_btn').addEventListener('click', function () {
    let generatePin = Math.random() * 9000 + 1000;
    generatePin = Math.floor(generatePin);
    generateDisplay = document.getElementById('generate_display').value = generatePin;
})

function insert(num) {

    document.getElementById('calc_display').value += num;
}

function backSpace() {
    let n = document.getElementById('calc_display').value;
    document.getElementById('calc_display').value = n.substr(0, n.length - 1);

}

function clean() {
    document.getElementById('calc_display').value = '';
}
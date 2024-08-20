function allclear() {
    document.querySelector('input[name="display"]').value = '';
}

function deleteLast() {
    const display = document.querySelector('input[name="display"]');
    display.value = display.value.slice(0, -1);
}
function addDot() {
    document.querySelector('input[name="display"]').value += '.';
}
function dividefunc(){
    document.querySelector('input[name="display"]').value += '/';
}
function mulfunc() {
    document.querySelector('input[name="display"]').value += '*';
}
function subfunc(){
    document.querySelector('input[name="display"]').value += '-';
}
function addfunc() {
    document.querySelector('input[name="display"]').value += '+';
}
function dividefunc(){
    document.querySelector('input[name="display"]').value += '/';
}
function calculate() {
    let value = document.querySelector('input[name="display"]').value;
    document.querySelector('input[name="display"]').value = eval(value);
}
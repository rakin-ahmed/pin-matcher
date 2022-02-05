function clicked(digit) {
    var current = document.getElementById('display').value
    var newDisplay = current + digit
    document.getElementById('display').value = newDisplay
    removeComment()
}
function erase() {
    document.getElementById('generateDisplay').value = ""
    document.getElementById('display').value = ""
    removeComment()
}
function deleteDigit() {
    var current = document.getElementById('display').value
    var current = Array.from(current)
    current.pop()
    var current2 = []
    for (let i = 0; i < current.length; i++) {
        current2.push(parseInt(current[i]))
    }
    var current2 = current.toString();
    var current2 = current2.replaceAll(",", "")
    document.getElementById('display').value = current2
    removeComment()
}
function generate() {
    var generate = Math.random() * 10000
    var generate = generate.toFixed(0)
    if (generate < 1000) {
        var generate = parseInt(generate) + 1000
        document.getElementById('generateDisplay').value = generate
    }
    document.getElementById('generateDisplay').value = generate
    document.getElementById('display').value = ""
    removeComment()
}
function submit() {
    removeComment()
    var generate = document.getElementById('generateDisplay').value
    var display = document.getElementById('display').value
    console.log(typeof generate, generate);
    console.log(typeof display, display);
    if (generate > 0 && display > 0) {
        if (generate == display) {
            document.getElementById('correct').style.display = "block";
        } else {
            document.getElementById('false').style.display = "block";

        }
    }
}
function removeComment() {
    document.getElementById('correct').style.display = "none";
    document.getElementById('false').style.display = "none";
}

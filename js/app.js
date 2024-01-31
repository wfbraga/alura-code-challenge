



function encodeText() {
    let workText = document.getElementById('workText');
    let outputPlace = document.getElementById('outputPlace');
    let imgSearchPerson = document.getElementById('searchPerson');
    let initialMessage = document.getElementById('initialMessage');
    let btnCopiar = document.getElementById('btnCopiar');


    outputPlace.innerHTML = workText.value;
    outputPlace.style.visibility = 'visible';
    imgSearchPerson.style.display = 'none';
    initialMessage.style.display = 'none';
    btnCopiar.style.display = 'block';
}

function copyToClipboard() {

    let text = document.getElementById('outputPlace').innerText;
    console.log(text);
    navigator.clipboard.writeText(text);
}


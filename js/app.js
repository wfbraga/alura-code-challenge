document.addEventListener("DOMContentLoaded", function () {
  const inputText = document.getElementById('inputText');
  const outputPlace = document.getElementById('outputPlace');
  const imgSearchPerson = document.getElementById('searchPerson');
  const initialMessage = document.getElementById('initialMessage');
  const btnEncode = document.getElementById('btnEncode');
  const btnDecode = document.getElementById('btnDecode');
  const btnCopy = document.getElementById('btnCopy');

  /** TRANSLATIONS **/
  let portuguese = {
    typeHere: 'Digite seu texto aqui',
    warningMessage: 'Apenas letras minusculas e sem acento',
    encode: 'Criptografar',
    decode: 'Descriptografar',
    noMessage: 'Nenhuma Mensagem Encontrada',
    writeMessage: 'Escreva uma mensagem que queira codificar ou decodificar',
    copy: 'Copiar',
  }

  let spanish = {
    typeHere: 'Escribe tu texto aqui',
    warningMessage: 'Solo letras minusculas y sin acentos',
    encode: 'Criptografar',
    decode: 'Descriptografar',
    noMessage: 'Ninguna Mensage Encontrada',
    writeMessage: 'Escribe una mensaje que quieras codificar o decodificar',
    copy: 'Copiar',
  }

  /** LANGUAGE SWITCH **/





  /** THEME SWITCH **/

  const themeSwitchEl = document.getElementById('themeSwitch');
  const rootEl = document.documentElement;

  function switchTheme(e) {
    if (e.target.checked) {
      rootEl.style.setProperty('--color--background', '#1058af');
      rootEl.style.setProperty('--color-prymary', '#ffffff');
      rootEl.style.setProperty('--color-secondary', '#0A3871');
      rootEl.style.setProperty('--color-shadow', '#0A3871');
    }
    else {
      rootEl.style.setProperty('--color--background', '#E9ECF8');
      rootEl.style.setProperty('--color-prymary', '#0A3871');
      rootEl.style.setProperty('--color-secondary', '#ffffff');
      rootEl.style.setProperty('--color-shadow', '#d8d4d4');
    }
  }
  themeSwitchEl.addEventListener('change', switchTheme, false);

  /** COPY TO CLIPBOARD **/
  function copyToClipboard() {
    const text = outputPlace.innerText;
    inputText.value = text;
    navigator.clipboard.writeText(text);
    outputPlace.innerText = 'Copiado com sucesso!';
  }

  function encodeText() {
    const text = inputText.value;
    const encodedText = text
      .replace(/e/g, 'enter')
      .replace(/i/g, 'imes')
      .replace(/a/g, 'ai')
      .replace(/o/g, 'ober')
      .replace(/u/g, 'ufat');

    return encodedText;
  }

  function decodeText() {
    const text = inputText.value;
    const decodedText = text
      .replace(/enter/g, 'e')
      .replace(/imes/g, 'i')
      .replace(/ai/g, 'a')
      .replace(/ober/g, 'o')
      .replace(/ufat/g, 'u');

    return decodedText;
  }

  function processText(process) {
    imgSearchPerson.style.display = 'none';
    initialMessage.style.display = 'none';
    btnCopy.style.display = 'block';
    outputPlace.style.visibility = 'visible';

    if (process === 'encode') {
      console.log('teste encode');
      outputPlace.innerText = encodeText();
    } else if (process === 'decode') {
      console.log('teste decode');
      outputPlace.innerText = decodeText();
    }
  }

  btnEncode.addEventListener('click', () => {
    processText('encode');
  });

  btnDecode.addEventListener('click', () => {
    processText('decode');
  });

  btnCopy.addEventListener('click', copyToClipboard);
});

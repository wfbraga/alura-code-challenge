document.addEventListener("DOMContentLoaded", function () {
  const rootEl = document.documentElement;
  const themeInputEl = document.getElementById('themeSwitch');
  const languageInputEl = document.getElementById('lenguageSwitch');
  const inputTextEl = document.getElementById('inputText');
  const warningMessageEl = document.getElementById('warningMessage');
  const imgSearchPerson = document.getElementById('searchPerson');
  const initialMessage = document.getElementById('initialMessage');
  const noMessageFoundEl = document.getElementById('noMessageFound');
  const writeTextMessageEl = document.getElementById('writeTextMessage');
  const btnEncode = document.getElementById('btnEncode');
  const btnDecode = document.getElementById('btnDecode');
  const btnCopy = document.getElementById('btnCopy');


  /** TRANSLATIONS OBJECTS**/
  /**
    Each object "key" represents is name to reffer the html element in wich it its value will be placed
  **/
  let portugueseBr = {
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

  /** LANGUAGE TRANSLATION **/
  /** 
      This function puts the transaction inside each specified element as per the
    language parameter "lan" it receives that can be 'br' or 'sp'
  **/
  function translateLanguage(lang) {
    if (lang == 'pt-br') {
      inputTextEl.placeholder = portugueseBr.typeHere;
      warningMessageEl.innerText = portugueseBr.warningMessage;
      outputPlace.innerText = portugueseBr.typeHere;
      btnEncode.innerText = portugueseBr.encode;
      btnDecode.innerText = portugueseBr.decode;
      noMessageFoundEl.innerText = portugueseBr.noMessage;
      writeTextMessageEl.innerText = portugueseBr.writeMessage;
      btnCopy.innerText = portugueseBr.copy;
    }
    else if (lang == 'sp') {
      inputTextEl.placeholder = spanish.typeHere;
      warningMessageEl.innerText = spanish.warningMessage;
      outputPlace.innerHTML = spanish.typeHere;
      btnEncode.innerText = spanish.encode;
      btnDecode.innerText = spanish.decode;
      noMessageFoundEl.innerText = spanish.noMessage;
      writeTextMessageEl.innerText = spanish.writeMessage;
      btnCopy.innerText = spanish.copy;
    }
  }
  /** LANGUAGE THEME SWITCH **/
  /** 
      A workaround to the fact that that when changing the theme in css and javascript there is a conflict in
    background Image changes
  **/
  function switchLanguageTheme(e) {
    const langSpan = 'sp'
    const langPtBr = 'pt-br'
    switch (true) {
      case !themeInputEl.checked && !languageInputEl.checked:
        languageSpanSwitchClass.style.backgroundImage = "url('../assets/es-lang-ffffff.png')";
        translateLanguage(langPtBr);
        break;
      case !themeInputEl.checked && languageInputEl.checked:
        languageSpanSwitchClass.style.backgroundImage = "url('../assets/br-lang-0a3871.png')";
        translateLanguage(langSpan);
        break;
      case themeInputEl.checked && !languageInputEl.checked:
        languageSpanSwitchClass.style.backgroundImage = "url('../assets/br-lang-0a3871.png')";
        translateLanguage(langPtBr);
        break;
      case themeInputEl.checked && languageInputEl.checked:
        languageSpanSwitchClass.style.backgroundImage = "url('../assets/br-lang-ffffff.png')";
        translateLanguage(langSpan);
        break;
    }
  }
  languageInputEl.addEventListener('change', switchLanguageTheme, false);

  /** THEME SWITCH **/
  const languageSpanSwitchClass = document.querySelector('.slider-language');

  function switchTheme(e) {
    if (e.target.checked) {
      rootEl.style.setProperty('--color--background', '#1058af');
      rootEl.style.setProperty('--color-prymary', '#ffffff');
      rootEl.style.setProperty('--color-secondary', '#0A3871');
      rootEl.style.setProperty('--color-shadow', '#0A3871');
      if (languageInputEl.checked) {
        languageSpanSwitchClass.style.backgroundImage = "url('../assets/br-lang-ffffff.png')";
      } else if (languageInputEl.checked == false) {
        languageSpanSwitchClass.style.backgroundImage = "url('../assets/es-lang-0a3871.png')";
      }

    }
    else {
      rootEl.style.setProperty('--color--background', '#E9ECF8');
      rootEl.style.setProperty('--color-prymary', '#0A3871');
      rootEl.style.setProperty('--color-secondary', '#ffffff');
      rootEl.style.setProperty('--color-shadow', '#d8d4d4');
      if (languageInputEl.checked) {
        languageSpanSwitchClass.style.backgroundImage = "url('../assets/br-lang-0a3871.png')";
      } else if (languageInputEl.checked == false) {
        languageSpanSwitchClass.style.backgroundImage = "url('../assets/es-lang-ffffff.png')";
      }
    }
  }
  themeInputEl.addEventListener('change', switchTheme, false);


  /** COPY TO CLIPBOARD **/
  /** 
  The btnCopy button is hidden until the moment you user the btnDecode button.
  When the user clicks on the btnCopy button, the text in the outputPlace element is copied to the clipboard.
**/
  function copyToClipboard() {
    const text = outputPlace.innerText;
    inputTextEl.value = text;
    navigator.clipboard.writeText(text);
    outputPlace.innerText = 'Copiado com sucesso!';
  }

  /** EMCRYPTION SECTION**/
  /** 
      The .replace() method in JavaScript is used to replace a substring in a string with another substring.
      It tirerates over each letter in the text and replace it with the new one.
  **/
  function encodeText() {
    const str = inputTextEl.value;

    if (/[A-ZÀ-ÖØ-Þ]/.test(str)) {
      return "Use apenas letras minúsculas e sem acento";
    } else {

      const encodedText = str
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');

      return encodedText;
    }
  }

  function decodeText() {
    const str = inputTextEl.value;
    const decodedText = str
      .replace(/enter/g, 'e')
      .replace(/imes/g, 'i')
      .replace(/ai/g, 'a')
      .replace(/ober/g, 'o')
      .replace(/ufat/g, 'u');

    return decodedText;
  }
  /** PROCESS TEXT **/
  /**
      This function makes the text handling betwin encryption and decription gettin it,
      encrypting using encodeText() and putting it on outputPlace or
      decrypting using decodeText() and putting it back on textArea
  **/
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

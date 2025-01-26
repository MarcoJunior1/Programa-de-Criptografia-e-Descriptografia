function cifrar() {
    const message = document.getElementById("message").value;
    const shift = parseInt(document.getElementById("shift").value);
    let cipheredMessage = "";
  
    for (let i = 0; i < message.length; i++) {
      let char = message[i];
  
      if (char >= 'a' && char <= 'z') {
        cipheredMessage += String.fromCharCode((char.charCodeAt(0) - 97 + shift) % 26 + 97);
      } else if (char >= 'A' && char <= 'Z') {
        cipheredMessage += String.fromCharCode((char.charCodeAt(0) - 65 + shift) % 26 + 65);
      } else {
        cipheredMessage += char;
      }
    }
  
    document.getElementById("cipheredMessage").value = cipheredMessage;
  }
  
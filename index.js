// index.js
function getMyName() {
    const h1Element = document.getElementById('miNombre');
    console.log(h1Element)
    return h1Element ? h1Element.textContent : '';
  }
  
  module.exports = getMyName;
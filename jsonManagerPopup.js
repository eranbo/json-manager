(function() {
  'use strict';
  let input = document.createElement('input');
  input.setAttribute('type ', 'file');
  input.setAttribute('multiple');
  input.addEventListener('onchange', getSelectedFiles);


  function selectFiles() {
    console.log('calling click');
    input.click();
  }

  function getSelectedFiles() {
    let filesList = document.getElementById('loadedFiles');
    if (input.files.length === 0) {
      filesList.appendChild(document.createElement('li').appendChild(document.createTextNode('No files selected')));
    }
    else {
      filesList.appendChild(document.createElement('li').appendChild(document.createTextNode(`${input.files.length} files selected`)));
    }
  }

  document.getElementById('selectFiles').addEventListener('click', selectFiles);
})();
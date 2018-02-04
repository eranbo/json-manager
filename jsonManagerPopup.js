(function() {
  'use strict';
  let input = document.createElement('input');
  input.setAttribute('type', 'file');
  input.setAttribute('multiple', '');
  input.addEventListener('change', getSelectedFiles);


  function selectFiles() {
    input.click();
  }

  function getSelectedFiles() {
    let filesList = document.getElementById('loadedFiles');
    if (input.files.length === 0) {
      filesList.appendChild(document.createElement('li').appendChild(document.createTextNode('No files selected')));
    }
    else {
      for (let i = 0; i < input.files.length; i++) {
        let fileListItem = document.createElement('li');
        let fileTextNode = document.createTextNode(`${i + 1} ${input.files[i].name}`);
        fileListItem.appendChild(fileTextNode);
        filesList.appendChild(fileListItem);
      }
    }
  }

  document.getElementById('selectFiles').addEventListener('click', selectFiles);
})();
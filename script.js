// Vnesite svoj GitHub OAuth žeton
const authToken = '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';


// Podatki o repozitoriju
const owner = 'Index93';
const repo = 'produkti';

const fileSelector = document.getElementById('fileSelector');
const readButton = document.getElementById('readButton');
const updateButton = document.getElementById('updateButton');
const deleteButton = document.getElementById('deleteButton');
const addButton = document.getElementById('addButton');
const output = document.getElementById('output');



// Funkcija za pridobitev seznama datotek v repozitoriju
function getFilesList() {
  // URL za dostop do seznama datotek
  const apiUrl = `https://api.github.com/repos/${owner}/${repo}/contents`;

  // Zahtevek za pridobitev seznama datotek
  fetch(apiUrl, {
    method: 'GET',
    headers: {
      Authorization: `token ${authToken}`
    }
  })
    .then(response => response.json())
    .then(data => {
      data.forEach(file => {
        if (file.type === 'file') {
          const option = document.createElement('option');
          option.value = file.path;
          option.textContent = file.name;
          fileSelector.appendChild(option);
        }
      });
    })
    .catch(error => {
      console.error('Napaka pri pridobivanju seznama datotek: ' + error);
    });
}
getFilesList(); // Po nalaganju strani takoj pridobimo seznam datotek



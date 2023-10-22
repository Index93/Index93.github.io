let fileData;

readButton.addEventListener('click', () => {
    ReadFile();
});

function ReadFile() {
    selectedFile = fileSelector.value;
  
    // URL za dostop do izbrane datoteke
    const apiUrl = `https://api.github.com/repos/${owner}/${repo}/contents/${selectedFile}`;
  
    // Zahtevek za branje izbrane datoteke
    fetch(apiUrl, {
      method: 'GET',
      headers: {
        Authorization: `token ${authToken}`
      }
    })
      .then(response => response.json())
      .then(data => {
        // Dekodirajte šifrirano vsebino datoteke
        const content = atob(data.content);
        output.textContent = content;
        fileData = data.sha;
      })
      .catch(error => {
        output.textContent = 'Napaka pri branju datoteke: ' + error;
    });
}
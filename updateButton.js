

updateButton.addEventListener('click', () => {
    updateFile();
});
  

function updateFile() {
    if (selectedFile) {
        // Spremenite vsebino datoteke
        const updatedContent = JSON.stringify({ key: 'kuj neki ejga', updated: true }, null, 2);
    
        // URL za dostop do izbrane datoteke
        const apiUrl = `https://api.github.com/repos/${owner}/${repo}/contents/${selectedFile}`;
    
        // Zahtevek za posodobitev datoteke
        fetch(apiUrl, {
          method: 'PUT',
          headers: {
            Authorization: `token ${authToken}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            message: 'Posodobljeno preko API-ja',
            content: btoa(updatedContent),
            sha: fileData
          })
        })
          .then(response => response.json())
          .then(data => {
            //output.textContent = 'Datoteka uspešno posodobljena: ' + JSON.stringify(data, null, 2);
            output.textContent = 'Datoteka uspešno posodobljena!';
           
          })
          .catch(error => {
            output.textContent = 'Napaka pri posodabljanju datoteke: ' + error;
          });
    } else {
        output.textContent = 'Najprej izberite datoteko.';
    }
}
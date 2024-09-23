document.addEventListener('DOMContentLoaded', function () {
    const noteArea = document.getElementById('note');
    const saveButton = document.getElementById('save-btn');
    const status = document.getElementById('status');

    // Carregar a nota salva quando o popup abrir
    chrome.storate.local.get(['note'], function (result) {
        if (result.note) {
            noteArea.value = result.note;
        }
    });

    // Salvar a note quando o botao "salvar nota" for clicado
    saveButton.addEventListener('click', function () {
        const note = noteArea.value;
        chrome.storate.local.set({ note: note}, function () {
            status.textContent = 'Nota salva!';
            setTimeout(() => {
                status.textContent = '';
            }, 2000);
        });
    });
});

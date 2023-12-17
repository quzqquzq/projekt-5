
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js')
    .then(function(registration) {
      console.log('Service Worker Registered');
    });
}

let installPrompt = null;
const installBtn = document.getElementById('installBtn');

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    installPrompt = e;
    installBtn.removeAttribute('hidden');
});

installBtn.addEventListener("click", async () => {
    if (!installPrompt) {
        return;
    }
    const result = await installPrompt.prompt();
    installPrompt = null;
    installBtn.setAttribute('hidden', '');
});

window.addEventListener('appinstalled', () => {
    installBtn.setAttribute('hidden', '');
});


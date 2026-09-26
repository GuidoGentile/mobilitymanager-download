# MobilityManager — landing e download pubblici

Questo repository contiene la pagina pubblica di MobilityManager e i file di
verifica dell'installer Windows. Il codice di sviluppo vive separatamente nel
repository privato `GuidoGentile/MobilityManager`.

## Download

La versione di test **0.1.0-dev50.2** per Windows x64 è disponibile tramite il
[download diretto](https://raw.githubusercontent.com/GuidoGentile/mobilitymanager-download/61c06aea6117ee3ab68a3fa9c155fb6c969a88a0/downloads/MobilityManager-Setup-0.1.0-dev50.2-x64.exe).
Corregge l'errore «Unknown constant "userprofile"» nella scelta della cartella di lavoro.
La [landing page](https://guidogentile.github.io/mobilitymanager-download/)
rimanda direttamente all'installer.
Il pacchetto non è firmato digitalmente e non include dati personali né il
dataset territoriale italiano, che si installa separatamente nell'applicazione.

L'hash SHA-256 atteso è
`21a2e8c51071088225fdb2b77a83feb243d33af20100599336564c20300c47a2`.
Il [file di controllo](downloads/MobilityManager-Setup-0.1.0-dev50.2-x64.sha256.txt)
e il [manifest](downloads/MobilityManager-Setup-0.1.0-dev50.2-x64.json) sono
disponibili anche in questo repository. Per questa versione l'installer è
servito dal download diretto di GitHub, senza passare da una pagina Release
(GitHub Pages non rende raggiungibile l'eseguibile come risorsa del sito).

La landing è composta da `index.html`, `tecnologia.html` e `assets/`; non
contiene l'applicazione, i questionari o i piani locali.

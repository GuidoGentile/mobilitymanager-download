# MobilityManager — landing e download pubblici

Questo repository contiene la pagina pubblica di MobilityManager e i file di
verifica dell'installer Windows. Il codice di sviluppo vive separatamente nel
repository privato `GuidoGentile/MobilityManager`.

## Download

La versione di test **0.1.0-dev42** per Windows x64 è disponibile tramite il
[download diretto](https://raw.githubusercontent.com/GuidoGentile/mobilitymanager-download/f22c06e23ab3d63d31e138d7734022aba2230658/downloads/MobilityManager-Setup-0.1.0-dev42-x64.exe).
La [landing page](https://guidogentile.github.io/mobilitymanager-download/)
rimanda direttamente all'installer.
Il pacchetto non è firmato digitalmente e non include dati personali né il
dataset territoriale italiano, che si installa separatamente nell'applicazione.

L'hash SHA-256 atteso è
`25fce1b56859e1d212ab7ad735158c7aec10c1a5b835890026c6993ef6fbbc2b`.
Il [file di controllo](downloads/MobilityManager-Setup-0.1.0-dev42-x64.sha256.txt)
e il [manifest](downloads/MobilityManager-Setup-0.1.0-dev42-x64.json) sono
disponibili anche in questo repository. Per questa versione l'installer è
servito dal download diretto di GitHub, senza passare da una pagina Release
(GitHub Pages non rende raggiungibile l'eseguibile come risorsa del sito).

La landing è composta da `index.html`, `tecnologia.html` e `assets/`; non
contiene l'applicazione, i questionari o i piani locali.

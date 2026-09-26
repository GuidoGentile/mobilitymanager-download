# MobilityManager — landing e download pubblici

Questo repository contiene la pagina pubblica di MobilityManager e i file di
verifica dell'installer Windows. Il codice di sviluppo vive separatamente nel
repository privato `GuidoGentile/MobilityManager`.

## Download

La versione di test **0.1.0-dev50.3** per Windows x64 è disponibile tramite il
[download diretto](https://raw.githubusercontent.com/GuidoGentile/mobilitymanager-download/1e15a54930b2838b4df7d437e8b74ceb4285500f/downloads/MobilityManager-Setup-0.1.0-dev50.3-x64.exe).
La scelta delle cartelle avviene nelle pagine dell'installer con percorsi proposti e modificabili, senza una finestra separata.
La [landing page](https://guidogentile.github.io/mobilitymanager-download/)
rimanda direttamente all'installer.
Il pacchetto non è firmato digitalmente e non include dati personali né il
dataset territoriale italiano, che si installa separatamente nell'applicazione.

L'hash SHA-256 atteso è
`c8d8e9f177990a08f0c12e76b4d12559fbd6f3bdf8e768292f94cd943361b91e`.
Il [file di controllo](downloads/MobilityManager-Setup-0.1.0-dev50.3-x64.sha256.txt)
e il [manifest](downloads/MobilityManager-Setup-0.1.0-dev50.3-x64.json) sono
disponibili anche in questo repository. Per questa versione l'installer è
servito dal download diretto di GitHub, senza passare da una pagina Release
(GitHub Pages non rende raggiungibile l'eseguibile come risorsa del sito).

La landing è composta da `index.html`, `tecnologia.html` e `assets/`; non
contiene l'applicazione, i questionari o i piani locali.

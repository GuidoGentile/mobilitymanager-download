# MobilityManager — landing e download pubblici

Questo repository contiene la pagina pubblica di MobilityManager e i file di
verifica dell'installer Windows. Il codice di sviluppo vive separatamente nel
repository privato `GuidoGentile/MobilityManager`.

## Download

La versione di test **0.1.0-dev50.4** per Windows x64 è disponibile tramite il
[download diretto](https://raw.githubusercontent.com/GuidoGentile/mobilitymanager-download/0b6927ab099416fb4aa729e2538d007bd36d1797/downloads/MobilityManager-Setup-0.1.0-dev50.4-x64.exe).
La mappa del test della rete distingue ogni tratta OTP per modalità di trasporto.
La [landing page](https://guidogentile.github.io/mobilitymanager-download/)
rimanda direttamente all'installer.
Il pacchetto non è firmato digitalmente e non include dati personali né il
dataset territoriale italiano, che si installa separatamente nell'applicazione.

L'hash SHA-256 atteso è
`ac60664c4476e55cae32afa2b540b9ee7a0e8e56da6438ea6f01095205158b1d`.
Il [file di controllo](downloads/MobilityManager-Setup-0.1.0-dev50.4-x64.sha256.txt)
e il [manifest](downloads/MobilityManager-Setup-0.1.0-dev50.4-x64.json) sono
disponibili anche in questo repository. Per questa versione l'installer è
servito dal download diretto di GitHub, senza passare da una pagina Release
(GitHub Pages non rende raggiungibile l'eseguibile come risorsa del sito).

La landing è composta da `index.html`, `tecnologia.html` e `assets/`; non
contiene l'applicazione, i questionari o i piani locali.

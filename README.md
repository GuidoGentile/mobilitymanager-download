# MobilityManager — landing e download pubblici

Questo repository contiene la pagina pubblica di MobilityManager e i file di
verifica dell'installer Windows. Il codice di sviluppo vive separatamente nel
repository privato `GuidoGentile/MobilityManager`.

## Download

La versione di test **0.1.0-dev50.6** per Windows x64 è disponibile tramite il
[download diretto](https://raw.githubusercontent.com/GuidoGentile/mobilitymanager-download/0009bf5198ba0c498ab519c3054caadd691f833b/downloads/MobilityManager-Setup-0.1.0-dev50.6-x64.exe).
Nel piano Web, la mappa locale è predefinita; una tendina unica seleziona gli
sfondi online senza cambiare colori e simboli dei livelli tematici. La legenda
permette di attivare i singoli livelli e regolare linee, bordi e simboli.
La [landing page](https://guidogentile.github.io/mobilitymanager-download/)
rimanda direttamente all'installer.
Il pacchetto non è firmato digitalmente e non include dati personali né il
dataset territoriale italiano, che si installa separatamente nell'applicazione.

L'hash SHA-256 atteso è
`21bf3ef9a6faf1f53c66b56f675bc327ed437c96dfc448ab519e564503c7b2d8`.
Il [file di controllo](downloads/MobilityManager-Setup-0.1.0-dev50.6-x64.sha256.txt)
e il [manifest](downloads/MobilityManager-Setup-0.1.0-dev50.6-x64.json) sono
disponibili anche in questo repository. Per questa versione l'installer è
servito dal download diretto di GitHub, senza passare da una pagina Release
(GitHub Pages non rende raggiungibile l'eseguibile come risorsa del sito).

La landing è composta da `index.html`, `tecnologia.html` e `assets/`; non
contiene l'applicazione, i questionari o i piani locali.

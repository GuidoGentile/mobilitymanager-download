# MobilityManager — landing e download pubblici

Questo repository contiene la pagina pubblica di MobilityManager e i file di
verifica dell'installer Windows. Il codice di sviluppo vive separatamente nel
repository privato `GuidoGentile/MobilityManager`.

## Download

La versione di test **0.1.0-dev56.2** per Windows x64 è disponibile tramite il
[download diretto](https://github.com/GuidoGentile/mobilitymanager-download/releases/download/v0.1.0-dev56.2/MobilityManager-Setup-0.1.0-dev56.2-x64.exe).
Nel piano Web Liberty è lo sfondo iniziale quando c'è connessione. La mappa
locale resta nel file e subentra senza rete; una tendina unica seleziona gli
sfondi senza cambiare colori e simboli dei livelli tematici. La legenda
permette di attivare i singoli livelli e regolare linee, bordi e simboli.
La [landing page](https://guidogentile.github.io/mobilitymanager-download/)
rimanda direttamente all'installer.
Il pacchetto non è firmato digitalmente e non include dati personali né il
dataset territoriale italiano, che si installa separatamente nell'applicazione.

L'hash SHA-256 atteso è
`341b3730104d91a597f0d0175626ba8b85bd06784804e8c73de5342514c499d2`.
Il [file di controllo](downloads/MobilityManager-Setup-0.1.0-dev56.2-x64.sha256.txt)
e il [manifest](downloads/MobilityManager-Setup-0.1.0-dev56.2-x64.json) sono
disponibili anche in questo repository. L’installer è un allegato della release
GitHub: il pulsante della landing avvia direttamente il download.

La landing è composta da `index.html`, `tecnologia.html` e `assets/`; non
contiene l'applicazione, i questionari o i piani locali.

Novità dev56.2: cinque archivi territoriali indipendenti, Italia facoltativa,
preparazione in sequenza e riuso degli archivi verificati. Plugin locale esteso
a 37 strumenti e configurazione Windows corretta per i percorsi accentati.

È disponibile anche lo [ZIP con lo stesso installer](https://github.com/GuidoGentile/mobilitymanager-download/releases/download/v0.1.0-dev56.2/MobilityManager-Setup-0.1.0-dev56.2-x64.zip).
Dopo il download usa “Estrai tutto” e avvia l’eseguibile estratto.
SHA-256 ZIP: `8a38d4860995d11c0a631bab84ff18cdacb36f9060e6dd71e5fe222819279f00`.

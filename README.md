# MobilityManager — landing e download pubblici

Questo repository contiene la pagina pubblica di MobilityManager e i file di
verifica dell'installer Windows. Il codice di sviluppo vive separatamente nel
repository privato `GuidoGentile/MobilityManager`.

## Download

La versione di test **0.1.0-dev55.3** per Windows x64 è disponibile tramite il
[download diretto](https://github.com/GuidoGentile/mobilitymanager-download/releases/download/v0.1.0-dev55.3/MobilityManager-Setup-0.1.0-dev55.3-x64.exe).
Nel piano Web Liberty è lo sfondo iniziale quando c'è connessione. La mappa
locale resta nel file e subentra senza rete; una tendina unica seleziona gli
sfondi senza cambiare colori e simboli dei livelli tematici. La legenda
permette di attivare i singoli livelli e regolare linee, bordi e simboli.
La [landing page](https://guidogentile.github.io/mobilitymanager-download/)
rimanda direttamente all'installer.
Il pacchetto non è firmato digitalmente e non include dati personali né il
dataset territoriale italiano, che si installa separatamente nell'applicazione.

L'hash SHA-256 atteso è
`8ef0bd44da1edc6ceec44fd14f574c5cd0945b8bf75696dcccea4dbe8a3430af`.
Il [file di controllo](downloads/MobilityManager-Setup-0.1.0-dev55.3-x64.sha256.txt)
e il [manifest](downloads/MobilityManager-Setup-0.1.0-dev55.3-x64.json) sono
disponibili anche in questo repository. L’installer è un allegato della release
GitHub: il pulsante della landing avvia direttamente il download.

La landing è composta da `index.html`, `tecnologia.html` e `assets/`; non
contiene l'applicazione, i questionari o i piani locali.

Novità dev55.3: corretto il passaggio dei percorsi Windows a WSL per
installare e avviare Nominatim. I dati già acquisiti vengono conservati.
Restano incluse le correzioni Codex e le semplificazioni della scheda Dati territoriali.

È disponibile anche lo [ZIP con lo stesso installer](https://github.com/GuidoGentile/mobilitymanager-download/releases/download/v0.1.0-dev55.3/MobilityManager-Setup-0.1.0-dev55.3-x64.zip).
Dopo il download usa “Estrai tutto” e avvia l’eseguibile estratto.
SHA-256 ZIP: `fc3198db50295c21bd6c029e3554514ce44700a8a73a096cf90ee54992ae4512`.

# MobilityManager — landing e download pubblici

Questo repository contiene la pagina pubblica di MobilityManager e i file di
verifica dell'installer Windows. Il codice di sviluppo vive separatamente nel
repository privato `GuidoGentile/MobilityManager`.

## Download

La versione di test **0.1.0-dev57** per Windows x64 è disponibile tramite il
[download diretto](https://github.com/GuidoGentile/mobilitymanager-download/releases/download/v0.1.0-dev57/MobilityManager-Setup-0.1.0-dev57-x64.exe).
Nel piano Web Liberty è lo sfondo iniziale quando c'è connessione. La mappa
locale resta nel file e subentra senza rete; una tendina unica seleziona gli
sfondi senza cambiare colori e simboli dei livelli tematici. La legenda
permette di attivare i singoli livelli e regolare linee, bordi e simboli.
La [landing page](https://guidogentile.github.io/mobilitymanager-download/)
rimanda direttamente all'installer.
Il pacchetto non è firmato digitalmente e non include dati personali né il
dataset territoriale italiano, che si installa separatamente nell'applicazione.

L'hash SHA-256 atteso è
`5bc55afe26d00fbe091f1d934fd08cdb7999a037aa47c051f4ab7d9d3e71ebd0`.
Il [file di controllo](downloads/MobilityManager-Setup-0.1.0-dev57-x64.sha256.txt)
e il [manifest](downloads/MobilityManager-Setup-0.1.0-dev57-x64.json) sono
disponibili anche in questo repository. L’installer è un allegato della release
GitHub: il pulsante della landing avvia direttamente il download.

La landing è composta da `index.html`, `tecnologia.html` e `assets/`; non
contiene l'applicazione, i questionari o i piani locali.

Novità dev57: geocoder selezionabile tra Nominatim locale, Photon, Geoapify,
Mapbox Permanent e servizi JSON personali. Chiavi proprie, prova della connessione,
cambio senza riavvio e preparazione OTP senza Nominatim quando non selezionato.
Il plugin locale espone 40 strumenti. Le richieste a servizi esterni seguono le
condizioni del proprio account e inviano gli indirizzi cercati al fornitore.
I cinque archivi regionali e l’archivio Italia facoltativo restano disponibili.

È disponibile anche lo [ZIP con lo stesso installer](https://github.com/GuidoGentile/mobilitymanager-download/releases/download/v0.1.0-dev57/MobilityManager-Setup-0.1.0-dev57-x64.zip).
Dopo il download usa “Estrai tutto” e avvia l’eseguibile estratto.
SHA-256 ZIP: `625ad1437cadced48832c79f86ce04e3533a5657756a69b26a89807b8add9dff`.

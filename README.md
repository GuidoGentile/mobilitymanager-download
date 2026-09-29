# MobilityManager — landing e download pubblici

Questo repository contiene la pagina pubblica di MobilityManager e i file di
verifica dell'installer Windows. Il codice di sviluppo vive separatamente nel
repository privato `GuidoGentile/MobilityManager`.

## Download

La versione di test **0.1.0-dev55.2** per Windows x64 è disponibile tramite il
[download diretto](https://github.com/GuidoGentile/mobilitymanager-download/releases/download/v0.1.0-dev55.2/MobilityManager-Setup-0.1.0-dev55.2-x64.exe).
Nel piano Web Liberty è lo sfondo iniziale quando c'è connessione. La mappa
locale resta nel file e subentra senza rete; una tendina unica seleziona gli
sfondi senza cambiare colori e simboli dei livelli tematici. La legenda
permette di attivare i singoli livelli e regolare linee, bordi e simboli.
La [landing page](https://guidogentile.github.io/mobilitymanager-download/)
rimanda direttamente all'installer.
Il pacchetto non è firmato digitalmente e non include dati personali né il
dataset territoriale italiano, che si installa separatamente nell'applicazione.

L'hash SHA-256 atteso è
`857871cf6a204e3b3d37ad04b64f4d1369ceba0b00b350322a2c36a583d58dec`.
Il [file di controllo](downloads/MobilityManager-Setup-0.1.0-dev55.2-x64.sha256.txt)
e il [manifest](downloads/MobilityManager-Setup-0.1.0-dev55.2-x64.json) sono
disponibili anche in questo repository. L’installer è un allegato della release
GitHub: il pulsante della landing avvia direttamente il download.

La landing è composta da `index.html`, `tecnologia.html` e `assets/`; non
contiene l'applicazione, i questionari o i piani locali.

Novità dev55.2: collegamento Codex corretto, indicazioni coerenti con il cambio
automatico di area e rimozione dell’anteprima dalla scheda Dati territoriali.

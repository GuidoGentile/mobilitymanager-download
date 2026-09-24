# MobilityManager — landing e download pubblici

Questo repository contiene la pagina pubblica di MobilityManager e i file di
verifica dell'installer Windows. Il codice di sviluppo vive separatamente nel
repository privato `GuidoGentile/MobilityManager`.

## Download

La versione di test **0.1.0-dev37** per Windows x64 è disponibile come
[prerelease pubblica](https://github.com/GuidoGentile/mobilitymanager-download/releases/tag/v0.1.0-dev37).
La [landing page](https://guidogentile.github.io/mobilitymanager-download/)
rimanda direttamente all'installer.
Il pacchetto non è firmato digitalmente e non include dati personali né il
dataset territoriale italiano, che si installa separatamente nell'applicazione.

L'hash SHA-256 atteso è
`343b93226f7ecd719f872468e555789d54ddf6d390b8ac7a6ead0de1c86f132c`.
Il [file di controllo](downloads/MobilityManager-Setup-0.1.0-dev37-x64.sha256.txt)
e il [manifest](downloads/MobilityManager-Setup-0.1.0-dev37-x64.json) sono
disponibili anche in questo repository. Gli installer sono allegati alle release,
non aggiunti alla cronologia del codice.

La landing è composta da `index.html`, `tecnologia.html` e `assets/`; non
contiene l'applicazione, i questionari o i piani locali.

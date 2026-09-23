const header = document.querySelector('[data-header]');
const tabs = document.querySelectorAll('[data-edition]');
const stage = document.querySelector('.report-stage');
const copy = document.querySelector('[data-edition-copy]');

const editions = {
  corporate: {
    number: '01 — CORPORATE',
    title: 'Un piano che sembra appartenere davvero all’azienda.',
    body: 'Colori, geometrie e fotografie ufficiali vengono selezionati da un profilo editoriale verificato. Copertine e passaggi di capitolo hanno il respiro di un sito contemporaneo; la gerarchia tipografica resta controllata.',
    bullets: ['Immagini ufficiali con fonte e impronta digitale', 'Stile dedicato, senza alterare indicatori o contenuti', 'Fallback grafico se una risorsa non è disponibile'],
    previewTitle: 'Edizione Corporate',
    previewSubtitle: 'Un racconto visivo vicino all’identità dell’azienda.'
  },
  technical: {
    number: '02 — MOBILITYMANAGER',
    title: 'Uno standard tecnico stabile, azienda dopo azienda.',
    body: 'La versione uniforme privilegia confrontabilità, leggibilità e controllo. È pensata per il Mobility Manager, il tavolo tecnico e il Mobility Manager d’area.',
    bullets: ['Identità sobria e indipendente dall’azienda', 'Stessa sequenza di pagine della versione Corporate', 'Gerarchie, tabelle e indicatori sempre confrontabili'],
    previewTitle: 'Edizione tecnica',
    previewSubtitle: 'Una grammatica uniforme per analisi e confronto.'
  }
};

function setEdition(name) {
  const data = editions[name];
  tabs.forEach(tab => {
    const selected = tab.dataset.edition === name;
    tab.classList.toggle('active', selected);
    tab.setAttribute('aria-selected', String(selected));
  });
  copy.classList.add('changing');
  window.setTimeout(() => {
    stage.classList.toggle('technical', name === 'technical');
    stage.querySelector('[data-preview-title]').textContent = data.previewTitle;
    stage.querySelector('[data-preview-subtitle]').textContent = data.previewSubtitle;
    copy.querySelector('.edition-number').textContent = data.number;
    copy.querySelector('h3').textContent = data.title;
    copy.querySelector('p:not(.edition-number)').textContent = data.body;
    copy.querySelector('ul').innerHTML = data.bullets.map(item => `<li>${item}</li>`).join('');
    copy.classList.remove('changing');
  }, 180);
}

tabs.forEach(tab => tab.addEventListener('click', () => setEdition(tab.dataset.edition)));

document.querySelectorAll('[data-layer]').forEach(button => {
  button.addEventListener('click', () => {
    const active = button.getAttribute('aria-pressed') === 'true';
    button.setAttribute('aria-pressed', String(!active));
    button.classList.toggle('active', !active);
    document.querySelector(`.map-layer.${button.dataset.layer}`).classList.toggle('visible', !active);
  });
});

function updateHeader() {
  header.classList.toggle('scrolled', window.scrollY > 24);
}
updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

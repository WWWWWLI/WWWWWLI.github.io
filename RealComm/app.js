const menu = document.querySelector('#example');
const grid = document.querySelector('#audio-grid');
const denoising = document.querySelector('#denoising');
const languageButtons = [...document.querySelectorAll('[data-language]')];
const errorMessage = document.querySelector('#audio-error');
const paths = [
  ['digital', 'Digital source', 'Before the call'],
  ['earpiece', 'OtA · Handset', 'Acoustic injection'],
  ['speakerphone', 'OtA · Speakerphone', 'Acoustic injection'],
  ['wired_headset', 'LtM · Wired', 'Direct injection'],
];
let renderVersion = 0;

fetch('examples.json?v=diversity1').then(response => {
  if (!response.ok) throw new Error('Examples unavailable');
  return response.json();
}).then(examples => {
  function selectedExample() {
    return examples.find(example => example.id === menu.value);
  }

  function renderAudio() {
    const version = ++renderVersion;
    document.querySelectorAll('audio').forEach(audio => audio.pause());
    const example = selectedExample();
    const variant = example.variants[denoising.value] || example.variants.baseline;
    const transcript = document.querySelector('#transcript');
    transcript.textContent = '“' + example.text + '”';
    transcript.lang = example.language_code === 'zh' ? 'zh-CN' : 'en';
    document.querySelector('#example-meta').textContent =
      example.language + ' · ' + example.label + ' · Caller → Receiver: ' + example.route;
    errorMessage.textContent = '';
    grid.replaceChildren(...paths.map(([key, title, description]) => {
      const card = document.createElement('article');
      card.className = 'audio-item ' + key;
      const heading = document.createElement('h3');
      heading.textContent = title;
      const subtitle = document.createElement('p');
      subtitle.textContent = description;
      const state = document.createElement('p');
      state.className = 'denoising-label';
      state.textContent = key === 'digital' ? 'Digital reference' :
        variant.denoising[key] === 'not_available' ? 'Denoising: no user-controlled switch' :
        'Denoising: ' + variant.denoising[key];
      const audio = document.createElement('audio');
      audio.controls = true;
      audio.preload = 'metadata';
      audio.src = variant.audio[key];
      audio.setAttribute('aria-label', example.language + ' ' + example.label + ' — ' + title + '. ' + state.textContent);
      audio.addEventListener('play', () => {
        document.querySelectorAll('audio').forEach(other => { if (other !== audio) other.pause(); });
      });
      audio.addEventListener('error', () => {
        if (version === renderVersion) errorMessage.textContent =
          'This recording could not be loaded. Please reload the page or use its download link.';
      });
      const download = document.createElement('a');
      download.href = variant.audio[key];
      download.download = '';
      download.textContent = 'Download WAV';
      download.className = 'audio-download';
      card.append(heading, subtitle, state, audio, download);
      return card;
    }));
  }

  function selectExample() {
    const example = selectedExample();
    denoising.replaceChildren(...Object.entries(example.variants).map(([key, variant]) => {
      const option = document.createElement('option');
      option.value = key;
      option.textContent = variant.label;
      return option;
    }));
    denoising.value = 'baseline';
    document.querySelector('#denoising-control').hidden = !example.variants.on;
    renderAudio();
  }

  function selectLanguage(language) {
    const previousGenerator = selectedExample()?.generator;
    const matches = examples.filter(example => example.language_code === language);
    languageButtons.forEach(button => {
      button.setAttribute('aria-pressed', String(button.dataset.language === language));
    });
    menu.replaceChildren(...matches.map(example => {
      const option = document.createElement('option');
      option.value = example.id;
      option.textContent = example.label;
      return option;
    }));
    const sameGenerator = matches.find(example => example.generator === previousGenerator);
    if (sameGenerator) menu.value = sameGenerator.id;
    selectExample();
  }

  languageButtons.forEach(button => button.addEventListener('click', () => selectLanguage(button.dataset.language)));
  menu.addEventListener('change', selectExample);
  denoising.addEventListener('change', renderAudio);
  selectLanguage('zh');
}).catch(() => {
  errorMessage.textContent = 'Audio examples could not be loaded. Please reload the page.';
  menu.disabled = true;
  denoising.disabled = true;
  languageButtons.forEach(button => { button.disabled = true; });
});

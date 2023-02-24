const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const rec = new SpeechRecognition();

rec.lang = 'en-US';
rec.continuous = true;

rec.onresult = (e) => {
  const acceptedColors = [
    'red',
    'blue',
    'green',
    'yellow',
    'purple',
    'orange',
    'brown',
    'black',
    'white',
    'pink'
  ];

  for (let i = e.resultIndex; i < e.results.length; i++) {
    const script = e.results[i][0].transcript.toLowerCase().trim();

    if (acceptedColors.includes(script)) {
      document.body.style.backgroundColor = script;
    } else {
      alert('Say a color'); // eslint-disable-line no-alert
    }
  }
};

rec.start();
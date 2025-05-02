// Adds glitching effect and logs over time
const consoleEl = document.getElementById('console');

setInterval(() => {
  const lines = [
    "> [TRACE] ping returned anomaly @ 134.7Hz",
    "> [ERROR] log echo2 failed checksum",
    "> [SYS] Route coordinates corrupted",
    "> [USER] Access root@surfacenoise denied",
    "> (listening...)"
  ];
  const line = lines[Math.floor(Math.random() * lines.length)];
  consoleEl.innerHTML += `${line}<br>`;
  consoleEl.scrollTop = consoleEl.scrollHeight;
}, 4000);

// Fake command console interaction
function trace() {
  const consoleEl = document.getElementById('console');
  consoleEl.innerHTML += "> Executing trace()...<br>";
  setTimeout(() => {
    consoleEl.innerHTML += "> Redirecting to /logs/echo1.txt<br>";
    setTimeout(() => {
      window.location.href = "logs/echo1.txt";
    }, 1500);
  }, 1000);
}

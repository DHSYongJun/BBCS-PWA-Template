(function () {
  function example() {
    document.querySelector('#test').innerHTML = 'bye';
  }

  window.addEventListener('load', function() {
    example();
  });

  // This conditional statement checks if your browser supports service workers
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
      navigator.serviceWorker.register('service-worker.js')
        .then(function(registration) {
          console.log('[App] Service Worker is registered', registration);
        })
        .catch(function(error) {
          console.error('[App] Service Worker registration failed', error);
        });
    });
  } else {
    alert('Your browser does not support service workers!');
  }
})();

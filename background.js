chrome.app.runtime.onLaunched.addListener(function() {


  chrome.app.window.create('sandboxed.html', {
    'bounds': {
      'width': 900,
      'height': 500,
      'left': 0,
      'top': 0
    }
  });
});
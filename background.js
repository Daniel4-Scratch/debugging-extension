function onCreated(tab) {
    console.log(`Created new tab: ${tab.id}`)
  }
  
  function onError(error) {
    console.log(`Error: ${error}`);
  }
  
  browser.browserAction.onClicked.addListener(function() {
    let creating = browser.tabs.create({
      url:"https://github.com"
    });
    creating.then(onCreated, onError);
  });
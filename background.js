chrome.browserAction.onClicked.addListener(function (tab) {
  const windowOptions = {
    url: chrome.runtime.getURL("index.html"),
    type: "popup"
  }

  chrome.windows.create({
    ...windowOptions
  }, () => {
    console.log('successfully created window')
  })
})

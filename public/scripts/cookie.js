chrome.runtime.sendMessage({ action: "getCookies", cookies: document.cookie });

chrome.runtime.onMessage.addListener((message) => {
  if (message.action === "setCookie") {
    console.log("setCookie");
  }
});

chrome.runtime.sendMessage({ action: "getCookies", cookies: document.cookie });

if (!window.__StorageEditor__) {
  chrome.runtime.onMessage.addListener((message) => {
    if (message.action === "setCookie") {
      console.log("setCookie");
    }
  });
  window.__StorageEditor__ = true;
}

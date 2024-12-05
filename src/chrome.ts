export async function getCookies() {
  if (!chrome.tabs) return;

  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  if (tab && tab.id) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ["scripts/cookie.js"],
    });

    return new Promise<string>((resolve) =>
      chrome.runtime.onMessage.addListener((message) => {
        if (message.action === "getCookies") {
          resolve(message.cookies);
        }
      }),
    );
  }
}

export async function setCookie() {
  if (!chrome.tabs) return;

  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  if (tab && tab.id) {
    chrome.tabs.sendMessage(tab.id, { action: "setCookie" });
  }
}

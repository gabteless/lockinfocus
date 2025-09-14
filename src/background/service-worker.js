async function updateBadge() {
  const result = await chrome.storage.local.get(['savedTabs']);
  const tabCount = result.savedTabs ? result.savedTabs.length : 0;
  
  chrome.action.setBadgeText({
    text: tabCount > 0 ? tabCount.toString() : ''
  });
  
  chrome.action.setBadgeBackgroundColor({
    color: '#0D6EFDD'
  });
}

chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.local.set({ savedTabs: [] });
    updateBadge();
});

chrome.runtime.onInstalled.addListener(() => {
  console.log('LockinFocus instalada.');
  updateBadge();
});

chrome.storage.onChanged.addListener((changes, namespace) => {
  if (namespace === 'local' && changes.savedTabs) {
    updateBadge();
  }
});



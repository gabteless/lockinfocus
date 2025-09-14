document.addEventListener('DOMContentLoaded', () => {
    const saveTabBtn = document.getElementById('saveTabBtn');
    const tabList = document.getElementById('tabList');

    loadSavedTabs();

    saveTabBtn.addEventListener('click', () => {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            const currentTab = tabs[0];
            if (currentTab) {
                saveTab(currentTab);
            }
        });
    });

    function saveTab(tab) {
        chrome.storage.local.get({ savedTabs: [] }, (result) => {
            const savedTabs = result.savedTabs;
            
            const isAlreadySaved = savedTabs.some(savedTab => savedTab.url === tab.url);
            if (isAlreadySaved) {
                alert('Esta aba já foi salva!');
                return;
            }

            const newTab = {
                id: Date.now(),
                title: tab.title,
                url: tab.url,
                favIconUrl: tab.favIconUrl,
                note: ''
            };
            savedTabs.push(newTab);
            chrome.storage.local.set({ savedTabs }, () => {
                console.log('Aba salva:', newTab);
                renderTabs();
            });
        });
    }

    function loadSavedTabs() {
        renderTabs();
    }
    
    function renderTabs() {
        chrome.storage.local.get({ savedTabs: [] }, (result) => {
            const savedTabs = result.savedTabs;
            tabList.innerHTML = '';

            if (savedTabs.length === 0) {
                tabList.innerHTML = '<li class="placeholder">Nenhuma aba salva ainda.</li>';
                return;
            }

            savedTabs.forEach(tabData => {
                const listItem = createTabListItem(tabData);
                tabList.appendChild(listItem);
            });
        });
    }

    function createTabListItem(tabData) {
        const listItem = document.createElement('li');
        listItem.className = 'tab-item';
        listItem.dataset.tabId = tabData.id;

        listItem.innerHTML = `
            <div class="tab-info">
                <img src="${tabData.favIconUrl || '../../icons/icon16.png'}" class="tab-icon" alt="favicon">
                <a href="${tabData.url}" target="_blank" class="tab-link" title="${tabData.title}">${tabData.title}</a>
            </div>
            <textarea class="note-input" placeholder="Adicione uma anotação...">${tabData.note}</textarea>
            <div class="tab-actions">
                <button class="delete-btn">Remover</button>
            </div>
        `;

        const deleteBtn = listItem.querySelector('.delete-btn');
        deleteBtn.addEventListener('click', () => {
            deleteTab(tabData.id);
        });
        
        const noteInput = listItem.querySelector('.note-input');
        noteInput.addEventListener('change', () => {
            updateTabNote(tabData.id, noteInput.value);
        });

        return listItem;
    }

    function deleteTab(tabId) {
        chrome.storage.local.get({ savedTabs: [] }, (result) => {
            let savedTabs = result.savedTabs;
            savedTabs = savedTabs.filter(tab => tab.id !== tabId);
            chrome.storage.local.set({ savedTabs }, () => {
                renderTabs();
            });
        });
    }

    function updateTabNote(tabId, newNote) {
         chrome.storage.local.get({ savedTabs: [] }, (result) => {
            const savedTabs = result.savedTabs;
            const tabIndex = savedTabs.findIndex(tab => tab.id === tabId);
            if(tabIndex > -1) {
                savedTabs[tabIndex].note = newNote;
                chrome.storage.local.set({ savedTabs });
            }
        });
    }
});
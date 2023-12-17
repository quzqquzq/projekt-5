const props = ["name", "tel"];
const opts = { multiple: true };
const notification = ('Notification' in window);

async function getContacts() {
  try {
    const contacts = await navigator.contacts.select(props, opts);
    handleResults(contacts);
  } catch (ex) {
    console.error("Contacts API not supported on this browser/system.");
  }
}

function handleResults(contacts) {
    const list = document.getElementById("contactsList");
    list.innerHTML = "";
    for (const contact of contacts) {
        const item = document.createElement("li");
        item.innerHTML = `
            <strong>${contact.name[0]}</strong><br>
            <a>Mobile: ${contact.tel[0]}</a><br>
        `;
        list.appendChild(item);
    }
    if (notification) {
        Notification.requestPermission().then(function(result) {
            if (result === 'granted') {
                return new Notification('Contacts', {
                    body: 'Contacts added successfully!',
                    icon: 'images/icons/icon-72x72.png'
                });
            }
        });
    }
}


const button = document.getElementById("addContactBtn");
button.addEventListener("click", getContacts);
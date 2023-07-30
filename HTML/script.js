function addItem(name, age) {
    const itemList = JSON.parse(localStorage.getItem('items')) || [];
    itemList.push({ name, age });
    localStorage.setItem('items', JSON.stringify(itemList));
}

function displayItems() {
    const itemList = JSON.parse(localStorage.getItem('items')) || [];
    const itemListElement = document.getElementById('itemList');
    itemListElement.innerHTML = '';

    itemList.forEach((item, index) => {
        const tableRow = document.createElement('tr');
        const nameCell = document.createElement('td');
        const ageCell = document.createElement('td');
        const actionsCell = document.createElement('td');

        nameCell.textContent = item.name;
        ageCell.textContent = item.age;

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.classList.add('edit-button');
        editButton.onclick = () => openEditModal(index);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-button');
        deleteButton.onclick = () => deleteItem(index);

        actionsCell.appendChild(editButton);
        actionsCell.appendChild(deleteButton);

        tableRow.appendChild(nameCell);
        tableRow.appendChild(ageCell);
        tableRow.appendChild(actionsCell);

        itemListElement.appendChild(tableRow);
    });
}

function openEditModal(index) {
    const editModal = document.getElementById('editModal');
    const editForm = document.getElementById('editForm');
    const editNameInput = document.getElementById('editName');
    const editAgeInput = document.getElementById('editAge');

    const itemList = JSON.parse(localStorage.getItem('items')) || [];
    const item = itemList[index];

    editNameInput.value = item.name;
    editAgeInput.value = item.age;

    editForm.onsubmit = function(event) {
        event.preventDefault();
        const newName = editNameInput.value.trim();
        const newAge = editAgeInput.value.trim();
        if (newName !== '' && newAge !== '') {
            itemList[index] = { name: newName, age: newAge };
            localStorage.setItem('items', JSON.stringify(itemList));
            displayItems();
            editModal.style.display = 'none';
        }
    };

    editModal.style.display = 'block';
}

function deleteItem(index) {
    const itemList = JSON.parse(localStorage.getItem('items')) || [];
    itemList.splice(index, 1);
    localStorage.setItem('items', JSON.stringify(itemList));
    displayItems();
}

function handleFormSubmit(event) {
    event.preventDefault();
    const itemNameInput = document.getElementById('itemName');
    const itemAgeInput = document.getElementById('itemAge');
    const name = itemNameInput.value.trim();
    const age = itemAgeInput.value.trim();

    if (name !== '' && age !== '') {
        addItem(name, age);
        itemNameInput.value = '';
        itemAgeInput.value = '';
        displayItems();
    }
}

document.getElementById('itemForm').addEventListener('submit', handleFormSubmit);
displayItems();

document.addEventListener('DOMContentLoaded', () => {
  const itemInput = document.getElementById('item-input');
  const addItemBtn = document.getElementById('add-item-btn');
  const shoppingList = document.getElementById('shopping-list');

  addItemBtn.addEventListener('click', addItem);

  function addItem() {
    const itemText = itemInput.value.trim();
    if (itemText !== '') {
      const li = document.createElement('li');
      li.textContent = itemText;

      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Excluir';
      deleteBtn.classList.add('delete-btn');
      deleteBtn.addEventListener('click', () => {
        shoppingList.removeChild(li);
      });

      const boughtBtn = document.createElement('button');
      boughtBtn.textContent = 'Comprado';
      boughtBtn.classList.add('bought-btn');
      boughtBtn.addEventListener('click', () => {
        li.classList.toggle('bought');
      });

      li.appendChild(deleteBtn);
      li.appendChild(boughtBtn);
      shoppingList.appendChild(li);
      itemInput.value = '';
    }
  }
});

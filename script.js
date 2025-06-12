document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.tab-btn');
  const contents = document.querySelectorAll('.tab-content');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Remove active class from all tabs
      tabs.forEach(t => t.classList.remove('active'));
      // Hide all tab contents
      contents.forEach(c => c.classList.add('hidden'));

      // Activate clicked tab
      tab.classList.add('active');
      const target = tab.dataset.tab;
      document.getElementById(target).classList.remove('hidden');
    });
  });

  // Demo add handlers
  document.getElementById('add-income').addEventListener('click', () => {
    const amountInput = document.getElementById('income-amount');
    if (amountInput.value.trim() === '') {
      alert('Please enter an amount.');
      return;
    }
    alert(`Income added: $${amountInput.value}`);
    amountInput.value = '';
  });

  document.getElementById('add-expense').addEventListener('click', () => {
    const amountInput = document.getElementById('expense-amount');
    if (amountInput.value.trim() === '') {
      alert('Please enter an amount.');
      return;
    }
    alert(`Expense added: $${amountInput.value}`);
    amountInput.value = '';
  });

  document.getElementById('add-savings').addEventListener('click', () => {
    const nameInput = document.getElementById('savings-name');
    const amountInput = document.getElementById('savings-amount');
    if (nameInput.value.trim() === '' || amountInput.value.trim() === '') {
      alert('Please enter both goal name and amount.');
      return;
    }
    alert(`Savings goal added: ${nameInput.value} - $${amountInput.value}`);
    nameInput.value = '';
    amountInput.value = '';
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('ruleSearch');
  const tables = [
    document.getElementById('inGameTable'),
    document.getElementById('discordTable')
  ];

  if (!searchInput) {
    console.error('Search input not found!');
    return;
  }
  if (tables.some(t => !t)) {
    console.error('One or more tables not found!');
    return;
  }

  searchInput.addEventListener('input', () => {
    const filter = searchInput.value.toLowerCase();
    // console.log('Filtering:', filter);

    tables.forEach(table => {
      const rows = table.tBodies[0].rows;
      for (let row of rows) {
        const rowText = Array.from(row.cells).map(td => td.textContent.toLowerCase()).join(' ');
        row.style.display = rowText.includes(filter) ? '' : 'none';
      }
    });
  });
});

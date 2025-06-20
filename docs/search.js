// Wait until DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('ruleSearch');
  const tables = [
    document.getElementById('inGameTable'),
    document.getElementById('discordTable')
  ];

  searchInput.addEventListener('input', () => {
    const filter = searchInput.value.toLowerCase();

    tables.forEach(table => {
      const rows = table.tBodies[0].rows;
      for (let row of rows) {
        // Combine all cell text content for searching
        const rowText = Array.from(row.cells).map(td => td.textContent.toLowerCase()).join(' ');
        // Show/hide rows based on match
        row.style.display = rowText.includes(filter) ? '' : 'none';
      }
    });
  });
});

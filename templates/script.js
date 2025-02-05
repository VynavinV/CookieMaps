const searchBar = document.getElementById('searchBar');
const filter = document.getElementById('filter');

searchBar.addEventListener('input', function() {
  const query = searchBar.value.toLowerCase();
  const coinCards = document.querySelectorAll('.coin-card');
  
  coinCards.forEach(card => {
    const coinName = card.querySelector('h3').textContent.toLowerCase();
    if (coinName.includes(query)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
});

filter.addEventListener('change', function() {
  // Sorting logic will go here
  console.log('Sorting by:', filter.value);
});

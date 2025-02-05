const ctx = document.getElementById('cryptoChart').getContext('2d');

const cryptoChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [{
      label: 'Crypto Value',
      data: [12, 19, 3, 5, 2, 3, 7],
      backgroundColor: 'rgba(155, 89, 182, 0.2)',
      borderColor: 'rgba(155, 89, 182, 1)',
      borderWidth: 2,
      fill: true
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: { grid: { display: false } },
      y: { grid: { color: '#444' } }
    }
  }
});

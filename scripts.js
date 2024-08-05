const API_URL = 'https://v6.exchangerate-api.com/v6/9d0b2bb1841556e4d1452e44/latest/USD';

document.addEventListener('DOMContentLoaded', () => {
    const fromCurrency = document.getElementById('fromCurrency');
    const toCurrency = document.getElementById('toCurrency');
    
    // Fetch exchange rates when the page loads
    fetch(API_URL)
        .then(response => response.json())
        .then(data => {
            console.log('Data fetched:', data); // Log the fetched data to the console
            const rates = data.conversion_rates;
            for (const currency in rates) {
                const option1 = document.createElement('option');
                option1.value = currency;
                option1.textContent = currency;
                fromCurrency.appendChild(option1);

                const option2 = document.createElement('option');
                option2.value = currency;
                option2.textContent = currency;
                toCurrency.appendChild(option2);
            }
        })
        .catch(error => {
            console.error('Error fetching exchange rates:', error);
        });
});

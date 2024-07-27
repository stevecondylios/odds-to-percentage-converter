// Convert odds to percentage
function oddsToPercentage(odds) {
    const parts = odds.split('/');
    if (parts.length === 2) {
        const numerator = parseInt(parts[0]);
        const denominator = parseInt(parts[1]);
        if (!isNaN(numerator) && !isNaN(denominator)) {
            const percentage = (denominator / (numerator + denominator)) * 100;
            return percentage.toFixed(1) + '%';
        }
    }
    return null;
}

// Update odds display
function updateOddsDisplay() {
    const oddsElements = document.querySelectorAll('span.odds.basket-add.beta-footnote.bold.participant-info.ng-isolate-scope');
    oddsElements.forEach(element => {
        const oddsText = element.textContent;
        const percentage = oddsToPercentage(oddsText);
        if (percentage && !element.dataset.updated) {
            element.textContent = percentage;
            element.dataset.updated = 'true'; // mark as updated to avoid reprocessing
        }
    });
}

// Run update function every second to capture dynamic content updates
setInterval(updateOddsDisplay, 1000);

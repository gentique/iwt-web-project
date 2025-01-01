// script.js

document.addEventListener('DOMContentLoaded', function() {
    console.log('Website loaded and ready!');
    
    // Example: Add click event for .ng-card elements
    var cards = document.querySelectorAll('.ng-card');
    cards.forEach(function(card) {
      card.addEventListener('click', function() {
        alert('You clicked on a card!');
      });
    });
  });
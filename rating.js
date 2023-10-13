// bruh, dont listen to this stuff, totallly messed it up. i'll sort that later mkay
// You can use JavaScript to handle any additional actions you want to take when a star is clicked or selected.
// For a basic rating system, the CSS handles most of the interactivity.

// Optionally, you can add an event listener to perform actions when a star is selected:
const stars = document.querySelectorAll('.rating input[type="radio"]');
stars.forEach(star => {
  star.addEventListener('change', () => {
    // Do something when a star is selected, e.g., send the rating to a server
    console.log('Selected rating:', star.value);
  });
});

  // Define your pattern here (e.g., "Reels and Short Videos")
const pattern = /Reels and Short Videos/i; // Case-insensitive pattern
// Function to hide elements
function hideElement(element) {
  element.style.display = 'none';
}

// Function to check if the text matches the pattern
function textMatchesPattern(text) {

  return pattern.test(text);
}



// Create a Mutation Observer to watch for changes in the DOM
const observer = new MutationObserver(function (mutations) {
  mutations.forEach(function (mutation) {
    // Check if nodes were added to the DOM
    if (mutation.addedNodes.length > 0) {
      // Iterate through the added nodes
      mutation.addedNodes.forEach(function (node) {
        // Check if the added node has the specified class name
        if (node.classList && node.classList.contains('x1lliihq')) {
          // Add a mouseover event listener to the node
          node.addEventListener('mouseover', function () {
            // Check if the element's text content matches the pattern
            if (textMatchesPattern(node.textContent)) {
              // Hide the element
              hideElement(node);
            }
          });
        }
      });
    }
  });
});

// Start observing changes in the entire document
observer.observe(document, { childList: true, subtree: true });
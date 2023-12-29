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

// Function to check and hide elements on initial page load
function hideElementsByDefault() {
  // Get all elements with the specified class name
  const elements = document.querySelectorAll('.x1yztbdb');
  // Iterate through the elements
  elements.forEach(function (element) {
    // Check if the element's text content matches the pattern
    if (textMatchesPattern(element.textContent)) {
      // Hide the element
      hideElement(element);
    }
  });
}



// Create a Mutation Observer to watch for changes in the DOM
const observer = new MutationObserver(function (mutations) {
  mutations.forEach(function (mutation) {
    // Check if nodes were added to the DOM
    if (mutation.addedNodes.length > 0) {
      // Iterate through the added nodes
      mutation.addedNodes.forEach(function (node) {
        shouldHideElement(node)
      });
    }
  });
});

// Function to check if the added node or its descendants match the criteria
function shouldHideElement(node) {
   var elements = node.querySelectorAll('.x1yztbdb');
    elements.forEach((item)=>{
      if (textMatchesPattern(item.textContent)) {
        // Hide the element
        hideElement(item);
      }
    })

}

// Start observing changes in the entire document
observer.observe(document, { childList: true, subtree: true });
document.addEventListener('DOMContentLoaded', hideElementsByDefault);

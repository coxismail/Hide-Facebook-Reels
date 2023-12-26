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
       if(shouldHideElement(node))
       {
        // Check if the added node has the specified class name
        //|| node.classList.contains('x1yztbdb')
        // if (node.classList && (node.classList.contains('x1lliihq')))
        // {
          // Add a mouseover event listener to the node
          node.addEventListener('mouseover', function () {
            // Check if the element's text content matches the pattern
            if (textMatchesPattern(node.textContent)) {
              // Hide the element
              hideElement(node);
            }
          });
        }
       // }
      });
    }
  });
});

// Function to check if the element has the specified class
function hasTargetClass(element) {
  return element.classList && element.classList.contains('x1yztbdb');
}
// Function to check if the added node or its descendants match the criteria
function shouldHideElement(node) {
   // Use querySelectorAll to get elements with the specified class
   var elements = node.querySelectorAll('.x1yztbdb');

   // Check if at least one element with the specified class exists
   if (elements.length > 0) {
     return true;
   }
 
   return false;
}

// Start observing changes in the entire document
observer.observe(document, { childList: true, subtree: true });
document.addEventListener('DOMContentLoaded', hideElementsByDefault);

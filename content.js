
 // Courseweb UX Enhancer - Main Content Script
 // This script runs after the DOM is fully loaded to clean up and enhance the interface.

console.log(" Courseweb UX Enhancer initialized.");

window.addEventListener("load", () => {
  // 1. Target notice sections and their main text containers
  enhanceNoticeContainers();

  // New enhancement for PDFs/Resources
  enhanceResourceCards();
  
});

// Finds notice blocks and applies UI enhancements to their main content bodies

function enhanceNoticeContainers() {
  const notices = document.querySelectorAll(".section-item");
  
  if (notices.length === 0) {
    console.log("No notice sections found on this page.");
    return;
  }

  console.log(`Processing ${notices.length} notice zones.`);

  notices.forEach((notice) => {
    // Find the primary text overflow/content area within each notice block
    const contentArea = notice.querySelector(".no-overflow");
    
    if (contentArea) {
      contentArea.classList.add("cw-enhanced-notice-content");
    }
  });
}

function enhanceResourceCards() {
  const resources = document.querySelectorAll(".activity.resource.modtype_resource");
  
  if (resources.length === 0) return;

  console.log(`Found ${resources.length} downloadable resources to optimize.`);

  resources.forEach((resource) => {
    const activityItem = resource.querySelector(".activity-item");
    if (activityItem) {
      // Add a utility class if needed for deep customization later
      activityItem.classList.add("cw-enhanced-resource-card");
    }
  });
}
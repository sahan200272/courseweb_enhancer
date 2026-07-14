 // Courseweb UI & UX Enhancer - Main Content Script
 // This script runs after the DOM is fully loaded to clean up and enhance the interface.

console.log(" Courseweb UX Enhancer initialized.");

window.addEventListener("load", () => {

  // Target notice sections and their main text containers
  enhanceNoticeContainers();

  // New enhancement for PDFs/Resources
  enhanceResourceCards();

  // New enhancement for tables
  enhanceTablesAndFilters();

  // New enhancement for lists
  enhanceListGroups();
  
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

// Modernizes all HTML tables and injects a real-time live filtering search bar above them.

function enhanceTablesAndFilters() {
  const tables = document.querySelectorAll("table");
  
  if (tables.length === 0) return;

  console.log(`Found ${tables.length} tables to optimize.`);

  tables.forEach((table, index) => {

    // Create a wrapper and search input field
    const controlsWrapper = document.createElement("div");
    controlsWrapper.classList.add("cw-table-controls-wrapper");

    const searchInput = document.createElement("input");
    searchInput.type = "text";
    searchInput.placeholder = "🔍 Search registration no, stream, or details...";
    searchInput.classList.add("cw-table-search-input");
    
    controlsWrapper.appendChild(searchInput);
    
    // Inject the search bar immediately before the table element
    table.parentNode.insertBefore(controlsWrapper, table);

    // Setup real-time filtering event listener
    searchInput.addEventListener("input", (e) => {
      const query = e.target.value.toLowerCase().trim();
      
      // Grab all data rows inside the body (skipping header row if structured inside standard tr)
      const rows = table.querySelectorAll("tr");

      rows.forEach((row) => {
        // Skip checking if row contains table header cells (th)
        if (row.querySelector("th")) return;

        const rowText = row.innerText.toLowerCase();

        // Toggle visibility class based on matches
        if (rowText.includes(query)) {
          row.classList.remove("cw-row-hidden");
        } else {
          row.classList.add("cw-row-hidden");
        }
      });
    });
  });
}

/**
 * Modernizes multiple unorganized list groups across Courseweb sections
 */
function enhanceListGroups() {
  const listGroups = document.querySelectorAll("ul.list-group");
  
  if (listGroups.length === 0) return;

  console.log(`📋 Optimizing ${listGroups.length} independent list groups.`);

  listGroups.forEach((list, index) => {
    // Inject a data-attribute identifier (1 for upper layout block, 2 for lower block)
    list.setAttribute("data-cw-list-index", index + 1);
    
    // Add click forwarding so clicking anywhere on the wrapper card clicks the child navigation link
    const listItems = list.querySelectorAll("li");
    listItems.forEach(item => {
      const anchor = item.querySelector("a");
      if (anchor) {
        item.addEventListener("click", () => {
          anchor.click();
        });
      }
    });
  });
}
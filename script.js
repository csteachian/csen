document.addEventListener("DOMContentLoaded", function () {
  // Tab switching functionality
  const tabButtons = document.querySelectorAll(".tab-btn");
  const tabContents = document.querySelectorAll(".tab-content");

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove active class from all buttons and contents
      tabButtons.forEach((btn) => btn.classList.remove("active"));
      tabContents.forEach((content) => content.classList.remove("active"));

      // Add active class to clicked button and corresponding content
      button.classList.add("active");
      const tabId = button.getAttribute("data-tab");
      document.getElementById(tabId).classList.add("active");

      // Special handling for Discuss tab
      if (tabId === "discuss") {
        setTimeout(() => {
          window.open("https://csen.csteach.uk", "_self");
        }, 1000);
      } else if (tabId === "resources") {
        setTimeout(() => {
          window.open("https://www.csteach.uk", "_self");
        }, 1000);
      }
    });
  });
});

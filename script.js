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
          window.open("https://discuss.csteach.uk", "_self");
        }, 10);
      } else if (tabId === "resources") {
        setTimeout(() => {
          window.open("https://www.csteach.uk", "_self");
        }, 10);
      } else if (tabId === "subscribe") {
        setTimeout(() => {
          window.open("https://csenabz.substack.com/subscribe", "_self");
        }, 10);
      }
    });
  });
});

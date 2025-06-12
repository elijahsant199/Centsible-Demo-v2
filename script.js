const buttons = document.querySelectorAll(".tab-button");
const tabs = document.querySelectorAll(".tab-content");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Remove active classes
    buttons.forEach((b) => b.classList.remove("active"));
    tabs.forEach((tab) => tab.classList.remove("active"));

    // Add active to clicked button and matching tab
    btn.classList.add("active");
    const target = btn.getAttribute("data-target");
    document.getElementById(target).classList.add("active");
  });
});
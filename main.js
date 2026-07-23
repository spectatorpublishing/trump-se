// Month-tab switching for the Trump Deal landing page.
// The build renders the newest month active; this only handles switching.
(function () {
  "use strict";

  function activate(month) {
    var tabs = document.querySelectorAll(".month-tab");
    var grids = document.querySelectorAll(".month-grid");

    tabs.forEach(function (tab) {
      tab.classList.toggle("is-active", tab.dataset.month === month);
    });
    grids.forEach(function (grid) {
      grid.classList.toggle("is-active", grid.dataset.month === month);
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".month-tab").forEach(function (tab) {
      tab.addEventListener("click", function () {
        activate(tab.dataset.month);
      });
    });
  });
})();

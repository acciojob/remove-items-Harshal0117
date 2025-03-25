//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function () {
  const removeColorBtn = document.querySelector("input[type='button']");
  const colorSelect = document.getElementById("colorSelect");

  removeColorBtn.addEventListener("click", function () {
    const selectedIndex = colorSelect.selectedIndex;
    if (selectedIndex !== -1) {
      colorSelect.remove(selectedIndex);
    }
  });
});
const filterItemsStockStatus = document.querySelectorAll(".shop__filter-label");

filterItemsStockStatus.forEach(el => {
  el.querySelector("input").addEventListener("change", e => {
    let checked = el.querySelector("input").checked;

    if (checked) {
      el.classList.add("shop__filter-label--active");
    } else {
      el.classList.remove("shop__filter-label--active");
    }
  });
});

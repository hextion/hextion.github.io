function handleFocus() {
  let container = document.getElementById("container");

  if (container.innerHTML) {
    container.innerHTML = "";
  }

  container.innerHTML =
    '<label>Phone number<input id="input" type="text" autocomplete="tel" /></label>';

  let input = document.getElementById("input");
  input.focus();
}

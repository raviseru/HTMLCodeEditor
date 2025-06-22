const input = document.querySelector(".input");
const output = document.querySelector(".output");
const button = document.querySelector("button");

button.onclick = execute;
function execute() {
  let code = input.value;
  output.contentWindow.document.body.innerHTML = "";
  output.contentWindow.document.write(code);
}

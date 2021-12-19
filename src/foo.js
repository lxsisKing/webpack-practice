import _ from "loadsh";
export const foo = "Hello world";

export function component(message) {
  const element = document.createElement("div");

  // Lodash, now imported by this script
  element.innerHTML = _.join(["Hello", "webpack", message], " ");
  element.classList.add("hello");

  return element;
}

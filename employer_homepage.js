console.log("HELLO SCRIPTORO");

window.onload = (event) => {
  console.log("page is fully loaded");
  console.log(document.getElementsByClassName("inner").item(2));
  document
    .getElementsByClassName("inner")
    .item(2)
    .innerHTML =
    '<ol><li>One Community, Three Ways to Hire</li><li>One Community, Three Ways to Hire</li><li>One Community, Three Ways to Hire</li></ol>';
};

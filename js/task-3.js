function getElementWidth(content, padding, border) {
    const contentWidth = parseFloat(content);
const paddingWidth = parseFloat(padding);
const borderWidth = parseFloat(border);
const totalWidth = contentWidth + 2 * paddingWidth + 2 * borderWidth;
return totalWidth;
}
console.log(getElementWidth("100px", "10px", "2px")); // 124
console.log(getElementWidth("200px", "15px", "5px")); // 240
console.log(getElementWidth("50.5px", "5.25px", "1.75px")); // 69.5


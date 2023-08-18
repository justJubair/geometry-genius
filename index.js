// Reuseable functions
// get input value from input field
function getInputValue(inputId) {
    const value = parseFloat(document.getElementById(inputId).value);
    return value;
}

// set innerText of an element
function setInnerText(inputId, area) {
    const element = document.getElementById(inputId);
    element.innerText = area;
}

// set dynamic area function
function setInnerHTMLArea(areaId, area) {   
    // create p element
    const p = document.createElement('p'),
          areaBox = document.getElementById(areaId);
    p.innerHTML = `Area: ${area} cm<sup>2</sup>`;
    p.className = 'font-bold'
    const result = areaBox.appendChild(p);
    return result;

}
// Reuseable functions ends

// Calculate the area of triangle
function calculateTriangleArea() {
    const base = getInputValue('triangle-base'),
          height = getInputValue('triangle-height'),
          area = 0.5 * base * height;
    setInnerHTMLArea('triangle-area', area)
}

// calculate the area of rectangle
function calculateRectangleArea() {
    const width = getInputValue('rectangle-width'),
          length = getInputValue('rectangle-length'),
          area = width * length;
    setInnerHTMLArea('rectangle-area', area);      
}

// calculate the area of parallelogram
function calculateParallelogramArea() {
    const base = getInputValue('parallelogram-base'),
          height = getInputValue('parallelogram-height'),
          area = base * height;
    setInnerHTMLArea('parallelogram-area', area);      
}
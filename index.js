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

function addAreaToLog(shapeNameId, area) {
    const p = document.createElement('p'),
          areaLog = document.getElementById('area-log'),
          count = areaLog.childElementCount,
          shapeName = document.getElementById(shapeNameId).innerText;  
    p.innerHTML = `${count}. ${shapeName}: ${area}cm<sup>2</sup> <button class="btn btn-sm text-white btn-success ml-2">Convert <p>m<sup>2</sup></p></button>`;
    p.className = 'font-semibold my-2 px-2 text-left';
    areaLog.appendChild(p);

}
// Reuseable functions ends

// Calculate the area of triangle
function calculateTriangleArea() {
    const base = getInputValue('triangle-base'),
          height = getInputValue('triangle-height'),
          area = 0.5 * base * height;
    setInnerHTMLArea('triangle-area', area)
    // add area to the log
    addAreaToLog('triangle', area);
}

// calculate the area of rectangle
function calculateRectangleArea() {
    const width = getInputValue('rectangle-width'),
          length = getInputValue('rectangle-length'),
          area = width * length;
    setInnerHTMLArea('rectangle-area', area);
    // add area to the log
    addAreaToLog('rectangle', area);   
}

// calculate the area of parallelogram
function calculateParallelogramArea() {
    const base = getInputValue('parallelogram-base'),
          height = getInputValue('parallelogram-height'),
          area = base * height;
    setInnerHTMLArea('parallelogram-area', area);
    // add area to the log
    addAreaToLog('parallelogram', area);   
}

// calculate the area of rhombus
function calculateRhombusArea() {
    const diagonalOne = getInputValue('rhombus-diagonal-one'),
          diagonalTwo = getInputValue('rhombus-diagonal-two'),
          area = diagonalOne * diagonalTwo;
    setInnerHTMLArea('rhombus-area', area);
    // add area to the log
    addAreaToLog('rhombus', area);       
}

// calculate the area of pentagon
function calculatePentagonArea() {
    const perimeter = getInputValue('pentagon-perimeter'),
          apothem = getInputValue('pentagon-apothem'),
          area = 0.5 * perimeter * apothem;
    setInnerHTMLArea('pentagon-area', area);
    // add area to the log
    addAreaToLog('pentagon', area); 
}

// calculate the area of ellipse
function calculateEllipseArea() {
    const majorRadius = getInputValue('major-radius'),
          minorRadius = getInputValue('minor-radius'), 
          area = (Math.PI * majorRadius * minorRadius).toFixed(2);
    setInnerHTMLArea('ellipse-area', area);
    // add area to the log
    addAreaToLog('ellipse', area); 
}
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
          div = document.createElement('div'),
          areaLog = document.getElementById('area-log'),
          count = areaLog.childElementCount,
          shapeName = document.getElementById(shapeNameId).innerText;  
    p.innerHTML = `${count}. ${shapeName}: ${area}cm<sup>2</sup>`;
    p.className = 'font-semibold my-3 px-2 text-left';
    div.className = 'flex flex-row-reverse items-center justify-end';
    div.innerHTML = `<button id="convert-btn" class="btn btn-sm text-white btn-success ml-2 normal-case">Convert <p>m<sup>2</sup></p></button>`
    div.appendChild(p);
    areaLog.appendChild(div);
    console.log(button);
}

// covert to centimeter to meter
document.getElementById('convert-btn').addEventListener('click', function(e){
    console.log(e.target);
})
// Reuseable functions ends


// Calculate the area of triangle
function calculateTriangleArea() {
    const base = getInputValue('triangle-base'),
          height = getInputValue('triangle-height');
    // validation      
    if(isNaN(base) || isNaN(height)) {
       return alert('Please insert a valid input');
        
    } else if(base <= 0 || height <= 0) {
       return alert('Please insert a positive number');
        
    }
    const  area = 0.5 * base * height;
    setInnerHTMLArea('triangle-area', area)
    // add area to the log
    addAreaToLog('triangle', area);
}

// calculate the area of rectangle
function calculateRectangleArea() {
    const width = getInputValue('rectangle-width'),
          length = getInputValue('rectangle-length');
     // validation      
     if(isNaN(width) || isNaN(length)) {
        return alert('Please insert a valid input');
         
     } else if(width <= 0 || length <= 0) {
        return alert('Please insert a positive number');
         
     }
    const area = width * length;
    setInnerHTMLArea('rectangle-area', area);
    // add area to the log
    addAreaToLog('rectangle', area);   
}

// calculate the area of parallelogram
function calculateParallelogramArea() {
    const base = getInputValue('parallelogram-base'),
          height = getInputValue('parallelogram-height');
     // validation      
     if(isNaN(base) || isNaN(height)) {
        return alert('Please insert a valid input');
         
     } else if(base <= 0 || height <= 0) {
        return alert('Please insert a positive number');
         
     }
    const area = base * height;
    setInnerHTMLArea('parallelogram-area', area);
    // add area to the log
    addAreaToLog('parallelogram', area);   
}

// calculate the area of rhombus
function calculateRhombusArea() {
    const diagonalOne = getInputValue('rhombus-diagonal-one'),
          diagonalTwo = getInputValue('rhombus-diagonal-two');
     // validation      
     if(isNaN(diagonalOne) || isNaN(diagonalTwo)) {
        return alert('Please insert a valid input');
         
     } else if(diagonalOne <= 0 || diagonalTwo <= 0) {
        return alert('Please insert a positive number');
         
     }
    const area = diagonalOne * diagonalTwo;
    setInnerHTMLArea('rhombus-area', area);
    // add area to the log
    addAreaToLog('rhombus', area);       
}

// calculate the area of pentagon
function calculatePentagonArea() {
    const perimeter = getInputValue('pentagon-perimeter'),
          apothem = getInputValue('pentagon-apothem');
     // validation      
     if(isNaN(perimeter) || isNaN(apothem)) {
        return alert('Please insert a valid input');
         
     } else if(perimeter <= 0 || apothem <= 0) {
        return alert('Please insert a positive number');
         
     }
    const area = 0.5 * perimeter * apothem;
    setInnerHTMLArea('pentagon-area', area);
    // add area to the log
    addAreaToLog('pentagon', area); 
}

// calculate the area of ellipse
function calculateEllipseArea() {
    const majorRadius = getInputValue('major-radius'),
          minorRadius = getInputValue('minor-radius');
     // validation      
     if(isNaN(majorRadius) || isNaN(minorRadius)) {
        return alert('Please insert a valid input');
         
     } else if(majorRadius <= 0 || minorRadius <= 0) {
        return alert('Please insert a positive number');
         
     }
    const area = (Math.PI * majorRadius * minorRadius).toFixed(2);
    setInnerHTMLArea('ellipse-area', area);
    // add area to the log
    addAreaToLog('ellipse', area);
}
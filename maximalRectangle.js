
let testMatrix = [["1"]]
// What is the height of the largest consecutive string of 1s from this element
let row = testMatrix.length;
let col = testMatrix[0].length
let dph = [[...testMatrix[0]], ...testMatrix].map(arr => arr.map(index => 0))
let dpl = [[...testMatrix[0]], ...testMatrix].map(arr => arr.map(index => 0))
let dpr = [[...testMatrix[0]], ...testMatrix].map(arr => arr.map(index => arr.length-1))
let lb = 0

// Find max height at anygiven point, store it in dph
// Also find left bound of any given index using same spot above

    for(let x = 1; x < testMatrix.length+1; x++){
        for(let y = 0; y < testMatrix[0].length; y++){
            if(testMatrix[x-1][y] === "1"){
                dph[x][y] = 1 + dph[x-1][y]
                dpl[x][y] = Math.max(lb, dpl[x-1][y])
            } else {
                lb = y + 1
            }
        }
        
 //Find right bound by starting at end of array and using same technique as right bound.   

        let rb = testMatrix[0].length - 1
        for(let y = testMatrix[0].length-1; y > -1; y--){
            if(testMatrix[x-1][y] === "1"){
                dpr[x][y] = Math.min(rb, dpr[x-1][y])
            } else {
                rb = y - 1
            }
        }
    }

// Compute area, l*w.  l is area between left bound and right, w is max height at given index. All ones represent potential rectangles.

    let maxarea = 0

    for(let x = 1; x < testMatrix.length+1; x++){
        for(let y = 0; y < testMatrix[0].length; y++){
            if(testMatrix[x-1][y] === "1"){
               maxarea = Math.max(maxarea, (dpr[x][y] - dpl[x][y] + 1) * dph[x][y]) 
            }
        }
    }

    debugger


// debugger
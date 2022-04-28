// Define our labelmap
const labelMap = {
    1: {name: 'a', color: 'red'},
    2: {name: 'b', color: 'yellow'},
    3: {name: 'c', color: 'green'},
    4: {name: 'd', color: 'blue'},
    5: {name: 'e', color: 'cyan'},
    6: {name: 'f', color: 'lime'},
    7: {name: 'i', color: 'tomato'},
    8: {name: 'k', color: 'gold'},
    9: {name: 'l', color: 'greenyellow'},
    10: {name: 'm', color: 'violet'},
    11: {name: 'n', color: 'pink'},
    12: {name: 'o', color: 'blueviolet'},
    13: {name: 'p', color: 'greenyellow'},
    14: {name: 'q', color: 'indigo'},
    15: {name: 'r', color: 'olive'},
    16: {name: 't', color: 'orange'},
    17: {name: 'u', color: 'palegreen'},
    18: {name: 'v', color: 'purple'},
    19: {name: 'w', color: 'salmon'},
    20: {name: 'x', color: 'sienna'},
    21: {name: 'y', color: 'antiquewhite'},
}


// Define a drawing function
export const drawRect = (boxes, classes, scores, threshold, imgWidth, imgHeight, ctx)=>{
    for(let i=0; i<=boxes.length; i++){
        if(boxes[i] && classes[i] && scores[i]>threshold){
            // Extract variables
            const [y,x,height,width] = boxes[i]
            const text = classes[i]

            // Set styling
            ctx.strokeStyle = labelMap[text]['color']
            ctx.lineWidth = 10
            ctx.fillStyle = 'white'
            ctx.font = '30px Arial'

            // DRAW!!
            ctx.beginPath()
            ctx.fillText(labelMap[text]['name'] + ' - ' + Math.round(scores[i]*100)/100, x*imgWidth, y*imgHeight-10)
            ctx.rect(x*imgWidth, y*imgHeight, width*imgWidth/2, height*imgHeight/2);
            ctx.stroke()
        }
    }
}

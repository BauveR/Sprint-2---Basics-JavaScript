function eachElement (arr,callbackFunction) {
    arr.forEach(element => { 
        callbackFunction (element)
    });
    }

    const arr = [2,3,5,6]

function processElement(element) {
      console.log (`procesado, ${element}`);
}

eachElement(arr,processElement);


function eachElement (minus, callbackFunction) {
    minus = minus.toUpperCase();
        callbackFunction (minus);
    }

    const minus = "carlitos"

function processElement(minus) {
      console.log (`procesado, ${minus}`);
}

eachElement(minus,processElement);


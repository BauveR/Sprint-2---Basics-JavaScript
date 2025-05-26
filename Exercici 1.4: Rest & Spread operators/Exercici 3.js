const originalObject = {cosa: `Boligrafo`, color: `rosa`,};

const copyObject = {...originalObject};

copyObject.color = "cafe";

console.log(copyObject);
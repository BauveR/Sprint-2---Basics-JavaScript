function showData(name, age, city) {
    console.log(`name: ${name} age: ${age} city:${city}`);
}

const data = [ "Ricardo", 32, "CDMX"];

showData(...data);
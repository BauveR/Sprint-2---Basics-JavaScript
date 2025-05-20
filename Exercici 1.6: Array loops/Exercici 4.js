let obj = { nombre: "Ola", edad: 25, ciudad: "Barcelona" };

for(const objeto in obj) {
    console.log(`${objeto} --> ${ obj [objeto]}`);
}
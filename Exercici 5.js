const arr = [ 1, 3, 7, 10 ,15, 17, 11, 5, 8, 12, 9 ];

const result = arr
    .filter((x) => x >=10)
    .map ((x) => x * 2)
    .reduce((filt, x) => filt + x, 0);

    console.log(result);
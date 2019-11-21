// CARI NEIGHBOR TERDEKAT 1 KOORDINAT UNTUK MASING-MASING STRING YANG DITEMUKAN

function findNeighbors(arr){
    // TULIS KODEMU DISINI

    //membuat object output
    var output = {};

    //perulangan untuk mendapatkan koordinat array
    for(var i = 0 ; i < arr.length ; i++){
        for(var j = 0 ; j < arr[i].length ; j++){

            //kondisi untuk mencari string
            if (isNaN(arr[i][j]) === true) {
                output[arr[i][j]] = [];

                //array koordinat yang mungkin di sekitar sebuah titik (array)
                var iOordinat = [i-1, i-1, i-1, i  , i  , i+1, i+1, i+1];
                var jOordinat = [j-1, j  , j+1, j-1, j+1, j-1, j  , j+1];

                //perulangan untuk memasukkan array koordinat di atas
                for (var k=0; k<iOordinat.length; k++) {

                    //kondisi yang diperlukan untuk mem-push HANYA ANGKA di sekitar string
                    if ((iOordinat[k] >= 0 && jOordinat[k] >=0) && (iOordinat[k] < arr.length && jOordinat[k] < arr[i].length) && isNaN(arr[iOordinat[k]][jOordinat[k]]) === false) {
                        output[arr[i][j]].push(arr[iOordinat[k]][jOordinat[k]]);
                    }
                   
                }
            }
        }
        
    }
    console.log();
    return output; //output hasil
}

console.log(findNeighbors([
    [456, 871, 670, 122],
    [980, "A", 678, 231],
    [564, 671, 984, 776],
    [100, 203, "B", 156]
]));


/* OUTPUT:
{
    A: [456, 871, 670, 980, 678, 564, 671, 984],
    B: [671, 984, 776, 203, 156]
}
*/


console.log(findNeighbors([
    [456, 871, 670, "X"],
    [980, 564, 780, 231],
    ["Y", 671, "Z", 776],
    [100, 203, 122, 156]
]));


/* OUTPUT:
{
    X: [670, 780, 231],
    Y: [980, 564, 671, 100, 203],
    Z: [564, 780, 231, 671, 776, 203, 122, 156]
}
*/

console.log(findNeighbors([
    ["I", 871, 670, "J"],
    [980, 564, 780, 231],
    [456, 671, 980, 776],
    [100, 203, 122, "K"]
]));


/* OUTPUT:
{ 
    I: [ 871, 980, 564 ],
    J: [ 670, 780, 231 ],
    K: [ 980, 776, 122 ] 
}
*/

console.log(findNeighbors([
    ["I", 871, 670, "J", 232],
    [980, 564, 780, 231,123],
    ["L", 671, 980, 776],
    [100, 203, 122, "K"]
]));

console.log(findNeighbors([
    ["A", 871, 670, "B"],
    [980, 564, 780, 231,123],
    ["C", "D", 980, 776],
    [100, 203, 122, "E", 908],
    [343, 232, 456]
]));
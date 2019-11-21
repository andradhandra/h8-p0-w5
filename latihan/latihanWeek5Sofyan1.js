// VARIASI SOAL NOMOR 2
// MENCARI MOVIE BERDASARKAN BULAN/TAHUN

function findMovie(when, arrMovie){
    // tulis kodemu disini
    var hasil = {};

    //mengambil data dari array when
    if (when.length === 0) {
        hasil.eror = 'Filter Harus Diisi';
        return hasil;
    } else  if (when.length > 2) {
        hasil.eror = 'Input invalid';
        return hasil;
    } else  if (when.length === 1) {
        if (isNaN(when[0]) === true) {
            hasil.eror = 'Tidak menemukan movie di waktu tersebut';
            return hasil;
        } else {
            hasil.year = when[0];
            hasil.count = 0;
            hasil.list = [];
        }
    } else {
        hasil.month = when[0];
        hasil.year = when[1];
        hasil.count = 0;
        hasil.list = [];
    }
   
    //looping mengakses arrMovie
    for (var i=0; i<arrMovie.length; i++) {

        //mencari bulan dari array film
        var bulan = "";
        // console.log(arrMovie[i][1]);
        for (var j =0; j<arrMovie[i][1].length; j++) {
            if (isNaN(arrMovie[i][1][j]) === true) {
                bulan += arrMovie[i][1][j];
            }
        }
    //    console.log(bulan);

    //mencari tahun dari array film
    var tanggal = new Date(arrMovie[i][1]);
    var tahun = tanggal.getFullYear();
    // console.log(tahun);
    
    //mengisi object hasil
    if (hasil.month === undefined) {
        if (tahun === hasil.year) {
            hasil.count += 1;
            hasil["list"].push({title: arrMovie[i][0], genre: arrMovie[i][2]});
        }
    }else {
        if (tahun === hasil.year && bulan === hasil.month) {
            hasil.count += 1;
            hasil["list"].push({title: arrMovie[i][0], genre: arrMovie[i][2]})
        }
    }
    } 
    return hasil;
}

console.log(findMovie(["May", 2016], [
    ["Suicide Squad", "3 May 2016", "Action"],
    ["Interstellar", "6 Juny 2018", "Sci-Fi"],
    ["La La Land", "24 Juny 2018", "Romatic"],
    ["Fast Furious", "2 January 2019", "Action"],
    ["IT", "7 January 2019", "Horror"],
    ["Justice League", "14 April 2019", "Action"],
    ["Lion King", "20 July 2019", "Animation"]
]));

/*
{
    month: "May",
    year: "2016",
    count: 1,
    list: [
        {
            title: "Suicide Squad",
            genre: "Action"
        }
    ]
}
*/

console.log(findMovie(["January", 2019], [
    ["Suicide Squad", "3 May 2016", "Action"],
    ["Interstellar", "6 Juny 2018", "Sci-Fi"],
    ["La La Land", "24 Juny 2018", "Romatic"],
    ["Fast Furious", "2 January 2019", "Action"],
    ["IT", "7 January 2019", "Horror"],
    ["Justice League", "14 April 2019", "Action"],
    ["Lion King", "20 July 2019", "Animation"]
]));

/*
{ 
    month: 'January',
    year: 2019,
    count: 2,
    list:[ 
        { title: 'Fast Furious', genre: 'Action' },
        { title: 'IT', genre: 'Horror' } 
    ] 
}
*/

console.log(findMovie([2019], [
    ["Suicide Squad", "3 May 2016", "Action"],
    ["Interstellar", "6 Juny 2018", "Sci-Fi"],
    ["La La Land", "24 Juny 2018", "Romatic"],
    ["Fast Furious", "2 January 2019", "Action"],
    ["IT", "7 January 2019", "Horror"],
    ["Justice League", "14 April 2019", "Action"],
    ["Lion King", "20 July 2019", "Animation"]
]));

/*
{ 
    year: 2019,
    count: 4,
    list:[ 
        { 
            title: 'Fast Furious', 
            genre: 'Action' 
        },
        { 
            title: 'IT', 
            genre: 'Horror' 
        },
        { 
            title: 'Justice League', 
            genre: 'Action'
        },
        { 
            title: 'Lion King', 
            genre: 'Animation' 
        }
    ] 
}
*/

console.log(findMovie(["December"], [
    ["Suicide Squad", "3 May 2016", "Action"],
    ["Interstellar", "6 Juny 2018", "Sci-Fi"],
    ["La La Land", "24 Juny 2018", "Romatic"],
    ["Fast Furious", "2 January 2019", "Action"],
    ["IT", "7 January 2019", "Horror"],
    ["Justice League", "14 April 2019", "Action"],
    ["Lion King", "20 July 2019", "Animation"]
]));

/*
{ error: 'Tidak menemukan movie di waktu tersebut' }
*/

console.log(findMovie([], [
    ["Suicide Squad", "3 May 2016", "Action"],
    ["Interstellar", "6 Juny 2018", "Sci-Fi"],
    ["La La Land", "24 Juny 2018", "Romatic"],
    ["Fast Furious", "2 January 2019", "Action"],
    ["IT", "7 January 2019", "Horror"],
    ["Justice League", "14 April 2019", "Action"],
    ["Lion King", "20 July 2019", "Animation"]
]));

/*
{ error: 'Filter Harus Diisi' }
*/
//Logic Challenge - Most Frequent Largest Numbers

function sorting(arrNumber) {
    // code di sini

    //pake for
//     for (var i=0; i<arrNumber.length-1; i++) {
//         if (arrNumber[i] > arrNumber[i+1]) {
//             var sementara = arrNumber[i];
//             arrNumber[i] = arrNumber[i+1];
//             arrNumber[i+1] = sementara;
//         }
//     }
//     return arrNumber;
  

    //pake do-while
    var toggle = true;
    do { toggle = false;
        for(var i=0; i<arrNumber.length; i++) {
            if (arrNumber[i] > arrNumber[i+1]) {
                var sementara = arrNumber[i];
                arrNumber[i] = arrNumber[i+1];
                arrNumber[i+1] = sementara;
                toggle = true;
            }
        } 
    }
    while (toggle); 
    // console.log(arrNumber [i]);
    return arrNumber;
}
  
  function getTotal(arrNumber) {
    // code di sini

    if (arrNumber.length === 0) {
        return "''";
    }

    var max=0
    for (var i=0; i<arrNumber.length; i++) {
        if (arrNumber[i] > max) {
           max = arrNumber[i];
            var totalMuncul = 1;
        } else if (arrNumber[i] === max) {
            totalMuncul ++;
        }
    }
    return `angka paling besar adalah ${max} dan jumlah kemunculan ${totalMuncul} kali`;
  }
  
  function mostFrequentLargestNumbers(arrNumber) {
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);
    return countHighest;
  }
  
  console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
  //'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'
  
  console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
  //'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'
  
  console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
  //'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'
  
  console.log(mostFrequentLargestNumbers([]));
  //''

  console.log(sorting([2,5,4,1,3,6]));
function totalDigitRekursif(angka) {
    // you can only write your code here!
    if (String(angka).length === 0) {
        return 0;
    } else {
        return Number(String(angka)[0]) + totalDigitRekursif(String(angka).slice(1));
    }
    return (angka[0]);
  }
  
  // TEST CASES
  console.log(totalDigitRekursif(512)); // 8
  console.log(totalDigitRekursif(1542)); // 12
  console.log(totalDigitRekursif(5)); // 5
  console.log(totalDigitRekursif(21)); // 3
  console.log(totalDigitRekursif(11111)); // 5

  console.log(totalDigitRekursif(202020202020));
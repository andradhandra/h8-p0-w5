//Logic Challenge - Password Generator

function changeVocals (str) {
    //code di sini
    var vokal = ['a','e','i','o','u',];
    var sebelah = ['b','f','j','p','v'];
    var hurupSebelah = "";
    for (var i=0; i<str.length; i++) {
        if (str[i] === " ") {
            hurupSebelah += str[i];
        } else {
            var temp =str[i];
            for (var j=0; j<vokal.length; j++) {
                if (str[i] === vokal[j]) {
                   temp = sebelah[j];
                } else if (str[i] === vokal[j].toUpperCase()) {
                    temp = sebelah[j].toUpperCase();
                } 
            } 
            // console.log(temp);
            hurupSebelah += temp;
        }
    }
    return hurupSebelah;
  }
  
  function reverseWord (str) {
    //code di sini
    var balik = "";
    for (var i=str.length-1; i>=0; i--) {
        balik+= str[i];
    }
    return balik;
  }
  
  function setLowerUpperCase (str) {
    //code di sini
    var upLow = "";
    for (var i = 0; i<str.length; i++) {
        if (str[i] === str[i].toUpperCase()) {
            upLow += str[i].toLowerCase();
        } else {
            upLow += str[i].toUpperCase();
        }
    }
    return upLow;
  }  
  
  function removeSpaces (str) {
    //code di sini
    var vokal = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    var noSpace = "";
    for (var i=0; i<str.length; i++) {
        for (var j=0; j<vokal.length; j++) {
            if (str[i] === vokal[j] || str[i] === vokal[j].toUpperCase()) {
                noSpace += str[i];
            }
        }
    }
    return noSpace;
  }
  
  function passwordGenerator (name) {
    //code di sini
    if (name.length < 5) {
        console.log();
        return 'Minimal karakter yang diinputkan adalah 5 karakter';
    } else {
        name = changeVocals(name);
        name = reverseWord(name);
        name = setLowerUpperCase(name);
        name = removeSpaces(name);
    }
    console.log();
    return name;
  }
  
  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'

  console.log(passwordGenerator("aYsZ bCz D"));
let fs = require('fs');

    let num = 13;
    let file = fs.readFileSync('text2.txt', 'utf-8');
    
    if ( num / num === 1 && num / 1 === num){
        fs.writeFileSync('text2.txt', 'true');
    }
    else {
        fs.writeFileSync('text2.txt', 'false') 
    }
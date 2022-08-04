const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    const arr = expr.match(/.{1,10}/g);

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === '**********') {
            arr[i] = ' ';
        }
        arr[i] = arr[i].replace(/10/g, '.');
        arr[i] = arr[i].replace(/11/g, '-');
        arr[i] = arr[i].replace(/00/g, '');
    
        for (var key in MORSE_TABLE) {
            if(arr[i] === key) {
                arr[i] = MORSE_TABLE[key];
            }
        }
    }
    return arr.join('');
}

module.exports = {
    decode
}
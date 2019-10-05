const MORSE_TABLE = {
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
    '**********': ' ',

};
function decode(expr) {

var mass = expr; 
var arr = mass.match(/.{10}/g);
var rez = []; 
var k; 
k = (mass.length)/10; 
 
for (var z=0; z < k; z++) 
{ 
if (arr[z] == '0011101010'){rez[z] = 'b'}; 
if (arr[z] == '0011101110'){rez[z] = 'c'}; 
if (arr[z] == '0000111010'){rez[z] = 'd'}; 
if (arr[z] == '0000001011'){rez[z] = 'a'}; 
if (arr[z] == '0010101110'){rez[z] = 'f'}; 
if (arr[z] == '0000000010'){rez[z] = 'e'}; 
if (arr[z] == '0010101010'){rez[z] = 'h'}; 
if (arr[z] == '0010111010'){rez[z] = 'l'}; 
if (arr[z] == '0000111111'){rez[z] = 'o'}; 
if (arr[z] == '0000101111'){rez[z] = 'w'}; 
if (arr[z] == '0000101110'){rez[z] = 'r'}; 
if (arr[z] == '**********'){rez[z] = ' '}; 
if (arr[z] == '0000111110'){rez[z] = 'g'}; 
if (arr[z] == '0000001010'){rez[z] = 'i'}; 
if (arr[z] == '0010111111'){rez[z] = 'j'}; 
if (arr[z] == '0000111011'){rez[z] = 'k'}; 
if (arr[z] == '0000001111'){rez[z] = 'm'}; 
if (arr[z] == '0000001110'){rez[z] = 'n'}; 
if (arr[z] == '0010111110'){rez[z] = 'p'}; 
if (arr[z] == '0011111011'){rez[z] = 'q'}; 
if (arr[z] == '0000101010'){rez[z] = 's'}; 
if (arr[z] == '0000000011'){rez[z] = 't'}; 
if (arr[z] == '0000101011'){rez[z] = 'u'}; 
if (arr[z] == '0010101011'){rez[z] = 'v'}; 
if (arr[z] == '0011101011'){rez[z] = 'x'}; 
if (arr[z] == '0011101111'){rez[z] = 'y'}; 
if (arr[z] == '0011111010'){rez[z] = 'z'}; 
if (arr[z] == '1011111111'){rez[z] = '1'}; 
if (arr[z] == '1010111111'){rez[z] = '2'}; 
if (arr[z] == '1010101111'){rez[z] = '3'}; 
if (arr[z] == '1010101011'){rez[z] = '4'}; 
if (arr[z] == '1010101010'){rez[z] = '5'}; 
if (arr[z] == '1110101010'){rez[z] = '6'}; 
if (arr[z] == '1111101010'){rez[z] = '7'}; 
if (arr[z] == '1111111010'){rez[z] = '8'}; 
if (arr[z] == '1111111110'){rez[z] = '9'}; 
if (arr[z] == '1111111111'){rez[z] = '0'}; 
} 
var t = rez.join(''); 
return t;
    
}

module.exports = {
    decode
}

const string = "Hello Hello There! Hellooo! That's why Obi-1 here!";
const string2 = "titanic";
const string3 = "color";

// Full expressions
const regex = /Hello/; // exact match
const regex = /Hello|Hi/; // or
const regex = /Hello/i; // case insensitive (='hello')
const regex = /Hello/g; // 'global' match every iteration (['Hello', 'Hello'])
const regex = /H.llo/; // 'wildcard' / 'dot' - any (one) character
const regex = /H[eoa]llo/; // character classes (matches 'Hello' 'Hollo' 'Hallo')
const regex = /[a-e0-9]/; // from...to characters/numbers match
const regex = /[^aeiou]/gi; // (negated character set) search matches anything but this set ('^' caret character) ie NOT
const regex = /a+/g; // one or more consecutive characters
const regex = /lo*/g; // zero or more consecutive characters (['lo'] ['looo'])
const regex = /t[a-z]*i/; // 'greedy match' returns ['titani'] default search!
const regex = /t[a-z]*?i/; // 'lazy match' returns ['ti']
const regex = /^Hello/; // search for patterns at the beginning of strings (^ is outside [])
const regex = /here!$/; // search for patterns at the end of strings
const regex = /Hello{3,5}/; // quantity specifiers ("Hello" - false / "Hellooo" - true) {min, max}
const regex = /Hello{3,}/; // specifies only lower number of patterns ("Hello" - false / "Hellooo") - true {min,}
const regex = /Hello{3}/; // specifies exact number of patterns ("Hello" - false / "Hellooo") - true
const regex = /colou?r/; // zero or one instance of character

// Shortcuts
const regex = /\w/; // = [A-Za-z0-9_] alphanumerics (underscore '_' included)
const regex = /\W/; // = [^A-Za-z0-9_] NOT + alphanumerics (underscore '_' included)
const regex = /\d/; // = [0-9] digits/numbers
const regex = /\D/; // = [^0-9] NOT + digits/numbers
const regex = /\s/; // = [ \r\t\f\n\v] matches whitespace, carriage return, tab, form feed, and new line characters
const regex = /\S/; // = [^ \r\t\f\n\v]

// Lookaheads
const regex = /H(?=e)/; // positive lookahead, returns prev character if true ['H']
const regex = /H(?!e)/; // negative lookahead, returns prev character if true ['H'], but nothing if false

// example
// let password = "abc123";
// let checkPass = /(?=\w{3,6})(?=\D*\d)/;
// checkPass.test(password); // = true

// Groups
const regex = /H(ell|oll)o/g; // group search
const regex = /(\w+) \1 \1/; // 'capture group' match() returns [instance,capturegroup] => ["Hello Hello", "Hello"]

// Methods
regex.test(string); // returns true/false if matched/unmatched
string.match(regex); // returns array of matched values
string.replace(regex, value); // replaces regex with value / use '$' to access capture groups

// example
// "Code Camp".replace(/(\w+)\s(\w+)/, '$2 $1'); // => "Camp Code"
// example === String.prototype.trim()
// let wsRegex = /^(\s)(\s)$/
// string.replace(wsRegex,'')

let length;

const setLength = function (value) {
   length = value;
}
const bugFix = length => {
   if (!length) console.log("no set length value");
}
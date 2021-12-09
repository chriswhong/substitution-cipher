const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ? ";
const permuted = "ZYXWVUTSRQPONMLKJIHGFEDCBA? ";

const encodeText = (text) => {

  let i=0

  let result = ""

  while (i < text.length) {
  　　 const ind = alphabet.indexOf(text.charAt(i));

  　　 result = result + permuted.charAt(ind);
  　　 i++
  }

  return result
}

const decodeText = (text) => {
  let i=0

  let result = ""

  while (i < text.length) {
  　　 const ind = permuted.indexOf(text.charAt(i));

  　　 result = result + alphabet.charAt(ind);
  　　 i++
  }

  return result
}


$('#input').bind('input propertychange', function() {
  const input = this.value.toUpperCase()
  const encoded = encodeText(input)
  $("#output").val(encoded);
});

$('#output').bind('input propertychange', function() {
  const input = this.value.toUpperCase()
  const decoded = decodeText(input)
  $("#input").val(decoded);
});

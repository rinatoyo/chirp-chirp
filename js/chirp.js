function chirp(n) {
  // FIX ME
  debugger;
  if (n === 0) {
    return "";
  } else {
    return "chirp " + chirp(n - 1);
  }
}

$(document).ready(function() {
  $("#result").html(chirp(3));
});

let index = 0;
function recursion(input) {
  let seconds = input * 1000
  if (index >= input) {
    return;
  }
  setTimeout(() => {
    process.stdout.write('.');
  }, seconds);
} 

recursion();

const sentence = "hello there from lighthouse labs";

// animate the sentence - reveal one character at a time

const lettersDisplayDelay = function(string, delaytime) {
  let delay = delaytime;
  for (let i = 0; i < string.length; i++) {
    setTimeout(() => {
      // prints it to the console without newline for each character
      if (i === string.length - 1) {
        process.stdout.write(string[i] + "\n");
      } else {
        process.stdout.write(string[i]);
      }
    }, delay)
    delay += delaytime;
  }
}

lettersDisplayDelay(sentence, 50);
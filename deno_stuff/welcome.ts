import log from './lib/what-the-hell-is-this.ts';

let i: number = 1;
const puppy: number = setInterval(() => {
  console.log(log(i));
  if (i === 10) {
    clearInterval(puppy);
  }
  i++;
}, 1000);

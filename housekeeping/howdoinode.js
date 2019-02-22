i = 1;
setInterval(() => {
  console.log(`${i} ${i === 1 ? 'second has' : 'seconds have'} passed`);
  i++;
}, 1000);

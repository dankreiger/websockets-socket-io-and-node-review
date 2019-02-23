const log = (i: number) => {
  console.log("\nyou're boring dan");
  return `${i} ${i === 1 ? 'second has' : 'seconds have'} passed`;
};

export default log;

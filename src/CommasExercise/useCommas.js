function useCommas(num) {
  const stringNum = num.toString();
  const numLength = stringNum.length;
  const modded = numLength % 3;
  let number = [];

  if (modded !== 0) {
    let first = stringNum.slice(0, modded);
    number.push(first);

    let rest = stringNum.slice(modded);

    for (let i = 0; i < rest.length; i += 3) {
      number.push(rest.slice(i, i + 3));
    }
  } else if (modded === 0) {
    for (let i = 0; i < stringNum.length; i += 3) {
      number.push(stringNum.slice(i, i + 3));
    }
  }
  const fullNumber = number.join(",");
  console.log(fullNumber);
}

useCommas(22028);

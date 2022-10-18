function lotteryCoupons(n) {
  // Write your code here
  const coupons = {};
  for (let i = 1; i <= n; i++) coupons[i] = i;
  const res = [];
  const couponsArray = Object.values(coupons);
  for (let i = 0; i < couponsArray.length; i++) {
    for (let j = i; j < couponsArray.length; j++) {
      if (couponsArray[i] === sumDigit(couponsArray[j]) && couponsArray[i] !== couponsArray[j])
        res.push([couponsArray[i], couponsArray[j]]);
    }
  }
  return res.length || Object.values(coupons).length;
}

const sumDigit = (num) => {
  return (num + '').split('').reduce((res, curr) => res + parseInt(curr), 0);
};

console.log(lotteryCoupons(3));

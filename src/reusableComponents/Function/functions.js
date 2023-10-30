export const pixFun = (num) => num / 14.5 + "vw";
export const RF = (num) => {
  const kk = num.split("px");
  const kk2 = JSON.parse(kk[0]);
  const kk3 = kk2 / 16.4;
  return kk3 + "vw";
};
export const MRF = (num) => {
  const kk = num.split("px");
  const kk2 = JSON.parse(kk[0]);
  const kk3 = kk2 / 4.8;
  return kk3 + "vw";
};
export const MobPixFun = (num) => num / 4.8 + "vw";

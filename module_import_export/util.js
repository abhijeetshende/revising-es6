let utilService = {};

utilService.printToScreen = function (str) {
  let bodyel = document.getElementsByTagName("body");
  let para = document.createElement("p");
  para.innerText = str;
  bodyel[0].append(para);
};
let ab = 4;
export default ab;

export { utilService };

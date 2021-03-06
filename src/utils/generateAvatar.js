import tinycolor from "tinycolor2";

const getCorrectIndex = number => {
  return number > 255 ? 255 : number < 0 ? 0 : number;
};

const generateAvatarFromHash = hash => {
  
  const [r, g, b] = hash
    .substr(hash.length - 4, hash.length - 1)
    .split("")
    .map(char => getCorrectIndex(char.charCodeAt()));

  return {
    color: tinycolor({ r, g, b })
      .lighten(10)
      .saturate(10)
      .toHexString(),
    colorLighten: tinycolor({ r, g, b })
      .lighten(30)
      .saturate(30)
      .toHexString()
  };
};

export default generateAvatarFromHash
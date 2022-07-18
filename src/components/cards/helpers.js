export const constructText = (text, arr) => {
  let tex = text.split(" ");
  let count = 0;

  for (let i = 0; i < tex.length; i++) {
    if (tex[i] === "{}" || tex[i] === "{}!") {
      tex[i] = arr[count].text;
      count += 1;
    }
  }

  return tex.join(" ");
};

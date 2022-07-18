export const constructText = (text, arr) => {
  let tex = text.split(" ");
  let count = 0;

  for (let i = 0; i < tex.length; i++) {
    if (tex[i] === "{}" || tex[i] === "{}!") {
      tex[i] = (
        <span style={{ color: arr[count].color }}>{arr[count].text}</span>
      );
      count += 1;
    } else {
      tex[i] = <span>{tex[i]}</span>;
    }
  }

  return tex;
};

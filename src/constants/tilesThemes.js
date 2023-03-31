const exile = [];
for (let i = 1; i <= 250; i++) {
  exile.push(`${require(`../Images/Exile/exile${i}.png`)}`);
}
const medievals = [];
for (let i = 1; i <= 766; i++) {
  medievals.push(`${require(`../Images/Medievales/medieval${i}.png`)}`);
}
const futurist = [];
for (let i = 1; i <= 29; i++) {
  futurist.push(`${require(`../Images/Futuristas/futurist${i}.png`)}`);
}
const contemporany = [];
for (let i = 1; i <= 48; i++) {
  contemporany.push(
    `${require(`../Images/Contemporaneo/contemporany${i}.jpg`)}`
  );
}
for (let i = 1; i <= 4; i++) {
  contemporany.push(
    `${require(`../Images/Contemporaneo/contemporany${i}.png`)}`
  );
}
export const tilesThemes = {
  Exile: exile,
  Medieval: medievals,
  Futurist: futurist,
  Contemporany: contemporany,
};

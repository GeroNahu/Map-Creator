const exile = [];
for (let i = 1; i <= 250; i++) {
  exile.push(`url(${require(`../Images/Exile/tile (${i}).png`)})`);
}
const medievals = [];
for (let i = 1; i <= 766; i++) {
  medievals.push(`url(${require(`../Images/Medievales/medieval${i}.png`)})`);
}
const futurist = [];
for (let i = 1; i <= 29; i++) {
  futurist.push(`url(${require(`../Images/Futuristas/futurist${i}.png`)})`);
}
const contemporany = [];
for (let i = 1; i <= 48; i++) {
  contemporany.push(
    `url(${require(`../Images/Contemporaneo/contemporany${i}.jpg`)})`
  );
}
for (let i = 1; i <= 4; i++) {
  contemporany.push(
    `url(${require(`../Images/Contemporaneo/contemporany${i}.png`)})`
  );
}
export const tilesThemes = {
  Exile: exile,
  Medieval: medievals,
  Futurist: futurist,
  Contemporany: contemporany,
};

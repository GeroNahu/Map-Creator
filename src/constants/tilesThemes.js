const exile = [];
for (let i = 1; i <= 250; i++) {
  exile.push(`url(${require(`../Images/Exile/tile (${i}).png`)})`);
}
const medievals = [];
for (let i = 1; i <= 25; i++) {
  medievals.push(`url(${require(`../Images/Medievales/medieval (${i}).jpg`)})`);
}
const futurist = [];
for (let i = 1; i <= 3; i++) {
  futurist.push(`url(${require(`../Images/Futuristas/futurist (${i}).jpg`)})`);
}
const contemporany = [];
for (let i = 1; i <= 48; i++) {
  contemporany.push(
    `url(${require(`../Images/Contemporaneo/contemporany (${i}).jpg`)})`
  );
}
export const tilesThemes = {
  Exile: exile,
  Medieval: medievals,
  Futurist: futurist,
  Contemporany: contemporany,
};

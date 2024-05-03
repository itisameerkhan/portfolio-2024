export const cloudinary_img = [
  "ys2vm23pqvr3lbliruhu",
  "hjloh0vurdhuqxlamvua",
  "jltrwq1agrjxkwtsrp8x",
  "kbs4bucfgtvab5ofqrtu",
  "z3wk3blnigkanptlnwyl",
  "mioojjwam8nac6t04dn5",
  "t6wi7p1tm6xvjvazlhou",
  "wslpfwavgjpc8hr5xuqa",
  "hvofke3xfgauj7njgxvk",
  "hjloh0vurdhuqxlamvua",
];

export const hacker = () => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  let iterations = 0;

  const interval = setInterval(() => {
    const newName = name
      .split("")
      .map((letter, index) => {
        if (index < iterations) {
          return name[index];
        }
        return letters[Math.floor(Math.random() * 26)];
      })
      .join("");
    // setName(newName);

    if (iterations >= name.length) clearInterval(interval);
    iterations += 1 / 3;
  }, 30);
};

while (true) {
  let nome = prompt("Insira o nome do herói: ");
  if (nome.trim() === "") {
    break;
  }

  let xp = Number(prompt("Insira o XP do herói:"));
  if (isNaN(xp) || xp < 0) {
    alert("XP inválido. Por favor, insira um número maior ou igual a zero.");
    continue;
  }

  let nivel = "";
  if (xp < 1000) {
    nivel = "Ferro";
  } else if (xp >= 1001 && xp <= 2000) {
    nivel = "Bronze";
  } else if (xp >= 2001 && xp <= 5000) {
    nivel = "Prata";
  } else if (xp >= 5001 && xp <= 7000) {
    nivel = "Ouro";
  } else if (xp >= 7001 && xp <= 8000) {
    nivel = "Platina";
  } else if (xp >= 8001 && xp <= 9000) {
    nivel = "Ascendente";
  } else if (xp >= 9001 && xp <= 10000) {
    nivel = "Imortal";
  } else if (xp >= 10001) {
    nivel = "Radiante";
  }

  alert(`O Herói de nome ${nome} está no nível de ${nivel}`);
}

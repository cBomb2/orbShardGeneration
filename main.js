const orbType = Math.round(Math.random() * 2);
if(orbType = 1){
  document.getElementById("a").innerText = "dungeon";
  const seed = Math.round(Math.random() * 1000000000);
  document.getElementById("a").href = "watabou.github.io/one-page-dungeon/?seed=" + seed;
  document.getElementById("ifr").src = "watabou.github.io/one-page-dungeon/?seed=" + seed;
} else {
  document.getElementById("a").innerText = "entity";
  document.getElementById("ifr").src="github.com/zachreborn/dnd_5e_encounter_gen.git";
}

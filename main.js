const orbType = Math.round(Math.random() * 2);
if(orbType = 1){
  document.getElementById("a").innerText = "dungeon";
  const seed = Math.round(Math.random() * 1000000000);
  document.getElementById("a").href = "watabou.github.io/one-page-dungeon/?seed=" + seed;
  document.getElementById("ifr").src = "watabou.github.io/one-page-dungeon/?seed=" + seed;
} else {
  document.getElementById("a").innerText = "entity" + encounter;
}

class RandomEncounterGenerator {
    constructor(seed) {
        this.seed = seed;
        this.random = this.createRandom(seed);
    }

    createRandom(seed) {
        const x = Math.sin(seed) * 10000;
        return () => x - Math.floor(x);
    }

    rollDie(sides) {
        return Math.floor(this.random() * sides) + 1;
    }

    getRandomMonster() {
        const monsters = [
            { name: "Goblin", challenge: 1/4 },
            { name: "Skeleton", challenge: 1/4 },
            { name: "Orc", challenge: 1/2 },
            { name: "Bandit", challenge: 1/8 },
            { name: "Wolf", challenge: 1/4 },
            { name: "Giant Rat", challenge: 1/8 },
            { name: "Zombie", challenge: 1/4 },
            { name: "Hobgoblin", challenge: 1/2 },
            { name: "Giant Spider", challenge: 1 },
            { name: "Dire Wolf", challenge: 1},
            { name: "Ogre", challenge: 2 },
            // Add more monsters as needed
        ];
        const index = this.rollDie(monsters.length) - 1;
        return monsters[index];
    }

    generateEncounter() {
        const numMonsters = this.rollDie(3); // Roll 1d3 for number of monsters
        const encounter = [];

        for (let i = 0; i < numMonsters; i++) {
            encounter.push(this.getRandomMonster());
        }

        return encounter;
    }
}
const encounter = encounterGenerator.generateEncounter();

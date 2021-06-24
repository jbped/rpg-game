class Character {
    constructor(name = "") {
        this.name = name;
        this.health = Math.floor(Math.random() * 10 + 85);
        this.strength = Math.floor(Math.random() * 5 + 5);
        this.agility = Math.floor(Math.random() * 5 + 5);
    }

    // retrieves playerHeath
    getHealth() {
        return `${this.name}'s health is now ${this.health}!`
    }

    // verified that Character is still alive
    isAlive() {
        if (this.health > 0) {
            return true;
        }
        return false;
    }

    // function that reduces Character health by passed through arg
    reduceHealth(health) {
        this.health -= health;

        if (this.health < 0) {
            this.health = 0;
        }
    };
    // gets Character randomized attk val
    getAttackValue() {
        const min = this.strength - 5;
        const max = this.strength + 5;

        return Math.floor(Math.random() * (max - min) + min)
    };
}

module.exports = Character;
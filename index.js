class Ninja {
    constructor(name, health, speed){
        this.name = name;
        this.health = 0;
        this.speed = 3;
        this.strength = 3;
    }
    //This shows the name
    sayName() {
            this.name = "Sarah";
            console.log('The ninjas name is ${this.constructor.name}');
    }
    //This will show all the stats
    showStats(){
        console.log("Name = ${this.name}, health = ${this.health}, speed = ${this.speed}, strength = ${this.strength}");
    }
    //This add 10 health points to the ninja
    drinkSake(){
        this.health += 10;
    }
}

const ninja1 = new Ninja("Naruto");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();

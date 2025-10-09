interface Animal {
    name: string;
    canEat: boolean;
    canDrink: boolean;
    canSleep: boolean;
}

interface Bird extends Animal {
    canFly: boolean;
}

interface Dog extends Animal {
    race: string;
    age: number;
}

const bird: Bird = {
    name: 'Birdy',
    canEat: true,
    canDrink: true,
    canSleep: true,
    canFly: true
};

const dog: Dog = {
    name: 'Dogy',
    canEat: true,
    canDrink: true,
    canSleep: true,
    race: 'Sanchez',
    age: 1
};

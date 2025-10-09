interface Animal {
    name: string;
    canEat: boolean;
    canDrink: boolean;
    canSleep: boolean;
}

interface Bird extends Animal {
    canFly: boolean;
}

type DogRace = 'Husky' | 'Labrador' | 'Chucho';

interface Dog extends Animal {
    race: DogRace;
    age: number;
}

interface Cat {
    name: string;
    color: string;
    canSleep: boolean;
}

interface Snake {
    canEat: boolean;
    canDrink: boolean;
    canSleep: boolean;
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
    race: 'Chucho',
    age: 1
};

const cat: Cat = {
    name: 'Caty',
    color: 'black',
    canSleep: true
};

const snake: Snake = {
    canEat: true,
    canDrink: true,
    canSleep: true
};

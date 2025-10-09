interface Persona {
    name : string,
    canDrink : boolean,
    canWalk : boolean,
    canTalk : boolean
}

interface Extranjero extends Persona {
    hasAyuda : boolean,
    commitCrimenes : boolean
}

const personita : Extranjero = {
    name : "Ronald",
    canDrink : true,
    commitCrimenes : false,
    canWalk : true,
    canTalk : true,
    hasAyuda : false,
}

const Migracion = (persona : Extranjero) => console.log(persona);

Migracion(personita)

type SuperType = {
    name : string
}

type SubType = {
    name : string,
    age : number
}

const subType : SubType = {
    name : "Bogdan",
    age : 24
}

const superType : SuperType = subType
  
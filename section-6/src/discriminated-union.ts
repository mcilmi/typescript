/**
 * Discriminated Unions: Works with object types
 * This can also be used as typeguard.
 */

interface Bird {
    type: 'bird',
    flySpeed: number;
}

interface Horse {
    type: 'horse',
    runSpeed: number;
}

type Animal = Bird | Horse;

/**
 * Typeguards "in" and "instanceof" cannot be used here.
 * Fix: Add a litteral type to the interfaces that can be used as discriminator
 * @param animal Animal
 */
function moveAnimal(animal: Animal) {
    switch (animal.type) {
        case 'bird':
            console.log('Moving with speed: ' + animal.flySpeed);
            break;
        case 'horse':
            console.log('Moving with speed: ' + animal.runSpeed);
            break;
    }
}

const bird: Bird = {
    type: 'bird',
    flySpeed: 80
};


const horse: Horse = {
    type: 'horse',
    runSpeed: 50
};
moveAnimal(bird);
moveAnimal(horse);

export { };
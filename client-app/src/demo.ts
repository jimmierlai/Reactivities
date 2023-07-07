export interface Duck{
    name: string;
    numberOfLegs: number,
    makeSound?: (sound: string) => void;
}

const duck1 : Duck = {
    name: "huey",
    numberOfLegs: 2,
    makeSound: (sound: string) => console.log(sound)
}

const duck2 : Duck = {
    name: "dewey",
    numberOfLegs: 2,
    // makeQuack: (sound: string) => console.log(sound)
}

export const ducks = [duck1, duck2]
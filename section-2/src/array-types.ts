const person = {
    magac: "Maxamed Cilmi",
    da: 35,
    hobbies: ['Coding', 'Aqrin']
};

let favoriteHobbies: string[];
favoriteHobbies = ['Coding', 'Aqrin']

for (const hobby of person.hobbies) {
    /**
     * Due to the typescrips type knowlege, it shines in attaching all the 
     * known properties and methods for the current type.
     */
    console.log(hobby.toUpperCase());
    // Unexisting properties and methods are flagged
    // console.log(hobby.map());
}

console.log(person);

export { }
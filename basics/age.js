//INHERITANCE

class Person {
    constructor(name) {
        this.name = name;
    }

    walk() {
        console.log("walk");
    }
};

class Teacher extends Person {
    constructor(name, degree) {
        super(name);
        this.degree = degree;
    }

    teach() {
        console.log("teach");
    }
}const teacher = new Teacher ("Mosh", "BSc");


//MODULES

import { Teacher } from "./teacher"

export class Person {
    constructor(name) {
        this.name = name;
    }

    walk() {
        console.log("walk");
    }
};

//Separate and put all func in different js files
import { Person } from "./person"

export class Teacher extends Person {
    constructor(name, degree) {
        super(name);
        this.degree = degree;
    }

    teach() {
        console.log("teach");
    }
}

import { Teacher } from "./teacher"

const teacher = new Teacher ("Mosh", "BSc");


//NAMED AND DEFAULT EXPORTS


import { Teacher } from "./teacher"

export class Person {
    constructor(name) {
        this.name = name;
    }

    walk() {
        console.log("walk");
    }
};

//Separate and put all func in different js files
import { Person } from "./person"

// export function promote() {}

export default class Teacher extends Person {
    constructor(name, degree) {
        super(name);
        this.degree = degree;
    }

    teach() {
        console.log("teach");
    }
}

import Teacher, { promote } from "./teacher"

// Default -> import ... from '';
// Named -> import {...} from '';

const teacher = new Teacher ("Mosh", "BSc");


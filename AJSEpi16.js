class Parent{

        constructor(){

            this.age = 68;
        }

        displayName(){

            console.log('Parent name is Prathamesh');
        }

    
}

class Child extends Parent{

    constructor(){

        super();

    }

    getAgeofMyFather(){

        console.log('Father age is ' +this.age);

    }
}

c1 = new Child();
c1.displayName();
c1.getAgeofMyFather();
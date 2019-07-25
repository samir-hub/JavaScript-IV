// CODE here for your Lambda Classes
class Person {
    constructor(attributes){
      this.name = attributes.name,
      this.age = attributes.age;
      this.location = attributes.location;
    }
    // Method go here! 
      speak(){
      console.log(`Hello my name is ${this.name} and I am from ${this.location}.`);
    }
  }// Person

  class Instructor extends Person{
    constructor(instructorAttributes){
      super(instructorAttributes); //replaces GameObject.call
      this.specialty = instructorAttributes.specialty;
      this.favLanguage = instructorAttributes.favLanguage; 
      this.catchPhrase= instructorAttributes.catchPhrase;
    }
    //write methods here!
    demo(subject){
      console.log(`Today we are learning about ${subject}`);
    }
    grade(student, subject){
        console.log(`${student.name} receives a perfect score on ${subject}`);
      }
  }//Instructor
  
  class Student extends Person{
    constructor(studentAttributes){
      super(studentAttributes); //replaces CharacterStats.call
      this.previousBackground = studentAttributes.previousBackground; 
      this.className = studentAttributes.className; 
      this.favSubjects = studentAttributes.favSubjects;
    }
    //write methods here!
    listsSubjects(){
        console.log(`${this.favSubjects}`);
    }

    PRAssignment(subject){
        console.log(`${this.name} has submitted a PR for ${subject}.`);
    }

    sprintChallenge(subject){
        console.log(`${this.name} has begun sprint challenge on ${subject}.`);
    }
  }//Student

  class ProjectManagers extends Instructor{
    constructor(pmAttributes){
      super(pmAttributes); //replaces CharacterStats.call
      this.gradClassName = pmAttributes.gradClassName; 
      this.favInstructor = pmAttributes.favInstructor; 
    }
    //write methods here!
    standUp(channel){
        console.log(`${this.name} announces to ${channel}, @channel standy times!`);
    }
    debugsCode(student, subject){
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}.`);
    }
  }//ProjectManagers


//PERSONS
  const jamie = new Person({
      name: 'Jamie',
      age: 25,
      location: 'North Carolina'
  })

  const luna = new Person({
    name: 'Luna',
    age: 7,
    location: 'North Carolina'
})


//INSTRUCTORS
const bob = new Instructor({
    name: 'Bob',
    age: 59,
    location: 'Alaska',
    specialty: 'CSS',
    favLanguage: 'Java',
    catchPhrase: 'I love coding!'
})

const fran = new Instructor({
    name: 'Fran',
    age: 92,
    location: 'Uganda',
    specialty: 'C#',
    favLanguage: 'SQL',
    catchPhrase: 'Hellooo!'
})

//STUDENTS
const samir = new Student({
    name: 'Samir',
    age: 26,
    location: 'North Carolina',
    specialty: 'HTML',
    favLanguage: 'Javascript',
    catchPhrase: "Hook 'em Horns!",
    previousBackground: 'Petroleum Engineering',
    className: 'WEB22',
    favSubjects: ['Html', 'CSS', 'JavaScript']
})

const hanz = new Student({
    name: 'Hanz',
    age: 31,
    location: 'Romania',
    specialty: 'Linux',
    favLanguage: 'C',
    catchPhrase: "I love Linux!",
    previousBackground: 'Plumber',
    className: 'WEB23',
    favSubjects: ['Html', 'React', 'Pascal']
})

//PMs
const nazar = new ProjectManagers({
    name: 'Nazar',
    age: 22,
    location: 'Texas',
    specialty: 'C++',
    favLanguage: 'MATLAB',
    catchPhrase: "I love Lambda!",
    previousBackground: 'Civil Engineering',
    className: 'WEB25',
    favSubjects: ['React', 'SQL', 'JavaScript'],
    gradClassName: 'WEB18',
    favInstructor: 'Fran'
})

const lily = new ProjectManagers({
    name: 'Lily',
    age: 62,
    location: 'Bhutan',
    specialty: 'Go',
    favLanguage: 'Javascript',
    catchPhrase: "I have the best catchphrase!",
    previousBackground: 'Electrical Engineering',
    className: 'WEB28',
    favSubjects: ['CSS', 'SQL', 'LESS'],
    gradClassName: 'WEB19',
    favInstructor: 'Bob'
})

jamie.speak();
luna.speak();

bob.speak();
fran.speak();
bob.demo('CSS');
bob.grade(samir, 'HTML');
fran.demo('React');
fran.grade(hanz, 'Java');

samir.speak();
hanz.speak();
samir.listsSubjects();
hanz.listsSubjects();
samir.PRAssignment('HTML');
hanz.PRAssignment('CSS');
samir.sprintChallenge('HTML');
hanz.sprintChallenge('CSS');

nazar.speak();
lily.speak();
nazar.demo('CSS');
lily.grade(samir, 'HTML');
nazar.demo('React');
lily.grade(hanz, 'Java');
nazar.standUp('Awesome Channel');
lily.standUp('Great Channel');
nazar.debugsCode(samir, 'Java');
lily.debugsCode(hanz, "HTML");

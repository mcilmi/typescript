/**
 * Generic built-in utility types
 */

// Partial type: Allows optional types.
interface CourseGoal {
    title: string;
    description: string;
    completeUntil: Date;
}

function createCourseGoal(title: string, description: string, date: Date): Partial<CourseGoal> {
    let courseGoal: Partial<CourseGoal> = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal;
}

console.log(createCourseGoal('TypeScript', 'TypeScript class 2022', new Date()));
// Readonly types

const myChildren: Readonly<string>[] = ['Madinah', 'Mikal'];
// const  myChildren.push('Jibriil') // This is not allowed due to Readonly generic type
console.log('My Children:', myChildren);
export { };
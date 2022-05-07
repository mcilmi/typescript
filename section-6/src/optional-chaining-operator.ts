/**
 * Optional chaining: When you don't know if given property is defined
 */

const fetchedUserData = {
    id: 1,
    name: 'Madinah',
    job: { title: 'Accountant', description: 'Awesome accountant' }
};

console.log(fetchedUserData);
// In normal javascript, you would check the existing of a given property in run-time
// console.log(fetchedUserData.job && fetchedUserData.job.title);
// in TS, you can use the optional-chaining opretor ?
console.log(fetchedUserData?.job?.title);

export { };



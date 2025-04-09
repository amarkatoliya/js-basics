const inventory = [
    {name:'kevin',salary:42000},
    {name:'rahul',salary:19000},
    {name:'hemal',salary:22000},
    {name:'priya',salary:15000},
]

const maxSalary = inventory.reduce((maxSal,name) => (
    name.salary > maxSal.salary ? name : maxSal
))

console.log(maxSalary.name);

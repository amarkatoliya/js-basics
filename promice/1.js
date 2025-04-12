const fs = require('fs/promises')

fs.readFile('./hello.txt','utf-8')
.then((content) => {
    console.log("The file data is:", content);
    fs.writeFile('backup.txt', content, 'utf-8',)
    fs.unlink('hello.txt')
})
.then(() => {
    console.log("the new file is sucessfully created and old one deleted");  
})
.catch(error => {
    console.log("error occured",error);
})



// legacy code of the read file and creat and delete file
// const fs = require('fs');
// const { log } = require('console');

// const content = fs.readFileSync('./hello.txt','utf-8', (data) => {
//     console.log("the file data is",data);
// })
// fs.writeFile('backup.txt', content, 'utf-8',() => {
//     console.log("the new file is succesfully ")
// })
// fs.unlink('./hello.txt',(e) => {
//     if(e) throw(error);
//     console.log("hello file is deleted");
// })
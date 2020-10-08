const fs = require('fs');



//removing a file through the code 

// fs.writeFileSync('fileToRemove.txt', 'data in the file');



// fs.writeFile('fileToRemove.txt','data in the file',(err)=>{
//     if(err) return console.log(err);

//     setTimeout(() => {
//         fs.unlinkSync('fileToRemove.txt')
//     }, 6000);
// })

// console.log('hello I am last')
//takes a pathway for a file
/*const reader = */
// fs.readFile('reader.txt', 'utf8',(err,info)=>{
 
// if(err) return console.log('Something went wrong');


fs.writeFile('newReader.txt',info,(err)=>{
    if(err) return console.log(err)
    console.log(('Success: Data written to file'))
})
// fs.appendFile('newReader.txt', 'added my own data',(err)=>{
//     if(err) return console.log(err)
//     console.log('Data was appended to file')
// });
// });


// console.log('Hello, I am Last')
// // reader;


// //creates file if it doesn't exist as the first argument
// //new data as the second

// fs.writeFileSync('newReader.txt', 'new data')

//how to add a directory
// fs.mkdir('auth', (err)=>{
//     if(err) return console.log(err)

//     console.log('Directory was created')
// })
//how to remove a directory
fs.rmdir('auth', (err)=>{
    if(err)throw err;
    console.log('Directory Removed')
})
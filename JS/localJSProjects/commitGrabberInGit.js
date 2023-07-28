let commit_SHA = '8a8cf5a34991e23726fab0d5cfa630b6fb069dd6'
// add your commit_SHA between the '' marks and run the code...

let commitArray = commit_SHA.split('')
let w = commitArray.slice(0, 7).toString().split(',').join('')
console.log(w)

// Example:
// let commit_SHA = '5d692065cf51a2f50ea8e7b19b5a7ae512f633ba';
// logs: 5d69206

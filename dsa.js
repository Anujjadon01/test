// //Q=1

// const firstrepeat=(str)=>{
//     let newArr=str.split(" ");
//     let obj={};

//     for (let i = 0; i < newArr.length; i++) {
//         let word=newArr[i];
//         if(obj[word]){
//             obj[word]+=1;
//         }else{
//             obj[word]=1;
//         }

//     }

//     for(let key in obj){
//         if(obj[key]){
//             return key;
//         }
//     }
// }
// let str="Hello I am here Hello";
// console.log(firstrepeat(str));


////Q=2;

const returnindex = (str) => {
    let newArra = str.split('')
    let obj = {}
    for (let i = 0; i < newArra.length; i++) {
        let char = newArra[i]
        if (obj[char]) {
            obj[char].push(i);
        } else {
            obj[char] = [1];
        }
    }
    let tmp = []
    for (const key in obj) {
        if (obj[key]) {
            tmp.push(key, obj[key])
        }

    }
    return tmp
}
let str = "abcccdd";
console.log(returnindex(str));
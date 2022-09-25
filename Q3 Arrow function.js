// Print Odd number in an array_____________________________________
const arr = [45,89,66,75,2,41,63,75,21,57,52,77,32,4,66,84,45,60]
const odd = (a)=>{
 let oddArr = []
    for (let i = 0; i < a.length; i++) {
        if (a[i] % 2 !== 0) {
           oddArr.push(a[i])
        }   
    }
 return oddArr
}

// strings to title caps in a string array____________________________

const strArr = ["cat", "dog", "fish", "elephant","tiger"]

const titleCaps = (a)=>{
const titleCap = []
for(let i = 0; i < a.length; i++){
    let cap = a[i][0].toUpperCase()
    let small = a[i].slice(1)
    titleCap.push(`${cap}${small}`)
}
 return titleCap
}

// sum all numbers in array_________________________________________________

const num = [1,2,3,4,6,8,10,9,45]
const total =  (a)=> {
 let ans = 0
    for(let i = 0; i < a.length; i++){
        ans += a[i]
    }
 return ans
}

// return all pirme numbers in an array_______________________________________
const numV2 = [45,17,58,3,56,89,487,3734,348674,78,95,2,65,71,91,1]
const prime = (a)=>{
 const primeNum = []
    for(let i = 0; i < a.length; i++){
        if (a[i] === 2) {
            primeNum.push(2)
        }else if(a[i] === 3){
            primeNum.push(3)
        }else if(a[i] % 2 !== 0 && a[i] % 3 !== 0 && a[i] > 1)
            primeNum.push(a[i])
    }
 return primeNum

}

// Return all palindrome in an Array_______________________________________
let testArr = [101,45684,8989,523325,7006,"madam"]

const isPali =  (a)=> {
    const pali = []
    let strArr = a.toString().split(",")
    for (let i = 0; i < strArr.length; i++) {
      let case1 = strArr[i]
      let case2 = strArr[i].split("").reverse().join("")
            if (case1 === case2) {
                pali.push(strArr[i])
            }
    }
    return pali
    
}

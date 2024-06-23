
const btn = document.getElementById('check-btn');

btn.addEventListener("click", ()=>{
    const inputValue = document.getElementById('text-input').value;
    console.log(inputValue);
    if(inputValue.length === 0){
        alert("Please input a value");
    }else{
        toCheckPalidrome(inputValue);
    }
        
})

function toCheckPalidrome(inputValue){
    const value = inputValue.split("");
    console.log(value);
    let arrOfWord = [];
   for(var i =0; i<value.length; i++){
    if(![',', ' ', '_','.','(',')','/','-',].includes(value[i])){
        arrOfWord.push(value[i]);
    }
   }
 const reOfarrOfWord = [...arrOfWord].reverse();
 console.log(reOfarrOfWord);
let palidrome = true;
 for (let i = 0; i < arrOfWord.length; i++) {
    if (arrOfWord[i].toLowerCase() !== reOfarrOfWord[i].toLowerCase()) {
        palidrome = false;
        break;
    }
}
const result = document.getElementById('result');
if(palidrome){
    result.innerHTML = `${inputValue} is a palindrome`
    console.log(inputValue +" is a Palindrome")
}else{
    result.innerHTML = `${inputValue} is not a palindrome  `
    console.log(inputValue+ " is not a palindrome")
}
console.log("everything is wright");
}
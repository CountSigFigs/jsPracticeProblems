//checks to see if word is a palindrone

const isPalindrone = (word1) => {
    for (let i = 0; i < word1.length; i++){
        if (word1[i] != word1[word1.length - (i + 1)]){
            return false;
        }
    }
    return true;
}

console.log(isPalindrone('racecar'));

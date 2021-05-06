const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (const l of horizontalJoin) {
        if (l.includes(word) === true) {
            return true;
        } 
    }
    let arr = [];
    for (let i = 0; i < letters[0].length; i++) {
        let newArr = [];
        for (let j = 0; j < letters.length; j++) {
          newArr.push(letters[j][i]);
        }
        arr.push(newArr);
      }
      const verticalJoin = arr.map(item => item.join(''))
      for (const string of verticalJoin) {
        if (string.includes(word) === true) {
            return true;
        } 
    }
    return false;
    }
  
  
  module.exports = wordSearch;
  
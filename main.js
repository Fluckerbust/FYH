const prompt = require('prompt-sync')({sigint: true});

class Field {
    spawn = []
    row1 = []
    row2 = []
    row3 = []
    row4 = []
    row5 = []

    get 0 () {
      return this.spawn
    }

    get 1 () {
      return this.row1
    }

    get 2 () {
      return this.row2
    }

    get 3 () {
      return this.row3
    }

    get 4 () {
      return this.row4
    }

    get 5 () {
      return this.row5
    }
  }
  
  const newField = new Field()

 const name = prompt('What is your name?');
console.log(`Hey there ${name}, below is the field in which you lost your hat. Go find your hat and try not to fall down a hole while doing it.`);



class Player  {
    constructor(name){
    this._name = name,
    this.asterick = '*'
    this._startPosition = newField.spawn.lastIndexOf(this.asterick),
    this._indexPosition = this._startPosition
    this._startRow = newField[0]
    this._currentRow = this._startRow
};
    
    get indexPosition() {
        return this._indexPosition;
      }

      set updateIndexPosition(newIndexPosition) {
        this._indexPosition = newIndexPosition;
      }
      get currentRow() {
        return this._currentRow;
      }

      set updateCurrentRow(newCurrentRow) {
        this._currentRow = newCurrentRow;
      }
    }




  const randomizeField = () => {
    const fieldChoices = ['O', '░', '░', 'O','░','░']
    return fieldChoices[Math.floor(Math.random() * 5)] 
  }

  function spawnGen () {
    for (let i = 0; i <= 5; i++) {
     newField.spawn.push(randomizeField())
    }
    return newField.spawn
    
  }

  function placePlayer () {
    var randomNum = Math.floor(Math.random() * newField.spawn.length++)
    
    
     newField.spawn.splice(randomNum, 0,  '*')
   
    return newField.spawn
  }



  function row1Gen () {
    for (let d = 0; d <= 6; d++) {
     newField.row1.push(randomizeField())
    }
    return newField.row1
  }

  function row2Gen () {
    for (let j = 0; j <= 6; j++) {
     newField.row2.push(randomizeField())
    }
    return newField.row2
  }
  function row3Gen () {
    for (let k = 0; k <= 6; k++) {
     newField.row3.push(randomizeField())
    }
    return newField.row3
  }
  function row4Gen () {
    for (let g = 0; g <= 6; g++) {
     newField.row4.push(randomizeField())
    }
    return newField.row4
  }
  function row5Gen () {
    for (let f = 0; f <= 6; f++) {
     newField.row5.push(randomizeField())
    }
    return newField.row5
  }

  function placeHat () {
    var randomNum2 = Math.floor(Math.random() * (6 - 2)) + 2
    var randomPlacement = Math.floor(Math.random()* 5)
    var randomRow = Object.keys(newField)[randomNum2]
    newField[randomRow].splice(randomPlacement, 1, '^')
  
   return newField.spawn
  }

 spawnGen()
 placePlayer()
  row1Gen()
  row2Gen()
  row3Gen()
  row4Gen()
  row5Gen()
placeHat()

function displayField() {
   console.log(newField.spawn.join(''))
  console.log(newField.row1.join(''))
  console.log(newField.row2.join(''))
  console.log(newField.row3.join(''))
  console.log(newField.row4.join(''))
  console.log(newField.row5.join(''))
}
const newPlayer = new Player()

console.log(newField.spawn.join(''))
console.log(newField.row1.join(''))
console.log(newField.row2.join(''))
console.log(newField.row3.join(''))
console.log(newField.row4.join(''))
console.log(newField.row5.join(''))



let stillLooking = true
let row = 0
let col = newPlayer.indexPosition
while (stillLooking === true){
const movement = prompt('Which direction do you want to move?');

 


if (movement === 'w') {
  row = row - 1
   
      if ( newField[row][col] === '░' || newField[row][col] === '*') {
        newField[row].splice(col, 1, '*'),
        newPlayer.updateCurrentRow = row,
        displayField(),
        movement
      } else if (newField[row][col] === '^') {
        return stillLooking = false, console.log(`Way to go ${name} you found your hat! Congratulations you win!`) 
      } else return stillLooking = false, console.log('What did I say, watch out for Holes!')
} else if (movement === 'a') {
  col = newPlayer.updateIndexPosition = newPlayer.indexPosition - 1
  
    if ( newField[row][col] === '░' || newField[row][col] === '*') {
      newField[row].splice(col, 1, '*'),
      displayField(),
      movement
    } else if (newField[row][col] === '^') {
      return stillLooking = false, console.log(`Way to go ${name} you found your hat! Congratulations you win!`) 
    } else return stillLooking = false, console.log('What did I say, watch out for Holes!')
} else if (movement === 's') {
  row = row + 1
    
      if ( newField[row][col] === '░') {
        newField[row].splice(col, 1, '*'),
        newPlayer.updateCurrentRow = row,
        displayField(),
        movement
      } else if (newField[row][col] === '^') {
        return stillLooking = false, console.log(`Way to go ${name} you found your hat!Congratulations you win!`) 
      } else return stillLooking = false, console.log('What did I say, watch out for Holes!')
} else if (movement === 'd') {
  col = newPlayer.updateIndexPosition = newPlayer.indexPosition + 1
 
    if ( newField[row][col] === '░' || newField[row][col] === '*') {
      newField[row].splice(col, 1, '*'),
      displayField(),
      movement
    } else if (newField[row][col] === '^') {
      return stillLooking = false, console.log(`Way to go ${name} you found your hat! Congratulations you win!`) 
    } else return stillLooking = false, console.log('What did I say, watch out for Holes!')
}else if (movement === 'W') {
  row = row - 2
  
    if ( newField[row][col] === '░' || newField[row][col] === '*') {
      newField[row].splice(col, 1, '*'),
      newPlayer.updateCurrentRow = row,
      displayField(),
      movement
    } else if (newField[row][col] === '^') {
      return stillLooking = false, console.log(`Way to go ${name} you found your hat! Congratulations you win!`) 
    } else return stillLooking = false, console.log('What did I say, watch out for Holes!')
}else if (movement === 'A') {
  col = newPlayer.updateIndexPosition = newPlayer.indexPosition - 2
  
    if ( newField[row][col] === '░' || newField[row][col] === '*') {
      newField[row].splice(col, 1, '*'),
      displayField(),
      movement
    } else if (newField[row][col] === '^') {
      return stillLooking = false, console.log(`Way to go ${name} you found your hat! Congratulations you win!`) 
    } else return stillLooking = false, console.log('What did I say, watch out for Holes!')
}else if (movement === 'S') {
  row = row + 2
  
    if ( newField[row][col] === '░') {
      newField[row].splice(col, 1, '*'),
      newPlayer.updateCurrentRow = row,
      displayField(),
      movement
    } else if (newField[row][col] === '^') {
      return stillLooking = false, console.log(`Way to go ${name} you found your hat! Congratulations you win!`) 
    } else return stillLooking = false, console.log('What did I say, watch out for Holes!')
}else if (movement === 'D') {
  col = newPlayer.updateIndexPosition = newPlayer.indexPosition + 2
 
    if ( newField[row][col] === '░' || newField[row][col] === '*') {
      newField[row].splice(col, 1, '*'),
      displayField(),
      movement
    } else if (newField[row][col] === '^') {
      return stillLooking = false, console.log(` ${name} found your hat! Congratulations you win!`) 
    } else return stillLooking = false, console.log(`${name}! What did I say, watch out for Holes!`)
}}



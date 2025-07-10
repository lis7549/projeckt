function play(userChoise){
const choise = ["камень", "ножницы", "бумага" ]
const pk_choise = choise[Math.floor(Math.random() * 3)]
let result = ' ';
if (userChoise === pk_choise) {
    alert('нечья')

} else {
 if ( userChoise === 'камень' && pk_choise === 'ножницы' ||
     userChoise === 'ножницы' && pk_choise === 'бумага' ||
     userChoise === 'бумага' && pk_choise === 'камень'
 ) { alert('ты победил') 
    
 } else {
    if ( pk_choise === 'камень' &&  userChoise === 'ножницы' ||
     pk_choise === 'ножницы' && userChoise  === 'бумага' ||
     pk_choise === 'бумага' && userChoise === 'камень') {
        
    } alert('ты проиграл')
 }
}
}
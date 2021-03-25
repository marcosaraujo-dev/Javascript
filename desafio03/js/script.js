window.addEventListener('load',start);

function start(){
    console.log(getGroupMembers('Niccolas', 'Fernando', 'Cristina', 'Paloma'));
    console.log(getFullName('Mariane', 'Mendes', 'Alburqueque', 'Medeiros'));
    console.log(transform([10,20,30,40,50]));
    console.log(transform([61,72,83,94]));
    console.log(onlyNumbersFrom('13487 867323 iugukhlk ^^`JB354'));
}

function getGroupMembers(...members){  
   return Array.from(members);
}

function getFullName(...name){   
    return  name.join(' ');
}
function transform(aNumbers){
    return aNumbers.map(value => (parseInt(value) +10)/10 );;
}

function onlyNumbersFrom(barCode){

   return barCode
   .split('')
   .filter(element => !isNaN(element) && element !== ' ')
   .join(''); 
}


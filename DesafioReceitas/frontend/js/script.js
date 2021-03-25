let recipes = [];

const moneyFormatter = Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

function start2(){
 fetch('http://localhost:3001/recipes').then(function(resource){
   resource.json().then(function (recipes){

   })
 });

}


async function start() {
  const resources = await fetch('http://localhost:3001/recipes');
  const json = await resources.json();
  recipes = json;

  const answers = [];

  answers.push(question01());
  answers.push(question02());
  answers.push(question03());
  answers.push(question04());
  answers.push(question05());
  answers.push(question06());
  answers.push(question07());
  answers.push(question08());
  answers.push(question09());
  answers.push(question10());
  answers.push(doteste());
  answers.push(doteste2());
  answers.push(doteste3());
  answers.push(doteste4());
  for (const [index, answer] of answers.entries()) {
    const style =
      index % 2 === 0
        ? 'backgroundColor: black; color: blue'
        : 'backgroundColor: black; color: orange';

    console.log(
      `%c Questão ${(index + 1).toString().padStart(2, '0')}: ${answer}`,
      style
    );
  }

  
}

function  doteste(){
  const array = [1,'2','3',4,5];
  function f2(){
    return array.filter(item => typeof item === 'string');
  }
  return f2();
}

function doteste2(){
  const array = [1,2,3,4,5,6];
  function f3(){
    return array.map(item => item *2)
    .filter(item => item %3 === 0)
    .reduce((accumulator,current) => accumulator +current,0);
  }
  return f3();

}

function doteste3(){
  const array = [1,2,3,4,5,6,7,8,9,10];
  function f4(){
    return array.map(item => item **2
      )
    
  }
  return f4();

}
function doteste4(){
  const array = [1,2,3,4,5,6,7,8];
  function f4(){
    return array.find(item => item %4 === 0)
    
  }
  return f4();

}

function question01() {
  /**
   * Questão 01: Quantas receitas existem ao todo?
   */
  return recipes.length;
}

function question02() {
  /**
   * Questão 02: Qual é a média de preços das receitas?
   */
  //padrão
  // var sum = 0;
  // for(let i = 0; i< recipes.length; i++){
  //   var currentRecipe = recipes[i];

  //   sum +=currentRecipe.price;
  // }

 
  const sum = recipes.reduce(function(accumulator, recipe){
    return accumulator + recipe.price
  },0)
  
  return moneyFormatter.format(sum / question01());
} 

function question03() {
  /**
   * Questão 03: Qual é a receita mais cara e o seu preço?
   * Dica 01: formate o número obtido com o moneyFormatter, declarado
   * no início deste arquivo
   */
  let maxPrice = 0;
  let TitleRecipe = null
  for(let i = 0; i< recipes.length; i++){
    let currentRecipe = recipes[i];

    if(maxPrice < currentRecipe.price )
    {
      maxPrice = currentRecipe.price;
      TitleRecipe = currentRecipe.title;
    }
  }


  return `o ingrediente maios caro é o ${TitleRecipe} no valor de ${moneyFormatter.format(maxPrice)}`;
}

function question04() {
  /**
   * Questão 04: Qual é a receita que possui mais ingredientes? Mostre também a
   * quantidade de ingredientes desta receita
   */

  let maxIngredients = 0;
  let TitleRecipe = null
  let ingredients = [];
  for(let i = 0; i< recipes.length; i++){
    let currentRecipe = recipes[i];
    let countIngredients = 0; 

    for(let c = 0; c<currentRecipe.ingredients.length;c++)
    {
      countIngredients += 1;
      
    }
    if(maxIngredients < countIngredients )
    {
      maxIngredients = countIngredients;
      TitleRecipe = currentRecipe.title;
      ingredients = currentRecipe.ingredients;
    }

  }

  return `A receita com mais itens é ${TitleRecipe} com ${maxIngredients} itens (${ingredients})`;;
}

function question05() {
  /**
   * Questão 05: Liste todos os ingredientes distintos considerando todas
   * as receitas. Liste os ingredientes separados por ', '.
   * Dica 01: pesquise por array.flat()
   * Dica 02: pesquise por array.join()
   * Dica 03: pesquise por Set em JavaScript e faça a re-conversão
   * para array com Array.from
   */

  let ingredients = [];
  let resultIngredients =[];
  for(let i = 0; i< recipes.length; i++){
    let currentRecipe = recipes[i];
  
    ingredients.push(currentRecipe.ingredients);
  
  }
  const uniqueIngredients = new Set(ingredients.flat());
  resultIngredients = Array.from(uniqueIngredients);
   
  return resultIngredients;
}

function question06() {
  /**
   * Questão 06: existe algum ingrediente que aparece em todas as receitas?
   * Em caso afirmativo, informe-o(os).
   * Dica 01: reaproveite funções já implementadas
   * Dica 02: utilize array.every
   * Dica 03: utilize arrey.forEach
   * Dica 04: pesquise pelo método array.includes
   * Dica 05: pesquise pelo método array.split
   */
  let ingredientsAllRecipes = [];
  let uniqueIngredients = question05();

  //percorre todos ingredientes unicos
  // deve verificar se cada um dele está em todo array de ingredientes do Json

  uniqueIngredients.forEach(element => {
   // console.log(element);
    const every  = recipes.every(item =>{return item.ingredients.includes(element) });
  //  console.log(every);
    if(every){ingredientsAllRecipes.push(element);}
  });
  return ingredientsAllRecipes;
}

function question07() {
  /**
   * Questão 07: Quantas receitas possuem "uva" como ingrediente?
   * Dica 01: pesquise pelo método array.includes
   */
  let ingredients = [];
  let qtdeRecipes = 0;
   
  for(let i = 0; i< recipes.length; i++){
    let currentRecipe = recipes[i];
    
    ingredients = currentRecipe.ingredients

    if(ingredients.includes('uva'))
    {
      qtdeRecipes += 1;
    }
  } 

  return qtdeRecipes;
}

function question08() {
  /**
   * Questão 08: Quantas receitas possuem "abóbora" e "aveia" como ingredientes?
   * Dica 01: pesquise pelo método array.includes
   */
  let ingredients = [];
  let qtdeRecipes = 0;
   
  for(let i = 0; i< recipes.length; i++){
    let currentRecipe = recipes[i];
    
    ingredients = currentRecipe.ingredients

    if(ingredients.includes('abóbora') && ingredients.includes('aveia'))
    {
      qtdeRecipes += 1;
    }
  } 

  return qtdeRecipes;
}

function question09() {
  /**
   * Questão 09: Um determinado cliente quer comprar 2 itens de cada receita
   * que contenha "calabresa" com ingrediente. Quanto ele vai pagar?
   */
  let amountPayable = 0
  let ingredients = [];
   
  for(let i = 0; i< recipes.length; i++){
    let currentRecipe = recipes[i];
    
    ingredients = currentRecipe.ingredients

    if(ingredients.includes('calabresa') )
    {
      amountPayable += (currentRecipe.price *2);
    }
  }
  return moneyFormatter.format(amountPayable);
}

function question10() {
  /**
   * Questão 10: Qual seria o faturamento bruto mensal se fossem vendidos,
   * durante um mês, 3 itens de cada receita?
   */
 

  const monthlyInvoiceing = recipes.reduce((accumulator,currency) => {
    return accumulator +  currency.price;
  },0)
  return moneyFormatter.format((monthlyInvoiceing*30) *2);
}

start();

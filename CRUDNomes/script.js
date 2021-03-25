window.addEventListener('load',start)

var PessoasCadastradas = ['Marcos','Eliane', 'Mysa','Nicollas', 'Mariane'];
var inputPessoas = null;
var isEditing = false;
var currentIndex = null;

function start(){
    inputPessoas = document.querySelector('#nomePessoa');

    preventFormSubmit();
    activateInput();
    render();
}

function activateInput(){
    function inserirPessoas(novaPessoa){
       
        PessoasCadastradas.push(novaPessoa);
    }

    function AlterarPessoas(newPeople){
        
        PessoasCadastradas[currentIndex] = newPeople;
    }

    function handleTyping (event){

        var hasText = !!event.target.value && event.target.value.trim() !== '';
        if(!hasText) return false;
        
        if (event.key === 'Enter'){
            
            if(event.target.value.length >= 3){
                if(isEditing){
                    AlterarPessoas(event.target.value);
                }   
                else{ 
                    inserirPessoas(event.target.value);
                }
               render();
            }
            isEditing = false;
        }
    }

    inputPessoas.addEventListener('keyup',handleTyping);
    inputPessoas.focus();
   
}

function preventFormSubmit(){
    function handleFormSubmit(event){
        event.preventDefault();
    }

    var form = document.querySelector('#formPessoas');
    form.addEventListener('submit', handleFormSubmit);
}

function render()
{
    function createButton(name, index, classCss)
    {
        function actionDeletePeople ()
        {
            PessoasCadastradas.splice(index,1);
            render();
        }
        function actionEditPeople ()
        {
            isEditing= true;
            currentIndex = index;
            inputPessoas.value = PessoasCadastradas[index];
            inputPessoas.focus()
        }
        var action = name === 'Excluir'?   actionDeletePeople : actionEditPeople;
        var button = document.createElement('button');
        button.textContent= name;
        button.classList.add(classCss)

        button.addEventListener('click', action)
        return button;
    }
    var divPessoas = document.querySelector('#names');
    divPessoas.textContent = '';

    var ul = document.createElement('ul');

    for (let i=0;i < PessoasCadastradas.length; i++){
        var nomeAtual = PessoasCadastradas[i];
           
        var li = document.createElement('li');
        
        var buttonEdit = createButton('Editar',i,'buttonEdit');
        var buttonDelete = createButton('Excluir',i,'buttonDelete');
        var span  = document.createElement('span');
      
        span.textContent = nomeAtual;
        li.appendChild(buttonEdit);
        li.appendChild(buttonDelete);
        li.appendChild(span);
        ul.appendChild(li);

    }

    divPessoas.appendChild(ul);
    clearInput();
}

function clearInput(){
    inputPessoas.value = '';
    inputPessoas.focus();
}
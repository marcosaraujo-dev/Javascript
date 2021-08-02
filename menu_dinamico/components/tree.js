export default function(data) {
    // pega a tag principal que irá receber o menu
    const tree = document.querySelector('nav#tree')

    const tree2 = document.querySelector('div#tree')

    // recebe toda a arvore de elementos
    const menu = document.createElement('ul')
    menu.classList.add("nav")
    menu.classList.add("nav-list")
    menu.classList.add("flex-column")
    const firstLevel = data.filter(item => !item.parent)
    const getFirstLis = firstLevel.map(buildTree) // retorno novo array com li's
    getFirstLis.forEach( li => menu.append(li)) // adicionar li's ao menu


    function buildTree(item) {
        
        let menuPrincipal = ''
        if (!item.parent) {
           
            menuPrincipal += '<i class="fa ' + item.iconeItem+' " ></i >'
            menuPrincipal += '<span class="menu-text" > ' + item.name + '</span > '
            //   menuPrincipal += '<b class="arrow fa fa-angle-down" ></b ></a >'
        }
        else {
            menuPrincipal = item.name

        }

     


        // primeiro elemento
        const li = document.createElement('li')
        li.innerHTML = menuPrincipal
       // li.innerHTML = item.name //menuPrincipal
        li.classList.add("nav-item")

       
         
        const children = data.filter(child => child.parent === item.id)

        if (children.length > 0) {

            //adiciona um click para os parents
            li.addEventListener('click', event => {
                event.stopPropagation()
                event.target.classList.toggle('open')
            })

            // adiciona uma classe identificadora de que tem filhos
            li.classList.add('has-children')

            // constroi os filhos
            const subMenu = document.createElement('ul')
            subMenu.classList.add('submenu')
            children.map(buildTree)
                .forEach(li => subMenu.append(li))
            li.append(subMenu)
        }
        else {
            let linkAcesso = ''
           
            linkAcesso = '<a class="" href="' + item.urlItem +'" >'
            linkAcesso += '<span class="menu-text" > ' + item.name + '</span > '
            linkAcesso += '</a >'

            li.innerHTML = linkAcesso
        }
       
        
        // adicionar os elements ao menu
        return li
    }

    // adiciona o menu no HTML
    tree.append(menu)
   // tree2.append(menu)
}
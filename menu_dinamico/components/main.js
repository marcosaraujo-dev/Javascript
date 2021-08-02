import Tree from './tree.js'

const menu = [
    { id: 8, name: "Gestão Sistema", parent: null, iconeItem: "fa-circle-o-notch", urlItem: null},
    { id: 18, name: "Gestão de Clientes", parent: null, iconeItem: "fa-users", urlItem: null },
    { id: 3, name: "Cadastros Internos", parent: 8, iconeItem: null, urlItem: null },
    { id: 1, name: "Permissões", parent: 3, iconeItem: null, urlItem: "#" },
    { id: 4, name: "Emails", parent: 8, iconeItem: null, urlItem: "#"},
    { id: 6, name: "CEP", parent: 3, iconeItem: null, urlItem: "#" },
    { id: 7, name: "Clientes", parent: 18, iconeItem: null, urlItem: null },
    { id: 10, name: "Processo e controles", parent: 18, iconeItem: null, urlItem: null },
    { id: 20, name: 'Desligamentos', parent: 10, iconeItem: null, urlItem: "#" },
    { id: 13, name: "Termos e contratos", parent: 18, iconeItem: null, urlItem: null },
    { id: 14, name: "Termos Restritos", parent: 13, iconeItem: null, urlItem: "#" }
]

Tree(menu)
const promptSync = require("prompt-sync");
const input = promptSync();

class Produto {
    constructor(codigo, nome, preco, quantidadeEmEstoque) {
        this.codigo = codigo;
        this.nome = nome;
        this.preco = preco;
        this.quantidadeEmEstoque = quantidadeEmEstoque;
    }

    exibirDadosProduto() {
        console.log(`Código: ${this.codigo}`);
        console.log(`Nome: ${this.nome}`);
        console.log(`Preço: R$${this.preco.toFixed(2)}`);
        console.log(`Quantidade em estoque: ${this.quantidadeEmEstoque}`);
    }
}

class CarrinhoDeCompras {
    constructor() {
        this.carrinhoDeCompras = [];
    }

    adicionarProdutoNoCarrinho(quantidade, produto) {
        if (produto.quantidadeEmEstoque >= quantidade) {
            this.carrinhoDeCompras.push({ produto, quantidade });
            produto.quantidadeEmEstoque -= quantidade;
            console.log(`${quantidade} unidade(s) de ${produto.nome} adicionada(s) ao carrinho.`);
        } else {
            console.log(`Quantidade insuficiente em estoque para ${produto.nome}.`);
        }
    }

    comprarProduto(nome, quantidade) {
        const item = this.carrinhoDeCompras.find(item => item.produto.nome === nome);
        
        if (item) {
            if (item.quantidade >= quantidade) {
                item.quantidade -= quantidade;
                const total = item.produto.preco * quantidade;
                console.log(`Compra realizada: ${quantidade} unidade(s) de ${nome} por R$${total.toFixed(2)}`);
                return total;
            } else {
                console.log(`Quantidade insuficiente de ${nome} no carrinho.`);
            }
        } else {
            console.log(`Produto ${nome} não encontrado no carrinho.`);
        }
    }

    pesquisarProdutoNoCarrinho(nome) {
        const item = this.carrinhoDeCompras.find(item => item.produto.nome === nome);
        
        if (item) {
            console.log(`Produto encontrado no carrinho:`);
            console.log(`Nome: ${item.produto.nome}, Quantidade: ${item.quantidade}, Preço: R$${item.produto.preco.toFixed(2)}`);
        } else {
            console.log(`Produto ${nome} não encontrado no carrinho.`);
        }
    }

    exibirProdutosNoCarrinhoDeCompras() {
        console.log("Produtos no carrinho:");
        if (this.carrinhoDeCompras.length === 0) {
            console.log("O carrinho está vazio.");
        } else {
            this.carrinhoDeCompras.forEach(item => {
                console.log(`Nome: ${item.produto.nome}, Quantidade: ${item.quantidade}, Preço: R$${item.produto.preco.toFixed(2)}`);
            });
        }
    }

    excluirProdutoDoCarrinhoDeCompras(nome) {
        const novoCarrinho = this.carrinhoDeCompras.filter(item => item.produto.nome !== nome);
        
        if (novoCarrinho.length < this.carrinhoDeCompras.length) {
            this.carrinhoDeCompras = novoCarrinho;
            console.log(`Produto ${nome} removido do carrinho.`);
        } else {
            console.log(`Produto ${nome} não encontrado no carrinho.`);
        }
    }

    exibirQuantidadeDeProdutosNoCarrinho() {
        const quantidadeTotal = this.carrinhoDeCompras.reduce((total, item) => total + item.quantidade, 0);
        console.log(`Quantidade total de produtos no carrinho: ${quantidadeTotal}`);
    }

    calcularTotalDoCarrinho() {
        const total = this.carrinhoDeCompras.reduce((soma, item) => soma + item.produto.preco * item.quantidade, 0);
        console.log(`Valor total do carrinho: R$${total.toFixed(2)}`);
        return total;
    }
}

const codigo1 = parseInt(input("Digite o código do Produto 1: "));
const nome1 = input("Digite o nome do Produto 1: ");
const preco1 = parseFloat(input("Digite o preço do Produto 1: "));
const quantidade1 = parseInt(input("Digite a quantidade em estoque do Produto 1: "));
const produto1 = new Produto(codigo1, nome1, preco1, quantidade1);

const codigo2 = parseInt(input("Digite o código do Produto 2: "));
const nome2 = input("Digite o nome do Produto 2: ");
const preco2 = parseFloat(input("Digite o preço do Produto 2: "));
const quantidade2 = parseInt(input("Digite a quantidade em estoque do Produto 2: "));
const produto2 = new Produto(codigo2, nome2, preco2, quantidade2);

const carrinho = new CarrinhoDeCompras();

produto1.exibirDadosProduto();
produto2.exibirDadosProduto();

carrinho.adicionarProdutoNoCarrinho(2, produto1);
carrinho.adicionarProdutoNoCarrinho(1, produto2);

carrinho.exibirProdutosNoCarrinhoDeCompras();
carrinho.pesquisarProdutoNoCarrinho(nome1);

carrinho.comprarProduto(nome1, 1);
carrinho.exibirQuantidadeDeProdutosNoCarrinho();
carrinho.calcularTotalDoCarrinho();

carrinho.excluirProdutoDoCarrinhoDeCompras(nome2);
carrinho.exibirProdutosNoCarrinhoDeCompras();
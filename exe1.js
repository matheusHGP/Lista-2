chefe()

function chefe() {
    var vendedores = []
    var vendas = []

    do {
        var opacao = Number(prompt("[1] - cadastrar vendedor [2] - cadastrar venda [3] - consultar venda - [4] - consultar total de vendas - [5] - consultar maior venda - [6] - sair"))
        switch (opacao) {
            case 1: cadVendedor(vendedor)
                break
            case 2: cadVendas(vendas, vendedores)
                break
            case 3: consultaVendas(vendas, Number(prompt("Informe o código do usuário"), prompt("Informe o mês da venda")))
                break
            case 4: consultaTotalVendas(vendas, Number(prompt("Informe o código código vendedor")))
                break
            case 5: consultaMaiorVendedor(vendas)
                break
            case 6: console.log("Saindo...")
                break
        }


    } while (opacao !== 4)
}

function cadVendedor(vet) {
    var objeto = new Object()
    objeto.codigo = Number(prompt("Informe o código"))

    vet.forEach(element => {
        if (element == objeto.codigo) {
            console.log('Código já existente')
            return
        }
    });

    objeto.nome = prompt("Informe o nome")
    vet.push(objeto)
    console.log('Vendedor cadastrado com sucesso')
}

function cadVendas(vend, vendor) {
    var objeto = new Object()
    objeto.codigoVenda = Number(prompt("Informe o código da venda"))
    objeto.codigoVendedor = Number(prompt("Informe o código do vendedor"))
    objeto.mesVenda = prompt("Informe o mês da venda")
    objeto.valor = Number(prompt("Informe o valor da venda"))

    let index = vendor.findIndex(i => i.codigo == objeto.codigoVendedor)

    if (index == -1) {
        console.log('Vendedor não existe')
        return
    }

    vend.forEach(element => {
        if (element.codigo == objeto.codigoVendedor) {
            if (element.mesVenda == objeto.mesVenda) {
                console.log(`Vendedor já possui mais de uma venda no mes ${objeto.mes}`)
                return
            }
        }

        vend.push(objeto)
        console.log(`Venda inserida com sucesso`)
    })
}

function consultaVendas(vet, codigoVendedor, mesVenda) {
    vet.forEach(element => {
        if (element.codigoVendedor === codigoVendedor && element.mesVenda === mesVenda) {
            console.log(`Valor da venda ${element.valor}`)
            return
        }
    })

    console.log("Venda não encontrada para os parãmetros informados")
}

function consultaTotalVendas(vet, codigoVendedor) {
    var total = 0
    vet.forEach(element => {
        if(element.codigoVendedor == codigoVendedor){
            total = total + element.valor
        }
    })
    let index = vet.findIndex(element => element.codigoVendedor == codigoVendedor)

    if(index == -1){
        console.log("Vendedor não existe")
    }

    console.log(`o total de vendas do vendedor ${codigoVendedor} é: R$ ${total.toFixed(2)}`)
}

function consultaMaiorVendedor(vet) {
    let mes = prompt("Informe o mês da venda")
    let maiorVenda = vet[0].valor
    let codigoVendedor

    vet.forEach(element => {
        if(element.mesVenda > mes){
            if(element.valor > maiorVenda){
                maiorVenda = element.valor
                codigoVendedor = element.codigoVendedor
            }
        }
    })

    console.log(`A maior venda é de R$ ${maiorVenda} feita pelo vendedor ${codigoVendedor}`)
}
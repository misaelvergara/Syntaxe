export default class ComponentData {

    array = [{
        hasContent: false,
        hasChildren: true,
        title: 'JavaScript',
        children: [
            {
                hasContent: false,
                hasChildren: true,
                title: 'Tipos de Dados',
				routes: ['Java', 'Tipos de Dados'],
                children: [
                    {
                        hasContent: false,
                        hasChildren: true,
                        title: 'Dados Não-Primitivos',
						routes: ['Java', 'Tipos de Dados', 'Dados Não-Primitivos'],
                        children: [
                            {
                                hasContent: true,
                                hasChildren: false,
                                title: 'Object (objeto)',
								routes: ['Java', 'Tipos de Dados', 'Dados Não-Primitivos', 'Object'],
                                body: 
`<h1>O conceito de objeto</h1>
Para entender o conceito de objeto em linguagens de programação, podemos tomar um exemplo da vida real.

Veja, temos um <b>carro</b>. <b>Um carro é um objeto</b>. O carro tem uma cor, uma marca e um modelo. Podemos chamar cor, marca e modelo, de <b>propriedades</b> do carro.

Um carro pode dar partida, ser dirigido e então ser desligado. Podemos imaginar que <b>as ações dar partida, dirigir e desligar, são métodos do carro</b>. PS: você também pode imaginar que são funções do carro, mas o nome correto à ser atribuído é <b>método</b>.

Sendo assim, um Objeto tem <b>propriedades</b> e <b>métodos</b>. As propriedades de um objeto são informações sobre ele mesmo. Enquanto que, os métodos de um objeto, são ações que o objeto pode executar.

<h1>Objetos em JavaScript</h1>

Objeto é um tipo de dado que contém outras variáveis. Ele possui um nome identificador (no campo de código acima, este nome é o <u>nomeDoObjeto</u>), que é seguido pelo atribuidor (<u>=</u>) e, então, por duas chaves (<u>{ }</u>).

A convenção para definir um objeto é, portanto, a seguinte: <u>nomeDoObjeto = {}</u>

Dentro das chaves, são definidos os métodos e propriedades do objeto. Estes são definidos da seguinte forma: nome identificador da variável, atribuidor (<u>:</u>), valor da variável seguido, por fim, de uma vírgula (<u>,</u>). A <b>vírgula</b> é utilizada para separar os métodos ou propriedades de um objeto.

Para <b>acessar</b> um <b>método</b> ou o valor de uma <b>propriedade de um objeto</b>, é utilizada uma convenção parecida com um endereço. Tendo como referência o campo de código acima, veja o exemplo:

<u>nomeDoObjeto.nomeDeUmaString</u> retornará o valor <u>"Sou uma string"</u>
<u>nomeDoObjeto.umArray</u> retornará o array (vetor) <u>umArray</u>. Para acessar um índice deste vetor, usamos, portanto: <u>nomeDoObjeto.umArray[2]</u>. Isso retornará o valor <u>4</u> alocado no índice <u>[2]</u>

Além disso, é possível acessar uma propriedade ou um método de um objeto da seguinte maneira: <u>nomeDoObjeto.["nomeDeUmaString"]</u>. Utilizamos, dessa forma, colchetes e aspas para acessar o valor de <u>nomeDeUmaString</u>.`,
                    // end of body
                                code: 
`nomeDoObjeto = {
    nomeDeUmaString: "Sou uma string",
    nomeDeOutraString: "Sou outra string",
    umaStringBemLonga: "a b c d e f g h i j k l m n o p q r s t u v w x y z   q w e r t y u i o p a s d f g h j k l ç z x c v b n m",
    
    umaFuncao: function() {
        console.log("olá mundo")
    },

    umNumero: 2,
    outroNumero: 9001,
    umArray: [0, 2, 4, "valor", 6],

    outroObjeto: {
        umaString: "ooi",
        stringSimpatica: "tudo bem e vc"
    },

    umaBoolean: true,
    booleanNaoVerdadeira: false
  };
  
  carro = {
      marca: "Toyota",
      modelo: "Corolla",
      anoFabricacao: 2019,
      foiUsado: false,
      quilometragem: 0,
      preco: 79990.00
      comentarios: [
        "quero muito",
        "credo, carro feio",
        "gostei só do preto",
        "ah o cinza é mais bonito",
        "não tenho nem dinheiro pro pão mas eu quero"
        ]
  };`
                // end of code
                                
                            },
                            {
                                hasContent: true,
                                hasChildren: false,
                                title: 'Array (vetor)',
								routes: ['Java', 'Tipos de Dados', 'Dados Não-Primitivos', 'Array'],
                                body: '',
                                code: ''
                            },
                            {
                                hasContent: true,
                                hasChildren: false,
                                title: 'Function (function)',
								routes: ['Java'],
                                body: '',
                                code: ''
                            }
                        ]
                    },
                    {
                        hasContent: false,
                        hasChildren: true,
                        title: 'Dados Primitivos',
						routes: ['Java', 'Dados Primitivos'],
                        children: [
                            {
                                hasContent: true,
                                hasChildren: false,
                                title: 'String (literal)',
								routes: ['Java', 'Tipos de Dados', 'Dados Não-Primitivos', 'String'],
                                body: '',
                                code: ''
                            },
                            {
                                hasContent: true,
                                hasChildren: false,
                                title: 'Boolean',
								routes: ['Java', 'Tipos de Dados', 'Dados Primitivos', 'Boolean'],
                                body: '',
                                code: ''
                            },
                            {
                                hasContent: true,
                                hasChildren: false,
                                title: 'Number (número)',
								routes: ['Java', 'Tipos de Dados', 'Dados Primitivos', 'Números'],
                                body: '',
                                code: ''
                            },
                            {
                                hasContent: true,
                                hasChildren: false,
                                title: 'undefined (indefinido)',
								routes: ['Java'],
                                body: '',
                                code: ''
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        hasContent: false,
        hasChildren: true,
        title: 'Java',
        children: [
            {
                hasContent: false,
                hasChildren: true,
                title: 'Tipos de Dados',
				routes: ['JavaScript', 'Tipos de Dados'],
                children: [
                    {
                        hasContent: false,
                        hasChildren: true,
                        title: 'Dados Não-Primitivos',
						routes: ['JavaScript', 'Dados Não-Primitivos'],
                        children: [
                            {
                                hasContent: true,
                                hasChildren: false,
                                title: 'Class',
                                body: '',
								routes: ['JavaScript'],
                                code: ''
                            }, {
                                hasContent: true,
                                hasChildren: false,
                                title: 'Object',
								routes: ['JavaScript', 'Tipos de Dados', 'Dados Não-Primitivos', 'Object (objeto)'],
                                body:
`<h1>O conceito de objeto</h1>
Para entender o conceito de objeto em linguagens de programação, podemos tomar um exemplo da vida real.

Veja, temos um <b>carro</b>. <b>Um carro é um objeto</b>. O carro tem uma cor, uma marca e um modelo. Podemos chamar cor, marca e modelo, de <b>propriedades</b> do carro.

Um carro pode dar partida, ser dirigido e então ser desligado. Podemos imaginar que <b>as ações dar partida, dirigir e desligar, são métodos do carro</b>. PS: você também pode imaginar que são funções do carro, mas o nome correto à ser atribuído é <b>método</b>.

Sendo assim, um Objeto tem <b>propriedades</b> e <b>métodos</b>. As propriedades de um objeto são informações sobre ele mesmo. Enquanto que, os métodos de um objeto, são ações que o objeto pode executar.
`,
                                code: ''
                            }, {
                                hasContent: true,
                                hasChildren: false,
                                title: 'Array',
								routes: ['JavaScript', 'Tipos de Dados', 'Dados Não-Primitivos', 'Array (vetor)'],
                                body: '',
                                code: ''
                            }, {
                                hasContent: true,
                                hasChildren: false,
                                title: 'String',
								routes: ['JavaScript', 'Tipos de Dados', 'Dados Primitivos', 'String (literal)'],
                                body: '',
                                code: ''
                            }, {
                                hasContent: true,
                                hasChildren: false,
                                title: 'Interface',
								routes: ['JavaScript'],
                                body: '',
                                code: ''
                            }
                        ]
                    },
                    {
                        hasContent: false,
                        hasChildren: true,
                        title: 'Dados Primitivos',
						routes: ['JavaScript', 'Dados Primitivos'],
                        children: [
                            {
                                hasContent: true,
                                hasChildren: false,
                                title: 'Boolean',
								routes: ['JavaScript', 'Tipos de Dados', 'Dados Primitivos', 'Boolean'],
                                body: '',
                                code: ''
                            }, {
                                hasContent: true,
                                hasChildren: false,
                                title: 'Char',
								routes: ['JavaScript', 'Tipos de Dados', 'Dados Primitivos', 'String (literal)'],
                                body: '',
                                code: ''
                            }, {
                                hasContent: false,
                                hasChildren: true,
                                title: 'Números',
								routes: ['JavaScript', 'Tipos de Dados', 'Dados Primitivos', 'Number (número)'],
                                children: [
                                    {
                                        hasContent: true,
                                        hasChildren: false,
                                        title: 'Tipos Inteiros',
										routes: ['JavaScript', 'Tipos de Dados', 'Dados Primitivos', 'Number (número)'],
                                        body: `
                                        "Byte","Short","Int","Long"                                        
                                        ` ,
                                        code: ''
                                    },
                                    {
                                        hasContent: true,
                                        hasChildren: false,
                                        title: 'Tipos Floating-Point',
										routes: ['JavaScript', 'Tipos de Dados', 'Dados Primitivos', 'Number (número)'],
                                        body: `
                                        "Float","Double"
                                        `,
                                        code: ''
                                    }

                                ]
                            }

                        ]
                    }
                ]
            }
        ]
    }
    ];

}
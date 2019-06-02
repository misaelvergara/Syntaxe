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
`JavaScript objects are written with curly braces {}.

<h1>An object has properties and methods</h1>
The name:values pairs in JavaScript objects are called properties:

You can access object properties in two ways.
["name"] or .name

You have already learned that JavaScript variables are containers for data values.
Objects are variables too. But objects can contain many values.
The values are written as name:value pairs (name and value separated by a colon).

A JavaScript object literal is a comma-separated list of name-value pairs wrapped in curly braces.

You define (and create) a JavaScript object with an object literal:

Object literals encapsulate data, enclosing it in a tidy package.
This minimizes the use of global variables which can cause problems when combining code.`,
                    // end of body
                                code: 
 `nomeDoObjeto = {
      umaString: "valor da string valor da string valor da string valor da string valor da string valor da string valor da string valor da string ",
      umaFuncao: function() {
          console.log("Olá, mundo")
      },
      umNumero: 2,
      umArray: [0, 2, 4, "valor", 6],
      outroObjeto: {
        umaString: "ooi",
        stringSimpatica: "tudo bem?"
      },
      umaBoolean: false
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
								routes: ['JavaScript', 'Tipos de Dados', 'Dados Não-Primitivos', 'Object'],
                                body: '',
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
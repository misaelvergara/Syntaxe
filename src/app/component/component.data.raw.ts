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
                children: [
                    {
                        hasContent: false,
                        hasChildren: true,
                        title: 'Dados Não-Primitivos',
                        children: [
                            {
                                hasContent: true,
                                hasChildren: false,
                                title: 'Object (objeto)',
                                body: 
`
<pre>
JavaScript objects are written with curly braces {}.

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
This minimizes the use of global variables which can cause problems when combining code.
</pre>
                    `,
                    // end of body
                                code: 
 `
      <pre>
  nomeDoObjeto = {
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
  };
      </pre>
                `
                // end of code
                                
                            },
                            {
                                hasContent: true,
                                hasChildren: false,
                                title: 'Array (vetor)',
                                body: '',
                                code: ''
                            },
                            {
                                hasContent: true,
                                hasChildren: false,
                                title: 'Function (function)',
                                body: '',
                                code: ''
                            }
                        ]
                    },
                    {
                        hasContent: false,
                        hasChildren: true,
                        title: 'Dados Primitivos',
                        children: [
                            {
                                hasContent: true,
                                hasChildren: false,
                                title: 'String (literal)',
                                body: '',
                                code: ''
                            },
                            {
                                hasContent: true,
                                hasChildren: false,
                                title: 'Boolean',
                                body: '',
                                code: ''
                            },
                            {
                                hasContent: true,
                                hasChildren: false,
                                title: 'Number (número)',
                                body: '',
                                code: ''
                            },
                            {
                                hasContent: true,
                                hasChildren: false,
                                title: 'undefined (indefinido)',
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
                children: [
                    {
                        hasContent: false,
                        hasChildren: true,
                        title: 'Dados Não-Primitivos',
                        children: [
                            {
                                hasContent: true,
                                hasChildren: false,
                                title: 'Class',
                                body: '',
                                code: ''
                            }, {
                                hasContent: true,
                                hasChildren: false,
                                title: 'Object',
                                body: '',
                                code: ''
                            }, {
                                hasContent: true,
                                hasChildren: false,
                                title: 'Array',
                                body: '',
                                code: ''
                            }, {
                                hasContent: true,
                                hasChildren: false,
                                title: 'String',
                                body: '',
                                code: ''
                            }, {
                                hasContent: true,
                                hasChildren: false,
                                title: 'Interface',
                                body: '',
                                code: ''
                            }
                        ]
                    },
                    {
                        hasContent: false,
                        hasChildren: true,
                        title: 'Dados Primitivos',
                        children: [
                            {
                                hasContent: true,
                                hasChildren: false,
                                title: 'Boolean',
                                body: '',
                                code: ''
                            }, {
                                hasContent: true,
                                hasChildren: false,
                                title: 'Char',
                                body: '',
                                code: ''
                            }, {
                                hasContent: false,
                                hasChildren: true,
                                title: 'Números',
                                children: [
                                    {
                                        hasContent: true,
                                        hasChildren: false,
                                        title: 'Tipos Inteiros',
                                        body: `
                                        "Byte","Short","Int","Long"                                        
                                        ` ,
                                        code: ''
                                    },
                                    {
                                        hasContent: true,
                                        hasChildren: false,
                                        title: 'Tipos Floating-Point',
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
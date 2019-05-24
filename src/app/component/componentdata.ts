export default class Data {
    JavaScript = {
        "Tipos de Dados": {
            "Dados Complexos": {
                "object": {
                    "title": "Objetos (objects)",
    /*  ################
        # BODY #########
        ################
     */
                    "body": `
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
    /*  ################
        # CODE #########
        ################
     */
                    "code": `
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
                `,
                },
                "array": {},
                "function": {}
            },
            "Dados Primitivos": [
                "string",
                "number",
                "boolean",
                "undefined"
            ]
        }
    }

    Java = {
        "Tipos de Dados": {
            "Dados Não-Primitivos": [
                "Class",
                "Object",
                "Interface",
                "String",
                "Array"
            ],
            "Dados Primitivos": [
                "boolean",
                "char",
                {
                    "Números": {
                        "Tipos Inteiros": [
                            "byte",
                            "short",
                            "int",
                            "long"
                        ],
                        "Tipos Floating Point": [
                            "float",
                            "double"
                        ]
                    }
                }
            ]
        }
    }
} 


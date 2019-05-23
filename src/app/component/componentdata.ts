export default class Data {
    JavaScript = {
        "Tipos de Dados": {
            "Dados Complexos": {
                "object": {
                    "title": "Objetos (objects)",
                    "body": "",
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
  `
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


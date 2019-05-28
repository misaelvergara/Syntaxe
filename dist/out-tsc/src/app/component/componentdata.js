var Data = /** @class */ (function () {
    function Data() {
        this.JavaScript = {
            'Tipos de Dados': {
                'Dados Complexos': {
                    'object': {
                        'title': 'Objetos (objects)',
                        /*  ################
                            # BODY #########
                            ################
                         */
                        'body': "\n<pre>\nJavaScript objects are written with curly braces {}.\n\n<h1>An object has properties and methods</h1>\nThe name:values pairs in JavaScript objects are called properties:\n\nYou can access object properties in two ways.\n[\"name\"] or .name\n\nYou have already learned that JavaScript variables are containers for data values.\nObjects are variables too. But objects can contain many values.\nThe values are written as name:value pairs (name and value separated by a colon).\n\nA JavaScript object literal is a comma-separated list of name-value pairs wrapped in curly braces.\n\nYou define (and create) a JavaScript object with an object literal:\n\nObject literals encapsulate data, enclosing it in a tidy package.\nThis minimizes the use of global variables which can cause problems when combining code.\n</pre>\n                    ",
                        /*  ################
                            # CODE #########
                            ################
                         */
                        'code': "\n      <pre>\n  nomeDoObjeto = {\n      umaString: \"valor da string valor da string valor da string valor da string valor da string valor da string valor da string valor da string \",\n      umaFuncao: function() {\n          console.log(\"Ol\u00E1, mundo\")\n      },\n      umNumero: 2,\n      umArray: [0, 2, 4, \"valor\", 6],\n      outroObjeto: {\n        umaString: \"ooi\",\n        stringSimpatica: \"tudo bem?\"\n      },\n      umaBoolean: false\n  };\n      </pre>\n                ",
                    },
                    'array': {},
                    'function': {}
                },
                'Dados Primitivos': [
                    'string',
                    'number',
                    'boolean',
                    'undefined'
                ]
            }
        };
        this.Java = {
            'Tipos de Dados': {
                'Dados Não-Primitivos': [
                    'Class',
                    'Object',
                    'Interface',
                    'String',
                    'Array'
                ],
                'Dados Primitivos': [
                    'boolean',
                    'char',
                    {
                        'Números': {
                            'Tipos Inteiros': [
                                'byte',
                                'short',
                                'int',
                                'long'
                            ],
                            'Tipos Floating Point': [
                                'float',
                                'double'
                            ]
                        }
                    }
                ]
            }
        };
    }
    return Data;
}());
export default Data;
//# sourceMappingURL=componentdata.js.map
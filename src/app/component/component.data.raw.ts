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
                                body: '',
                                code: ''
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
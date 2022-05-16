const source_json = {
    "navs": [
        "模态框",
        "按钮"
    ],
    "docs": {
        "模态框": {
            "title": "模态框模板", 
            "desc": `
使用前需要引入template.js: 
    <script type="text/javascript" src="./template/js/template.js"></script>
或引入modal.js:
    <script type="text/javascript" src="./template/js/template.js"></script>
注意: 当引入template.js时不能引用modal.js
`,
            "items": [
                {
                    "desc": {    
                        "title": "基础模态框",
                        "content": "创建一个基础模态框, 可自定义标题和内容"
                    },
                    "item": {
                        "blocks": [
                            {
                                "title": "示例",
                                "demo": `
// 引用template.js时可使用如下代码:
// 创建模板对象
const bs3t = new Template();
// 创建模态框对象
let modal = bs3t.buildModal().buildSimpleModal('提示', '我是一个基础的模态框').build();
// 也可使用 bs3t.modal.open();
modal.open();

// 引用modal.js时可使用如下代码:
// let modal = new Modal();
// modal = modal.buildSimpleModal('提示', '我是一个基础的模态框');
// modal.open();
`
                            },
                            {
                                "title": "参数",
                                "num": 2,
                                "params": {
                                    "参数": [
                                        "title", 
                                        "body"
                                    ],
                                    "默认值": [
                                        "无",
                                        "无"
                                    ],
                                    "类型": [
                                        "String",
                                        "String"
                                    ],
                                    "说明":[
                                        "模态框标题", 
                                        "模态框内容, 支持html"
                                    ]
                                }
                            }
                        ]
                    }
                },
                {
                    "desc": {    
                        "title": "静态模态框",
                        "content": "创建一个静态模态框, 只能通过点击关闭按钮关闭"
                    },
                    "item": {
                        "blocks": [
                            {
                                "title": "示例",
                                "demo": `
// 引用template.js时可使用如下代码:
// 创建模板对象
const bs3t = new Template();
// 创建模态框对象
let modal = bs3t.buildModal().buildStaticModal('提示', '我是一个静态的模态框').build();
// 也可使用 bs3t.modal.open();
modal.open();
    
// 引用modal.js时可使用如下代码:
// let modal = new Modal();
// modal = modal.buildStaticModal('提示', '我是一个静态的模态框');
// modal.open();
`
                            },
                            {
                                "title": "参数",
                                "num": 2,
                                "params": {
                                    "参数": [
                                        "title", 
                                        "body"
                                    ],
                                    "默认值": [
                                        "无",
                                        "无"
                                    ],
                                    "类型": [
                                        "String",
                                        "String"
                                    ],
                                    "说明":[
                                        "模态框标题", 
                                        "模态框内容, 支持html"
                                    ]
                                }
                            }
                        ]
                    }
                },
                {
                    "desc": {    
                        "title": "模态框可见时触发事件",
                        "content": "当模态框打开后触发事件"
                    },
                    "item": {
                        "blocks": [
                            {
                                "title": "示例",
                                "demo": `
// 引用template.js时可使用如下代码:
// 创建模板对象
const bs3t = new Template();
// 创建模态框对象
let modal = bs3t.buildModal().buildShowEventModal('提示', '触发可见事件', true, function() {
    alert('我被触发了!');
}).build();
// 也可使用 bs3t.modal.open();
modal.open();
    
// 引用modal.js时可使用如下代码:
// let modal = new Modal();
// modal = modal.buildShowEventModal('提示', '触发可见事件', true, function() {
//    alert('我被触发了!');
// });
// modal.open();
`
                            },
                            {
                                "title": "参数",
                                "num": 4,
                                "params": {
                                    "参数": [
                                        "title", 
                                        "body",
                                        "isStatic",
                                        "event"
                                    ],
                                    "默认值": [
                                        "无",
                                        "无",
                                        "false",
                                        "无"
                                    ],
                                    "类型": [
                                        "String",
                                        "String",
                                        "Boolean",
                                        "Function"
                                    ],
                                    "说明":[
                                        "模态框标题", 
                                        "模态框内容, 支持html",
                                        "false表示可以点击任何地方关闭模态框, true则只能通过关闭按钮",
                                        "传入一个无参数方法, 在模态框打开后触发"
                                    ]
                                }
                            }
                        ]
                    }
                },
                {
                    "desc": {    
                        "title": "模态框关闭时触发事件",
                        "content": "当模态框关闭后触发事件"
                    },
                    "item": {
                        "blocks": [
                            {
                                "title": "示例",
                                "demo": `
// 引用template.js时可使用如下代码:
// 创建模板对象
const bs3t = new Template();
// 创建模态框对象
let modal = bs3t.buildModal().buildHideEventModal('提示', '触发关闭事件', true, function() {
    alert('我被触发了!');
}).build();
// 也可使用 bs3t.modal.open();
modal.open();

// 引用modal.js时可使用如下代码:
// let modal = new Modal();
// modal = modal.buildHideEventModal('提示', '触发关闭事件', true, function() {
//    alert('我被触发了!');
// });
// modal.open();
`
                            },
                            {
                                "title": "参数",
                                "num": 4,
                                "params": {
                                    "参数": [
                                        "title", 
                                        "body",
                                        "isStatic",
                                        "event"
                                    ],
                                    "默认值": [
                                        "无",
                                        "无",
                                        "false",
                                        "无"
                                    ],
                                    "类型": [
                                        "String",
                                        "String",
                                        "Boolean",
                                        "Function"
                                    ],
                                    "说明":[
                                        "模态框标题", 
                                        "模态框内容, 支持html",
                                        "false表示可以点击任何地方关闭模态框, true则只能通过关闭按钮",
                                        "传入一个无参数方法, 在模态框关闭后触发"
                                    ]
                                }
                            }
                        ]
                    }
                },
                {
                    "desc": {    
                        "title": "模态框显示与关闭发事件",
                        "content": "当模态框显示与关闭后触发事件"
                    },
                    "item": {
                        "blocks": [
                            {
                                "title": "示例",
                                "demo": `
// 引用template.js时可使用如下代码:
// 创建模板对象
const bs3t = new Template();
// 创建模态框对象
let modal = bs3t.buildModal().buildAllEventModal('提示', '触发事件', true, function() {
    alert('我被打开了!');
}, function() {
    alert('我被关闭了!')
}).build();
// 也可使用 bs3t.modal.open();
modal.open();

// 引用modal.js时可使用如下代码:
// let modal = new Modal();
// modal = modal.buildAllEventModal('提示', '触发事件', true, function() {
//    alert('我被打开了!');
// }, function() {
//    alert('我被关闭了!')
// });
// modal.open();
`
                            },
                            {
                                "title": "参数",
                                "num": 5,
                                "params": {
                                    "参数": [
                                        "title", 
                                        "body",
                                        "isStatic",
                                        "showEvent",
                                        "hideEvent"
                                    ],
                                    "默认值": [
                                        "无",
                                        "无",
                                        "false",
                                        "无",
                                        "无"
                                    ],
                                    "类型": [
                                        "String",
                                        "String",
                                        "Boolean",
                                        "Function",
                                        "Function"
                                    ],
                                    "说明":[
                                        "模态框标题", 
                                        "模态框内容, 支持html",
                                        "false表示可以点击任何地方关闭模态框, true则只能通过关闭按钮",
                                        "传入一个无参数方法, 在模态框打开后触发",
                                        "传入一个无参数方法, 在模态框关闭后触发"
                                    ]
                                }
                            }
                        ]
                    }
                }
            ]
        },
        "按钮": {
            "title": "按钮框模板", 
            "items": [
                {
                    "desc": {    
                        "title": "基础模态框",
                        "content": "创建一个基础模态框, 可自定义标题和内容"
                    },
                    "item": {
                        "blocks": [
                            {
                                "title": "示例",
                                "demo": "<button type='button' class='btn btn-success'>成功按钮</button>",
                                "result": ""
                            }
                        ]
                    }
                }
            ]
        }
    }
}
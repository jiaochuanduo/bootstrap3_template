const source_json = {
    "navs": [
        "模态框",
        "按钮"
    ],
    "docs": {
        "模态框": {
            "title": "模态框模板", 
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
                                "demo": "const modal = create_modal('提示', '我是模态框');"
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
                                "demo": "const modal = create_modal('提示', '我是静态模态框', false);"
                            },
                            {
                                "title": "参数",
                                "num": 3,
                                "params": {
                                    "参数": [
                                        "title", 
                                        "body",
                                        "is_click_close",
                                    ],
                                    "默认值": [
                                        "无",
                                        "无",
                                        "true"
                                    ],
                                    "类型": [
                                        "String",
                                        "String",
                                        "Boolean"
                                    ],
                                    "说明":[
                                        "模态框标题", 
                                        "模态框内容, 支持html",
                                        "true表示可以点击任何地方关闭模态框, false则只能通过关闭按钮"
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
                                "demo": "const modal = create_modal('提示', '模态框可见时触发事件', true, function() {\r\n\talert('我被触发了');\r\n});"
                            },
                            {
                                "title": "参数",
                                "num": 4,
                                "params": {
                                    "参数": [
                                        "title", 
                                        "body",
                                        "is_click_close",
                                        "show_event"
                                    ],
                                    "默认值": [
                                        "无",
                                        "无",
                                        "true",
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
                                        "true表示可以点击任何地方关闭模态框, false则只能通过关闭按钮",
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
                                "demo": "const modal = create_modal('提示', '模态框关闭时触发事件', true, null, function() {\r\n\talert('我被触发了');\r\n});"
                            },
                            {
                                "title": "参数",
                                "num": 5,
                                "params": {
                                    "参数": [
                                        "title", 
                                        "body",
                                        "is_click_close",
                                        "show_event",
                                        "hide_event"
                                    ],
                                    "默认值": [
                                        "无",
                                        "无",
                                        "true",
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
                                        "true表示可以点击任何地方关闭模态框, false则只能通过关闭按钮",
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
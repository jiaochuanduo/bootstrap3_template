$(function() {
    const navs = source_json.navs;
    // 初始化导航条
    for (const nav of navs) {
        $('.nav-left').append(`
            <div class="nav-item">
                <h5>${nav}</h5>
            </div>
        `);
    }

    // 给第一个导航添加选中标记
    $('.nav-item:first-child').addClass("nav-item-select");
    
    // 绑定导航条点击事件
    $('.nav-left').on('click', '.nav-item', function() {
        $('.nav-item-select').removeClass('nav-item-select');
        $(this).addClass('nav-item-select');
        buildDoc($(this).text().trim());
    });

    // 默认显示第一个文档
    buildDoc(Object.keys(source_json.docs)[0]);

    // 运行Demo代码
    $('.doc').on('click', '.run-demo', function() {
        const script = document.createElement('script');
        script.innerHTML = `
            (function() {
                ${$(this).parent().find('.demo-code-pre').data('source')}
            })();
        `;
        document.head.appendChild(script);
        $(script).remove();
    });

    // 重新构建代码块
    $('.doc').on('blur', '.demo-code-pre', function() {
        let code = '';
        $(this).find('li').each(function() {
            code += $(this).text() + '\n';
        });
        const new_pre = `
            <pre class="prettyprint linenums demo-code-pre js" contenteditable="true" data-source="${code}">${html2Escape(code.trim())}</pre>
        `;
        const parent = $(this).parent();
        $(this).remove();
        parent.append(new_pre);
        PR.prettyPrint();
    });
});

/**
 * 构建文档
 * @param {string} key 导航项
 */
function buildDoc(key) {
    const doc = source_json.docs[key];
    let dom = `
        <div class="title">
            <h2>${doc.title}</h2>
            <p style="margin-left: 15px;">${html2Escape(doc.desc).replace(/\r\n/g, '<br>')}</p>
        </div>
    `;
    let item_dom = '';
    for (const item of doc.items) {
        let block_dom = '';
        for (const block of item.item.blocks) {
            let block_item_dom = '';
            if ('demo' in block) {
                block_item_dom = `
                    <div class="well well-sm clearfix demo">
                        <div class="demo-code">
                            <pre class="prettyprint linenums demo-code-pre js" contenteditable="true" data-source="${block.demo}">${html2Escape(block.demo)}</pre>
                        </div>
                        <button type="button" class="btn btn-success pull-right run-demo">运行</button>
                    </div>
                `;
            } else if ('params' in block) {
                let t_title = '', t_body = '';
                const keys = Object.keys(block.params);
                for (const key of keys) {
                    t_title += `<th>${key}</th>`;
                }
                
                for (let i = 0; i < block.num; i++) {
                    let td = '';
                    for (const key of keys) {
                        td += `<td>${block.params[key][i]}</td>`;
                    }
                    t_body += `<tr>${td}</tr>`;
                }
                block_item_dom = `
                    <table class="table">
                        <thead>
                            <tr>
                                ${t_title}
                            </tr>
                        </thead>
                        <tbody>
                            ${t_body}
                        </tbody>
                    </table>
                `;
            }
            block_dom += `
                <h4>${block.title}</h4>
                ${block_item_dom}
            `;
        }
        item_dom += `
            <div class="doc-item">
                <div class="desc">
                    <h3>${item.desc.title}</h3>
                    <p>${item.desc.content}</p>
                </div>
                <div class="item">
                    ${block_dom}
                </div>
            </div>
            <hr class="line"/>
        `;
    }
    dom += item_dom;
    $('.doc').html(dom);
    PR.prettyPrint();
}

/**
 * 替换html符号
 * @param {string} sHtml html代码
 * @returns 
 */
function html2Escape(sHtml) {
    return sHtml.replace(/[<>&"]/g,function(c){return {'<':'&lt;','>':'&gt;','&':'&amp;','"':'&quot;'}[c];});
}
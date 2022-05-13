class Template {
    constructor() {
        this.modal = this.buildModal();
    }

    buildModal() {
        this.modal = new Modal();
        return this.modal;
    }

}
const importJsList = [
    'template/js/modal.js'
];

for (const js of importJsList) {
    _importJs(js);
}

function _importJs(path) {
    var newScript = document.createElement("script");
    newScript.setAttribute("type", "text/javascript");
    newScript.setAttribute("src", path);
    document.head.appendChild(newScript);
}


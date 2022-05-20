class Button {
    constructor() {
        this.id = "";
        this.class = "";
        this.content = "";
        this.style = "";
        this.click = null;
        this.target = null;
    }

    buildDefaultBtn(content) {
        this.content = content;
        const dom = `<button type="button" class="btn btn-default">${this.content}</button>`;
        return dom;
    }

    buildDefBtnById(id, content) {
        this.id = id;
        this.content = content;
        const dom = `<button id="${this.id}" type="button" class="btn btn-default">${this.content}</button>`;
        return dom;
    }

    buildDefBtnByClass(clazz, content) {
        this.class = clazz;
        this.content = content;
        const dom = `<button type="button" class="${this.class} btn btn-default">${this.content}</button>`;
        return dom;
    }

    buildDefBtnByFlag(id, clazz, content) {
        this.id = id;
        this.class = clazz;
        this.content = content;
        const dom = `<button id="${this.id}" type="button" class="${this.class} btn btn-default">${this.content}</button>`;
        return dom;
    }

    buildDefBtnFlagTarget(id, clazz, target, content) {
        $(target).append(buildDefBtnByFlag(id, clazz, content));
    }

    buildCusColorBtn(content, color) {
        this.content = content;
        const dom = `<button type="button" class="btn ${color}">${this.content}</button>`;
        return dom;
    }

    buildCusColorBtnById(id, content, color) {
        this.id = id;
        this.content = content;
        const dom = `<button id="${this.id}" type="button" class="btn ${color}">${this.content}</button>`;
        return dom;
    }

    buildCusColorBtnByClass(clazz, content, color) {
        this.class = clazz;
        this.content = content;
        const dom = `<button type="button" class="${this.class} btn ${color}">${this.content}</button>`;
        return dom;
    }

    buildCusColorBtnByFlag(id, clazz, content, color) {
        this.id = id;
        this.class = clazz;
        this.content = content;
        const dom = `<button id="${this.id}" type="button" class="${this.class} btn ${color}">${this.content}</button>`;
        return dom;
    }

    buildCusBtnFlagTarget(id, clazz, target, content, color) {
        $(target).append(this.buildCusColorBtnByFlag(id, clazz, content, color));
    }

    static BTN_TYP = {
        BTN: "btn",
        GROUP: "group",
        VERTICA_GROUP: "vertica",
        DROPDOWN: "dropdown",
        DROPDOWN_UP: "dropdown_up",
        CHECKBOX: 'checkbox',
        RADIO: 'radio'
    };

    static BTN_SIZE = {
        LG: "btn-lg",
        SM: "btn-sm",
        XS: "btn-xs",
        BLOCK: "btn-block"
    }

    static BTN_COLOR = {
        DEFAULT: "btn-default",
        PRIMARY: "btn-primary",
        SUCCESS: "btn-success",
        INFO: "btn-info",
        WARNING: "btn-warning",
        DANGER: "btn-danger",
        LINK: "btn-link"
    }

    static BTN_STATUS = {
        ACTIVE: "active",
        DISABLED: "disabled"
    }
}
class Modal{
    constructor() {
        this.title = "";
        this.body = "";
        this.isStatic = false;
        this.showEvent = null;
        this.hideEvent = null;
        this._modal_dom = null;
    }
    buildSimpleModal(title, body) {
        this.title = title;
        this.body = body;
        return this;
    }
    buildStaticModal(titl, body) {
        this.buildSimpleModal(titl, body).isStatic = false;
        return this;
    }
    buildShowEventModal(titl, body, isStatic, event) {
        let temp = this.buildSimpleModal(titl, body);
        temp.isStatic = isStatic;
        temp.showEvent = event;
        return temp;
    }
    buildHideEventModal(titl, body, isStatic, event) {
        let temp = this.buildSimpleModal(titl, body);
        temp.isStatic = isStatic;
        temp.hideEvent = event;
        return temp;
    }
    buildAllEventModal(titl, body, isStatic, showEvent, hideEvent) {
        let temp = this.buildSimpleModal(titl, body);
        temp.isStatic = isStatic;
        temp.showEvent = showEvent;
        temp.hideEvent = hideEvent;
        return temp;
    }
    open() {
        $('.bs3t-modal').remove();
        const modal = `
            <div class="modal fade bs3t-modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content" style="color: #000;">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            <h4 class="modal-title">
                                ${this.title}
                            </h4>
                        </div>
                        <div class="modal-body">
                            ${this.body}
                        </div>
                    </div>
                </div>
            </div>
        `;
        this._modal_dom = $(modal);
        if (this.isStatic) {
            this._modal_dom.modal({
                show: true,
                backdrop: 'static',
                keyboard: false
            });
        } else {
            this._modal_dom.modal('show');
        }
        if (this.showEvent) {
            Window.prototype.modalShowEvent = this.showEvent;
            this._modal_dom.on('shown.bs.modal', function() {
                Window.prototype.modalShowEvent();
            });
        }
        if (this.hideEvent) {
            Window.prototype.modalHideEvent = this.hideEvent;
            this._modal_dom.on('hidden.bs.modal', function() {
                Window.prototype.modalHideEvent();
            });
        }
    }
    close() {
        this._modal_dom.modal('hide');
    }
    build() {
        return this;
    }
}
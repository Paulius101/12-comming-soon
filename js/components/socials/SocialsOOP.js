class SocialsOOP {

    constructor(selector, socialData) {
        this.selector = selector;
        this.socialData = socialData;
        this.DOM = null;
        this.init();

    }
    init() {
        if (!this.isValidSelector() || !this.isValidData()) {
            console.error('ERROR: nepraejo pirmines patikros')
            return false
        }
        this.DOM = document.querySelector(this.selector);
        if (!this.DOM) {
            console.error('ERROR: nerastas elementas, apgal duota selector')
            return false
        }
        this.render();
    }

    isValidSelector() {
        if (typeof this.selector !== 'string' || this.selector === '') {
            return false;
        }
        return true;
    }
    isValidData() {
        if (!Array.isArray(this.socialData) || this.socialData.length === 0) {
            return false;
        }
        return true;
    }
    render() {

        let HTML = '';

        for (const social of this.socialData) {
            HTML += `<a href="${social.href}"
                    target="_blank"
                    class="social fa fa-${social.icon}"></a>`;
        }

        // result return
        this.DOM.innerHTML += HTML;
    }
}
export { SocialsOOP }
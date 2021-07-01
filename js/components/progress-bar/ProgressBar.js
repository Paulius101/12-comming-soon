class Progressbar {

    constructor(selector, data) {
        this.selector = selector;
        this.data = data;
        this.DOM = null;
        this.init();
        // this.allProgressBarsDOM = null;

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
        this.addEvents();
    }

    isValidSelector() {
        if (typeof this.selector !== 'string' || this.selector === '') {
            return false;
        }
        return true;
    }
    isValidData() {
        if (!Array.isArray(this.data) || this.data.length === 0) {
            return false;
        }
        return true;
    }
    render() {
        let HTML = '';
        for (const bar of this.data) {
            HTML += `<div class="progress-bar">
                    <div class="top">
                        <div class="title">${bar.title}</div>
                        <div class="value">${bar.value}%</div>
                    </div>
                    <div class="bottom">
                        <div class="progress" style="width: ${bar.value}%;">
                            <div class="value"></div>
                        </div>
                    </div>
                </div>`
        }
        this.DOM.innerHTML += HTML;
        this.allProgressBarsDOM = document.querySelectorAll('.progress-bar');
        console.log(this.allProgressBarsDOM);
    }
    addEvents() {
        window.addEventListener('scroll', () => {
            // const scrollPosition = window.scrollY;
            // const screenHeight = window.innerHeight;
            const screenBottom = window.scrollY + window.innerHeight;
            for (const progresBar of this.allProgressBarsDOM) {
                const barBottom = progresBar.offsetHeight + progresBar.offsetTop;
                if (screenBottom >= barBottom) {
                    progresBar.classList.add('loading')
                    console.log('Animuojame');
                }
            }
        })
    }
}
export { Progressbar }
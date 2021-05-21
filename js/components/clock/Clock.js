class Clock {
    constructor(selector, targetDate) {
        this.selector = selector;
        this.targetDate = targetDate;

        this.DOM = null;

        this.init();
    }

    init() {
        if (!this.isValidSelector()) {
            return false;
        }

        this.render();
    }

    isValidSelector() {
        if (typeof this.selector !== 'string' ||
            this.selector === '') {
            console.error('ERROR: selector has to be non-empty string');
            return false;
        }

        this.DOM = document.querySelector(this.selector);
        if (!this.DOM) {
            console.error('ERROR: could not find an element by given selector');
            return false;
        }

        return true;
    }

    formatTime(timeValues) {
        const updatedTime = [];

        for (let i = 0; i < timeValues.length; i++) {
            const time = timeValues[i];
            if (i === 0 || time > 9) {
                // kada pushinam originalu skaiciu
                updatedTime.push(time);
            } else {
                // o kada pridedam nuli priekyje
                updatedTime.push('0' + time);
            }
        }

        return updatedTime;
    }

    render() {
        const timeValues = this.formatTime([2, 9, 37, 39]);
        const labelValues = ['Days', 'Hours', 'Minutes', 'Seconds'];
        let HTML = '';

        for (let i = 0; i < timeValues.length; i++) {
            HTML += `<div class="time">
                        <div class="value">${timeValues[i]}</div>
                        <div class="label">${labelValues[i]}</div>
                    </div>`;
        }

        this.DOM.innerHTML = HTML;
    }
}

// function Clock(selector) {
//     const DOM = document.querySelector(selector);
//     const timeValues = [432, 9, 37, 39];
//     const labelValues = ['Days', 'Hours', 'Minutes', 'Seconds'];
//     let HTML = '';

//     for (let i = 0; i < timeValues.length; i++) {
//         HTML += `<div class="time">
//                     <div class="value">${timeValues[i]}</div>
//                     <div class="label">${labelValues[i]}</div>
//                 </div>`;
//     }

//     DOM.innerHTML = HTML;
// }

export { Clock }
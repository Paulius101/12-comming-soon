class Form {
    constructor(selector) {
        this.selector = selector;

        this.DOM = null;
        this.allInputsDOM = [];
        this.submitButtonDOM = null;

        this.init()
    }

    init() {
        // patikrinti, ar validus selector
        // jei ne, baigiam darba
        if (!this.isValidSelector()) {
            console.error('ERROR: nevalidus selektorius!')
            return false;
        }

        // susirasti DOM elementa
        this.DOM = document.querySelector(this.selector);
        // jei rasti nepavyksta, baigiam darba
        if (!this.DOM) {
            console.error('ERROR: Element not found!');
            return false;
        }
        // susirasti visus formos laukus: input, textarea
        this.allInputsDOM = this.DOM.querySelectorAll('input, textarea');
        //console.log(this.allInputsDOM);

        // susirasti formos submit mygtuka
        this.submitButtonDOM = this.DOM.querySelector('button');

        // uzregistruojame mygtuko paspaudimo ivyki
        this.addEvents();
    }
    isValidSelector() {
        if (typeof this.selector !== 'string' ||
            this.selector === '') {
            console.error('ERROR: Selector must be a non empty string');
            return false;
        }

        return true
    }

    isValidEmail(email) {
        if (typeof email !== 'string' ||
            email.length < 6 ||
            email.indexOf('@') === -1 || //reiskia @ stringe nerasta(-1)
            email[0] === '@' ||         // pirma string reiksme yra@
            email.slice(-4).indexOf('@') > -1 || //paima 4 paskutinius email simbolius ir iesko @
            this.countSimbols(email, '@') > 1) { //tikrina kiek stringe yra atitinkamu simboliu!
            return false;
        }
        return true;
    }
    countSimbols(text, letter) {
        let count = 0;

        for (const t of text) {
            if (t === letter) {
                count++;
            }
        }
        return count;
    }
    isValidName(name) {
        if (name === undefined ||
            typeof name !== 'string' ||
            name.length < 2 ||
            !this.isUpperCase(name[0])) {
            return false;
        }
        return true;
    }
    isUpperCase(letter) {
        return letter === letter.toUpperCase();
    }
    isValidMessage(msg) {
        if (typeof msg !== 'string' ||
            msg === '') {
            return false;
        }
        return true;
    }
    addEvents() {
        // submit mygtuko paspaudimo metu reikia isjungti default veikima
        this.submitButtonDOM.addEventListener('click', (e) => {
            e.preventDefault();
            //console.log('sdfghj');

            // issitraukti is visu formos lauku informacija
            // eiti per visus laukus ir atpazinus informacijos tipa atlikti tos informacijos validacija
            let allGood = true;
            for (let element of this.allInputsDOM) {
                const validationRule = element.dataset.validation; // sukuriam taisykle --> html prie input ivesta'data-validation'

                // jei patikrinus visus laukus, nerasta nei vienos klaidos, tai "siunciam pranesima"
                // jei patikrinus visus laukus, rasta bent viena klaida, tai parodome visu klaidos pranesimus (kol kas, viskas pateikiama i console)
                if (validationRule === 'email') {
                    if (this.isValidEmail(element.value) === false) {
                        console.error('ERROR: invalid email!');
                        allGood = false;
                        break;  // jei randam klaida, baigiam darba, toliau neinam 
                    }
                }
                if (validationRule === 'name') {
                    if (this.isValidName(element.value) === false) {
                        allGood = false;
                        console.error('ERROR: invalid name!');
                        break;
                    }
                }
                if (validationRule === 'text') {
                    if (this.isValidMessage(element.value) === false) {
                        allGood = false;
                        console.error('ERROR: message box cant be empty!');
                        break;
                    }
                }
            }
            console.log('All Good?', allGood)
        });
    }
}

export { Form }
class Form {
    constructor(selector, toastObject) {
        this.selector = selector;
        this.toastObject = toastObject;

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
        const maxEmailLength = 50;
        if (typeof email !== 'string' || email === '') {
            return 'Email turi buti ne tuscias tekstas';
        }
        if (email.length > maxEmailLength) {
            return `Email negali buti ilgesnis nei ${maxEmailLength} simboliu`;
        }
        if (email.indexOf('@') === -1) {
            return 'Email turi tureti @ simboli';
        }
        return true;
    }

    isValidName(name) {
        const maxNameLength = 50;
        if (typeof name !== 'string' || name === '') {
            return 'Vardas turi buti ne tuscias tekstas';
        }
        if (name.length > maxNameLength) {
            return `Vardas negali buti ilgesnis nei ${maxNameLength} simboliu`;
        }
        if (name[0].toUpperCase() !== name[0]) {
            return 'Vardo pirmoji raide turi buti didzioji';
        }
        return true;
    }
    isUpperCase(letter) {
        return letter === letter.toUpperCase();
    }
    isValidMessage(msg) {
        const maxTextLength = 1000;
        if (typeof text !== 'string' || text === '') {
            return 'Zinute turi buti ne tuscias tekstas';
        }
        if (text.length > maxTextLength) {
            return `Zinute negali buti ilgesne nei ${maxTextLength} simboliu`;
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
                    if (this.isValidEmail(element.value) !== true) {
                        this.toastObject.error(this.isValidEmail(element.value));
                        allGood = false;
                        break;  // jei randam klaida, baigiam darba, toliau neinam 
                    }
                }
                if (validationRule === 'name') {
                    if (this.isValidName(element.value) !== true) {
                        allGood = false;
                        this.toastObject.error(this.isValidName(element.value));
                        break;
                    }
                }
                if (validationRule === 'text') {
                    if (this.isValidMessage(element.value) !== true) {
                        allGood = false;
                        this.toastObject.error(this.isValidMessage(element.value));
                        break;
                    }
                }
            }
            if (allGood) {
                this.toastObject.success('Tavo formos informacija buvo issiusta!');

            }

        });
    }
}

export { Form }
// IMPORT
import { Clock } from "./components/clock/Clock.js";
import { Form } from "./components/form/Form.js";
import { Progressbar } from "./components/progress-bar/ProgressBar.js";
import { socials } from "./components/socials/socials.js";
import { SocialsOOP } from "./components/socials/SocialsOOP.js";
import { Toast } from "./components/toast/Toast.js";
import { clockData } from "./data/clockData.js";
import { progressBarData } from "./data/progressBarData.js";
import { socialsData } from "./data/socialsData.js";

// EXECUTION
const toast = new Toast;
toast.success('Tau pavyko!');
toast.info('Pranesame apie si bei ta!');
toast.warning('Tu cia ziurek..!');
toast.error('Yra klaida!')
// toast.error('Yra klaida!', 'Nauja antraste');




new Clock('#clock_1', clockData);
// socials('footer .socials', socialsData);
new Progressbar('.left-column', progressBarData);
new SocialsOOP('footer .socials', socialsData);
new Form('.hero form');
new Form('main form');
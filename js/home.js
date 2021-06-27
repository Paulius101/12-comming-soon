// IMPORT
import { Clock } from "./components/clock/Clock.js";
import { Form } from "./components/form/Form.js";
import { Progressbar } from "./components/progress-bar/ProgressBar.js";
// import { socials } from "./components/socials/socials.js";
import { clockData } from "./data/clockData.js";
import { progressBarData } from "./data/progressBarData.js";
import { socialsData } from "./data/socialsData.js";
import { SocialsOOP } from "./components/socials/SocialsOOP.js";

// EXECUTION
new Clock('#clock_1', clockData);
// socials('footer .socials', socialsData);
new Progressbar('.left-column', progressBarData);
new SocialsOOP('.socials', socialsData);
new Form('.hero form');
new Form('main form');
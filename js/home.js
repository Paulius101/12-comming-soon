// IMPORT
import { Clock } from "./components/clock/Clock.js";
import { Progressbar } from "./components/progress-bar/ProgressBar.js";
import { socials } from "./components/socials/socials.js";
import { clockData } from "./data/clockData.js";
import { progressBarData } from "./data/progressBarData.js";
import { socialsData } from "./data/socialsData.js";

// EXECUTION
new Clock('#clock_1', clockData);
socials('footer .socials', socialsData);
new Progressbar('.left-column', progressBarData);
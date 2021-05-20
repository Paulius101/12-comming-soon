// IMPORT
import { Clock } from "./components/clock/Clock.js";
import { socials } from "./components/socials/socials.js";
import { socialsData } from "./data/socialsData.js";

// EXECUTION
new Clock('#clock_1');
// new Clock(485545);
socials('footer .socials', socialsData);
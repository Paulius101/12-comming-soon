// IMPORT
import { Clock } from "./components/clock/Clock.js";
import { socials } from "./components/socials/socials.js";
import { clockData } from "./data/clockData.js";
import { socialsData } from "./data/socialsData.js";

// EXECUTION
new Clock('#clock_1', clockData);
// new Clock(485545);
socials('footer .socials', socialsData);
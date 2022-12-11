// Library Imports
import mixpanel from "mixpanel-browser";

// or with require() syntax:
// const mixpanel = require('mixpanel-browser');

// Enabling the debug mode flag is useful during implementation,
// but it's recommended you remove it for production

//If there is no token in the env variables, the TEST_TOKEN will initialize Mixpanel
//It does not throw error just that nothing will be logged.
//This is to make Mixpanel as optional dependency

const KEY = process.env.NEXT_PUBLIC_MIXPANEL_PROJECT_TOKEN || "TEST_TOKEN";
const mode = process.env.NODE_ENV === "development";

mixpanel.init(KEY, mode ? { debug: true } : {});

export default mixpanel;

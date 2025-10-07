import user from "./data/foreignerData.js"
import user2 from "./data/salaryData.js"
import user3 from "./data/showUserData.js";

import { isForeigner, userData, userName } from "./functions.js";

console.log(isForeigner(user));
console.log(userData(user2));
console.log(userName(user3));


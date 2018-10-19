import { run} from "tns-core-modules/application";

import { initialize as initializeKinvey } from "./services/kinvey";

initializeKinvey();

run({ moduleName: 'app-root' });

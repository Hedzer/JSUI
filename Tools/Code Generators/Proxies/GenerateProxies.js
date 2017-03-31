'use strict';
let fs = require('fs');

let file = './yolo.js';
let imported = 'iisimported.js';
fs.writeFileSync(file, [
	`let item = JSUI.imports('${imported}');\n\n`,
	`export default item;\n`,
].join(''));



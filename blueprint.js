var p = require('preprocess');
var fs = require('fs');
var colors = require('colors');


var className = 'Test';
var type = 'uikit';
process.argv.forEach(function (val, index, array) {
  //console.log(index + ':' + val);
  if (index === 2) {
    type = val;
  }
  if (index === 3) {
    className = val;
  }
});


var bpBase = './blueprint/';
var srcScreenComponent = './screens/';


var data = {
  CLASSNAME: className,
  CLASSNAME_LOWERCASE: className.toLowerCase(),
  CLASSNAME_FIRST_LOWERCASE: className.charAt(0).toLowerCase() + className.slice(1)
};


var currentFile = '';

if (type === 'screen' || type === 'screens') {
  // Create Base Component sass file
  currentFile = srcScreenComponent + data.CLASSNAME+'.js';
  if (!fs.existsSync(currentFile)){ 
    p.preprocessFileSync(bpBase + 'screen.js', currentFile, data, {type: 'js'});


    console.log(`****** File Created ******`.bold.yellow);
    console.log(`add the following route info to the Navigation.js file.\n`.bold.yellow);

    console.log(`import ${data.CLASSNAME} from './screens/${data.CLASSNAME}';\n`.bold.blue);
    console.log(`${data.CLASSNAME}:${data.CLASSNAME}\n`.bold.blue);

  } else {
    console.log('File already exists, skipping. ' + currentFile);
  }

}

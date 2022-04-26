var copy = require('recursive-copy')

var fromPug = 'node_modules/@yababay67/pug-modules'
var toPug = 'src/pug_modules'

var options = {
    filter: [
        '**/*.pug'
    ]
}

copy(fromPug, toPug, options, (err, result) => {
    console.log(`Pug templates are ${err ? "not copied!" + err : "copied successfully."}`)
})


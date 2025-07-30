#!/usr/bin/env node

function SayHello() {
  return 'Say Hi from App'
}

// We want this functionality to be override-able by a plugin
let app = {
  SayHi: () => SayHello() // load this app's method by default
}

try {
  // plugin will also have a SayHello method with different text output
  app = await import ("@evalarumbe/sayhelloplugin")
}
catch(e) {
  console.log("no plugins")
}

// Are we seeing the text from the app or from the plugin?
console.log(app.SayHi())

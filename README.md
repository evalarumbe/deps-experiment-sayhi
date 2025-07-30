# Say hi
A dependencies experiment to understand error output.

Following a [tutorial on YouTube](https://www.youtube.com/watch?v=h1z2qGV4KPI&ab_channel=Ashotofcode) (~18 mins)

Here's an interesting explanation of a similar error in text: [Stack Overflow](https://stackoverflow.com/questions/76039613/how-do-i-read-npm-dependency-conflict-errors)


## Related repos

- https://github.com/evalarumbe/deps-experiment-usingsayhi
- https://github.com/evalarumbe/deps-experiment-sayhelloplugin


## Notes from the tutorial

- To be able to run the file from the CLI, place `index.js` in the `bin` dir and use a shebang (first line)

- Publish to NPM by using the CLI from within your project dir: 
  `npm publish --access=public`
  You may need to log into your NPM account first. This command will let you authenticate in a browser:
  `npm adduser`


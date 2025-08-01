# Say hi
A dependencies experiment to understand error output.

Following a [tutorial on YouTube](https://www.youtube.com/watch?v=h1z2qGV4KPI&ab_channel=Ashotofcode) (~18 mins)

Here's an interesting explanation of a similar error in text: [Stack Overflow](https://stackoverflow.com/questions/76039613/how-do-i-read-npm-dependency-conflict-errors)


## Related repos

- https://github.com/evalarumbe/deps-experiment-usingsayhi
- https://github.com/evalarumbe/deps-experiment-sayhelloplugin


## Starting scenario

3 repos:
### @evalarumbe/deps-experiment-sayhi

  If no plugin is installed alongside it, this app will:

  - Print a string "no plugins"
  - Print a string "Say Hi from App"

  Otherwise if a plugin is found, it will:
  - Call the function exported by the plugin, to print a different string.

### @evalarumbe/deps-experiment-sayhelloplugin
  - Exports `SayHi()` that prints "hi from the plugin"

### @evalarumbe/deps-experiment-sayhi
  - Consumes both the above repos, using `npx` to run things and see how dependencies interact.

The details will change as we test different scenarios.

## Steps in the tutorial

- 00:55 Create Test Application + Publish to NPM
  - @evalarumbe/deps-experiment-sayhi v1.0.0

- 04:10 Install and Test Application
  - Create new project @evalarumbe/deps-experiment-usingsayhi
  - From this project dir, run:
    - `npm i @evalarumbe/deps-experiment-sayhi`
    - `npx @evalarumbe/deps-experiment-sayhi`
    - Output: 'no plugins. Say Hi from App'

- 05:00 Create Test Application Plugin + Publish to NPM
  - @evalarumbe/deps-experiment-sayhelloplugin v1.0.0

- 06:30 Scenario 1 - Happy Case App and Plugin work together successfully
  - Again in the `usingsayhi` project, run:
    - `npm i @evalarumbe/deps-experiment-sayhelloplugin`
    - `npx @evalarumbe/deps-experiment-sayhi`
    - Output: 'hi from the plugin'

- 07:15 Scenario 2 - App API is updated with breaking change - no Peer Dependency to help us
  - Author of the app changes the API (`app.SayHi()` is renamed to `app.SayHello()`) in v2.0.0
  - This means it will be looking for a `SayHello()` in the plugin, which still only provides `SayHi()`

- 08:30 Install V1 of App - No Errors or Warnings
  - As a consumer, in the `usingsayhi` project, run:
    - `npm i @evalarumbe/deps-experiment-sayhi@latest`

      This updates `package.json` to require `^2.0.0`, and installs the latest version

      **Note: No errors or warnings even though this was a breaking change.**

      **Peer dependencies would have given us a warning at this point (install time).**

- 08:50 Run time error!
- 09:40 Scenario 3 - Using Peer Dependency on Plugin
- 10:20 Update version of Plugin to 10.0.2
- 11:30 Peer Dependency Warning on attempting to install plugin against V1 of App
- 13:20 Scenario 4 - Installing Plugin with App V1 - peer dependency should warn/error
- 14:40 Install Plugin shows Error and blocks install
- 15:40 Force install of Plugin


## Notes from the tutorial

- To be able to run the file from the CLI, place `index.js` in the `bin` dir and use a shebang (first line)

- Publish to NPM by using the CLI from within your project dir: 
  `npm publish --access=public`
  You may need to log into your NPM account first. This command will let you authenticate in a browser:
  `npm adduser`

### When might we run into problems with dependencies?

- Say the author of this app now updates to v2.0.0 with a change in the API
- The [consumer](https://github.com/evalarumbe/deps-experiment-usingsayhi) updates to v2.0.0:
  ```sh
  npm i @evalarumbe/deps-experiment-sayhi@latest
  ```
  This works without errors, but all is not as it seems 👀

- 
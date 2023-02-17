1. "import.meta.env.VITE_SOME_VALUE" for environment variables

2. for react_app "process.env.SOME_VALUE or process.env.REACT_APP_SOME_VALUE"

3. Dotenv-expand adds variable expansion on top of dotenv. If you find yourself needing to expand environment variables already existing on your machine, then dotenv-expand is your tool.
# Install locally (recommended)
npm install dotenv-expand --save

4. Usage; Create a .env file in the root of your project:

PASSWORD="s1mpl3"
DB_PASS=$PASSWORD
As early as possible in your application, import and configure dotenv and then expand dotenv:

var dotenv = require('dotenv')
var dotenvExpand = require('dotenv-expand')

var myEnv = dotenv.config()
dotenvExpand.expand(myEnv)

console.log(process.env)
That's it. process.env now has the expanded keys and values you defined in your .env file.
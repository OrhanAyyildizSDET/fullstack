1. npx json-server --port 3001 --watch db.json for form a db.json file without global.

2. npm install axios for install axios fetch

3. Let's make another addition. Install json-server as a development dependency (only used during development) by executing the command:
npm install json-server --save-dev

4. And making a small addition to the scripts part of the package.json file:
    "server": "json-server -p3001 --watch db.json"


5. npm create vite@latest "project name" -- --template react vite ile ract project
6. "scripts": {
    "dev": "vite --port 3000",
    "build": "vite build",
    "preview": "vite preview",
    "server": "json-server -p3001 --watch db.json"
  },
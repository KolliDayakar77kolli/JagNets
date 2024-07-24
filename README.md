divHello Team,
======> Mr.Avinash

First Remove Un-necessary files created during create-react-app:
=> Files like - webvitals, logo, test files, etc

Steps to Configure Tailwind css,
=> After created React App,
=> use this commands to install tailwind
=> First cmd: npm install -D tailwindcss postcss autoprefixer
=> Second cmd: npx tailwindcss init -p
=> after running second command it will create a new file called : "tailwind.config.js"
=> Remove the existed content in tailwind.config.js & Replace with this content
=> Content:

/** @type {import('tailwindcss').Config} \*/
export default {
content: [
"./index.html",
"./src/**/\*.{js,ts,jsx,tsx}",
],
theme: {
extend: {},
},
plugins: [],
}

=> Go To index.css and Remove existing code & Replace with this:
=> content:

@tailwind base;
@tailwind components;
@tailwind utilities;

=> Make sure index.css imported in index.js like this: import "./index.css";
=> Don't touch postcss.config.js file which is created automatically
=> After all this steps done
=> Write App.js content like this:
content:

function App() {
return (
<>

<div className="text-4xl font-bold text-blue-600">Hello World.!</div>
</>
);
}

export default App;

=> Just start server : npm start

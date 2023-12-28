serve dist/index.html on DJ

npm i -D tailwindcss && npm tailwind init
    tailwind.config.js
        /** @type {import('tailwindcss').Config} */
        module.exports = {
          content: ["./src/**/*.{html,js}"],
          theme: {
            extend: {},
          },
          plugins: [],
        }
    src/input.css
        @tailwind base;
        @tailwind components;
        @tailwind utilities;
    shell
        npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
    src/index.html
        <link href="/dist/output.css" rel="stylesheet">
        </head>
        <body>
        <h1 class="text-3xl font-bold underline">
            Hello world!
        </h1>
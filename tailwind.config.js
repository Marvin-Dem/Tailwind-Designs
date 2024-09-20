/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/*.html", "*/**/*.tsx"],
    theme: {
        extend: {
            colors: {
                dark: "rgb(31,40,55)",
                grey: "rgb(55,64,81)",
                blue: "rgb(39,97,216)",
                green: "rgb(24,162,74)",
                yellow: "rgb(243,201,70)",
                lightred: "rgb(226,54,112)",
                orange: "rgb(232,141,48)",
            },
        },
    },
    plugins: [],
};

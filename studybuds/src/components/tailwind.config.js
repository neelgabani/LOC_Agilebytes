/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        colors: {
          blueviolet: "#853ef3",
          white: "#fff",
          lightgray: "#d5d5d6",
          gray: {
            "100": "#222",
            "200": "rgba(34, 34, 34, 0.55)",
            "300": "rgba(34, 34, 34, 0.87)",
            "400": "rgba(34, 34, 34, 0.35)",
          },
          mediumaquamarine: "#75bc9b",
          whitesmoke: {
            "100": "#edebeb",
            "200": "#eaeaea",
          },
        },
        spacing: {},
        fontFamily: {
          "caption-3-medium": "Roboto",
          lato: "Lato",
          "caption-3-regular": "Poppins",
        },
        borderRadius: {
          "13xl": "32px",
          "6xs": "7px",
          mini: "15px",
        },
      },
      fontSize: {
        base: "16px",
        xl: "20px",
        lg: "18px",
        mini: "15px",
        "5xl": "24px",
        inherit: "inherit",
      },
    },
    corePlugins: {
      preflight: false,
    },
  };
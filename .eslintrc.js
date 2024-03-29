module.exports = {
    "extends": "airbnb",
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
    "parser": "babel-eslint",
    "rules": {
        "semi": [
            "error",
            "never"
        ],
        "comma-dangle": [
          "error",
          "never"
        ],
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }]
    }
};

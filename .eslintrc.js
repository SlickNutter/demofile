module.exports = {
    "rules": {
        "indent": [
            2,
            2,
            {"SwitchCase": 1}
        ],
        "quotes": [
            2,
            "single"
        ],
        "linebreak-style": [
            2,
            "unix"
        ],
        "semi": [
            2,
            "always"
        ],
        "eqeqeq": [2, "smart"],
        "valid-jsdoc": 2
    },
    "env": {
        "es6": true,
        "node": true,
        "browser": true
    },
    "extends": "eslint:recommended"
};

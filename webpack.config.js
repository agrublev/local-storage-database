const path = require("path");

module.exports = {
    entry: "./js/localDatabase.js",
    mode: "production",
    output: {
        module: true,
        library: {
            type: "module"
        },
        filename: "localDatabase.js",
        path: path.resolve(__dirname, "release")
    },
    optimization: {
        usedExports: true,
        concatenateModules: true
    },
    experiments: {
        outputModule: true
    }
};

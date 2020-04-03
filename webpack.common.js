/* eslint-env node */
const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: "src/index.html",
    filename: "index.html",
    title: "Etäsitsit",
    inject: "body",
});

const pack = require("./package.json");
const appName = pack.name;
const appVersion = pack.version;
const buildNumber = process.env.BUILD_NUMBER || "local_dev";
const WebpackShellPluginNext = require("webpack-shell-plugin-next");
const buildsDir = path.resolve(__dirname, "builds");
const distDir = path.resolve(__dirname, "dist");
const ENSURE_BUILDS_DIR = "test -d " + buildsDir + " || mkdir " + buildsDir;
const ENSURE_DIST_DIR = "test -d " + distDir + " || mkdir " + distDir;
const MERGE_ASSET_COMPILE =
    "[ -d assets ] && cp -R " +
    path.join("assets", "*") +
    ' "' +
    distDir +
    '" || true';
const archiveName = appName + "-" + appVersion + "-b" + buildNumber + ".tar.gz";
const archivePath = path.join(buildsDir, archiveName);
const CREATE_ARCHIVE = `uname -a | grep -iqv cygwin && tar czvf ${archivePath} -C ${distDir} . && echo "Built ${archiveName}" || echo "skipping archive creation, unsupported platform"`;

const Dotenv = require("dotenv-webpack");

module.exports = {
    entry: "./src/index.js",
    resolve: {
        extensions: [".js", ".jsx"],
    },
    module: {
        rules: [
            {
                test: /\.jsx$|\.js$/,
                enforce: "pre",
                loader: "eslint-loader",
                include: __dirname + "/src",
                exclude: __dirname + "/node_modules",
            },
            {
                test: /\.jsx$|\.js$/,
                loader: "babel-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                loader: "url-loader?limit=100000",
            },
            {
                test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url-loader?limit=10000&mimetype=application/font-woff",
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader:
                    "url-loader?limit=10000&mimetype=application/octet-stream",
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: "file-loader",
            },
            {
                test: /\.otf$/,
                loader: "file-loader",
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url-loader?limit=10000&mimetype=image/svg+xml",
            },
        ],
    },
    plugins: [
        HtmlWebpackPluginConfig,
        new WebpackShellPluginNext({
            onBuildStart: {
                scripts: [ENSURE_BUILDS_DIR, ENSURE_DIST_DIR],
                blocking: true,
            },
            onBuildExit: {
                scripts: [MERGE_ASSET_COMPILE, CREATE_ARCHIVE],
                blocking: true,
            },
            safe: true,
        }),
        new Dotenv(),
    ],
    output: {
        path: path.resolve(__dirname, "dist"),
        publicPath: "/",
        filename: "bundle.js",
    },
};

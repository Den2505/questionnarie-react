import path from "path";
import Express from "express";
import webpack from "webpack";
import Server from "webpack-dev-server";
import {createExpressMiddleware, createWebpackMiddleware, skipRequireExtensions} from "create-react-server"; // this should be create-react-server
import config from "./webpack.config";
skipRequireExtensions();
// Create React App does not allow to create common library outside its' src dir, so we import from there
import template from "./template";
import createApp from "./src/app";



const port = process.env.PORT || 3000;

function isDevServer() {
    return process.env.NODE_ENV !== 'production';
}

const options = {
    app: createApp,
    template: template,
    outputPath: config.output.path,
    templatePath: path.join(config.output.path, 'index.html'),
    debug: true
};

if (isDevServer()) {

    const compiler = webpack(config);

    config.devServer.setup = (app) => {
        app.use(createWebpackMiddleware(compiler, config)(options));
    };

    new Server(compiler, config.devServer).listen(port, '0.0.0.0', listen);

} else {

    // this can also be replaced with createExpressServer({...options, listen})
    const app = Express();
    app.use(Express.json());
    app.use(createExpressMiddleware(options));
    app.use('/',function(req,res,next){
        if ('POST' != req.method){
            next()
        }else{
            req.method = 'GET';
            next()
        }

    });
    app.use(Express.static(config.output.path));
    app.listen(port, listen);

}

function listen(err) {
    if (err) throw err;
    console.log('Listening %s', port);
}


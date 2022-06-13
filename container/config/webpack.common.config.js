const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = { 
    module:{
        rules:[ //rules array
            {
                test:/\.m?js$/, //whenever we import a file that ends with .js, we want it to be processed by Babel
                exclude:/node_modules/, // Dont run Babel for any files out of node-modules directory
                use:{
                    loader: 'babel-loader',  
                    // The Goal of a loader is to tell the webpack to process some different files as we start to import them into a project. 
                    // Babel is going to be in charge of processing all our code from Es 2015, 16,17,18,19 and so on and turn into regular ES5 code 
                    //that can be easily executed inside the typical browser. Making us of babel in any modern project is common and typical
                    options:{
                        presets: ['@babel/preset-react', '@babel/preset-env'],
                        //@babel/preset-react - Babel is going to process all the different JSX tags we had it in our application. (JSX - React related code)
                        //@babel/preset-env - It transforms the code into variety of different ways. It takes all the kind of ES205, 16, 17 and so on  and convert down into ES5
                        plugins:['@babel/plugin-transform-runtime']
                        //@babel/plugin-transform-runtime - It is going to add little bit of additional code just to enable different features for our project inside the 
                        //browser such as async await syntax and some other related things
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template:'./public/index.html'
        })
    ]
}


//Babel is a transpiler that compiles JavaScript ES6 to JavaScript ES5 allowing you to write JavaScript “from the future” so that current browsers will understand it
//babel-loader — This package allows transpiling JavaScript files using Babel and webpack
//@babel/preset-env — With this you don’t have to specify if you will be writing ES2015, ES2016 or ES2017. Babel will automatically detect and transpile accordingly.
//@babel/preset-react — Tells Babel we will be using React
//html-webpack-plugin — Can generate an HTML file for your application, or you can provide a template
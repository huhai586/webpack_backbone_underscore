/**
 * Created by haihu on 2016/6/16.
 */
module.exports={

    entry:"./backbone-test.js",
    output:{
        filename:'./end/bundle.js'
    },
    module:{
        loaders:[{
            test:/\.js/,
            loader:"babel-loader",
            // include:/src/,
            exclude:/node_modules/,
            query:{presets: 'es2015'}
        },
            {
                test:/\.html/,
                loader:"underscore-template-loader",
                // include:/src/,
                exclude:/node_modules/

            }]
    }


}
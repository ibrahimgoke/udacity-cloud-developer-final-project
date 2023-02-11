"use strict";

module.exports.hello = async (event) => {
    return {
        statusCode: 200,
        body: JSON.stringify(
            {
                message: "Go Serverless v2.0! your fucntion exceuted successfully!",
                input: event,
            },
            null,
            2
        ),
    };
};


// npm install ts-loader@latest
//  1057  serverless deploy --verbose
//  1058  npm install ts-node-dev@latest ts-node@latest

// npm install webpack@5.75.0
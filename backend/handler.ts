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
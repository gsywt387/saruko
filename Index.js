exports.handler = async (event) => {
    const response = {
        statusCode: 200,
        body: JSON.stringify('LINE Bot Backend is working!'),
    };
    return response;
};
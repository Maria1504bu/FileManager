module.exports = function (app) {
    app.get('/', (req, resp) => {
        resp.end("main");
    })
}
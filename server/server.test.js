const request = require("supertest");
const expect = require("expect");
let app = require("./server").app;


describe("Server",() => {
    describe("GET /",() => {
        it("should return hello response", (done) => {
            request(app)
            .get("/")
            .expect(404) // Status code
                .expect((res) => {
                    expect(res.body).toInclude({error:"Page not found."})
                })
                .end(done);
        });
    });
    describe("GET /users", () => {
        it("should return array of user", (done) => {
            request(app)
            .get("/users")
            .expect(200)
            .expect((res) => {
                expect(res.body).toInclude({name:"Dennis", age:27})
            })
            .end(done);
        });
    })
});


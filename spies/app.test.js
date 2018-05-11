const expect = require("expect");
const rewire = require("rewire");

let app = rewire("./app");

describe("App", () => {
    let db = {
        saveUser: expect.createSpy()
    };
    app.__set__("db", db);
    it("should call the spy correctly", () => {
        let spy = expect.createSpy();
        spy("Dennis", 27);
        //expect(spy).toHaveBeenCalled();
        expect(spy).toHaveBeenCalledWith("Dennis", 27)
    });

    it("should call saveUser with user object" ,() => {
        let email = "test@test.de";
        let password = "123abc";
        app.handleSignup(email,password);
        expect(db.saveUser).toHaveBeenCalledWith({email,password});
    })
});


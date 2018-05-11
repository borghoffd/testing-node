//npm run test-watch -> for automated testing, script in package.json
const utils = require('./utils');
const expect = require('expect');

// Testing describe
describe("Utils", () => {
    describe("#add", () => {
        it("should add two numbers", () => {
            let res = utils.add(33,11);
            // expect return value to be value of 44 and a number
            expect(res).toBe(44).toBeA("number");
        });
    });
    describe("#square", () => {
        it("should square a number", () => {
            let res = utils.square(4);
            // expect return value to be value of 16 and a number
            expect(res).toBe(16).toBeA("number");
        });
    });
    describe("Async Functions", () => {
        describe("#async add", () => {
            it("should async add two numbers", (done) => {
                utils.asyncAdd(4,3,(sum) => {
                    expect(sum).toBe(7).toBeA("number");
                    done();
                })
            });
        });
        describe("#async square", () => {
            it("should async square a number", (done) => {
                utils.asyncSquare(4, (res) => {
                    expect(res).toBe(16).toBeA("number");
                    done();
                })
            });
        })
    });
});

it("verify first and last names are set", () => {
    let user = {
        age: 27,
        location: "MG"
    };
    let res = utils.setName(user, "Dennis Borghoff");
    expect(res).toInclude({
        firstName: "Dennis",
        lastName: "Borghoff"
    });
    expect(res).toBeA("object");
});

// playing around with expect
/*it("should expect some values", () => {
   //expect(12).toNotBe(12);
    //expect({name:"Andrew"}).toEqual({name:"Andrew"}); // -> checking objects
    //expect({name:"Andrew"}).toNotEqual({name:"andrew"});
    //expect([2,3,4]).toInclude(2);
    //expect([2,3,4]).toExclude(1);
    /!*expect({
        name : "Dennis",
        age: 25,
        location: "MG"
    }).toExclude({
        age: 24
    })*!/
});*/

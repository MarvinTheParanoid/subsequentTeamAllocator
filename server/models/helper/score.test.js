// Imports
const { score } = require("./score");

describe("Score function - scores an allocation", () => {
  it("Returns an object with teamScore and allocationScore keys", () => {
    const allocation = [];
    const weights = [];
    const actual = score(allocation, weights);
    expect.assertions(4);
    expect(actual).toHaveProperty("teamScores");
    expect(actual).toHaveProperty("allocationScore");
<<<<<<< HEAD:server/models/allocationFunctions/score.test.js
    expect(Object.keys(actual)).toHaveLength(2);
||||||| 0e3136d:server/models/allocationFunctions/score.test.js
    expect(Object.keys(actual).length).toBe(2);
=======
    expect(actual).toHaveProperty("allocation");
    expect(Object.keys(actual).length).toBe(3);
>>>>>>> 586c4a9149a6e130036835d24435512412c8b17f:server/models/helper/score.test.js
  });
  it("teamScores to be calculated correctly using weights**2", () => {
    const allocation = [
      [0, 1],
      [2, 3],
    ];
    const weights = [
      [0, 2, 0, 0],
      [2, 0, 0, 0],
      [0, 0, 0, 6],
      [0, 0, 6, 0],
    ];
    const actual = score(allocation, weights);
    const expected = [4, 36];
    expect.assertions(2);
    expect(actual.teamScores).toHaveLength(2);
    expect(actual.teamScores).toEqual(expected);
  });
  it("allocationScore to be calculated correctly and the sum of teamScores", () => {
    const allocation = [
      [0, 1],
      [2, 3],
    ];
    const weights = [
      [0, 2, 0, 0],
      [2, 0, 0, 0],
      [0, 0, 0, 6],
      [0, 0, 6, 0],
    ];
    const { allocationScore } = score(allocation, weights);
    const expected = 40;
    expect.assertions(2);
    expect(typeof allocationScore).toBe("number");
    expect(allocationScore).toEqual(expected);
  });
});

// Imports
<<<<<<< HEAD:server/models/allocationFunctions/score.js
const { forEachPair } = require("../../utils");
||||||| 0e3136d:server/models/allocationFunctions/score.js
const { forEachPair } = require('../../utils')
=======
const { forEachPair } = require("./utils");
>>>>>>> 586c4a9149a6e130036835d24435512412c8b17f:server/models/helper/score.js

// Add scores to a single allocation
// Takes:
//  - allocation: 2d array (numberTeams * teamSize)
//  - weights: 2d array (requiredPeople * requiredPeople)
// Returns:
//   - scores: object
//    - teamScores: 1d array (score of every team)
//    - allocationScore: int (total score of all teams)
// NOTE: score currently linearly scales with number of previous parings for each paring.
//  This might be change to be non-linear (exponential). This handicap allocations with a pairing that has paired together many times previously.
//  E.g. scenario 1: one pair that has paired together 3 times and one pair that has paired together once - linear score: 4, exponential score: 10
//       scenario 2: two pairs that have paired together twice - linear score: 4, exponential score: 8
//       With linear scoring both scenarios are the same, with exponential scoring scenario 1 is more preferable
function score(allocation, weights, power = 2) {
  const teamScores = allocation.map((team) => {
<<<<<<< HEAD:server/models/allocationFunctions/score.js
    let score = 0;
    forEachPair(
      team,
      (person1, person2) => (score += weights[person1][person2]) // add powsers
    );
    return score;
  });
  const allocationScore = teamScores.reduce((total, teamScore) => total + teamScore, 0);
  return { teamScores, allocationScore };
||||||| 0e3136d:server/models/allocationFunctions/score.js
    let score = 0
    forEachPair(
      team,
      (person1, person2) => (score += weights[person1][person2]) // add powsers
    )
    return score
  })
  const allocationScore = teamScores.reduce(
    (total, teamScore) => total + teamScore,
    0
  )
  return { teamScores, allocationScore }
=======
    let score = 0;
    forEachPair(team, (person1, person2) => (score += Math.pow(weights[person1][person2], power)));
    return score;
  });
  const allocationScore = teamScores.reduce((total, teamScore) => total + teamScore, 0);
  return { allocation, teamScores, allocationScore };
>>>>>>> 586c4a9149a6e130036835d24435512412c8b17f:server/models/helper/score.js
}

// Export
module.exports = { score };

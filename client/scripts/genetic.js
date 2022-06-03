const { shuffle, orderBy, range, head } = require('lodash')

// needs a huge refactor!!!!
export default (people, teams, populationSize = 200, generations = 30, randomMutations = 2, penalty = 2) => {
  let population = randomAllocations(populationSize, people, teams)
  population = scoreAllocations(population, people, penalty)
  population = sortByScore(population)
  let best = head(population)
  let generation = 0
  while (generation < generations && best != 0) {
    // crossover
    // mutations
    population = scoreAllocations(population, people, penalty)
    population = sortByScore(population)
    // select populationSize best
    best = head(population)
    generation ++
  }
  return best
}

export const randomAllocations = (n, people, teams) => {
  return range(n).map(() => randomAllocation(people, teams))
}
export const randomAllocation = (people, teams) => {
  const teamSize = Math.ceil(people.length / teams.length);
  const shuffled = shuffle(people);
  return { teams: teams.map((team, teamIndex) => {
    const startIndex = teamIndex * teamSize;
    const endIndex = startIndex + teamSize;
    const members = shuffled
      .slice(startIndex, endIndex)
      .map(({id, name}) => ({id, name}))
    return {...team, people: members}
    })
  }
}

export const scoreAllocations = (allocations, people, penalty = 2) => {
  return allocations.map(allocation => scoreAllocation(allocation, people, penalty))
}

export const scoreAllocation = (allocation, people, penalty = 2) => {
  let allocationScore = 0;
  const scoredTeams = allocation.teams.map(team => {
    let teamScore = 0;
    forEachPair(team.people, (person1, person2) => {
      const pairScore = people.find(person => person.id == person1.id)?.pairings[person2.id] || 1;
      teamScore += Math.pow(pairScore, penalty);
    });
    allocationScore += teamScore;
    return {...team, score: teamScore};
  });
  return {...allocation, teams: scoredTeams, score: allocationScore}
}

// }
// sortAllocation
export const sortAllocation = (allocation) => {
  return {
    allocation
  }
}

// createPopulation
// randomMutation
// crossOver
export const crossOver = (allocation) => {
  
}
// applyToAll

export const createScoredAllocations = (creationFunction) => {
  return creationFunction().map(allocation => scoreAllocation(allocation))
}

// forEach
const forEachPair = (array, callback) => {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      callback(array[i], array[j]);
    }
  }
}

export const sortByScore = (toSort) => {
    return orderBy(toSort, ['score'], ['asc'])
}

export const sortTeams = (allocation) => {
  return {...allocation, teams: sortByScore(allocation.teams)}
}




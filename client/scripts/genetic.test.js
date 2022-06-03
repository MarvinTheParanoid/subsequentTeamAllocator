// set seed for deterninstic tests
// import '../data/seed'


// Imports
import genetic, { randomAllocation, scoreAllocation, sortByScore } from './genetic';
import { people, teams, history } from '../data';

// Setup
const allocation = {
  teams: [
    {
      id: "X01",
      name: "Team A",
      people: [
        {
          id: "A003",
          name: "Telly"
        },
        {
          id: "A005",
          name: "Ted"
        }
      ]
    },
    {
      id: "X02",
      name: "Team B",
      people: [
        {
          id: "A001",
          name: "Tim"
        },
        {
          id: "A002",
          name: "Tom"
        }
      ]
    },
    {
      id: "X03",
      name: "Team C",
      people: [
        {
          id: "A004",
          name: "Taylor"
        }
      ]
    },
  ]
};
const scoredAllocation = {
  score: 5,
  teams: [
    {
      id: "X01",
      name: "Team A",
      score: 1,
      people: [
        {
          id: "A003",
          name: "Telly"
        },
        {
          id: "A005",
          name: "Ted"
        }
      ]
    },
    {
      id: "X02",
      name: "Team B",
      score: 4,
      people: [
        {
          id: "A001",
          name: "Tim"
        },
        {
          id: "A002",
          name: "Tom"
        }
      ]
    },
    {
      id: "X03",
      name: "Team C",
      score: 0,
      people: [
        {
          id: "A004",
          name: "Taylor"
        }
      ]
    },
  ]
};

describe("randomAllocation", () => {
  it("returns expected allocation", () => {
    const actual = randomAllocation(people, teams)
    expect(actual).toStrictEqual(allocation)
  })
})

describe("scoreAllocation", () => {
  it("returns the correct data", () => {
    const actual = scoreAllocation(allocation, people)
    expect(actual).toStrictEqual(scoredAllocation)
  })
})

// sortByScore

// sortTeams

describe("genetic", () => {
  it("returns the correct data", () => {
    const actual = genetic(people, teams)
    expect(actual).toStrictEqual(scoredAllocation)
  })
})
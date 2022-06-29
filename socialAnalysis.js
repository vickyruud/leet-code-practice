const data = {
  f01: {
    name: "Alice",
    age: 15,
    follows: ["f02", "f03", "f04"]
  },
  f02: {
    name: "Bob",
    age: 20,
    follows: ["f05", "f06"]
  },
  f03: {
    name: "Charlie",
    age: 35,
    follows: ["f01", "f04", "f06"]
  },
  f04: {
    name: "Debbie",
    age: 40,
    follows: ["f01", "f02", "f03", "f05", "f06"]
  },
  f05: {
    name: "Elizabeth",
    age: 45,
    follows: ["f04"]
  },
  f06: {
    name: "Finn",
    age: 25,
    follows: ["f05"]
  }
};

const obtainKeys = (data) => {
  return Object.keys(data);
}

const biggestFollower = (data) => {
  const keys = obtainKeys(data);
  const sortable = []
  for (key of keys) {
    let pushable = {
      name: data[key].name,
      follows: data[key].follows.length
    }
    sortable.push(pushable)  }

  const result = sortable.sort((a, b) => a.follows - b.follows);
  return result[result.length - 1].name;
}

const mostFollowed = (data) => {
  const keys = obtainKeys(data);

  for (key of keys) {
  for (follow of data[key].follows) {
      console.log(follow, key)
     
    }
  }
 

}

// console.log(biggestFollower(data));

console.log(mostFollowed(data));
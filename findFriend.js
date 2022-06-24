// EXAMPLE DATA BELOW
const contacts = [
  {
    name: "Laurel",
    phone: "123 456 7890",
    email: "laurel@comics.com",
    friends: ["Hardy", "Abbott", "Costello"]
  },
  {
    name: "Hardy",
    phone: "321 654 0987",
    email: "hardy@hardyharhar.com",
    friends: ["Laurel", "Buster"]
  },
  {
    name: "Buster",
    phone: "987 654 3210",
    email: "buster@keaton.ca",
    friends: ["Hardy"]
  },
  {
    name: "Abbott",
    phone: "888 123 4567",
    email: "abbott@whosonfirst.co",
    friends: ["Costello", "Laurel"]
  },
  {
    name: "Costello",
    phone: "767 676 7676",
    email: "costello@imonfirst.co",
    friends: ["Abbott", "Laurel"]
  }
];


const findFriend = (contacts, person, details) => {
  const result = { };
  let detailsResult;
  const personFriends = contacts.find(item => {
    return item.name === person
  })

  if (personFriends) {
    detailsResult = contacts.find(item => {
      return item.name === personFriends.friends[0]
    })
  }
  
  

  if (personFriends && detailsResult[details]) {
  
    result["name"] = personFriends.friends[0];
    result[details] = detailsResult[details];
    return result;
    
  } else {
    return "Not found"
  }


}

console.log(findFriend(contacts, "Costello", "birthday"));
console.log(findFriend(contacts, "Abbott", "phone"));
console.log(findFriend(contacts, "Bob", "phone"));

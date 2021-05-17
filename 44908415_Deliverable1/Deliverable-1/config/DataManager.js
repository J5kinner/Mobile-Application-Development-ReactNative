export default class DataManager {
  static myInstance = null;
  userID = "";

  adventures = [
    {
      userid: "user1",
      advid: 1,
      title: "Katoomba",
      subtitle: "Chief town of the Blue Mountains",
      image: require("../assets/LookAway.jpg"),
      category: "Place to Stay",
    },
    {
      userid: "user2",
      advid: 2,
      title: "Manly",
      subtitle: "A suburb in NSW Australia which has nice beaches",
      image: require("../assets/BeachDay.jpg"),
      category: "Place to Stay",
    },
    {
      userid: "user1",
      advid: 3,
      title: "Tongalooma Island Safari",
      subtitle: "Beach Island off the coast of australia",
      image: require("../assets/car.jpg"),
      category: "Activity",
    },
    {
      userid: "user1",
      advid: 4,
      title: "Bondi Beach House",
      subtitle: "Stay in a beach house with all your friends!",
      image: require("../assets/beachHouse.jpg"),
      category: "Place to Stay",
    },
  ];

  static getInstance() {
    if (DataManager.myInstance == null) {
      DataManager.myInstance = new DataManager();
    }
    return this.myInstance;
  }

  getUserID() {
    return this.userID;
  }

  setUserID(id) {
    this.userID = id;
  }

  getAdventures(id) {
    return this.adventures.filter((adventure) => adventure.userid === id);
  }

  addListing(adventure) {
    this.adventures.push(adventure);
  }
}

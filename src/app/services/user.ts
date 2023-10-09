export class User {
    room: String = 'orbus-sante-g2k'; 
    name: String = ''; 
  
    constructor() {
      this.room = 'orbus-sante-g2k';
    }
  
    getRoom() {
      return this.room;
    }
  
    setame(roomName: String) {
      this.room = roomName;
    }
  
    getName() {
      return this.name;
    }
  
    setName(name: String) {
      this.name = name;
    }
  }
class Rover {
   // Write code here!
   constructor (position, mode = 'NORMAL', generatorWatts = 110) {
      this.position = position;
      this.mode = mode;
      this.generatorWatts = generatorWatts;
   }

   receiveMessage(message) {
      let messageReceived = {
         message: message.name,
         results: []
      }

      messageReceived.results.push(message.commands);


      return messageReceived;
   }
}




module.exports = Rover;
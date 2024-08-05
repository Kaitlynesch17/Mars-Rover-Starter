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

      for (let i = 0; i < message.commands.length; i++){
         if (message.commands[i].commandType === 'MODE_CHANGE') {
            this.mode = message.commands[i].value;
            if (this.mode === 'LOW_POWER') {
               messageReceived.results.push({completed: true});
            } else messageReceived.results.push({completed: true});
         } else if (message.commands[i].commandType === 'MOVE') {
            if (this.mode === 'LOW_POWER') {
               messageReceived.results.push({completed: false});
            } else {
               this.position = message.commands[i].value;
               messageReceived.results.push({completed: true});
            };
         } else if (message.commands[i].commandType === 'STATUS_CHECK') {
            messageReceived.results.push({completed: true, roverStatus: {mode: this.mode, generatorWatts: this.generatorWatts, position: this.position}});
         };

         
      }
      


      return messageReceived;
   }
}




module.exports = Rover;
// clear.js
// Clears the queue.
module.exports.description = "Clears the specified queue.";
const adminCheck = require("../lib/adminCheck.js");

module.exports.run = (client, message, args) => {
  const channel = message.channel;
  if (!adminCheck.hasAdmin(client, message)) {
    return;
  }

  if (args.length <= 0) {
    message.reply("please provide the queue index of the queue you wish to clear.");
    return;
  }

  // Clear the queue.
  channel.send(client.queueManager.dequeue(parseInt(args)));
}

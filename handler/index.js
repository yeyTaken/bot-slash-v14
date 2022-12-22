const fs = require("fs")

module.exports = async (client) => {

const SlashsArray = []

  fs.readdir(`./SlashCmd`, (error, folder) => {
  folder.forEach(subfolder => {
fs.readdir(`./SlashCmd/${subfolder}/`, (error, files) => { 
  files.forEach(files => {
      
  if(!files?.endsWith('.js')) return;
  files = require(`../SlashCmd/${subfolder}/${files}`);
  if(!files?.name) return;
  client.slashCommands.set(files?.name, files);
   
  SlashsArray.push(files)
  });
    });
  });
});
  client.on("ready", async () => {
    await client.application.commands.set(SlashsArray)
    });
};
module.exports = function(loader, toggl, timeSlotter, asker, config) {
  this.run = async () => {
    a = await asker.autocompleteInquire('text', [
      { name: "asd"},
      { name: "basd"},
      { name: "cacs"},
      { name: "dadsds"},
    ])
    console.log(a)
    console.log("Hei")
  }
  this.help = () => {
    return "Just Print 'Hello world!'"
  }
}

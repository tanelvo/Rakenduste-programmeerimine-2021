const Item = require('../models/Item')

exports.getItems = async (req, res) => {
  const items = await Item.find({})
  
  res.status(200).send(items)
}

exports.createItem = async (req, res) => {
  const newItem = {
    name: "Table",
    quality: 99,
    unused: true,
    color: "blue"
  }

  const createdItem = new Item(newItem)

  const savedItem = createdItem.save()

  res.status(200).send("yay")
}

exports.updateItem = async (req, res) => {
  const { id } = req.params;  // Nõuame ID
  const items = req.body;     // Nõuame uued andmed

  const item = await Item.findByIdAndUpdate({ _id: id }, items) // Muudame Id järgi andmed

  if(!item) res.status(404).send("Item ID not found")  // Teade juhul kui ei töötanud

  //res.status(200).send("items")
  //res.status(200).send(id)
  res.status(200).send("Update completed successfully")

}

exports.deleteItem = async (req, res) => {
  const { id } = req.params;

  const item = await Item.findOneAndDelete({ _id: id })

  console.log(item)
}
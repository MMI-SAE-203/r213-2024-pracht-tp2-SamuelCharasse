/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5sme8baevyguc32")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "khrhsnzp",
    "name": "maison",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "abmiqss6t9fk0y5",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5sme8baevyguc32")

  // remove
  collection.schema.removeField("khrhsnzp")

  return dao.saveCollection(collection)
})

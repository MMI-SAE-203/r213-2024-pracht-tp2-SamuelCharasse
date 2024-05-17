/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("abmiqss6t9fk0y5")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zhxlxblp",
    "name": "agent",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "5sme8baevyguc32",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("abmiqss6t9fk0y5")

  // remove
  collection.schema.removeField("zhxlxblp")

  return dao.saveCollection(collection)
})

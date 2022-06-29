db.people.aggregate([
    { "$unwind": "$credit" },
    { "$group": {
        "_id": {
            "_id": "$_id",
            "currency": "$credit.currency"
        },
        "balance": { "$sum": { $toDecimal: "$credit.balance" } }
    }},
    { "$group": {
        "_id": "$_id._id",
        "credit": { "$push": { "currency": "$_id.currency", "value": "$balance" } }
    }}
])
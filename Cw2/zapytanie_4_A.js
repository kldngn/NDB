db.people.aggregate([
  { "$project": {
    "cal": {
      "$divide": [
        { "$toDouble": "$weight" },
        { "$pow": [{ "$divide": [{ "$toDouble": "$height" }, 100] }, 2] }
      ]
    }
  }},
  { "$group": {
    "_id": 1,
    "avgBmi": { "$avg": "$cal" },
    "minBmi": { "$min": "$cal" },
    "maxBmi": { "$max": "$cal" }
  }},
])
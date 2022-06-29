db.people.aggregate([{$group :
   {_id : "$sex",
    "Avg height" : {$avg :{ $round: [ { $toDecimal: "$height" }, 1 ] }},
    "Avg weight" : {$avg :{ $round: [ { $toDecimal: "$weight" }, 1 ] }}
   }
}]);
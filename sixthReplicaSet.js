rs.initiate(
  {
    _id : "sixthReplicaSet",
    members: [
      { _id : 0, host : "node6:27017" }
    ]
  }
)


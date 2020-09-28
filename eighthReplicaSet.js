rs.initiate(
  {
    _id : "eighthReplicaSet",
    members: [
      { _id : 0, host : "node8:27017" }
    ]
  }
)


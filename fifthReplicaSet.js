rs.initiate(
  {
    _id : "fifthReplicaSet",
    members: [
      { _id : 0, host : "node5:27017" }
    ]
  }
)


rs.initiate(
  {
    _id : "firstReplicaSet",
    members: [
      { _id : 0, host : "node1:27017" }
    ]
  }
)


rs.initiate(
  {
    _id : "secondReplicaSet",
    members: [
      { _id : 0, host : "node2:27017" }
    ]
  }
)


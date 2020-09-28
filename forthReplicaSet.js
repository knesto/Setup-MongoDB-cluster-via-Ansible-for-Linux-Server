rs.initiate(
  {
    _id : "forthReplicaSet",
    members: [
      { _id : 0, host : "node4:27017" }
    ]
  }
)


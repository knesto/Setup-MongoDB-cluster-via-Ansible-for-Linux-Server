rs.initiate(
  {
    _id : "thirdReplicaSet",
    members: [
      { _id : 0, host : "node3:27017" }
    ]
  }
)


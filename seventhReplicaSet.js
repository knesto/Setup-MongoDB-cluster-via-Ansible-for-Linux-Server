rs.initiate(
  {
    _id : "seventhReplicaSet",
    members: [
      { _id : 0, host : "node7:27017" }
    ]
  }
)


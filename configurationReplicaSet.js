rs.initiate(
  {
    _id : "configurationReplicaSet",
    configsvr: true,
    members: [
      { _id : 0, host : "node9:27017" }
    ]
  }
)

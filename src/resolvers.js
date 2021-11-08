const resolvers = {
  users: async (_, context) => {
    const { db } = await context();
    return db
      .collection("users")
      .find()
      .toArray();
  },
  user: async ({ id }, context) => {
    const { db } = await context();
    return db.collection("users").findOne({ id });
  },
  posts: async (_, context) => {
    const { db } = await context();
    return db
      .collection("posts")
      .find()
      .toArray();
  },
};

module.exports = resolvers;

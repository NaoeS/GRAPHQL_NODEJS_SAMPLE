const Users = [
  {
    id: 1,
    name: "hoge",
    email: "hoge@example.com",
    posts: [
      {
        id: 1,
        title: "title1",
        published: true,
        link: "http://www.example.com",
        author: 1
      },
      {
        id: 2,
        title: "title2",
        published: true,
        link: "http://www.example.com",
        author: 1
      }
    ]
  },
  {
    id: 2,
    name: "fuga",
    email: "fuga@example.com",
    posts: []
  }
];

const Posts = [
  {
    id: 1,
    title: "title1",
    published: true,
    link: "http://www.example.com",
    author: 1
  },
  {
    id: 2,
    title: "title2",
    published: true,
    link: "http://www.example.com",
    author: 1
  }
];


module.exports = {
  Users,
  Posts
};

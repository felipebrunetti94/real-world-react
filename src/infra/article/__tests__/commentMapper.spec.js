import commentMapper from "../commentMapper";

describe("Infra :: Article :: Comment Mapper", () => {
  describe("#toEntity", () => {
    it("returns formated comment", () => {
      const commentData = {
        id: 1,
        createdAt: "2016-02-18T03:22:56.637Z",
        updatedAt: "2016-02-18T03:22:56.637Z",
        body: "It takes a Jacobian",
        author: {
          username: "jake",
          bio: "I work at statefarm",
          image: "https://i.stack.imgur.com/xHWG8.jpg",
          following: false,
        },
      };
      expect(commentMapper.toEntity(commentData)).toEqual({
        id: 1,
        createdAt: new Date("2016-02-18T03:22:56.637Z"),
        updatedAt: new Date("2016-02-18T03:22:56.637Z"),
        body: "It takes a Jacobian",
        author: {
          username: "jake",
          bio: "I work at statefarm",
          image: "https://i.stack.imgur.com/xHWG8.jpg",
          following: false,
        },
      });
    });
  });
});

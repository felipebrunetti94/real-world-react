import articleMapper from "../articleMapper";

describe("Infra :: Article :: Comment Mapper", () => {
  describe("#toEntity", () => {
    it("returns formated comment", () => {
      const commentData = {
        slug: "how-to-train-your-dragon",
        title: "How to train your dragon",
        description: "Ever wonder how?",
        body: "It takes a Jacobian",
        tagList: ["dragons", "training"],
        createdAt: "2016-02-18T03:22:56.637Z",
        updatedAt: "2016-02-18T03:48:35.824Z",
      };
      expect(articleMapper.toEntity(commentData)).toEqual({
        slug: "how-to-train-your-dragon",
        title: "How to train your dragon",
        description: "Ever wonder how?",
        body: "It takes a Jacobian",
        tagList: ["dragons", "training"],
        createdAt: new Date("2016-02-18T03:22:56.637Z"),
        updatedAt: new Date("2016-02-18T03:48:35.824Z"),
      });
    });
  });
});

import makeCommentRepository from "../commentRepository";

describe("Infra :: Article :: Comment Repository", () => {
  let commentRepository;
  let conduitService;
  const user = { auth: "auth" };
  const successResponse = {
    data: {
      comments: [
        {
          id: 1,
          createdAt: "2016-02-18T03:22:56.637Z",
          updatedAt: "2016-02-18T03:22:56.637Z",
          body: "It takes a Jacobian",
        },
      ],
    },
  };

  const commentSuccessResponse = {
    data: {
      comment: {
        id: 1,
        createdAt: "2016-02-18T03:22:56.637Z",
        updatedAt: "2016-02-18T03:22:56.637Z",
        body: "It takes a Jacobian",
      },
    },
  };

  const errorResponse = { errors: ["nope!", "ohno!"] };

  describe("#byArticle", () => {
    it("uses the conduit service to make the request", async () => {
      conduitService = {
        get: jest.fn().mockReturnValue(Promise.resolve(successResponse)),
      };
      commentRepository = makeCommentRepository({ conduitService });
      await commentRepository.byArticle("article-slug");
      expect(conduitService.get).toHaveBeenCalledWith(
        `articles/article-slug/comments`
      );
    });

    describe("when success", () => {
      it("resolves with comments list", () => {
        conduitService = {
          get: jest.fn().mockReturnValue(Promise.resolve(successResponse)),
        };
        commentRepository = makeCommentRepository({ conduitService });

        return expect(
          commentRepository.byArticle("article-slug")
        ).resolves.toEqual([
          {
            id: 1,
            createdAt: new Date("2016-02-18T03:22:56.637Z"),
            updatedAt: new Date("2016-02-18T03:22:56.637Z"),
            body: "It takes a Jacobian",
          },
        ]);
      });
    });

    describe("when fails", () => {
      it("rejects with errors", () => {
        conduitService = {
          get: jest.fn().mockReturnValue(Promise.reject(errorResponse)),
        };
        commentRepository = makeCommentRepository({ conduitService });

        return expect(
          commentRepository.byArticle("article-slug")
        ).rejects.toEqual({
          errors: ["nope!", "ohno!"],
        });
      });
    });
  });

  describe("#add", () => {
    it("uses the conduit service to make the request", async () => {
      const comment = { createdAt: "", updatedAt: "" };
      conduitService = {
        authPost: jest
          .fn()
          .mockReturnValue(Promise.resolve(commentSuccessResponse)),
      };
      commentRepository = makeCommentRepository({ conduitService });
      await commentRepository.add(comment, "article-slug", user);
      expect(conduitService.authPost).toHaveBeenCalledWith(
        `articles/article-slug/comments`,
        "auth",
        {
          comment,
        }
      );
    });

    describe("when success", () => {
      it("resolves with comments list", () => {
        const comment = { id: 1, createdAt: "1", updatedAt: "1" };

        conduitService = {
          authPost: jest
            .fn()
            .mockReturnValue(Promise.resolve({ data: { comment } })),
        };
        commentRepository = makeCommentRepository({ conduitService });

        return expect(
          commentRepository.add(comment, "article-slug", user)
        ).resolves.toEqual({
          id: 1,
          createdAt: new Date("1"),
          updatedAt: new Date("1"),
        });
      });
    });

    describe("when fails", () => {
      it("rejects with errors", () => {
        const comment = { createdAt: "", updatedAt: "" };

        conduitService = {
          authPost: jest.fn().mockReturnValue(Promise.reject(errorResponse)),
        };
        commentRepository = makeCommentRepository({ conduitService });

        return expect(
          commentRepository.add(comment, "article-slug", user)
        ).rejects.toEqual({
          errors: ["nope!", "ohno!"],
        });
      });
    });
  });
});

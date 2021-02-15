import makeTagRepository from "../tagRepository";

describe("Infra :: User :: tagRepository", () => {
  let tagRepository;
  let conduitService;
  const successResponse = {
    data: {
      tags: ["reactjs", "angularjs"],
    },
  };
  const errorResponse = { errors: ["nope!", "ohno!"] };

  describe("#getPopularTags", () => {
    it("uses the conduit service to make the request", async () => {
      conduitService = {
        get: jest.fn().mockReturnValue(Promise.resolve(successResponse)),
      };
      tagRepository = makeTagRepository({ conduitService });
      await tagRepository.getPopularTags();
      expect(conduitService.get).toHaveBeenLastCalledWith("tags");
    });

    describe("when success", () => {
      it("resolves with tag list", () => {
        conduitService = {
          get: jest.fn().mockReturnValue(Promise.resolve(successResponse)),
        };
        tagRepository = makeTagRepository({ conduitService });

        return expect(tagRepository.getPopularTags()).resolves.toEqual({
          tags: ["reactjs", "angularjs"],
        });
      });
    });

    describe("when fails", () => {
      it("rejects with errors", () => {
        conduitService = {
          get: jest.fn().mockReturnValue(Promise.reject(errorResponse)),
        };
        tagRepository = makeTagRepository({ conduitService });

        return expect(tagRepository.getPopularTags()).rejects.toEqual({
          errors: ["nope!", "ohno!"],
        });
      });
    });
  });
});

const makeTagRepository = ({ conduitService }) => ({
  async getPopularTags() {
    const { data } = await conduitService.get("tags");
    return data.tags;
  },
});

export default makeTagRepository;

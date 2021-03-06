import { prisma } from "../../../generated/prisma-client";
import { GetTattooQueryArgs } from "../../../types/graph";
import { Resolvers } from "../../../types/resolvers";

const resolvers: Resolvers = {
  Query: {
    GetTattoo: async (_, args: GetTattooQueryArgs) => {
      const { tattooId } = args;
      try {
        const tattoo = await prisma.tattoo({ id: tattooId });
        return {
          ok: true,
          status: "타투를 성공적으로 불러왔습니다",
          tattoo
        };
      } catch (error) {
        return {
          ok: false,
          status: error,
          tattoo: null
        };
      }
    }
  }
};
export default resolvers;

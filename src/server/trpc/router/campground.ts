import { t } from "../trpc";

export const campgroundRouter = t.router({
  getAll: t.procedure.query(({ ctx }) => {
    return ctx.prisma.campground.findMany();
  }),
});

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  const capeCamp = await prisma.campground.upsert({
    where: { title: "Cape Camp" },
    update: {},
    create: {
      title: "Cape Camp",
      description:
        "This camp ground is situated on a beautiful Cape beach. It is very sandy.",
    },
  });

  const inverCamp = await prisma.campground.upsert({
    where: { title: "Inverness Camp" },
    update: {},
    create: {
      title: "Inverness Camp",
      description:
        "Camping on the banks of Loch Ness. No monsters spotted yet.",
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

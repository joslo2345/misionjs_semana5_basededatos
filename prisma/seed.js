const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

(async function main() {
  try {
    const woopa = await prisma.explorer.upsert({
      where: { name: 'Woopa' },
      update: {},
      create: {
        name: 'Woopa',
				username: 'ajolonauta',
				mission: 'Node'
      },
    });

    const woopa1 = await prisma.explorer.upsert({
      where: { name: 'Woopa1' },
      update: {},
      create: {
        name: 'Woopa1',
				username: 'ajolonauta1',
				mission: 'Node'
      },
    });

    const woopa2 = await prisma.explorer.upsert({
      where: { name: 'Woopa 2' },
      update: {},
      create: {
        name: 'Woopa 2',
				username: 'ajolonauta2',
				mission: 'Java'
      },
    });

    const woopa3 = await prisma.explorer.upsert({
      where: { name: 'Woopa 3' },
      update: {},
      create: {
        name: 'Woopa 3',
				username: 'ajolonauta3',
				mission: 'Node'
      },
    });

    const woopa4 = await prisma.explorer.upsert({
        where: { name: 'Woopa 4' },
        update: {},
        create: {
          name: 'Woopa 4',
                  username: 'ajolonauta4',
                  mission: 'Java'
        },
      });
  

    console.log('Create 4 explorers');
  } catch(e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
})();

(async function main() {
  try {
    const commander1 = await prisma.MissionCommander.upsert({
      where: { id: 1 },
      update: {},
      create: {
        name: 'Commander 1',
        lang: 'Node',
        missionCommander: 'Node',
        enrollments: 1
      },
    });

    const commander2 = await prisma.MissionCommander.upsert({
      where: { id: 2},
      update: {},
      create: {
        name: 'Commander 2',
        lang: 'Java',
        missionCommander: 'Java',
				enrollments: 2
      },
    });

    const commander3 = await prisma.MissionCommander.upsert({
      where: { id: 3 },
      update: {},
      create: {
        name: 'Commander 3',
        lang: 'Node',
        missionCommander: 'Node',
        enrollments: 3
      },
    });

    const commander4 = await prisma.MissionCommander.upsert({
        where: { id: 4 },
        update: {},
        create: {
          name: 'Commander 4',
          lang: 'Java',
          missionCommander: 'Java',
          enrollments: 4
        },
      });
  

    console.log('Create 4 Mission Commanders');
  } catch(e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
})();
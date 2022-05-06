-- CreateTable
CREATE TABLE "MissionCommander" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "lang" VARCHAR(255) NOT NULL,
    "missionCommander" TEXT NOT NULL,
    "enrollments" INTEGER NOT NULL,
    "hasCertification" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "MissionCommander_pkey" PRIMARY KEY ("id")
);

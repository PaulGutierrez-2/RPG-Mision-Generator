-- CreateTable
CREATE TABLE "MissionGenerator" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "type" TEXT NOT NULL,
    "rewards" TEXT NOT NULL,
    "level_required" INTEGER NOT NULL,
    "status" TEXT NOT NULL,
    "deadline" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "creation_date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MissionGenerator_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "MissionGenerator_name_key" ON "MissionGenerator"("name");

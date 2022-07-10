-- CreateTable
CREATE TABLE "Panda" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "age" INTEGER NOT NULL,
    "softness" INTEGER NOT NULL,

    CONSTRAINT "Panda_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "City" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "pandaId" INTEGER NOT NULL,

    CONSTRAINT "City_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "City" ADD CONSTRAINT "City_pandaId_fkey" FOREIGN KEY ("pandaId") REFERENCES "Panda"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

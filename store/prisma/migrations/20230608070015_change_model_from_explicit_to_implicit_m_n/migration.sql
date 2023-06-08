/*
  Warnings:

  - You are about to drop the `CategoryGroup` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "CategoryGroup" DROP CONSTRAINT "CategoryGroup_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "CategoryGroup" DROP CONSTRAINT "CategoryGroup_groupId_fkey";

-- DropTable
DROP TABLE "CategoryGroup";

-- CreateTable
CREATE TABLE "_CategoryToGroup" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_CategoryToGroup_AB_unique" ON "_CategoryToGroup"("A", "B");

-- CreateIndex
CREATE INDEX "_CategoryToGroup_B_index" ON "_CategoryToGroup"("B");

-- AddForeignKey
ALTER TABLE "_CategoryToGroup" ADD CONSTRAINT "_CategoryToGroup_A_fkey" FOREIGN KEY ("A") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CategoryToGroup" ADD CONSTRAINT "_CategoryToGroup_B_fkey" FOREIGN KEY ("B") REFERENCES "Group"("id") ON DELETE CASCADE ON UPDATE CASCADE;

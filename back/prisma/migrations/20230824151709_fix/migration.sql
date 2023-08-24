/*
  Warnings:

  - You are about to drop the column `name` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Goal" ADD COLUMN     "date" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "User" DROP COLUMN "name",
ADD COLUMN     "username" TEXT;

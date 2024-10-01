/*
  Warnings:

  - A unique constraint covering the columns `[postId,userId]` on the table `PostRating` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "PostRating_postId_userId_key" ON "PostRating"("postId", "userId");

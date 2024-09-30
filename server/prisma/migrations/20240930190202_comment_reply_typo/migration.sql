/*
  Warnings:

  - You are about to drop the column `replyinyTo` on the `CommentReply` table. All the data in the column will be lost.
  - Added the required column `replyingTo` to the `CommentReply` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CommentReply" DROP COLUMN "replyinyTo",
ADD COLUMN     "replyingTo" TEXT NOT NULL;

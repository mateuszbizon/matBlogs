-- DropForeignKey
ALTER TABLE "PostRating" DROP CONSTRAINT "PostRating_postId_fkey";

-- AddForeignKey
ALTER TABLE "PostRating" ADD CONSTRAINT "PostRating_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE CASCADE ON UPDATE CASCADE;

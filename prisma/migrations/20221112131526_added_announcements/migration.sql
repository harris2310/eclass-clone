-- CreateTable
CREATE TABLE "Announcement" (
    "id" SERIAL NOT NULL,
    "courseId" INTEGER NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,

    CONSTRAINT "Announcement_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Announcement" ADD CONSTRAINT "Announcement_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

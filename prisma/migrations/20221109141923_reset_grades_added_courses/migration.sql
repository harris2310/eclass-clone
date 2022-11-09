-- CreateTable
CREATE TABLE "grades" (
    "name" TEXT NOT NULL,
    "grade" TEXT NOT NULL,
    "term" INTEGER NOT NULL,

    CONSTRAINT "grades_pkey" PRIMARY KEY ("name")
);

-- CreateTable
CREATE TABLE "Courses" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "term" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "open" BOOLEAN NOT NULL,

    CONSTRAINT "Courses_pkey" PRIMARY KEY ("id")
);

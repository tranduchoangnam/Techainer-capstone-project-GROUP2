-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Frame" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Frame_pkey" PRIMARY KEY ("id","userId")
);

-- CreateTable
CREATE TABLE "Face" (
    "id" SERIAL NOT NULL,
    "value" TEXT NOT NULL,
    "path" TEXT NOT NULL,
    "frameId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Face_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Frame" ADD CONSTRAINT "Frame_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Face" ADD CONSTRAINT "Face_frameId_userId_fkey" FOREIGN KEY ("frameId", "userId") REFERENCES "Frame"("id", "userId") ON DELETE CASCADE ON UPDATE CASCADE;

-- CreateEnum
CREATE TYPE "Status" AS ENUM ('DRAFT', 'CONFIRM', 'SHIPPED', 'COMPLETED');

-- CreateEnum
CREATE TYPE "PaymentStatus" AS ENUM ('PAID', 'UNPAID');

-- AlterTable
ALTER TABLE "Category" ADD COLUMN     "isHighlight" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "payment_status" "PaymentStatus" NOT NULL DEFAULT 'UNPAID',
ADD COLUMN     "status" "Status" NOT NULL DEFAULT 'DRAFT';

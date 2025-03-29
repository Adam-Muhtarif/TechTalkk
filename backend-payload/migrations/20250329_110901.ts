import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "blog" ALTER COLUMN "status" SET NOT NULL;
  ALTER TABLE "job_posts" ALTER COLUMN "salary" SET DATA TYPE varchar;
  ALTER TABLE "job_posts" ALTER COLUMN "posted_at" DROP NOT NULL;
  ALTER TABLE "job_posts" DROP COLUMN IF EXISTS "requirements";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "blog" ALTER COLUMN "status" DROP NOT NULL;
  ALTER TABLE "job_posts" ALTER COLUMN "salary" SET DATA TYPE numeric;
  ALTER TABLE "job_posts" ALTER COLUMN "posted_at" SET NOT NULL;
  ALTER TABLE "job_posts" ADD COLUMN "requirements" jsonb NOT NULL;`)
}

import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "job_posts" ALTER COLUMN "salary" SET DATA TYPE numeric;
  ALTER TABLE "job_posts" ALTER COLUMN "posted_at" SET NOT NULL;
  ALTER TABLE "job_posts" ALTER COLUMN "expires_at" SET NOT NULL;`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "job_posts" ALTER COLUMN "salary" SET DATA TYPE varchar;
  ALTER TABLE "job_posts" ALTER COLUMN "posted_at" DROP NOT NULL;
  ALTER TABLE "job_posts" ALTER COLUMN "expires_at" DROP NOT NULL;`)
}

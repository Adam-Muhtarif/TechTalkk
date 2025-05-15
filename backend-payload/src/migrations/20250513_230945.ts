import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "sponsors" DROP CONSTRAINT "sponsors_company_logo_id_media_id_fk";
  
  DROP INDEX IF EXISTS "sponsors_company_logo_idx";
  ALTER TABLE "sponsors" DROP COLUMN IF EXISTS "company_logo_id";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "sponsors" ADD COLUMN "company_logo_id" uuid;
  DO $$ BEGIN
   ALTER TABLE "sponsors" ADD CONSTRAINT "sponsors_company_logo_id_media_id_fk" FOREIGN KEY ("company_logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "sponsors_company_logo_idx" ON "sponsors" USING btree ("company_logo_id");`)
}

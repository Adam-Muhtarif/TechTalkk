import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "users" DROP CONSTRAINT "users_image_id_media_id_fk";
  
  DROP INDEX IF EXISTS "users_image_idx";
  ALTER TABLE "events" ADD COLUMN "slug" varchar;
  CREATE UNIQUE INDEX IF NOT EXISTS "events_slug_idx" ON "events" USING btree ("slug");
  ALTER TABLE "users" DROP COLUMN IF EXISTS "image_id";
  ALTER TABLE "users" DROP COLUMN IF EXISTS "image_remote";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP INDEX IF EXISTS "events_slug_idx";
  ALTER TABLE "users" ADD COLUMN "image_id" uuid;
  ALTER TABLE "users" ADD COLUMN "image_remote" varchar;
  DO $$ BEGIN
   ALTER TABLE "users" ADD CONSTRAINT "users_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "users_image_idx" ON "users" USING btree ("image_id");
  ALTER TABLE "events" DROP COLUMN IF EXISTS "slug";`)
}

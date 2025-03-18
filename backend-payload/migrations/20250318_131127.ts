import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_users_role" AS ENUM('admin', 'editor');
  ALTER TABLE "users" ADD COLUMN "full_name" varchar NOT NULL;
  ALTER TABLE "users" ADD COLUMN "role" "enum_users_role" DEFAULT 'editor' NOT NULL;
  ALTER TABLE "users" ADD COLUMN "avatar_id" uuid;
  ALTER TABLE "users" ADD COLUMN "is_active" boolean DEFAULT false;
  DO $$ BEGIN
   ALTER TABLE "users" ADD CONSTRAINT "users_avatar_id_media_id_fk" FOREIGN KEY ("avatar_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "users_avatar_idx" ON "users" USING btree ("avatar_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "users" DROP CONSTRAINT "users_avatar_id_media_id_fk";
  
  DROP INDEX IF EXISTS "users_avatar_idx";
  ALTER TABLE "users" DROP COLUMN IF EXISTS "full_name";
  ALTER TABLE "users" DROP COLUMN IF EXISTS "role";
  ALTER TABLE "users" DROP COLUMN IF EXISTS "avatar_id";
  ALTER TABLE "users" DROP COLUMN IF EXISTS "is_active";
  DROP TYPE "public"."enum_users_role";`)
}

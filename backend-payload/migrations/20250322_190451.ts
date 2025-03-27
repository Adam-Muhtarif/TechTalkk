import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_job_posts_location" AS ENUM('remote', 'hybrid', 'onsite');
  CREATE TYPE "public"."enum_job_posts_job_type" AS ENUM('full-time', 'part-time', 'contract', 'internship');
  CREATE TABLE IF NOT EXISTS "job_posts" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"title" varchar NOT NULL,
  	"company" varchar NOT NULL,
  	"company_logo_id" uuid NOT NULL,
  	"location" "enum_job_posts_location" NOT NULL,
  	"job_type" "enum_job_posts_job_type" NOT NULL,
  	"salary" varchar,
  	"description" jsonb NOT NULL,
  	"requirements" jsonb NOT NULL,
  	"apply_link" varchar NOT NULL,
  	"posted_at" timestamp(3) with time zone,
  	"expires_at" timestamp(3) with time zone,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "job_posts_id" uuid;
  DO $$ BEGIN
   ALTER TABLE "job_posts" ADD CONSTRAINT "job_posts_company_logo_id_media_id_fk" FOREIGN KEY ("company_logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "job_posts_company_logo_idx" ON "job_posts" USING btree ("company_logo_id");
  CREATE INDEX IF NOT EXISTS "job_posts_updated_at_idx" ON "job_posts" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "job_posts_created_at_idx" ON "job_posts" USING btree ("created_at");
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_job_posts_fk" FOREIGN KEY ("job_posts_id") REFERENCES "public"."job_posts"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_job_posts_id_idx" ON "payload_locked_documents_rels" USING btree ("job_posts_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "job_posts" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "job_posts" CASCADE;
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_job_posts_fk";
  
  DROP INDEX IF EXISTS "payload_locked_documents_rels_job_posts_id_idx";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN IF EXISTS "job_posts_id";
  DROP TYPE "public"."enum_job_posts_location";
  DROP TYPE "public"."enum_job_posts_job_type";`)
}

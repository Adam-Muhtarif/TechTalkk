import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_users_role" AS ENUM('admin', 'editor');
  CREATE TYPE "public"."enum_leaderboard_socials_platform" AS ENUM('LinkedIn', 'GitHub', 'Twitter', 'Website', 'Facebook');
  CREATE TYPE "public"."enum_blog_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_events_host_socials_platform" AS ENUM('LinkedIn', 'GitHub', 'Twitter', 'Website', 'Youtube', 'Facebook');
  CREATE TYPE "public"."enum_instructors_instructor_socials_platform" AS ENUM('LinkedIn', 'GitHub', 'Twitter', 'Website', 'Youtube', 'Facebook');
  CREATE TYPE "public"."enum_job_posts_location" AS ENUM('remote', 'hybrid', 'onsite');
  CREATE TYPE "public"."enum_job_posts_job_type" AS ENUM('full-time', 'part-time', 'contract', 'internship');
  CREATE TABLE IF NOT EXISTS "users" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"full_name" varchar NOT NULL,
  	"role" "enum_users_role" DEFAULT 'editor' NOT NULL,
  	"avatar_id" uuid,
  	"is_active" boolean DEFAULT false,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"email" varchar NOT NULL,
  	"reset_password_token" varchar,
  	"reset_password_expiration" timestamp(3) with time zone,
  	"salt" varchar,
  	"hash" varchar,
  	"login_attempts" numeric DEFAULT 0,
  	"lock_until" timestamp(3) with time zone
  );
  
  CREATE TABLE IF NOT EXISTS "media" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"alt" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"url" varchar,
  	"thumbnail_u_r_l" varchar,
  	"filename" varchar,
  	"mime_type" varchar,
  	"filesize" numeric,
  	"width" numeric,
  	"height" numeric,
  	"focal_x" numeric,
  	"focal_y" numeric
  );
  
  CREATE TABLE IF NOT EXISTS "sponsors" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"company" varchar NOT NULL,
  	"company_link" varchar NOT NULL,
  	"company_logo_id" uuid NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "leaderboard_socials" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"platform" "enum_leaderboard_socials_platform",
  	"url" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "leaderboard" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"name" varchar NOT NULL,
  	"title" varchar,
  	"image_id" uuid NOT NULL,
  	"rank" numeric NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "blog_tags" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"name" varchar NOT NULL,
  	"slug" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "video_tags" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"name" varchar NOT NULL,
  	"slug" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "blog" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"title" varchar NOT NULL,
  	"slug" varchar,
  	"content" jsonb NOT NULL,
  	"author" varchar NOT NULL,
  	"cover_image_id" uuid,
  	"status" "enum_blog_status" DEFAULT 'draft' NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "blog_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" uuid NOT NULL,
  	"path" varchar NOT NULL,
  	"blog_tags_id" uuid
  );
  
  CREATE TABLE IF NOT EXISTS "videos" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"title" varchar NOT NULL,
  	"youtube_link" varchar NOT NULL,
  	"instructor_id" uuid NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "videos_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" uuid NOT NULL,
  	"path" varchar NOT NULL,
  	"video_tags_id" uuid
  );
  
  CREATE TABLE IF NOT EXISTS "events_host_socials" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"platform" "enum_events_host_socials_platform",
  	"url" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "events" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"title" varchar NOT NULL,
  	"description" jsonb NOT NULL,
  	"image_id" uuid,
  	"host_name" varchar NOT NULL,
  	"host_image_id" uuid NOT NULL,
  	"location" varchar NOT NULL,
  	"location_icon_id" uuid,
  	"start_time" timestamp(3) with time zone NOT NULL,
  	"duration" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "events_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" uuid NOT NULL,
  	"path" varchar NOT NULL,
  	"sponsors_id" uuid
  );
  
  CREATE TABLE IF NOT EXISTS "instructors_instructor_socials" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"platform" "enum_instructors_instructor_socials_platform",
  	"url" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "instructors" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"name" varchar NOT NULL,
  	"title" varchar,
  	"bio" varchar,
  	"image_id" uuid,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "job_posts" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"title" varchar NOT NULL,
  	"company" varchar NOT NULL,
  	"company_logo_id" uuid NOT NULL,
  	"location" "enum_job_posts_location" NOT NULL,
  	"job_type" "enum_job_posts_job_type" NOT NULL,
  	"salary" numeric,
  	"description" jsonb NOT NULL,
  	"apply_link" varchar NOT NULL,
  	"posted_at" timestamp(3) with time zone,
  	"expires_at" timestamp(3) with time zone NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "payload_locked_documents" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"global_slug" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "payload_locked_documents_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" uuid NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" uuid,
  	"media_id" uuid,
  	"sponsors_id" uuid,
  	"leaderboard_id" uuid,
  	"blog_tags_id" uuid,
  	"video_tags_id" uuid,
  	"blog_id" uuid,
  	"videos_id" uuid,
  	"events_id" uuid,
  	"instructors_id" uuid,
  	"job_posts_id" uuid
  );
  
  CREATE TABLE IF NOT EXISTS "payload_preferences" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"key" varchar,
  	"value" jsonb,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "payload_preferences_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" uuid NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" uuid
  );
  
  CREATE TABLE IF NOT EXISTS "payload_migrations" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"name" varchar,
  	"batch" numeric,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  DO $$ BEGIN
   ALTER TABLE "users" ADD CONSTRAINT "users_avatar_id_media_id_fk" FOREIGN KEY ("avatar_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "sponsors" ADD CONSTRAINT "sponsors_company_logo_id_media_id_fk" FOREIGN KEY ("company_logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "leaderboard_socials" ADD CONSTRAINT "leaderboard_socials_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."leaderboard"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "leaderboard" ADD CONSTRAINT "leaderboard_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blog" ADD CONSTRAINT "blog_cover_image_id_media_id_fk" FOREIGN KEY ("cover_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blog_rels" ADD CONSTRAINT "blog_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."blog"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blog_rels" ADD CONSTRAINT "blog_rels_blog_tags_fk" FOREIGN KEY ("blog_tags_id") REFERENCES "public"."blog_tags"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "videos" ADD CONSTRAINT "videos_instructor_id_instructors_id_fk" FOREIGN KEY ("instructor_id") REFERENCES "public"."instructors"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "videos_rels" ADD CONSTRAINT "videos_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."videos"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "videos_rels" ADD CONSTRAINT "videos_rels_video_tags_fk" FOREIGN KEY ("video_tags_id") REFERENCES "public"."video_tags"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "events_host_socials" ADD CONSTRAINT "events_host_socials_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."events"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "events" ADD CONSTRAINT "events_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "events" ADD CONSTRAINT "events_host_image_id_media_id_fk" FOREIGN KEY ("host_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "events" ADD CONSTRAINT "events_location_icon_id_media_id_fk" FOREIGN KEY ("location_icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "events_rels" ADD CONSTRAINT "events_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."events"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "events_rels" ADD CONSTRAINT "events_rels_sponsors_fk" FOREIGN KEY ("sponsors_id") REFERENCES "public"."sponsors"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "instructors_instructor_socials" ADD CONSTRAINT "instructors_instructor_socials_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."instructors"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "instructors" ADD CONSTRAINT "instructors_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "job_posts" ADD CONSTRAINT "job_posts_company_logo_id_media_id_fk" FOREIGN KEY ("company_logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_locked_documents"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_sponsors_fk" FOREIGN KEY ("sponsors_id") REFERENCES "public"."sponsors"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_leaderboard_fk" FOREIGN KEY ("leaderboard_id") REFERENCES "public"."leaderboard"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_blog_tags_fk" FOREIGN KEY ("blog_tags_id") REFERENCES "public"."blog_tags"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_video_tags_fk" FOREIGN KEY ("video_tags_id") REFERENCES "public"."video_tags"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_blog_fk" FOREIGN KEY ("blog_id") REFERENCES "public"."blog"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_videos_fk" FOREIGN KEY ("videos_id") REFERENCES "public"."videos"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_events_fk" FOREIGN KEY ("events_id") REFERENCES "public"."events"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_instructors_fk" FOREIGN KEY ("instructors_id") REFERENCES "public"."instructors"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_job_posts_fk" FOREIGN KEY ("job_posts_id") REFERENCES "public"."job_posts"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_preferences"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "users_avatar_idx" ON "users" USING btree ("avatar_id");
  CREATE INDEX IF NOT EXISTS "users_updated_at_idx" ON "users" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "users_created_at_idx" ON "users" USING btree ("created_at");
  CREATE UNIQUE INDEX IF NOT EXISTS "users_email_idx" ON "users" USING btree ("email");
  CREATE INDEX IF NOT EXISTS "media_updated_at_idx" ON "media" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "media_created_at_idx" ON "media" USING btree ("created_at");
  CREATE UNIQUE INDEX IF NOT EXISTS "media_filename_idx" ON "media" USING btree ("filename");
  CREATE INDEX IF NOT EXISTS "sponsors_company_logo_idx" ON "sponsors" USING btree ("company_logo_id");
  CREATE INDEX IF NOT EXISTS "sponsors_updated_at_idx" ON "sponsors" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "sponsors_created_at_idx" ON "sponsors" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "leaderboard_socials_order_idx" ON "leaderboard_socials" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "leaderboard_socials_parent_id_idx" ON "leaderboard_socials" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "leaderboard_image_idx" ON "leaderboard" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "leaderboard_updated_at_idx" ON "leaderboard" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "leaderboard_created_at_idx" ON "leaderboard" USING btree ("created_at");
  CREATE UNIQUE INDEX IF NOT EXISTS "blog_tags_name_idx" ON "blog_tags" USING btree ("name");
  CREATE UNIQUE INDEX IF NOT EXISTS "blog_tags_slug_idx" ON "blog_tags" USING btree ("slug");
  CREATE INDEX IF NOT EXISTS "blog_tags_updated_at_idx" ON "blog_tags" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "blog_tags_created_at_idx" ON "blog_tags" USING btree ("created_at");
  CREATE UNIQUE INDEX IF NOT EXISTS "video_tags_slug_idx" ON "video_tags" USING btree ("slug");
  CREATE INDEX IF NOT EXISTS "video_tags_updated_at_idx" ON "video_tags" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "video_tags_created_at_idx" ON "video_tags" USING btree ("created_at");
  CREATE UNIQUE INDEX IF NOT EXISTS "blog_slug_idx" ON "blog" USING btree ("slug");
  CREATE INDEX IF NOT EXISTS "blog_cover_image_idx" ON "blog" USING btree ("cover_image_id");
  CREATE INDEX IF NOT EXISTS "blog_updated_at_idx" ON "blog" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "blog_created_at_idx" ON "blog" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "blog_rels_order_idx" ON "blog_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "blog_rels_parent_idx" ON "blog_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "blog_rels_path_idx" ON "blog_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "blog_rels_blog_tags_id_idx" ON "blog_rels" USING btree ("blog_tags_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "videos_youtube_link_idx" ON "videos" USING btree ("youtube_link");
  CREATE INDEX IF NOT EXISTS "videos_instructor_idx" ON "videos" USING btree ("instructor_id");
  CREATE INDEX IF NOT EXISTS "videos_updated_at_idx" ON "videos" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "videos_created_at_idx" ON "videos" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "videos_rels_order_idx" ON "videos_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "videos_rels_parent_idx" ON "videos_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "videos_rels_path_idx" ON "videos_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "videos_rels_video_tags_id_idx" ON "videos_rels" USING btree ("video_tags_id");
  CREATE INDEX IF NOT EXISTS "events_host_socials_order_idx" ON "events_host_socials" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "events_host_socials_parent_id_idx" ON "events_host_socials" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "events_image_idx" ON "events" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "events_host_image_idx" ON "events" USING btree ("host_image_id");
  CREATE INDEX IF NOT EXISTS "events_location_icon_idx" ON "events" USING btree ("location_icon_id");
  CREATE INDEX IF NOT EXISTS "events_updated_at_idx" ON "events" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "events_created_at_idx" ON "events" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "events_rels_order_idx" ON "events_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "events_rels_parent_idx" ON "events_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "events_rels_path_idx" ON "events_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "events_rels_sponsors_id_idx" ON "events_rels" USING btree ("sponsors_id");
  CREATE INDEX IF NOT EXISTS "instructors_instructor_socials_order_idx" ON "instructors_instructor_socials" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "instructors_instructor_socials_parent_id_idx" ON "instructors_instructor_socials" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "instructors_image_idx" ON "instructors" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "instructors_updated_at_idx" ON "instructors" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "instructors_created_at_idx" ON "instructors" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "job_posts_company_logo_idx" ON "job_posts" USING btree ("company_logo_id");
  CREATE INDEX IF NOT EXISTS "job_posts_updated_at_idx" ON "job_posts" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "job_posts_created_at_idx" ON "job_posts" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_global_slug_idx" ON "payload_locked_documents" USING btree ("global_slug");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_updated_at_idx" ON "payload_locked_documents" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_created_at_idx" ON "payload_locked_documents" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_order_idx" ON "payload_locked_documents_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_parent_idx" ON "payload_locked_documents_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_path_idx" ON "payload_locked_documents_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_users_id_idx" ON "payload_locked_documents_rels" USING btree ("users_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_media_id_idx" ON "payload_locked_documents_rels" USING btree ("media_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_sponsors_id_idx" ON "payload_locked_documents_rels" USING btree ("sponsors_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_leaderboard_id_idx" ON "payload_locked_documents_rels" USING btree ("leaderboard_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_blog_tags_id_idx" ON "payload_locked_documents_rels" USING btree ("blog_tags_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_video_tags_id_idx" ON "payload_locked_documents_rels" USING btree ("video_tags_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_blog_id_idx" ON "payload_locked_documents_rels" USING btree ("blog_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_videos_id_idx" ON "payload_locked_documents_rels" USING btree ("videos_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_events_id_idx" ON "payload_locked_documents_rels" USING btree ("events_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_instructors_id_idx" ON "payload_locked_documents_rels" USING btree ("instructors_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_job_posts_id_idx" ON "payload_locked_documents_rels" USING btree ("job_posts_id");
  CREATE INDEX IF NOT EXISTS "payload_preferences_key_idx" ON "payload_preferences" USING btree ("key");
  CREATE INDEX IF NOT EXISTS "payload_preferences_updated_at_idx" ON "payload_preferences" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "payload_preferences_created_at_idx" ON "payload_preferences" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "payload_preferences_rels_order_idx" ON "payload_preferences_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "payload_preferences_rels_parent_idx" ON "payload_preferences_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "payload_preferences_rels_path_idx" ON "payload_preferences_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "payload_preferences_rels_users_id_idx" ON "payload_preferences_rels" USING btree ("users_id");
  CREATE INDEX IF NOT EXISTS "payload_migrations_updated_at_idx" ON "payload_migrations" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "payload_migrations_created_at_idx" ON "payload_migrations" USING btree ("created_at");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "users" CASCADE;
  DROP TABLE "media" CASCADE;
  DROP TABLE "sponsors" CASCADE;
  DROP TABLE "leaderboard_socials" CASCADE;
  DROP TABLE "leaderboard" CASCADE;
  DROP TABLE "blog_tags" CASCADE;
  DROP TABLE "video_tags" CASCADE;
  DROP TABLE "blog" CASCADE;
  DROP TABLE "blog_rels" CASCADE;
  DROP TABLE "videos" CASCADE;
  DROP TABLE "videos_rels" CASCADE;
  DROP TABLE "events_host_socials" CASCADE;
  DROP TABLE "events" CASCADE;
  DROP TABLE "events_rels" CASCADE;
  DROP TABLE "instructors_instructor_socials" CASCADE;
  DROP TABLE "instructors" CASCADE;
  DROP TABLE "job_posts" CASCADE;
  DROP TABLE "payload_locked_documents" CASCADE;
  DROP TABLE "payload_locked_documents_rels" CASCADE;
  DROP TABLE "payload_preferences" CASCADE;
  DROP TABLE "payload_preferences_rels" CASCADE;
  DROP TABLE "payload_migrations" CASCADE;
  DROP TYPE "public"."enum_users_role";
  DROP TYPE "public"."enum_leaderboard_socials_platform";
  DROP TYPE "public"."enum_blog_status";
  DROP TYPE "public"."enum_events_host_socials_platform";
  DROP TYPE "public"."enum_instructors_instructor_socials_platform";
  DROP TYPE "public"."enum_job_posts_location";
  DROP TYPE "public"."enum_job_posts_job_type";`)
}

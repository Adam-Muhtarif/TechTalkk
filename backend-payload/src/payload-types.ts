/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

/**
 * Supported timezones in IANA format.
 *
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "supportedTimezones".
 */
export type SupportedTimezones =
  | 'Pacific/Midway'
  | 'Pacific/Niue'
  | 'Pacific/Honolulu'
  | 'Pacific/Rarotonga'
  | 'America/Anchorage'
  | 'Pacific/Gambier'
  | 'America/Los_Angeles'
  | 'America/Tijuana'
  | 'America/Denver'
  | 'America/Phoenix'
  | 'America/Chicago'
  | 'America/Guatemala'
  | 'America/New_York'
  | 'America/Bogota'
  | 'America/Caracas'
  | 'America/Santiago'
  | 'America/Buenos_Aires'
  | 'America/Sao_Paulo'
  | 'Atlantic/South_Georgia'
  | 'Atlantic/Azores'
  | 'Atlantic/Cape_Verde'
  | 'Europe/London'
  | 'Europe/Berlin'
  | 'Africa/Lagos'
  | 'Europe/Athens'
  | 'Africa/Cairo'
  | 'Europe/Moscow'
  | 'Asia/Riyadh'
  | 'Asia/Dubai'
  | 'Asia/Baku'
  | 'Asia/Karachi'
  | 'Asia/Tashkent'
  | 'Asia/Calcutta'
  | 'Asia/Dhaka'
  | 'Asia/Almaty'
  | 'Asia/Jakarta'
  | 'Asia/Bangkok'
  | 'Asia/Shanghai'
  | 'Asia/Singapore'
  | 'Asia/Tokyo'
  | 'Asia/Seoul'
  | 'Australia/Sydney'
  | 'Pacific/Guam'
  | 'Pacific/Noumea'
  | 'Pacific/Auckland'
  | 'Pacific/Fiji';

export interface Config {
  auth: {
    users: UserAuthOperations;
  };
  blocks: {};
  collections: {
    users: User;
    media: Media;
    sponsors: Sponsor;
    leaderboard: Leaderboard;
    'blog-tags': BlogTag;
    'video-tags': VideoTag;
    blogs: Blog;
    videos: Video;
    events: Event;
    instructors: Instructor;
    jobs: Job;
    'payload-locked-documents': PayloadLockedDocument;
    'payload-preferences': PayloadPreference;
    'payload-migrations': PayloadMigration;
  };
  collectionsJoins: {};
  collectionsSelect: {
    users: UsersSelect<false> | UsersSelect<true>;
    media: MediaSelect<false> | MediaSelect<true>;
    sponsors: SponsorsSelect<false> | SponsorsSelect<true>;
    leaderboard: LeaderboardSelect<false> | LeaderboardSelect<true>;
    'blog-tags': BlogTagsSelect<false> | BlogTagsSelect<true>;
    'video-tags': VideoTagsSelect<false> | VideoTagsSelect<true>;
    blogs: BlogsSelect<false> | BlogsSelect<true>;
    videos: VideosSelect<false> | VideosSelect<true>;
    events: EventsSelect<false> | EventsSelect<true>;
    instructors: InstructorsSelect<false> | InstructorsSelect<true>;
    jobs: JobsSelect<false> | JobsSelect<true>;
    'payload-locked-documents': PayloadLockedDocumentsSelect<false> | PayloadLockedDocumentsSelect<true>;
    'payload-preferences': PayloadPreferencesSelect<false> | PayloadPreferencesSelect<true>;
    'payload-migrations': PayloadMigrationsSelect<false> | PayloadMigrationsSelect<true>;
  };
  db: {
    defaultIDType: string;
  };
  globals: {};
  globalsSelect: {};
  locale: null;
  user: User & {
    collection: 'users';
  };
  jobs: {
    tasks: unknown;
    workflows: unknown;
  };
}
export interface UserAuthOperations {
  forgotPassword: {
    email: string;
    password: string;
  };
  login: {
    email: string;
    password: string;
  };
  registerFirstUser: {
    email: string;
    password: string;
  };
  unlock: {
    email: string;
    password: string;
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users".
 */
export interface User {
  id: string;
  fullName: string;
  role: 'admin' | 'editor';
  image?: (string | null) | Media;
  image_remote?: string | null;
  isActive?: boolean | null;
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  _verified?: boolean | null;
  _verificationToken?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  password?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media".
 */
export interface Media {
  id: string;
  alt: string;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  thumbnailURL?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
  focalX?: number | null;
  focalY?: number | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "sponsors".
 */
export interface Sponsor {
  id: string;
  company: string;
  company_link: string;
  company_logo?: (string | null) | Media;
  company_logo_remote?: string | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "leaderboard".
 */
export interface Leaderboard {
  id: string;
  name: string;
  title?: string | null;
  image?: (string | null) | Media;
  image_remote?: string | null;
  socials?:
    | {
        platform?: ('LinkedIn' | 'GitHub' | 'Twitter' | 'Website' | 'Facebook') | null;
        url: string;
        id?: string | null;
      }[]
    | null;
  rank: number;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "blog-tags".
 */
export interface BlogTag {
  id: string;
  name: string;
  slug?: string | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "video-tags".
 */
export interface VideoTag {
  id: string;
  name: string;
  slug?: string | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "blogs".
 */
export interface Blog {
  id: string;
  title: string;
  slug?: string | null;
  content: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  };
  author: string;
  tags: (string | BlogTag)[];
  cover_image?: (string | null) | Media;
  cover_image_remote?: string | null;
  status: 'draft' | 'published';
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "videos".
 */
export interface Video {
  id: string;
  youtube_link: string;
  instructor: string | Instructor;
  tags: (string | VideoTag)[];
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "instructors".
 */
export interface Instructor {
  id: string;
  name: string;
  title?: string | null;
  bio?: string | null;
  image?: (string | null) | Media;
  image_remote?: string | null;
  instructor_socials?:
    | {
        platform?: ('LinkedIn' | 'GitHub' | 'Twitter' | 'Website' | 'Youtube' | 'Facebook') | null;
        url: string;
        id?: string | null;
      }[]
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "events".
 */
export interface Event {
  id: string;
  title: string;
  description: string;
  image?: (string | null) | Media;
  image_remote?: string | null;
  host_name: string;
  host_image?: (string | null) | Media;
  host_image_remote?: string | null;
  host_socials?:
    | {
        platform?: ('LinkedIn' | 'GitHub' | 'Twitter' | 'Website' | 'Youtube' | 'Facebook') | null;
        url: string;
        id?: string | null;
      }[]
    | null;
  location: string;
  location_icon?: (string | null) | Media;
  sponsors?: (string | Sponsor)[] | null;
  start_time: string;
  period?: string | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "jobs".
 */
export interface Job {
  id: string;
  title: string;
  company_name: string;
  company_link?: string | null;
  company_logo?: (string | null) | Media;
  company_logo_remote?: string | null;
  location: 'remote' | 'hybrid' | 'onsite';
  job_type: 'full-time' | 'part-time' | 'contract' | 'internship';
  salary?: number | null;
  apply_link: string;
  posted_at?: string | null;
  expires_at: string;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents".
 */
export interface PayloadLockedDocument {
  id: string;
  document?:
    | ({
        relationTo: 'users';
        value: string | User;
      } | null)
    | ({
        relationTo: 'media';
        value: string | Media;
      } | null)
    | ({
        relationTo: 'sponsors';
        value: string | Sponsor;
      } | null)
    | ({
        relationTo: 'leaderboard';
        value: string | Leaderboard;
      } | null)
    | ({
        relationTo: 'blog-tags';
        value: string | BlogTag;
      } | null)
    | ({
        relationTo: 'video-tags';
        value: string | VideoTag;
      } | null)
    | ({
        relationTo: 'blogs';
        value: string | Blog;
      } | null)
    | ({
        relationTo: 'videos';
        value: string | Video;
      } | null)
    | ({
        relationTo: 'events';
        value: string | Event;
      } | null)
    | ({
        relationTo: 'instructors';
        value: string | Instructor;
      } | null)
    | ({
        relationTo: 'jobs';
        value: string | Job;
      } | null);
  globalSlug?: string | null;
  user: {
    relationTo: 'users';
    value: string | User;
  };
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences".
 */
export interface PayloadPreference {
  id: string;
  user: {
    relationTo: 'users';
    value: string | User;
  };
  key?: string | null;
  value?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations".
 */
export interface PayloadMigration {
  id: string;
  name?: string | null;
  batch?: number | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users_select".
 */
export interface UsersSelect<T extends boolean = true> {
  fullName?: T;
  role?: T;
  image?: T;
  image_remote?: T;
  isActive?: T;
  updatedAt?: T;
  createdAt?: T;
  email?: T;
  resetPasswordToken?: T;
  resetPasswordExpiration?: T;
  salt?: T;
  hash?: T;
  _verified?: T;
  _verificationToken?: T;
  loginAttempts?: T;
  lockUntil?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media_select".
 */
export interface MediaSelect<T extends boolean = true> {
  alt?: T;
  updatedAt?: T;
  createdAt?: T;
  url?: T;
  thumbnailURL?: T;
  filename?: T;
  mimeType?: T;
  filesize?: T;
  width?: T;
  height?: T;
  focalX?: T;
  focalY?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "sponsors_select".
 */
export interface SponsorsSelect<T extends boolean = true> {
  company?: T;
  company_link?: T;
  company_logo?: T;
  company_logo_remote?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "leaderboard_select".
 */
export interface LeaderboardSelect<T extends boolean = true> {
  name?: T;
  title?: T;
  image?: T;
  image_remote?: T;
  socials?:
    | T
    | {
        platform?: T;
        url?: T;
        id?: T;
      };
  rank?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "blog-tags_select".
 */
export interface BlogTagsSelect<T extends boolean = true> {
  name?: T;
  slug?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "video-tags_select".
 */
export interface VideoTagsSelect<T extends boolean = true> {
  name?: T;
  slug?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "blogs_select".
 */
export interface BlogsSelect<T extends boolean = true> {
  title?: T;
  slug?: T;
  content?: T;
  author?: T;
  tags?: T;
  cover_image?: T;
  cover_image_remote?: T;
  status?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "videos_select".
 */
export interface VideosSelect<T extends boolean = true> {
  youtube_link?: T;
  instructor?: T;
  tags?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "events_select".
 */
export interface EventsSelect<T extends boolean = true> {
  title?: T;
  description?: T;
  image?: T;
  image_remote?: T;
  host_name?: T;
  host_image?: T;
  host_image_remote?: T;
  host_socials?:
    | T
    | {
        platform?: T;
        url?: T;
        id?: T;
      };
  location?: T;
  location_icon?: T;
  sponsors?: T;
  start_time?: T;
  period?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "instructors_select".
 */
export interface InstructorsSelect<T extends boolean = true> {
  name?: T;
  title?: T;
  bio?: T;
  image?: T;
  image_remote?: T;
  instructor_socials?:
    | T
    | {
        platform?: T;
        url?: T;
        id?: T;
      };
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "jobs_select".
 */
export interface JobsSelect<T extends boolean = true> {
  title?: T;
  company_name?: T;
  company_link?: T;
  company_logo?: T;
  company_logo_remote?: T;
  location?: T;
  job_type?: T;
  salary?: T;
  apply_link?: T;
  posted_at?: T;
  expires_at?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents_select".
 */
export interface PayloadLockedDocumentsSelect<T extends boolean = true> {
  document?: T;
  globalSlug?: T;
  user?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences_select".
 */
export interface PayloadPreferencesSelect<T extends boolean = true> {
  user?: T;
  key?: T;
  value?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations_select".
 */
export interface PayloadMigrationsSelect<T extends boolean = true> {
  name?: T;
  batch?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "auth".
 */
export interface Auth {
  [k: string]: unknown;
}


declare module 'payload' {
  export interface GeneratedTypes extends Config {}
}
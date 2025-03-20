import { CollectionConfig } from 'payload'
import { checkRole } from './access/checkRole'
import { admins } from './access/admins'

const JobPosts: CollectionConfig = {
  slug: "job-posts",
  labels: { singular: "Job Post", plural: "Job Posts" },
  admin: { useAsTitle: "title" },
  access: {
    admin: ({ req: { user } }) => checkRole(['admin', 'editor'], user ? user : undefined),
    read: () => true, // Publicly readable
    create: admins,
    update: admins,
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "company",
      type: "text",
      required: true,
    },
    {
      name: "companyLogo",
      type: "upload",
      relationTo: "media", // Ensure you have a "media" collection for file uploads
      required: true,
    },
    {
      name: "location",
      type: "select",
      options: [
        { label: "Remote", value: "remote" },
        { label: "Hybrid", value: "hybrid" },
        { label: "On-site", value: "onsite" },
      ],
      required: true,
    },
    {
      name: "jobType",
      type: "select",
      options: [
        { label: "Full-time", value: "full-time" },
        { label: "Part-time", value: "part-time" },
        { label: "Contract", value: "contract" },
        { label: "Internship", value: "internship" },
      ],
      required: true,
    },
    {
      name: "salary",
      type: "text",
      required: false, // Optional, since not all jobs display salary
    },
    {
      name: "description",
      type: "richText",
      required: true,
    },
    {
      name: "requirements",
      type: "richText",
      required: true,
    },
    {
      name: "applyLink",
      type: "text",
      required: true,
      validate: (val?: string | string[] | null) => {
        if (!val || (Array.isArray(val) && val.length === 0)) {
          return "Must be a valid URL";
        }
      
        const url = Array.isArray(val) ? val[0] : val;
        return url.startsWith("http") ? true : "Must be a valid URL";
      },      
    },
    {
      name: "postedAt",
      type: "date",
      admin: { position: "sidebar" },
      defaultValue: () => new Date().toISOString(),
    },
    {
      name: "expiresAt",
      type: "date",
      admin: { position: "sidebar" },
    },
  ],
};

export default JobPosts;

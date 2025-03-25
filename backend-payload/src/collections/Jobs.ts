import { CollectionConfig } from 'payload'
import { validateURL } from './utils/validators';

const JobPosts: CollectionConfig = {
  slug: "job-posts",
  labels: { singular: "Job Post", plural: "Job Posts" },
  admin: { useAsTitle: "title" },
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
      name: "company_logo",
      type: "upload",
      relationTo: "media",
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
      type: "number",
      required: false,
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
      name: "apply_link",
      type: "text",
      required: true,
      validate: validateURL,
    },
    {
      name: "postedAt",
      type: "date",
      required: true,
      admin: { position: "sidebar" },
      defaultValue: () => new Date().toISOString(),
    },
    {
      name: "expiresAt",
      type: "date",
      required: true,
      admin: { position: "sidebar" },
    },
  ],
};

export default JobPosts;

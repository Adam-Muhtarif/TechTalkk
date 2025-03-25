// utils/validators.ts

// Validate general URL starting with "http"
export const validateURL = (value?: string | string[] | null): true | string => {
    if (!value || (Array.isArray(value) && value.length === 0)) {
      return "Must be a valid URL";
    }
  
    const url = Array.isArray(value) ? value[0] : value;
    const urlRegex = /^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}(\/[\w-]*)*\/?$/;
  
    return urlRegex.test(url) ? true : "Must be a valid URL";
  };
  
  
  // Validate YouTube URL
  export const validateYouTubeURL = (value?: string | string[] | null): true | string => {
    const youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com\/watch\?v=|youtu\.be\/)[\w-]+$/;
  
    if (!value || (Array.isArray(value) && value.length === 0)) {
      return 'Invalid YouTube Link';
    }
  
    const url = Array.isArray(value) ? value[0] : value;
  
    return youtubeRegex.test(url) ? true : 'Invalid YouTube Link';
  };
  
  
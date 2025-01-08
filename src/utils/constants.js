export const USER_AVATAR =
  "https://avatars.githubusercontent.com/u/67808377?v=4";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NDk4NGZiYWFmZDg5YzZiZjMwMzU4NGQ2NzQ3MzJjNyIsIm5iZiI6MTczNjE5MDM3Mi41OTIsInN1YiI6IjY3N2MyOWE0NmQ3Y2EwMGU3ODcyZTY1ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ts_DR8RGdCc_ofnwf0VXJXc75sPYWJeSadnQjaUfIGA",
  },
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w780";
export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
];

export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY
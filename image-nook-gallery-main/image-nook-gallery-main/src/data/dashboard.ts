import thumbDigitalMarketing from "@/assets/thumb-digital-marketing.jpg";
import thumbMysql from "@/assets/thumb-mysql.jpg";
import thumbRestApi from "@/assets/thumb-rest-api.jpg";
import thumbPython from "@/assets/thumb-python.jpg";

export type Course = {
  id: string;
  title: string;
  progress: number;
  image: string;
  source: string;
};

export const courses: Course[] = [
  {
    id: "digital-marketing",
    title: "Digital Marketing Mastery for Busine...",
    progress: 93,
    image: thumbDigitalMarketing,
    source: "Powered by YouTube",
  },
  {
    id: "mysql",
    title: "MySQL Playlist",
    progress: 91,
    image: thumbMysql,
    source: "Powered by YouTube",
  },
  {
    id: "rest-api",
    title: "RESTful Web Services and API Testing",
    progress: 91,
    image: thumbRestApi,
    source: "Powered by YouTube",
  },
  {
    id: "python",
    title: "Comprehensive Python Programm...",
    progress: 89,
    image: thumbPython,
    source: "Powered by YouTube",
  },
];

export type ShowcaseLink = {
  id: string;
  name: string;
  description: string;
};

export const showcaseLinks: ShowcaseLink[] = [
  {
    id: "leetcode",
    name: "LeetCode",
    description: "Highlight your problem solving skills with coding challenges completed.",
  },
  {
    id: "hackerrank",
    name: "HackerRank",
    description: "Prove your expertise through coding badges, challenges, and achievements.",
  },
  {
    id: "dribbble",
    name: "Dribbble",
    description: "Display your creative designs and build a strong visual portfolio.",
  },
];

export type Badge = {
  count: number;
  label: string;
};

export const skillBadges: Badge[] = [
  { count: 45, label: "Role Based" },
  { count: 2, label: "Super Skills" },
];

/** Activity intensity 0-4 per day, 5 weeks x 7 days (Su..Sa). */
export const activityLevels: number[] = [
  0, 0, 1, 0, 0, 2, 1,
  0, 1, 0, 0, 3, 0, 0,
  2, 0, 1, 0, 0, 1, 0,
  0, 0, 0, 2, 0, 0, 1,
  0, 1, 0, 0, 0, 0, 0,
];

export const months = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

export const weekDays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

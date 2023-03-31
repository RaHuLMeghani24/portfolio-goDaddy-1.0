import { Experience } from "../typings";

export const fetchExperiences = async () => {
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperience`;
  const res = await fetch(url);

  const data = await res.json();
  const experiences: Experience[] = data.experiences;

  console.log("url: ", url);

  return experiences;
};

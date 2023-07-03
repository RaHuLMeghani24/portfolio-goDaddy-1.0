import { Experience } from "../typings";
import { PageInfo } from "../typings";
import { Project } from "../typings";
import { Skill } from "../typings";
import { Social } from "../typings";

export const fetchExperiences = async () => {
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperience`;
  const res = await fetch(url);

  const data = await res.json();
  const experiences: Experience[] = data.experiences;

  //console.log("url: ", url);

  return experiences;
};

export const fetchPageInfo = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInfo`
  );

  const data = await res.json();
  const pageInfo: PageInfo = data.pageInfo;

  // console.log('fetching', pageInfo);

  return pageInfo;
};

export const fetchProjects = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getProjects`
  );

  const data = await res.json();
  const projects: Project[] = data.projects;

  // console.log('fetching', projects);

  return projects;
};

export const fetchSkills = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSkills`);

  const data = await res.json();
  const skills: Skill[] = data.skills;

  // console.log('fetching', skills);

  return skills;
};

export const fetchSocials = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocials`);

  const data = await res.json();
  const socials: Social[] = data.socials;

  // console.log('fetching', socials);

  return socials;
};

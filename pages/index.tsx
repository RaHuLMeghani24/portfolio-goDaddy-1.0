import { GetStaticProps } from "next";
import Head from "next/head";
import { Experience, PageInfo, Skill, Project, Social } from "../typings";
import { fetchPageInfo } from "../utils/fetchPageInfo";
import { fetchExperiences } from "../utils/fetchExperience";
import { fetchProjects } from "../utils/fetchProjects";
import { fetchSkills } from "../utils/fetchSkills";
import About from "../components/About";
import WorkExperience from "../components/WorkExperience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import ContactMe from "../components/ContactMe";
import Link from "next/link";
import { HomeIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
// import { Inter } from "next/font/google";
// import styles from "@/styles/Home.module.css";
import Header from "@/components/Header";
import { fetchSocials } from "../utils/fetchSocials";
import Hero from "@/components/Hero";

//const inter = Inter({ subsets: ["latin"] });

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};

const Home = ({ pageInfo, experiences, projects, skills, socials }: Props) => {
  return (
    <>
      <Head>
        <title>{"Rahul's Portfolio"}</title>
      </Head>
      <div
        className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory
    overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]]/80"
      >
        {/* Header */}
        <Header socials={socials} />

        {/* Hero */}
        <section id="hero" className="snap-start">
          <Hero pageInfo={pageInfo} />
        </section>

        {/* About */}
        <section id="about" className="snap-center">
          <About pageInfo={pageInfo} />
        </section>

        {/* Experiences */}
        <section id="experience" className="snap-center">
          <WorkExperience experiences={experiences} />
        </section>

        {/* Skills */}
        <section id="skills" className="snap-start">
          <Skills skills={skills} />
        </section>

        {/* Projects */}
        <section id="projects" className="snap-start">
          <Projects projects={projects} />
        </section>

        {/* Contact */}
        <section id="contact" className="snap-start">
          <ContactMe />
        </section>

        <Link href="#hero">
          <footer className="sticky bottom-5 w-full cursor-pointer">
            <div className="flex items-center justify-center">
              <div className="h-10 w-10 bg-darkGreen/80 rounded-full flex items-center justify-center">
                <HomeIcon className="h-7 w-17 pb-0.5 hover:grayscale-100 text-white animate-pulse" />
              </div>
            </div>
          </footer>
        </Link>
      </div>
    </>
  );
  return <h1>Hello World</h1>;
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo = await fetchPageInfo();
  const experiences = await fetchExperiences();
  const skills = await fetchSkills();
  const projects = await fetchProjects();
  const socials = await fetchSocials();

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
    },
    revalidate: 10,
  };
};

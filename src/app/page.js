import { rootMetadata } from '@/lib/site-metadata';
import HomePages from '@/components/HomePages';
import AboutPages from '@/app/about/page';
import SkillsPages from '@/app/skills/page';
import ProjectsPages from '@/app/projects/page';
import ContactPage from '@/app/contact/page';
import Footer from '@/components/Footer';

export const metadata = rootMetadata;

export default function Page() {
  return (
    <>
      <HomePages />
      <AboutPages />
      <SkillsPages />
      <ProjectsPages />
      <ContactPage />
      <Footer />
    </>
  );
}
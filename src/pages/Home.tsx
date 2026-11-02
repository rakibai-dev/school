import { Hero } from '../components/Hero';
import { Welcome } from '../sections/home/Welcome';
import { DayAtSchool } from '../sections/home/DayAtSchool';
import { HarborBand } from '../sections/home/HarborBand';
import { YearCalendar } from '../sections/home/YearCalendar';
import { Notes } from '../sections/home/Notes';
import { Visit } from '../sections/home/Visit';
import '../sections/home/home.css';

export default function Home() {
  return (
    <>
      <Hero />
      <Welcome />
      <DayAtSchool />
      <HarborBand />
      <YearCalendar />
      <Notes />
      <Visit />
    </>
  );
}

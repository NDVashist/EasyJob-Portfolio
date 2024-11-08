import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import MainCarousel from '../../components/Carousel/MainCarousel';
import HowItWorks from '../../components/Home/howItWork/HowItWork';
import CourseCard from '../../components/Home/Courses/Courses';
import Space from '../../components/Space';
import WhyEasyjob from '../../components/Home/WhyEasyJob/WhyEasyJob';
import Course from '../../components/course/Course';
import Form from '../../components/Home/Form/Form';
import ProgramHeadText from '../../components/Home/HeadingCourse/ProgramHeadText';
import CompanyCarousel from '../../components/Carousel/CampanyLogoCarousel';


function Home() {
  return (
    <>
       <Navbar/>
       <MainCarousel/>
      <Space height={'30px'}/>
        <Course/>
      <Space height={'30px'}/>
         <CompanyCarousel/>   
      <section> 
        <HowItWorks/>
      </section>
      {/* <section> 
        <ProgramHeadText/>
        <CourseCard/>
      </section> */}
       <Form/>
      <Space height={'30px'}/>
      <WhyEasyjob/>
      <Space height={'30px'}/>

   
      <Footer />
    </>
    );
}

export default Home;

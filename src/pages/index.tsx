import Footer from '../components/Footer';
import Header from '../components/Header';
import Info from '../components/Info';
import PracticeMath from '../components/PracticeMath';
import Main from '../components/Main';
import Answer from '../components/Answer';
import type { NextPage } from 'next'
import AiComponent from "../components/AiComponent";
import DashBoard from '../components/dashBoard';
import Banner from '../components/Banner';
import Feedback from '../components/Feedback';
import Pricing from '../components/Pricing';
import Student from '../components/Student';

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <PracticeMath />
      <Info />
      <Main/>
      <Answer/>
      <Feedback/>
      <DashBoard/>
      <AiComponent/>
      <Pricing/>
      <Student/>
      <Banner/>
      <Footer />
      
    </>   
  )
}
export default Home;

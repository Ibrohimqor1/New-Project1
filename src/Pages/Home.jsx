import React from 'react'
import Footer from '../Components/Footer/Footer'
import Footer2 from '../Components/Footer2/Footer2'
import Footer3 from '../Components/Footer3/Footer3'
import Footer4 from '../Components/Footer4/Footer4'
import Footer5 from '../Components/Footer5/Footer5'
import Footer_tepasi from '../Components/footer_tepasi/Footer_tepasi'
import Navbar from '../Components/Navbar/Navbar'
import Next from '../Components/Next_Navbar/Next'
import "../Components/Next_Navbar/Next.css"
import Aside from '../Components/aside/aside'
import Video from '../Components/Video/Video'
import Img_comp from '../Components/img_component/img_comp'
import Categories from '../Components/categories/categories'
import Nav2 from '../Components/Nav2/Nav2'
const Home = () => {
  return (
    <div>
      <Nav2/>
        {/* <Navbar/> */}
        <Next/>
      <Categories/>
        <Video/>
        <Img_comp/>
        
        <Aside/>
        <Footer_tepasi/>
        <Footer/>
        <Footer2/>
        <Footer3/>
        <Footer4/>
        <Footer5/>
        
    </div>
  )
}

export default Home
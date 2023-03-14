import React from 'react'
import '../Navbar/Navbar.css'
import icon from '../../assets/icon_kor.png'
import user from "../../assets/user.png"
const Nav2 = () => {
  return (
    <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <a className="navbar-brand" href="#"><img width="140px" src="https://cdn.cookielaw.org/logos/3851eaea-a64c-4a2c-99e2-907f52d98962/e15a3e99-622e-4a6c-805b-673bee177911/edf28e1e-e1bf-494e-a4e3-be7d3e6cc37b/TrailFX_Logo_Standard.png" alt="" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Переключатель навигации">
                        <span class=""><img width="30px" src="https://static.tildacdn.com/tild6232-6133-4535-a538-393631386562/menu.png" alt="" /></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                            <div className="dropdown">
                                <button className="dropbtn ">CATEGORIES</button>
                                <div className="  dropdown-content">
                                    <div className='drop_btn'>
                                        <div className='category_a'>
                                            <img width="35px" src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/dropdown-TWS_100x.png?v=1663752600" alt="" />
                                            <h6>True Wireless</h6>
                                        </div>
                                        <div className='category_a'>
                                            <img width="35px" src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/Neckbands_06214c1a-5e30-48ea-ac14-4a6bff679f48_100x.png?v=1678359377" alt="" />
                                            <h6>Neckbands</h6>
                                        </div>
                                        <div className='category_a'>
                                            <img width="35px" src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/smartwatches_100x.png?v=1676372848" alt="" />
                                            <h6>Smart Watch</h6>
                                        </div>
                                        <div className='category_a'>
                                            <img width="35px" src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/Rockerz_100x.png?v=1678365843" alt="" />
                                            <h6> Headphones</h6>
                                        </div>
                                        <div className='category_a'>
                                            <img width="35px" src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/box-5_100x.png?v=1663753243" alt="" />
                                            <h6> Speakers</h6>
                                        </div>
                                        <div className='category_a'>
                                            <img width="35px" src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/bassheads-Wired-Headphones_0877b292-85ab-42ed-a055-26e1c246be73_100x.png?v=1678364207" alt="" />
                                            <h6>HeadPhones</h6>
                                        </div>
                                        <div className='category_a'>
                                            <img width="35px" src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/latest_background_b4f773ca-05d9-41cc-a7cf-3104993ae895_100x.png?v=1663753167" alt="" />
                                            <h6> Earphones</h6>
                                        </div>




                                    </div>

                                </div>
                            </div>

                            {/* <li class="nav-item">
          <a class="nav-link  active" aria-current="page" href="#">CATEGORIES</a>
        </li> */}
                            <li class=" li_navbar nav-item">
                                <a class="li__a nav-link active" href="#">DAILY DEALS</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link active" href="#" tabindex="-1" aria-disabled="true">GIFT WITH TRAILFX</a>
                            </li>
                        </ul>
                        <form class="gap-3 d-flex">

                            <img width="20px" src={user} alt="" />
                            <img width="20px" src={icon} alt="" />
                        </form>
                    </div>
                </div>
            </nav>

    </div>
  )
}

export default Nav2
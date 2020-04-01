import React from "react";
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import '../styles/index.css';
import Layout from '../components/Layout';
import ImageCard from '../components/ImageCard';
import ItemUrbanoSister from '../components/ItemUrbanoSister';
import ItemColeccion from '../components/ItemColeccion';
import ussama_azam_xgNSlx7DjYM_unsplash from '../images/ussama-azam-xgNSlx7DjYM-unsplash.jpg'
import jess_harper_sunday_uRuF9ABj0NY_unsplash from '../images/jess-harper-sunday-uRuF9ABj0NY-unsplash.jpg'
import kevin_laminto_Wac13Oopo34_unsplash from '../images/kevin-laminto-Wac13Oopo34-unsplash.jpg'
import justin_essah_UeRbO61FMGo_unsplash from '../images/justin-essah-UeRbO61FMGo-unsplash.jpg'
import ali_pazani_ooQotplM76c_unsplash from '../images/ali-pazani-ooQotplM76c-unsplash.jpg'
import jacob_le_WRxSPB1s4_Q_unsplash from '../images/jacob-le-WRxSPB1s4_Q-unsplash.jpg'
import jose_ros_photo_OOmtrEas7Zw_unsplash from '../images/jose-ros-photo-OOmtrEas7Zw-unsplash.jpg'
import mike_von_V4cl7_0N2mc_unsplash from '../images/mike-von-V4cl7_0N2mc-unsplash.jpg'
import ed_zavala_FTQt6ueDoXw_unsplash from '../images/ed-zavala-FTQt6ueDoXw-unsplash.jpg'
import logan_delaney_iF1xqcyYjxw_unsplash from '../images/logan-delaney-iF1xqcyYjxw-unsplash.jpg'
import alex_holyoake_CyT6Ty3X9KY_unsplash from '../images/alex-holyoake-CyT6Ty3X9KY-unsplash.jpg'
import olena_sergienko_O5t8nAbnGUs_unsplash from '../images/olena-sergienko-O5t8nAbnGUs-unsplash.jpg'
import taisiia_stupak_8V61ORZxH1w_unsplash from '../images/taisiia-stupak-8V61ORZxH1w-unsplash.jpg'
import woodwatch__Hr_uHRfImo_unsplash from '../images/woodwatch--Hr_uHRfImo-unsplash.jpg'

export default class extends React.Component {

  render () {
    const currentYear = new Date().getFullYear();

    const swiperParams = {
      slidesPerView: 5,
      spaceBetween: 30,
      swipeToSlide: true,
      grabCursor: true,
      scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
        hide: true,
      },
      breakpoints: {
      1280: {
        slidesPerView: 5,
        spaceBetween: 30
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 20
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 10
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      320: {
        slidesPerView: 2,
        spaceBetween: 10
      }
    }
    }

    return (
      <Layout>

        {/* Hero Content */}
        <a href="#" className="w-full md:w-2/3 mx-auto md:p-5 md:mt-16 grid rounded-lg shadow-lg" style={{
            backgroundImage: `url(${ussama_azam_xgNSlx7DjYM_unsplash})`, backgroundPosition: 'top',
            backgroundSize: 'cover', height: '75vh',
            gridTemplateColumns: "1fr 1fr 1fr", gridTemplateRows: "1fr 0.25fr", alignItems: 'start'}} >
          <h1 className="row-start-1 col-start-2 text-gray-100 text-5xl sm:text-6xl text-center font-family-montserrat-subrayada font-semibold my-auto">
            I am<br /> what<br /> I am
          </h1>
          <h2 className="row-start-2 col-start-1 text-gray-100 text-xs sm:text-base font-semibold text-center md:align-self-start md:text-left">
            Vestido largo estampado <br className="hidden sm:block md:hidden" />99,99€
          </h2>
        </a>

        {/* Subhero Content */}
        <div className="mt-16 mx-auto w-full md:p-6 grid gap-4 grid-cols-2 md:grid-cols-3 grid-rows-2 md:grid-rows-3 bg-orange-200" style={{
            height: '125vh',
          }}>
          <div className="col-start-2 md:col-start-3 row-start-1 text-center text-teal-900 font-family-montserrat-alternates" style={{ alignSelf: 'center'}}>
            <h1 className="text-3xl lg:text-5xl">
              Life<br className="sm:hidden md:block" /> Imitates<br className="sm:hidden md:block"/> Art
            </h1>
          </div>
          <div className="md:col-start-2 md:row-start-3 text-center text-teal-900 font-family-montserrat-alternates" style={{ alignSelf: 'center'}}>
            <h2 className="text-3xl lg:text-5xl">
              Nueva Colección {currentYear}
            </h2>
          </div>
          <a href="#" className="col-start-1 row-start-1 row-end-4 hidden md:block"><ImageCard className="rounded-lg shadow-lg" src={kevin_laminto_Wac13Oopo34_unsplash} alt="Dresses"  /></a>
          <a href="#" className="row-start-2 row-end-4 col-start-2 md:col-start-3"><ImageCard className="rounded-lg shadow-lg object-right" src={jess_harper_sunday_uRuF9ABj0NY_unsplash} alt="Accessories"   /></a>
          <a href="#" className="row-start-1 row-end-3 col-start-1 md:col-start-2 md:col-end-3"><ImageCard className="rounded-lg shadow-lg" src={justin_essah_UeRbO61FMGo_unsplash} alt="More dresses"  /></a>
        </div>

        {/* URBANOSisters */}
        <div className="my-16 mx-4">
          <h1 className="text-xl md:text-2xl lg:text-4xl font-family-montserrat-subrayada">#URBANOSisters</h1>
          <div className="mt-4 mx-auto w-4/6 md:w-full grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

            <ItemUrbanoSister className="" src={ali_pazani_ooQotplM76c_unsplash} handle="younger" href="#" />

            <ItemUrbanoSister className="mt-10 sm:mt-0" src={jose_ros_photo_OOmtrEas7Zw_unsplash} handle="diannia" href="#" />

            <ItemUrbanoSister className="mt-10 md:mt-0 hidden sm:block" src={jacob_le_WRxSPB1s4_Q_unsplash} handle="crawlene" href="#" />

            <ItemUrbanoSister className="mt-10 lg:mt-0 hidden sm:block md:hidden lg:block" src={mike_von_V4cl7_0N2mc_unsplash} handle="ruizm_" href="#" />

          </div>
        </div>

        {/* Swiper */}
        <div className="mt-16 pb-24 ml-3 md:ml-6">
          <Swiper {...swiperParams}>

            <div className="mx-auto my-auto">
              <h1 className="text-sm sm:text-base md:text-lg lg:text-2xl text-center font-family-montserrat-subrayada">
                Catálogo
              </h1>
            </div>

            <ItemColeccion src={taisiia_stupak_8V61ORZxH1w_unsplash} tagLine="Camisa" price="19,99" />

            <ItemColeccion src={olena_sergienko_O5t8nAbnGUs_unsplash} tagLine="Abrigo" price="129,99" />

            <ItemColeccion src={alex_holyoake_CyT6Ty3X9KY_unsplash} tagLine="Bolso" price="99,99" />

            <ItemColeccion src={logan_delaney_iF1xqcyYjxw_unsplash} tagLine="Pantalón" price="29,99" />

            <ItemColeccion src={ed_zavala_FTQt6ueDoXw_unsplash} tagLine="Mono" price="19,99" />

            <ItemColeccion src={woodwatch__Hr_uHRfImo_unsplash} tagLine="Reloj" price="69,99" />

            <div className="mx-auto my-auto md:px-16">
              <a href="#">
                <h1 className="md:text-2xl text-xs text-center underline font-bold font-family-montserrat-alternates">
                  Ver más
                </h1>
              </a>
            </div>

          </Swiper>
        </div>

    </Layout>
    )
  }
}

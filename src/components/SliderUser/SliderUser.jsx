import React from 'react'
import './sliderUser.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
const SliderUser = () => {
  return (

    <section className="user-slide">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10 text-center">
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
              slidesPerView={1}
              autoplay={{ delay: 3000 }}
            >
              <SwiperSlide>
                <div className="user-img">
                  <img src="" alt="" />
                </div>
                <div className="user-info">
                  <h4>
                    David Niph
                    <span>
                      Local shop owner
                    </span>
                  </h4>
                  <p>
                    " Sed ut perspiciatis unde omnis iste natus error veritatis et quasi architecto beatae vitae dict eaque ipsa quae ab illo inventore Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium "
                  </p>
                </div>
                <div className="icon-user">
                  <FormatQuoteIcon className='icon-us' />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="user-img">
                  <img src="" alt="" />
                </div>
                <div className="user-info">
                  <h4>
                    David Niph
                    <span>
                      Local shop owner
                    </span>
                  </h4>
                  <p>
                    " Sed ut perspiciatis unde omnis iste natus error veritatis et quasi architecto beatae vitae dict eaque ipsa quae ab illo inventore Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium "
                  </p>
                </div>
                <div className="icon-user">
                  <FormatQuoteIcon className='icon-us' />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="user-img">
                  <img src="" alt="" />
                </div>
                <div className="user-info">
                  <h4>
                    David Niph
                    <span>
                      Local shop owner
                    </span>
                  </h4>
                  <p>
                    " Sed ut perspiciatis unde omnis iste natus error veritatis et quasi architecto beatae vitae dict eaque ipsa quae ab illo inventore Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium "
                  </p>
                </div>
                <div className="icon-user">
                  <FormatQuoteIcon className='icon-us' />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>

  )
}

export default SliderUser
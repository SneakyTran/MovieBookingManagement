import React from 'react'
import "./footer.css"


export default function Footer() {
  return (
    <div style={{ padding: "50px 0" }}>
      <div className="container">
        <div className="row footer_movie">
          <div className="col-3">
            <div className="ft_content ft_aboutus">
              <div>
                <img className='w-100' src="./assets/img/Movies-Footer.png" alt="logo-ft" />
              </div>
              <p>Mauris malesuada arcu eu posuere eleifen. Ut egestas tortor at leo egestas tincidunt.Mauris malesuada arcu eu posuere eleifen.</p>
              <div className="social_link">
                <ul className='d-flex social_icon'>
                  <li className="bg_fb">
                    <i className="fa-brands fa-facebook-f"></i>
                  </li>
                  <li className="bg_twitter">
                    <i className="fa-brands fa-twitter"></i>
                  </li>
                  <li className="bg_pinterest">
                    <i className="fa-brands fa-pinterest-p"></i>
                  </li>
                  <li className="bg_youtube">
                    <i className="fa-brands fa-youtube"></i>
                  </li>
                  <li className="bg_intagram">
                    <i className="fa-brands fa-instagram"></i>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-3">
            <h2>
              <span>Movie Category</span>
            </h2>
            <div className="ft_content">
              <ul>
                <li><a href="#">Hot movies</a> </li>
                <li><a href="#">Videos</a></li>
                <li><a href="#">Cinema</a></li>
                <li><a href="#">Show time</a></li>
                <li><a href="#">Upcoming Movies</a></li>
                <li><a href="#">Contact Us</a></li>
              </ul>
            </div>
          </div>
          <div className="col-3">
            <h2>
              <span>Infomation</span>
            </h2>
            <div className="ft_content">
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About us</a> </li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Pages</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Event</a></li>
              </ul>
            </div>
          </div>
          <div className="col-3">
            <div className="newsletter">
              <h2>
                <span>Newsletter</span>
              </h2>
              <div class="twitter_content">
                <h2><span>Twitter</span></h2>
                <div class="ft-twitter-feed">
                  <div class="ft_twitter_icon">
                    <i className="fa-brands fa-twitter"></i>
                  </div>
                  <div class="ft_twitter_dec">
                    <a href="">black-one <span>@24Webpro</span></a>
                    <p>Lorem Ipsum is simply dumy text of the printing.</p>
                    <div class="ft_twitter_meta">
                      <ul className='d-lfex'>
                        <li><a href="#"><span class="fa fa-mail-reply"></span></a></li>
                        <li><a href="#"><span class="fa fa-retweet"></span>12</a></li>
                        <li><a href="#"><span class="fa fa-heart"></span>21</a></li>
                        <li><a href="#"><span class="fa fa-ellipsis-h"></span></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="newsletter_input">
                <input type="text" className="form-control" placeholder="Email Address" />
                <button className="newsletter_btn">
                  <span style={{ color: "#000" }} className="fa fa-paper-plane" />
                </button>
              </div>
              <p className='pt-3'>Email:moviesupport@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="coppyright">
            <p>CopyRight© 2018 <a href="#">Themepul</a> . All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

import { Component } from "react";
import Slider from "react-slick";
import { FaSearch } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Sidebar from "../Sidebar";
import "./index.css";

const settings = {
  slidesToShow: 3.5,
  slidesToScroll: 1,
  infinite: false,
  variableWidth: true,
};

const tabSettings = {
  slidesToShow: 7,
  slidesToScroll: 1,
  infinite: false,
  variableWidth: true,
  className: "tabMargin",
};

const homeTabList = [
  {
    id: 1,
    name: "Helpers",
  },
  {
    id: 2,
    name: "Anime Game Characters",
  },
  {
    id: 3,
    name: "Games",
  },

  {
    id: 4,
    name: "Anime",
  },
  {
    id: 5,
    name: "Game Characters",
  },
  {
    id: 6,
    name: "Comedy",
  },
  {
    id: 7,
    name: "VTuber",
  },
  {
    id: 9,
    name: "Image Generating",
  },
  {
    id: 10,
    name: "Discussion",
  },
];

class Home extends Component {
  state = {
    characterList: [],
    homeTabId: 1,
  };

  onClickChangeTab = (id) => {
    this.setState({ homeTabId: id });
  };

  render() {
    const { characterList, homeTabId } = this.state;
    return (
      <div className="bg-container">
        <Sidebar characterList={characterList} />
        <div className="home-container">
          <div className="home-inner-container">
            <p>Welcome back,</p>
            <div className="input-container">
              <p>Anil Matcha</p>
              <div className="search-bar">
                <FaSearch />
                <input
                  type="search"
                  placeholder="search for characters"
                  className="search"
                />
              </div>
            </div>
            <div className="container">
              <div>
                <p>What change you want to do?</p>
                <h3>Epic challenges await</h3>
              </div>
              <div className="child-container">
                <div className="child">
                  <h1>puzzle prodigy</h1>
                  <p>
                    Greetings! I'm puzzle progody,read to lead you through a
                    maze og mind-boggling puzzles...
                  </p>
                  <p>reply...</p>
                </div>
                <div class="child">
                  <h1>Escape Room</h1>
                  <p>Welcome to yout next challenge, Can you escape in time?</p>
                  <p>reply...</p>
                </div>
              </div>
            </div>
            <p>For you</p>
            <div className="slider-container">
              <Slider {...settings}>
                <div className="card-padding">
                  <div className="slider-image-container card">
                    <img
                      src="https://characterai.io/i/200/static/avatars/uploaded/2022/12/10/0QIdZ8uJ-OV6NJH1a1Us_atz6tQr-NIZ7iFV5fqH8lI.webp?webp=true&anim=0"
                      alt=""
                      className="slider-image"
                    />
                    <div>
                      <h5>Gojou Satoru</h5>
                      <p>By ether</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="card-padding">
                    <div className="slider-image-container card">
                      <img
                        src="https://characterai.io/i/200/static/avatars/uploaded/2023/2/6/6uC5oMKpqXhMR3g7l5qKJCNPNAYs7sMe4aH0Jtgm794.webp?webp=true&anim=0"
                        alt=""
                        className="slider-image"
                      />
                      <div>
                        <h5>Gojou Satoru</h5>
                        <p>By ether</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-padding">
                  <div className="slider-image-container card">
                    <img
                      src="https://characterai.io/i/200/static/avatars/uploaded/2023/3/22/WOUx3xnZRql_j1TsQfS1TcNCI30D6uoPQvlGlKdYxHg.webp?webp=true&anim=0"
                      alt=""
                      className="slider-image"
                    />
                    <div>
                      <h5>Gojou Satoru</h5>
                      <p>By ether</p>
                    </div>
                  </div>
                </div>
                <div className="card-padding">
                  <div className="slider-image-container card">
                    <img
                      src="https://characterai.io/i/200/static/avatars/uploaded/2022/11/17/KDrviPestlDUxqAiTK4qPHdYqiLY5nP33LRUTmzNB4o.webp?webp=true&anim=0"
                      alt=""
                      className="slider-image"
                    />
                    <div>
                      <h5>Gojou Satoru</h5>
                      <p>By ether</p>
                    </div>
                  </div>
                </div>
                <div className="card-padding">
                  <div className="slider-image-container card">
                    <img
                      src="https://characterai.io/i/200/static/avatars/uploaded/2022/11/1/aDxf8aQip43E1uJuveyknYOosxisP_lFI-hPHUxJZ18.webp?webp=true&anim=0"
                      alt=""
                      className="slider-image"
                    />
                    <div>
                      <h5>Gojou Satoru</h5>
                      <p>By ether</p>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
            <p>Try these</p>
            <div className="slider-container">
              <Slider {...settings}>
                <div className="card-padding">
                  <div className="slider-inner-container card-2">
                    <div>
                      <img
                        src="https://characterai.io/i/80/static/avatars/Polyglot.png?webp=true&anim=0"
                        alt=""
                        className="slider-border"
                      />
                    </div>
                    <div>
                      <p>
                        Practice a new language <br />
                        With hyperGlot
                      </p>
                    </div>
                  </div>
                  <div className="slider-inner-container card-2">
                    <div>
                      <img
                        src="https://characterai.io/i/80/static/avatars/Polyglot.png?webp=true&anim=0"
                        alt=""
                        className="slider-border"
                      />
                    </div>
                    <div>
                      <p>
                        Practice a new language <br />
                        With hyperGlot
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card-padding">
                  <div className="slider-inner-container card-2">
                    <div>
                      <img
                        src="https://characterai.io/i/80/static/avatars/Polyglot.png?webp=true&anim=0"
                        alt=""
                        className="slider-border"
                      />
                    </div>
                    <div>
                      <p>
                        Practice a new language <br />
                        With hyperGlot
                      </p>
                    </div>
                  </div>
                  <div className="slider-inner-container card-2">
                    <div>
                      <img
                        src="https://characterai.io/i/80/static/avatars/Polyglot.png?webp=true&anim=0"
                        alt=""
                        className="slider-border"
                      />
                    </div>
                    <div>
                      <p>
                        Practice a new language <br />
                        With hyperGlot
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card-padding">
                  <div className="slider-inner-container card-2">
                    <div>
                      <img
                        src="https://characterai.io/i/80/static/avatars/Polyglot.png?webp=true&anim=0"
                        alt=""
                        className="slider-border"
                      />
                    </div>
                    <div>
                      <p>
                        Practice a new language <br />
                        With hyperGlot
                      </p>
                    </div>
                  </div>
                  <div className="slider-inner-container card-2">
                    <div>
                      <img
                        src="https://characterai.io/i/80/static/avatars/Polyglot.png?webp=true&anim=0"
                        alt=""
                        className="slider-border"
                      />
                    </div>
                    <div>
                      <p>
                        Practice a new language <br />
                        With hyperGlot
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card-padding">
                  <div className="slider-inner-container card-2">
                    <div>
                      <img
                        src="https://characterai.io/i/80/static/avatars/Polyglot.png?webp=true&anim=0"
                        alt=""
                        className="slider-border"
                      />
                    </div>
                    <div>
                      <p>
                        Practice a new language <br />
                        With hyperGlot
                      </p>
                    </div>
                  </div>
                  <div className="slider-inner-container card-2">
                    <div>
                      <img
                        src="https://characterai.io/i/80/static/avatars/Polyglot.png?webp=true&anim=0"
                        alt=""
                        className="slider-border"
                      />
                    </div>
                    <div>
                      <p>
                        Practice a new language <br />
                        With hyperGlot
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card-padding">
                  <div className="slider-inner-container card-2">
                    <div>
                      <img
                        src="https://characterai.io/i/80/static/avatars/Polyglot.png?webp=true&anim=0"
                        alt=""
                        className="slider-border"
                      />
                    </div>
                    <div>
                      <p>
                        Practice a new language <br />
                        With hyperGlot
                      </p>
                    </div>
                  </div>
                  <div className="slider-inner-container card-2">
                    <div>
                      <img
                        src="https://characterai.io/i/80/static/avatars/Polyglot.png?webp=true&anim=0"
                        alt=""
                        className="slider-border"
                      />
                    </div>
                    <div>
                      <p>
                        Practice a new language <br />
                        With hyperGlot
                      </p>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
            <p>Featured</p>
            <div className="slider-container">
              <Slider {...settings}>
                <div className="card-padding">
                  <div className="slider-image-container card">
                    <img
                      src="https://characterai.io/i/200/static/avatars/uploaded/2023/9/1/SiXk7ThPURQki2fNtKtgW4HL_ORH5F-MOaVKbt19Qao.webp?webp=true&anim=0"
                      alt=""
                      className="slider-image"
                    />
                    <div>
                      <h5>Gojou Satoru</h5>
                      <p>By ether</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="card-padding">
                    <div className="slider-image-container card">
                      <img
                        src="https://characterai.io/i/200/static/avatars/AreYouFeelingOk.png?webp=true&anim=0"
                        alt=""
                        className="slider-image"
                      />
                      <div>
                        <h5>Gojou Satoru</h5>
                        <p>By ether</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-padding">
                  <div className="slider-image-container card">
                    <img
                      src="https://characterai.io/i/200/static/avatars/uploaded/2023/1/8/dbhGT1Bw33tkxqPMI9eqXQ0eaWEjNNGeNtpCjbodFUo.webp?webp=true&anim=0"
                      alt=""
                      className="slider-image"
                    />
                    <div>
                      <h5>Gojou Satoru</h5>
                      <p>By ether</p>
                    </div>
                  </div>
                </div>
                <div className="card-padding">
                  <div className="slider-image-container card">
                    <img
                      src="https://characterai.io/i/200/static/avatars/uploaded/2022/11/19/5QKUFA4QXwHB5FFp2w9JPpHzgYUz1jBTaV2qg_YYWdg.webp?webp=true&anim=0"
                      alt=""
                      className="slider-image"
                    />
                    <div>
                      <h5>Gojou Satoru</h5>
                      <p>By ether</p>
                    </div>
                  </div>
                </div>
                <div className="card-padding">
                  <div className="slider-image-container card">
                    <img
                      src="https://characterai.io/i/200/static/avatars/uploaded/2022/11/19/5QKUFA4QXwHB5FFp2w9JPpHzgYUz1jBTaV2qg_YYWdg.webp?webp=true&anim=0"
                      alt=""
                      className="slider-image"
                    />
                    <div>
                      <h5>Gojou Satoru</h5>
                      <p>By ether</p>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
            <div className="slider-container">
              <Slider {...tabSettings}>
                {homeTabList.map((eachItem) => {
                  const tabClass = eachItem.id === homeTabId ? "active" : "";
                  const { id } = eachItem;
                  const changeTab = () => {
                    this.onClickChangeTab(id);
                  };
                  return (
                    <div>
                      <div onClick={changeTab} className="tab-container">
                        <p className={`tab-item ${tabClass}`}>
                          {eachItem.name}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </Slider>
            </div>
            <div className="slider-container">
              <Slider {...settings}>
                <div className="card-padding">
                  <div className="slider-image-container card">
                    <img
                      src="https://characterai.io/i/200/static/avatars/TravelsWithKate2.png?webp=true&anim=0"
                      alt=""
                      className="slider-image"
                    />
                    <div>
                      <h5>Gojou Satoru</h5>
                      <p>By ether</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="card-padding">
                    <div className="slider-image-container card">
                      <img
                        src="https://characterai.io/i/200/static/avatars/uploaded/2022/10/14/dBsFTsCowdoQoyYoWW-i9FhxfQBvLTNjiBfT27_ERzM.webp?webp=true&anim=0"
                        alt=""
                        className="slider-image"
                      />
                      <div>
                        <h5>Gojou Satoru</h5>
                        <p>By ether</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-padding">
                  <div className="slider-image-container card">
                    <img
                      src="https://characterai.io/i/200/static/avatars/uploaded/2022/10/14/dBsFTsCowdoQoyYoWW-i9FhxfQBvLTNjiBfT27_ERzM.webp?webp=true&anim=0"
                      alt=""
                      className="slider-image"
                    />
                    <div>
                      <h5>Gojou Satoru</h5>
                      <p>By ether</p>
                    </div>
                  </div>
                </div>
                <div className="card-padding">
                  <div className="slider-image-container card">
                    <img
                      src="https://characterai.io/i/200/static/avatars/LibrarianLinda.png?webp=true&anim=0"
                      alt=""
                      className="slider-image"
                    />
                    <div>
                      <h5>Gojou Satoru</h5>
                      <p>By ether</p>
                    </div>
                  </div>
                </div>
                <div className="card-padding">
                  <div className="slider-image-container card">
                    <img
                      src="https://characterai.io/i/200/static/avatars/uploaded/2022/10/20/FcaryjLtFi7uJMs4OYvG_1A5vSyUA8u2pu05F3iyYoM.webp?webp=true&anim=0"
                      alt=""
                      className="slider-image"
                    />
                    <div>
                      <h5>Gojou Satoru</h5>
                      <p>By ether</p>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
            <div className="footer-container">
              <div>
                <span className="footer-item ">About</span>
                <span className="footer-item ">Careers</span>
                <span className="footer-item ">Blogs</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;

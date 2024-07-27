import NavHome from "../Components/NavHome";
import HeroAnimation from "../Components/HeroAnimation";
import TitleFont from "../Components/TitleFont";
import HeroButton from "../Components/HeroButton";
import analysisImg from "./images/imageanalysis.png";
import SearchIcon from "./images/SearchIcon.png";
import eyeImg from "./images/eye.png";
import cloudImg from "./images/cloud.png";
import suggestImg from "./images/suggest.png";

const Home = () => {
    return (
        <>
            <NavHome />
            <div className="container w-100" style={{  paddingTop: "70px" }}>
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <HeroAnimation />
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="d-flex justify-content-center align-items-center" style={{ height: "85%" }}>
                            <div style={{ marginBottom: "20px" }}>
                                <div>
                                    <TitleFont text="Satellite Image Analysis" />
                                </div>

                                <div className="mt-2">
                                    <span>
                                        Our application specializes in developing AI solutions that analyze satellite imagery and IoT data to monitor and predict environmental changes, delivering actionable insights for conservation and sustainability.
                                    </span>
                                </div>
                                <div className="my-4">
                                    <HeroButton text="Login" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 order-lg-1 order-2">
                        <div className="d-flex justify-content-start align-items-center" style={{ height: "85%" }}>
                            <div className="w-100 mb-5">
                                <div className="lightblue-container sm-padding">
                                    <div className="svg-lb-container">
                                        <img src={eyeImg} />
                                    </div>
                                    Insights from images and IOT data
                                </div>
                                <div className="lightblue-container sm-padding">
                                    <div className="svg-lb-container ">
                                        <img src={cloudImg} />
                                    </div>
                                    Data monitoring and summerizing
                                </div>
                                <div className="lightblue-container sm-padding">
                                    <div className="svg-lb-container">
                                        <img src={suggestImg} />
                                    </div>
                                    Suggest actionable things
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12  order-lg-2 order-md-1 order-1">
                        <div className="d-flex justify-content-center align-items-center imageContainer" >
                            <div className="imageAnalysisDiv">
                                <img src={analysisImg} className="analysisImg" />
                                <img src={SearchIcon} className="searchicon" />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 order-3">
                        <TitleFont text="How??" />
                        <div className="my-5">
                            <span className="herobutton">
                                1.
                            </span>
                            <div className="lightblue-container" style={{marginTop:"10px",padding:"35px"}}>
                                Here we are using multi model approach, meaning multiple data science models are used to
                                analyse the the image and IOT data. We use different ML models to get information like (1)Probability of deforestation, air pollution, (2) Classification of image into places like desert, green, river etc. (3) By Iot data categorizing air quality in good, moderate, worst, Hazardous
                                etc. models to get meaningful insights about given data
                            </div>
                        </div>
                        <div className="my-5">
                            <span className="herobutton">
                                2.
                            </span>
                            <div className="lightblue-container" style={{marginTop:"10px",padding:"35px"}}>
                            Then by meaningful insights we can use LLM models to get textual data also we can extract other information from textual and imagery data from this LLM models 
                            </div>
                        </div>
                    </div>


                </div>
            </div>

        </>
    );
}
export default Home;
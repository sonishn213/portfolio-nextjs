export default function Hero() {
    return (<section className="hero-section style-2 d-flex align-items-center" id="intro">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="hero-wrrapper wow fadeInUp" data-wow-delay=".4s">
                        <div className="hero-image-box d-none d-md-inline-block">
                            <img src="assets/img/hero/hero-2.png" alt="" />
                        </div>
                        <div className="hero-content-box">
                            <h1 className="hero-title">Hi, Im Shwaneesh - Backend Developer</h1>
                            <div className="hero-image-box d-md-none text-center">
                                <img src="assets/img/hero/me.png" alt="" />
                            </div>
                            <p className="lead">
                                Backend developer experienced in scalable systems, payment integrations, and CMS platforms using Laravel.
                                <br />Currently transitioning to Java Spring Boot with security, APIs.
                            </p>
                            <div className="button-box d-flex flex-wrap align-items-center">
                                <a href="#" className="tj-btn-primary-2 ">
                                    PROJECTS
                                    <i class="fa-regular fa-arrow-down-long "></i>

                                </a>
                                <ul className="ul-reset social-icons style-2">
                                    {/* <li>
                                        <a href="#"><i className="fa-brands fa-twitter"></i></a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="fa-light fa-basketball"></i></a>
                                    </li> */}
                                    <li>
                                        <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                                    </li>
                                    {/* <li>
                                        <a href="#"><i className="fa-brands fa-github"></i></a>
                                    </li> */}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="about-area">
                        <div className="row">
                            <div className="col-lg-7">
                                <div className="about-right-content wow fadeInUp h-100 pb-4" data-wow-delay=".3s">
                                    <div className="about-text">
                                        <h5 className="title">Experience</h5>
                                        <p>
                                            Full Stack Developer | Laravel | Nuxtjs (3 years)
                                        </p>

                                        <h5 className="title">Education</h5>
                                        <p>
                                            Bachelor of Computer Applications (2018 - 2021)
                                        </p>

                                        <h5 className="title">Skills</h5>
                                        <p>
                                            Java, Spring boot, Rest Api, Microservice, docker, MySql, Javascript, Vue.js
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="about-right-content  wow fadeInUp h-100" data-wow-delay=".5s">
                                    <div className="about-text">
                                        <h5 className="title"><i class="fa-solid fa-phone me-2"></i> Mobile</h5>
                                        <p>
                                            <a href="tel:+919632340567" className="alink">+91 9632340567</a>
                                        </p>

                                        <h5 className="title"><i class="fa-solid fa-envelope me-2"></i> Email</h5>
                                        <p>
                                            <a href="mailto:sonishn213@gmail.com" className="alink">sonishn213@gmail.com</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>)
}
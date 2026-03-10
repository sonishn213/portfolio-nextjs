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
                            <h1 className="hero-title">Hi, I am Web <br />Developer + UX Designer</h1>
                            <div className="hero-image-box d-md-none text-center">
                                <img src="assets/img/hero/me.png" alt="" />
                            </div>
                            <p className="lead">I design and code beautifully simple things and i love what i do. Just simple
                                like that!</p>
                            <div className="button-box d-flex flex-wrap align-items-center">
                                <a href="#" className="tj-btn-primary-2">
                                    Hire me!
                                    <span className="icon_box">
                                        <i className="fa-regular fa-arrow-right icon_first"></i>
                                        <i className="fa-regular fa-arrow-right icon_second"></i>
                                    </span>
                                </a>
                                <ul className="ul-reset social-icons style-2">
                                    <li>
                                        <a href="#"><i className="fa-brands fa-twitter"></i></a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="fa-light fa-basketball"></i></a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="fa-brands fa-github"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="about-area">
                        <div className="row">
                            <div className="col-lg-7">
                                <div className="about-left-content  wow fadeInUp" data-wow-delay=".3s">
                                    <h2 className="title">Achievements in my professional life.</h2>
                                    <div className="desc">
                                        <p className="lead">
                                            Since beginning my journey as a freelance designer nearly 8 years ago, I've done
                                            remote work for agencies,
                                            consulted for startups, and collaborated with talented people to create digital
                                            products for both business and
                                            consumer use.
                                        </p>
                                    </div>
                                    <div className="about-button d-flex">
                                        <a href="#" className="btn tj-btn-primary-2">Contact Me
                                            <span className="icon_box">
                                                <i className="fa-regular fa-arrow-right icon_first"></i>
                                                <i className="fa-regular fa-arrow-right icon_second"></i>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="about-right-content  wow fadeInUp" data-wow-delay=".5s">
                                    <div className="about-text">
                                        <h5 className="title">Interface Designer</h5>
                                        <div className="desc">
                                            <p>
                                                As a UI designer, I work closely with clients to understand their needs and goals
                                                for their software or
                                                website.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="about-images">
                                        <img src="assets/img/hero/about-1.png" alt="Images" />
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
export default function Skills() {
    return (
        <section className="skills-section style-2 pt-4 pb-5" id="skills-section">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section-header style-2 text-center">
                            <h2 className="section-title wow fadeInUp" data-wow-delay=".3s">My Skills</h2>
                            <p className="wow fadeInUp" data-wow-delay=".4s">
                                A curated set of technologies and frameworks reflecting some of the tools I use to build modern applications.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="skills-widget style-2 d-flex flex-wrap justify-content-center align-items-center">
                            <div className="skill-item wow fadeInUp" data-wow-delay=".3s">
                                <div className="skill-inner">
                                    <div className="icon-box">
                                        <img src="assets/images/java.svg" alt="" />
                                    </div>
                                </div>
                                <p>Java</p>
                            </div>
                            <div className="skill-item wow fadeInUp" data-wow-delay=".4s">
                                <div className="skill-inner">
                                    <div className="icon-box">
                                        <img src="assets/images/springboot-logo.svg" alt="" />
                                    </div>
                                </div>
                                <p>Spring boot</p>
                            </div>
                            <div className="skill-item wow fadeInUp" data-wow-delay=".5s">
                                <div className="skill-inner">
                                    <div className="icon-box">
                                        <img src="assets/images/nuxt-js-icon.svg" alt="" />
                                    </div>
                                </div>
                                <p>Nuxt.js</p>
                            </div>
                            <div className="skill-item wow fadeInUp" data-wow-delay=".6s">
                                <div className="skill-inner">
                                    <div className="icon-box">
                                        <img src="assets/images/git-icon.svg" alt="" />
                                    </div>
                                </div>
                                <p>Git</p>
                            </div>
                            <div className="skill-item wow fadeInUp" data-wow-delay=".7s">
                                <div className="skill-inner">
                                    <div className="icon-box">
                                        <img src="assets/images/docker-icon.svg" alt="" style={{ height: "60px" }} />

                                    </div>
                                </div>
                                <p>Docker</p>
                            </div>
                            <div className="skill-item wow fadeInUp" data-wow-delay=".8s">
                                <div className="skill-inner">
                                    <div className="icon-box">
                                        <img src="assets/img/icons/skills-3.svg" alt="" />
                                    </div>
                                </div>
                                <p>Javascript</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
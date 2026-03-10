export default function Skills() {
    return (
        <section className="skills-section style-2 pt-4 pb-5" id="skills-section">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section-header style-2 text-center">
                            <h2 className="section-title wow fadeInUp" data-wow-delay=".3s">My Skills</h2>
                            <p className="wow fadeInUp" data-wow-delay=".4s">
                                We put your ideas and thus your wishes in the form of a unique web project that inspires you and
                                you customers.
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
                                        <img src="assets/img/icons/skills-1.svg" alt="" />
                                    </div>
                                </div>
                                <p>HTML</p>
                            </div>
                            <div className="skill-item wow fadeInUp" data-wow-delay=".4s">
                                <div className="skill-inner">
                                    <div className="icon-box">
                                        <img src="assets/img/icons/skills-2.svg" alt="" />
                                    </div>
                                </div>
                                <p>CSS3</p>
                            </div>
                            <div className="skill-item wow fadeInUp" data-wow-delay=".5s">
                                <div className="skill-inner">
                                    <div className="icon-box">
                                        <img src="assets/img/icons/skills-3.svg" alt="" />
                                    </div>
                                </div>
                                <p>Javascript</p>
                            </div>
                            <div className="skill-item wow fadeInUp" data-wow-delay=".6s">
                                <div className="skill-inner">
                                    <div className="icon-box">
                                        <img src="assets/img/icons/webflow-1.svg" alt="" />
                                    </div>
                                </div>
                                <p>Webflow</p>
                            </div>
                            <div className="skill-item wow fadeInUp" data-wow-delay=".7s">
                                <div className="skill-inner">
                                    <div className="icon-box">
                                        <img src="assets/img/icons/react.svg" alt="" />
                                    </div>
                                </div>
                                <p>ReactJS</p>
                            </div>
                            <div className="skill-item wow fadeInUp" data-wow-delay=".8s">
                                <div className="skill-inner">
                                    <div className="icon-box">
                                        <img src="assets/img/icons/framer-1.svg" alt="" />
                                    </div>
                                </div>
                                <p>Framer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
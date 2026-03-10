export default function Experience() {
    return (
        <section className="resume-section style-4 pt-5" id="experience">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section-header style-2">
                            <h2 className="section-title  wow fadeInUp">Education & Work Experience</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="resume_inner" data-sticky-container>
                            <div className="resume-sidebar-btn">
                                <span className="side-sticky-inner side-sticky" data-margin-top="140"
                                    data-margin-bottom="65">Experience</span>
                            </div>
                            <div className="resume_wrapper">
                                <div className="resume_item wow fadeInUp" data-wow-delay=".3s">
                                    <div className="resume_content">
                                        {/* <div className="icon_box">
                                            <img src="assets/img/icons/h4-work-1.png" alt="Icons" />
                                        </div> */}
                                        <div className="resume_text">
                                            <h5 className="title">Full Stack Developer</h5>
                                            <span className="subtitle">Design Web Tech, Bengaluru (Remote)</span>
                                            <div className="desc">
                                                <p>
                                                    Worked primarily on backend API development and system logic using Laravel, delivering
                                                    scalable modules for production web applications.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="resume_date">
                                        <span className="date">Sep 2023 – Present</span>
                                    </div>
                                </div>
                                <div className="resume_item wow fadeInUp" data-wow-delay=".4s">
                                    <div className="resume_content">
                                        {/* <div className="icon_box">
                                            <img src="assets/img/icons/h4-work-2.png" alt="Icons" />
                                        </div> */}
                                        <div className="resume_text">
                                            <h5 className="title">Full Stack Developer</h5>
                                            <span className="subtitle">Connectia Technology, Mangaluru</span>
                                            <div className="desc">
                                                <p>
                                                    Developed backend-driven applications using Laravel, MySQL, and REST APIs, delivering
                                                    solutions for various business domains
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="resume_date">
                                        <span className="date">Aug 2022 – Sep 2023</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="resume_inner" data-sticky-container id="education">
                            <div className="resume-sidebar-btn">
                                <span className="side-sticky-inner side-sticky" data-margin-top="140"
                                    data-margin-bottom="65">Education</span>
                            </div>
                            <div className="resume_wrapper">
                                <div className="resume_item wow fadeInUp" data-wow-delay=".3s">
                                    <div className="resume_content">
                                        {/* <div className="icon_box">
                                            <img src="assets/img/icons/h4-work-4.png" alt="Icons" />
                                        </div> */}
                                        <div className="resume_text">
                                            <h5 className="title">Bachelor of Computer Applications (BCA)</h5>
                                            <span className="subtitle">SDM College, Ujire, Dakshina kannada</span>
                                        </div>
                                    </div>
                                    <div className="resume_date">
                                        <span className="date">2018 - 2021</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default function Projects() {
    return (
        <section className="project-section mt-5 pb-5" id="works-section">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section-header style-2">
                            <h2 className="section-title wow fadeInUp" data-wow-delay=".4s">Recent Projects</h2>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">
                        <div className="project-content-area featured wow fadeInUp" data-wow-delay=".5s">
                            <div className="project-left-content">
                                <div className="project_content">
                                    {/* <span className="subtitle">Social App</span> */}
                                    <h3 className="title">Expense Tracker REST API</h3>
                                    <ul className="project_tags my-3">
                                        <li><a href="#">Java</a></li>
                                        <li><a href="#">Spring Boot</a></li>
                                        <li><a href="#">Spring Security</a></li>
                                        <li><a href="#">JWT</a></li>
                                        <li><a href="#">MySQL</a></li>
                                        <li><a href="#">Apache POI</a></li>
                                    </ul>

                                    <p className="desc">
                                        Designed a Spring Boot backend REST API to manage personal financial data.
                                    </p>

                                    <p className="desc"><strong>Key Features:</strong></p>
                                    <ul>
                                        <li>Built APIs for expenses and categories.</li>
                                        <li>Authentication with Spring Security and JWT.</li>
                                        <li>Excel import/export using Apache POI.</li>
                                        <li>Email report delivery.</li>
                                        <li>Scheduled automated reports with Spring Scheduler.</li>
                                        <li>Used layered architecture (controller, service, repository).</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="project-wrapper">
                                <img src="assets/img/project/project-2.png" alt="Images" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <div className="project-content-area featured wow fadeInUp" data-wow-delay=".5s">
                            <div className="project-left-content">
                                <div className="project_content">
                                    {/* <span className="subtitle">Social App</span> */}
                                    <h3 className="title">Social Media based on business cards</h3>
                                    <ul className="project_tags my-3">
                                        <li><a href="#">Laravel</a></li>
                                        <li><a href="#">JWT</a></li>
                                        <li><a href="#">Amazon S3</a></li>
                                        <li><a href="#">Rest API</a></li>
                                        <li><a href="#">MySQL</a></li>
                                        <li><a href="#">DB design</a></li>
                                    </ul>

                                    <p className="desc">
                                        A social media platform designed for businesses where users can upload their physical business cards or create digital business cards, connect with other professionals, and follow businesses and individuals on the platform.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="project-content-area featured wow fadeInUp" data-wow-delay=".5s">
                            <div className="project-left-content">
                                <div className="project_content">
                                    {/* <span className="subtitle">Social App</span> */}
                                    <h3 className="title">Farm Tracking App SaaS</h3>
                                    <ul className="project_tags my-3">
                                        <li><a href="#">Laravel</a></li>
                                        <li><a href="#">JWT</a></li>
                                        <li><a href="#">Rest API</a></li>
                                        <li><a href="#">MySQL</a></li>
                                        <li><a href="#">Finance</a></li>
                                        <li><a href="#">Subscriptions</a></li>
                                        <li><a href="#">DB design</a></li>
                                    </ul>

                                    <p className="desc">
                                        farm management app that helps farmers track worker attendance, wages, farm expenses, income, and crop records digitally, replacing manual bookkeeping and improving operational and financial oversight.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="project-content-area featured wow fadeInUp" data-wow-delay=".5s">
                            <div className="project-left-content">
                                <div className="project_content">
                                    {/* <span className="subtitle">Social App</span> */}
                                    <h3 className="title">Stadium booking application</h3>
                                    <ul className="project_tags my-3">
                                        <li><a href="#">Laravel</a></li>
                                        <li><a href="#">JWT</a></li>
                                        <li><a href="#">Rest API</a></li>
                                        <li><a href="#">MySQL</a></li>
                                        <li><a href="#">Finance</a></li>
                                        <li><a href="#">Reports</a></li>
                                        <li><a href="#">DB design</a></li>
                                    </ul>

                                    <p className="desc">
                                        Stadium booking application for players who want to reserve and use sports fields, enabling easy scheduling, availability checks, slot management, and convenient online booking for games and practice sessions.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
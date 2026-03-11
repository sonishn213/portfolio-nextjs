export default function HeaderContent() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 d-flex flex-wrap align-items-center">
                    {/* <div className="logo-box">
                            <a href="index.html">
                                <img src="assets/images/myqrlinkedin.png" alt="" />
                            </a>
                        </div> */}
                    <div className="header-info-list d-none d-md-inline-block">
                        <ul className="ul-reset">
                            <li><a href="mailto:sonishn213@gmail.com">sonishn213@gmail.com</a></li>
                        </ul>
                    </div>
                    <div className="header-menu">
                        <nav>
                            <ul>
                                <li><a href="#works-section">Projects</a></li>
                                <li><a href="#experience">Experience</a></li>
                                <li><a href="#education">Education</a></li>
                                <li><a href="#contact">Contact</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="mobile-menu  mean-container  d-lg-none">

                        <div class="mean-bar">
                            <nav class="mean-nav">
                                <nav>
                                    <ul style={{ display: 'none' }}>
                                        <li><a href="#works-section">Projects</a></li>
                                        <li><a href="#experience">Experience</a></li>
                                        <li><a href="#education">Education</a></li>
                                        <li><a href="#contact">Contact</a></li>
                                    </ul>
                                </nav>
                            </nav>
                        </div>
                    </div>
                    <div className="header-button">
                        <a href="#" className="tj-btn-primary-2">Resume
                            <span className="icon_box">
                                <i className="flaticon-download icon_first"></i>
                                <i className="flaticon-download icon_second"></i>
                            </span>
                        </a>
                    </div>
                    <div className="menu-bar d-lg-none">
                        <button>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
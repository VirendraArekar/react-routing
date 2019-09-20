import React from 'react'

const imgRound = {
   height: '200px',
}
export default function Profile() {
    return (
        <div>
            <header className="masthead bg-primary text-white text-center">
                <div className="container d-flex align-items-center flex-column"><br></br>
                <img className="rounded-circle" src="https://avatars0.githubusercontent.com/u/27573632?s=460&v=4" alt="" style={imgRound}/>
                <h1 className="masthead-heading text-uppercase mb-0">Virendra M. Arekar</h1>
                <div className="divider-custom divider-light">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon">
                    <i className="fa fa-star"></i>
                    </div>
                    <div className="divider-custom-line"></div>
                </div>
                <p className="masthead-subheading font-weight-light mb-0">Full Stack Developer - PHP,React,React Native,Node Js,Express, Redux - MySql,MongoDB</p>
                </div>
            </header>

            <section className="page-section portfolio" id="portfolio">
                <div className="container">

                <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Portfolio</h2>

                <div className="divider-custom text-center">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon">
                    <i className="fa fa-star fa-2x"></i>
                    </div>
                    <div className="divider-custom-line"></div>
                </div>

                <div className="row">
                    <div className="col-md-6 col-lg-4">
                    <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal1">
                        <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                        <div className="portfolio-item-caption-content text-center text-white">
                            <i className="fas fa-plus fa-3x"></i>
                        </div>
                        </div>
                        <img className="img-fluid" src="https://blackrockdigital.github.io/startbootstrap-freelancer/img/portfolio/cabin.png" alt="" />
                    </div>
                    </div>

                    <div className="col-md-6 col-lg-4">
                    <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal2">
                        <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                        <div className="portfolio-item-caption-content text-center text-white">
                            <i className="fas fa-plus fa-3x"></i>
                        </div>
                        </div>
                        <img className="img-fluid" src="https://blackrockdigital.github.io/startbootstrap-freelancer/img/portfolio/cake.png" alt="" />
                    </div>
                    </div>

                    <div className="col-md-6 col-lg-4">
                    <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal3">
                        <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                        <div className="portfolio-item-caption-content text-center text-white">
                            <i className="fas fa-plus fa-3x"></i>
                        </div>
                        </div>
                        <img className="img-fluid" src="https://blackrockdigital.github.io/startbootstrap-freelancer/img/portfolio/circus.png" alt="" />
                    </div>
                    </div>

                    <div className="col-md-6 col-lg-4">
                    <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal4">
                        <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                        <div className="portfolio-item-caption-content text-center text-white">
                            <i className="fas fa-plus fa-3x"></i>
                        </div>
                        </div>
                        <img className="img-fluid" src="https://blackrockdigital.github.io/startbootstrap-freelancer/img/portfolio/game.png" alt="" />
                    </div>
                    </div>

                    <div className="col-md-6 col-lg-4">
                    <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal5">
                        <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                        <div className="portfolio-item-caption-content text-center text-white">
                            <i className="fas fa-plus fa-3x"></i>
                        </div>
                        </div>
                        <img className="img-fluid" src="https://blackrockdigital.github.io/startbootstrap-freelancer/img/portfolio/safe.png" alt="" />
                    </div>
                    </div>

                    <div className="col-md-6 col-lg-4">
                    <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal6">
                        <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                        <div className="portfolio-item-caption-content text-center text-white">
                            <i className="fas fa-plus fa-3x"></i>
                        </div>
                        </div>
                        <img className="img-fluid" src="https://blackrockdigital.github.io/startbootstrap-freelancer/img/portfolio/submarine.png" alt="" />
                    </div>
                    </div>

                </div>

                </div>
            </section>
        </div>
    )
}

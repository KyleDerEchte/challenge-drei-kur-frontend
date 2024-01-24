import {Component} from "react";


export default class MainContent extends Component
{
    render() {
        return(
            <div>
                <h1 className="text-font">Hi im the Main Content</h1>
                <div id="carouselExample" className="carousel slide">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img
                                src="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Ffc%2Fbe%2Ffcbe5867e56420a0698cb1221058d9edac81e3dd.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]" className="d-block h-25 w-100" alt="#"/>
                        </div>
                        <div className="carousel-item">
                            <img src="https://modeavenue-dz.com/wp-content/uploads/2023/03/25689-Jack-Jones-T-shirts-oversize.jpg" className="d-block h-25 w-100" alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img src="https://ginatricotpc.imgix.net/pim/product-images/230919865/23091986502.jpg" className="d-block h-25 w-100" alt="..."/>
                        </div>
                    </div>
                    <button className="carousel-control-prev btn-dark " type="button" data-bs-target="#carouselExample"
                            data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next bg-dark" type="button" data-bs-target="#carouselExample"
                            data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        )
    }
}

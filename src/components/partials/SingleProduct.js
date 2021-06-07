import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "../../styles/SingleProduct.css";
// import img1 from "../../assets/img/chary.png";
// import img2 from "../../assets/img/elham.png";
// import img3 from "../../assets/img/muzamil.png";
// import img4 from "../../assets/img/dummy-profile.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faPinterest, faTwitter, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { getSingleService } from "../../redux/services/serviceActions";
import Loading from "./Loading";

const SingleProduct = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const dispatch = useDispatch();
    const singleServiceReducer = useSelector(state => state.singleService);
    const { singleServiceLoading, singleServiceData, singleServiceError } = singleServiceReducer;

    useEffect(() => {
        dispatch(getSingleService(id));
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        const imgs = document.querySelectorAll(".spImgSelect a");
        const imgBtns = [...imgs];
        let imgId = 1;

        const slideImage = () => {
            const displayWidth = document.querySelector(".spImgShowCase img:first-child").clientWidth;
            document.querySelector(".spImgShowCase").style.transform = `translateX(${-(imgId - 1) * displayWidth}px )`;
        };

        imgBtns.forEach(imgItem => {
            console.log("Item: ", imgItem);
            imgItem.addEventListener("click", e => {
                // console.log("clicked");
                e.preventDefault();
                imgId = imgItem.dataset.id;
                slideImage();
                // console.log("Images: ", imgItem.dataset.id);
            });
        });

        window.addEventListener("resize", slideImage);

        // return () => {
        //     window.removeEventListener("resize", slideImage);
        // };
        //eslint-disable-next-line react-hooks/exhaustive-deps
    });

    useEffect(() => {
        if (Object.keys(singleServiceData).length) {
            setProduct(singleServiceData.product);
        }
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [singleServiceReducer]);

    return (
        <div className="spWrapper">
            {singleServiceLoading ? (
                <Loading />
            ) : singleServiceError ? (
                <p>Errror</p>
            ) : Object.keys(product).length ? (
                <div className="spCard">
                    {/* Card lef */}
                    <div className="spProductImages">
                        <div className="spImgDisplay">
                            <div className="spImgShowCase">
                                {product.Images.map((img, index) => (
                                    <img src={img.base64} alt="card" key={index} />
                                ))}
                            </div>
                        </div>

                        <div className="spImgSelect">
                            {product.Images.map((img, index) => (
                                <div className="spImgItem" key={index}>
                                    <a href="#/" data-id={`${index + 1}`}>
                                        <img src={img.base64} alt="product" />
                                    </a>
                                </div>
                            ))}

                        </div>
                    </div>

                    {/* Card right */}
                    <div className="spProductContent">
                        <h2 className="spProductTitle">{product.Title}</h2>
                        <a href="/" className="spProductLink">
                            visit gms
                        </a>
                        <div className="spProductRating">
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStarHalfAlt} />
                            <span>4.7(21)</span>
                        </div>

                        <div className="spProductPrice">
                            <p className="spLastPrice">
                                Old price: <span>&#8377; {((95 * product.Price) / 100).toFixed(2)}</span>
                            </p>
                            <p className="spNewPrice">
                                New price: <span>&#8377; {product.Price.toFixed(2)}</span>
                            </p>
                        </div>

                        <div className="spProductDetails">
                            <h2>About this item</h2>
                            <p>{product.Description}</p>
                            <ul>
                                <li>
                                    Color: <span>Black</span>
                                </li>
                                <li>
                                    Available: <span>In stock</span>
                                </li>
                                <li>
                                    Category: <span>{product.Category}</span>
                                </li>
                                <li>
                                    Shipping area: <span>All over Hyderabad</span>
                                </li>
                                <li>
                                    Shipping Fee: <span>Free</span>
                                </li>
                            </ul>
                        </div>

                        <div className="spPurchaseInfo">
                            <input type="number" min="0" defaultValue="1" />
                            <button type="button" className="btn">
                                Order now <FontAwesomeIcon icon={faShoppingCart} />
                            </button>
                        </div>

                        <div className="spSocialLinks">
                            <p>Share at: </p>
                            <a href="#/">
                                <FontAwesomeIcon icon={faFacebook} />
                            </a>
                            <a href="#/">
                                <FontAwesomeIcon icon={faTwitter} />
                            </a>
                            <a href="#/">
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                            <a href="#/">
                                <FontAwesomeIcon icon={faWhatsapp} />
                            </a>
                            <a href="#/">
                                <FontAwesomeIcon icon={faPinterest} />
                            </a>
                        </div>
                    </div>
                </div>
            ) : (
                <p>null</p>
            )}
        </div>
    );
};

export default SingleProduct;

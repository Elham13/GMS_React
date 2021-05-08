import React from 'react'
import '../styles/AllAds.css'
import Card from './partials/Card'
import bus from '../assets/img/bus.png'

const AllAds = () => {
    return (
        <div className="separatePage">
            <div className="separatePageTop">
                <div className="allAdsWrapper">
                    <h1>All ads</h1>
                    <div className="div">
                            <Card 
                                image={bus}
                                name="Some Ad"
                                price={10.99}
                                desc="Some descriptions Some descriptions Some descriptions"
                            />
                            <Card 
                                image={bus}
                                name="Some Ad"
                                price={10.99}
                                desc="Some descriptions Some descriptions Some descriptions"
                            />
                            <Card 
                                image={bus}
                                name="Some Ad"
                                price={10.99}
                                desc="Some descriptions Some descriptions Some descriptions"
                            />
                            <Card 
                                image={bus}
                                name="Some Ad"
                                price={10.99}
                                desc="Some descriptions Some descriptions Some descriptions"
                            />
                            <Card 
                                image={bus}
                                name="Some Ad"
                                price={10.99}
                                desc="Some descriptions Some descriptions Some descriptions"
                            />
                            <Card 
                                image={bus}
                                name="Some Ad"
                                price={10.99}
                                desc="Some descriptions Some descriptions Some descriptions"
                            />
                            <Card 
                                image={bus}
                                name="Some Ad"
                                price={10.99}
                                desc="Some descriptions Some descriptions Some descriptions"
                            />
                            <Card 
                                image={bus}
                                name="Some Ad"
                                price={10.99}
                                desc="Some descriptions Some descriptions Some descriptions"
                            />
                            <Card 
                                image={bus}
                                name="Some Ad"
                                price={10.99}
                                desc="Some descriptions Some descriptions Some descriptions"
                            />
                            <Card 
                                image={bus}
                                name="Some Ad"
                                price={10.99}
                                desc="Some descriptions Some descriptions Some descriptions"
                            />
                            <Card 
                                image={bus}
                                name="Some Ad"
                                price={10.99}
                                desc="Some descriptions Some descriptions Some descriptions"
                            />
                            <Card 
                                image={bus}
                                name="Some Ad"
                                price={10.99}
                                desc="Some descriptions Some descriptions Some descriptions"
                            />
                            <Card 
                                image={bus}
                                name="Some Ad"
                                price={10.99}
                                desc="Some descriptions Some descriptions Some descriptions"
                            />
                            <Card 
                                image={bus}
                                name="Some Ad"
                                price={10.99}
                                desc="Some descriptions Some descriptions Some descriptions"
                            />
                            <Card 
                                image={bus}
                                name="Some Ad"
                                price={10.99}
                                desc="Some descriptions Some descriptions Some descriptions"
                            />
                            <Card 
                                image={bus}
                                name="Some Ad"
                                price={10.99}
                                desc="Some descriptions Some descriptions Some descriptions"
                            />
                            <Card 
                                image={bus}
                                name="Some Ad"
                                price={10.99}
                                desc="Some descriptions Some descriptions Some descriptions"
                            />
                            <Card 
                                image={bus}
                                name="Some Ad"
                                price={10.99}
                                desc="Some descriptions Some descriptions Some descriptions"
                            />
                            <Card 
                                image={bus}
                                name="Some Ad"
                                price={10.99}
                                desc="Some descriptions Some descriptions Some descriptions"
                            />
                        {/* <ReactPaginate 
                            previousLabel="Prev"
                            nextLabel="Next"
                            pageCount={1}
                            marginPagesDisplayed={1}
                            pageRangeDisplayed={3}
                            onPageChange={changePage}
                            containerClassName="paginationBtns"
                            previousLinkClassName="prevBtn"
                            nextLinkClassName="nextBtn"
                            disabledClassName="paginationDisabled"
                            activeClassName="paginationActive"
                        /> */}
                    </div>
                </div>
            </div>
        </div> 
    )
}

export default AllAds

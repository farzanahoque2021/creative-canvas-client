
import img1 from '../../../assets/images/banner1.jpg'
import img2 from '../../../assets/images/banner2.jpg'
import img3 from '../../../assets/images/banner3.jpg'
const Banner = () => {
    return (
        <div>
            <div className="carousel w-full h-[600px]">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={img1} className="w-full" />
                    <div className="absolute w-full flex items-center justify-center mx-auto h-full bg-gradient-to-r from-[rgba(21,21,21,0.5)] to-[rgba(21,21,21,0.5)]">
                        <div className='text-white space-y-4 text-center'>
                            <h1 className='font-bold text-white lg:text-6xl text-3xl'>Enjoy this Summer <br />With Drawing</h1>
                            <p className='font-semibold lg:text-xl text-xl text-white'>Drawing is the best way to express yourself</p>
                            <div>
                                <button className='btn btn-accent border-none'>Enroll Now</button>
                                <button className='btn btn-accent border-none ml-2'>Explore More</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-center gap-2 transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={img2} className="w-full" />
                    <div className="absolute w-full flex items-center justify-center mx-auto h-full bg-gradient-to-r from-[rgba(21,21,21,0.5)] to-[rgba(21,21,21,0.5)]">
                        <div className='text-white space-y-4 text-center'>
                            <h1 className='font-bold text-white lg:text-6xl text-3xl'>Drawing is <br />Fun</h1>
                            <p className='font-semibold lg:text-xl text-xl text-white'>Comes with a huge range of other benefits for your health and well-being!
                            </p>
                            <div>
                                <button className='btn btn-accent border-none'>Enroll Now</button>
                                <button className='btn btn-accent border-none ml-2'>Explore More</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-center gap-2 transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={img3} className="w-full" />
                    <div className="absolute w-full flex items-center justify-center mx-auto h-full bg-gradient-to-r from-[rgba(21,21,21,0.5)] to-[rgba(21,21,21,0.5)]">
                        <div className='text-white space-y-4 text-center'>
                            <h1 className='font-bold text-white lg:text-6xl text-3xl'>It Boosts<br />Creative Thinking</h1>
                            <p className='font-semibold lg:text-xl text-xl text-white'> Builds communication and coordination</p>
                            <div>
                                <button className='btn btn-accent border-none'>Enroll Now</button>
                                <button className='btn btn-accent border-none ml-2'>Explore More</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-center gap-2 transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Banner;
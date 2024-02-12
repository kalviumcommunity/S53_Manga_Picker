import { useRef, useEffect } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import img1 from '../assets/slider/img1.jpg'
import img2 from '../assets/slider/img2.jpg'
import img3 from '../assets/slider/img3.jpg'
import img4 from '../assets/slider/img4.jpg'

const screenWidth = window.innerWidth;

function Slider() {
    const mangaList = [
        img1,
        img2,
        img3,
        img4,
    ];

    const elementRef = useRef();

    const sliderLeft = (element) => {
        element.scrollLeft -= screenWidth - 110;
    }

    const sliderRight = (element) => {
        // Check if scroll position is at the end
        if (element.scrollWidth - element.scrollLeft <= element.clientWidth) {
            // Reset scroll position to the start
            element.scrollLeft = 0;
        } else {
            element.scrollLeft += screenWidth - 110;
        }
    }
    useEffect(() => {
        const timer = setInterval(() => {
            sliderRight(elementRef.current);
        }, 5000); // Change every 5 seconds

        return () => clearInterval(timer); // Clean up on unmount
    }, []);

    return (
        <div>
            <HiChevronLeft className="hidden md:block text-white text-[30px] absolute mx-8 mt-[200px] cursor-pointer" onClick={() => sliderLeft(elementRef.current)} />
            <HiChevronRight className='hidden md:block text-white text-[30px] absolute mx-8 mt-[200px] cursor-pointer right-0' onClick={() => sliderRight(elementRef.current)} />
            <div className='flex overflow-x-auto w-full px-16 py-4 scrollbar-none scroll-smooth' ref={elementRef}>
                {mangaList.map((item, index) => (
                    <img key={index} src={item} alt={`manga ${index}`} className='min-w-full  md:h-[400px] object-cover object-left-top mr-5 rounded-md hover:border-[4px] border-gray-400 transition-all duration-100 ease-in' />
                ))}
            </div>
        </div>
    )
}

export default Slider;

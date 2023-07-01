"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
// import {useProductData} from ".productData.js"
import { useProductData } from '@/modals/productData';
import Video from '@/components/Video';
import Offer from '@/components/Offer';
const Product = () => {
    const productData = useProductData();
    const [showFullDescription, setShowFullDescription] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    // const [productData, setProductData] = useState({});

    useEffect(() => {
        const delay = setTimeout(() => {
          setIsLoading(false);
        }, 2000);
    
        return () => clearTimeout(delay);
      }, []);

      if (isLoading) {
        return <div className='lod'>Loading...</div>;
      } 
    const toggleDescription = () => {
        setShowFullDescription(!showFullDescription);
    };

    const handleEdit = () => {
        setIsEditing(true);
        setShowFullDescription(true);
        const descriptionElement = document.querySelector('.description');
        const updateBtn = document.querySelector('.updateBtn');
      
        if (descriptionElement) {
          descriptionElement.contentEditable = true;
          descriptionElement.focus();
        }
        updateBtn.style.display = "block";
      };

    const handleUpdate=()=>{
        const descriptionElement = document.querySelector('.description');
        const updateBtn = document.querySelector('.updateBtn');
            // Get the updated description text
            const updatedDescription = descriptionElement.innerText;
        
         
            fetch('https://api-test.innoloft.com/product/6781/', {
              method: 'PUT',
              body: JSON.stringify({ description: updatedDescription }),
              headers: {
                'Content-Type': 'application/json',
              },
            })
              .then(response => {
            
                console.log('Description updated successfully');
              })
              .catch(error => {
            
                console.error('Error updating description:', error);
              });
        
            descriptionElement.contentEditable = false;
        
         
            updateBtn.style.display = "none";
         
    };
    const text = "Lorem ipsum dolor sit amet.";

    function truncateAfterLetters(text, letterCount) {
        if (text.length > letterCount) {
            const truncatedText = text.slice(0, letterCount) + "...";
            return truncatedText;
        }
        return text;
    }

    const truncatedText = truncateAfterLetters(text, 18);


    return (
        <>
            <div class="flex flex-col sm:flex-row">
                <div className="w-full sm:w-1/3 flex flex-col leftColDesk pr-2 hidden sm:block">
                    <div className="flex gap-4 items-center p-3  w-2/3 ml-auto">
                        <img className="h-14 w-14 rounded-full" src={productData.user?.profilePicture} alt="" />

                        <div className="flex flex-col">
                            <strong className="text-xl">{productData.user?.firstName}</strong>
                            <span>{productData.user?.position}</span>
                        </div>
                    </div>
                    <div className="flex flex-col w-2/3 ml-auto">
                        <div className="flex items-center gap-2 p-3 cursor-pointer hover:bg-slate-100 rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                            </svg>
                            <span className="text-lg">Home</span>
                        </div>
                        <div className="flex items-center gap-2 p-3 cursor-pointer hover:bg-slate-100 rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                            </svg>

                            <span className="text-lg">Members</span>
                        </div>
                        <div className="flex items-center gap-2 p-3 cursor-pointer hover:bg-slate-100 rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M20.893 13.393l-1.135-1.135a2.252 2.252 0 01-.421-.585l-1.08-2.16a.414.414 0 00-.663-.107.827.827 0 01-.812.21l-1.273-.363a.89.89 0 00-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 01-1.81 1.025 1.055 1.055 0 01-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 01-1.383-2.46l.007-.042a2.25 2.25 0 01.29-.787l.09-.15a2.25 2.25 0 012.37-1.048l1.178.236a1.125 1.125 0 001.302-.795l.208-.73a1.125 1.125 0 00-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 01-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 01-1.458-1.137l1.411-2.353a2.25 2.25 0 00.286-.76m11.928 9.869A9 9 0 008.965 3.525m11.928 9.868A9 9 0 118.965 3.525" />
                            </svg>
                            <span className="text-lg">Organisations</span>
                        </div>
                    </div>
                </div>
                <div class="w-full sm:w-3/4 flex flex-col gap-4 pr-0 sm:pr-0 sm:pr-44 boss">
                    <div className="add1 flex items-center text-md text-gray-500 justify-between ">
                        <div className='flex gap-1 items-center sm:leading-8 lg:leading-5'>
                            <Link href="/">
                                <figure className="scale-75">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                    </svg>
                                </figure>
                            </Link>
                            <figure className=" scale-75">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                </svg>
                            </figure>

                            <span>Offers</span>
                            <figure className=" scale-75">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                </svg>
                            </figure>

                            <span>{truncatedText}</span>

                        </div>
                        <div className='editBtn'>
                            <button type='button' onClick={handleEdit} className='text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-1 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>Edit</button>
                        </div>
                    </div>
                    <div className="c1 rounded-lg flex ">
                        <div className="sm:w-2/3 overflow-hidden c1s rounded-lg">
                            <div className="object-contain w-full h-80 overflow-hidden">
                                <img src={productData.picture} className="w-full h-full" alt="" />
                            </div>
                            <p className="title font-bold text-xl mt-4 p-3 pb-0">{productData.name}</p>
                            <div className={`p-3 ${showFullDescription ? 'max-h-full overflow-visible' : 'max-h-20'}`} >
                                <p className="description">{productData.description}</p>
                                <button type='button' onClick={handleUpdate} className='updateBtn text-white px-3 rounded-md py-1 mt-4 hidden bg-mainColor'>Update</button>
                            </div>
                            {!showFullDescription && (
                                <button className="text-gray-400 mt-2 bg-white w-full p-3 text-left" onClick={toggleDescription}>
                                    View more..
                                </button>
                            )}
                            {showFullDescription && (
                                <button className="text-gray-400 p-3 w-full text-left" onClick={toggleDescription}>
                                    View less..
                                </button>
                            )}
                        </div>
                        <div className='flex flex-col w-1/3 p-4 justify-center map'>
                            <span className=' font-semibold mb-2'>Offered by</span>
                            <figure className=" h-8 w-auto">
                                <svg width="200" height="47" viewBox="0 0 200 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.44914 10.5558H0V45.2788H8.44914V10.5558Z" fill="#272E71" />
                                    <path d="M22.8275 45.2788H14.4155V10.5558H22.8275L35.5383 30.0481V10.5558H43.9504V45.2788H35.5383L22.8275 25.453V45.2788Z" fill="#272E71" />
                                    <path d="M58.2915 45.2788H49.8423V10.5558H58.2915L70.9652 30.0481V10.5558H79.4143V45.2788H70.9652L58.2915 25.453V45.2788Z" fill="#272E71" />
                                    <path d="M105.466 10H100.537V23.7484H105.466V10Z" fill="#E4B302" />
                                    <path d="M146.711 33.2352V36.1628H137.372V18.8939H140.893V33.2352H146.711Z" fill="#272E71" />
                                    <path d="M150.713 27.5657C150.713 30.7527 153.011 33.3097 156.05 33.3097C159.014 33.3097 161.386 30.8639 161.386 27.6769C161.386 24.3047 159.162 21.8589 156.05 21.8589C153.011 21.8589 150.713 24.3047 150.713 27.5657ZM162.757 21.4512C164.239 23.0818 164.98 25.1199 164.98 27.6769C164.98 32.6056 161.052 36.6078 156.124 36.6078C151.047 36.6078 147.119 32.6797 147.119 27.6769C147.119 22.5259 151.047 18.5978 156.198 18.5978C158.718 18.5607 161.015 19.5613 162.757 21.4512Z" fill="#272E71" />
                                    <path d="M171.355 26.009H177.395V28.9736H171.355V36.1628H167.723V18.8939H177.395V21.7844H171.355V26.009Z" fill="#272E71" />
                                    <path d="M188.03 36.1628H184.51V21.7844H180.359V18.8939H192.144V21.7844H188.03V36.1628Z" fill="#272E71" />
                                    <path d="M108.32 10.4802V19.337C111.099 21.1528 112.915 24.4139 112.915 28.342C112.915 33.9748 108.505 38.5699 103.021 38.5699C97.4622 38.5699 93.0153 33.9748 93.0153 28.1567C93.0153 24.3027 94.8311 21.1158 97.6104 19.2999V10.5543C94.8311 11.3696 92.2741 12.7778 90.236 14.6307C86.382 18.2994 84.3438 23.0798 84.3438 28.1567C84.3438 38.3105 92.6818 46.3149 103.243 46.3149C113.471 46.3149 121.735 38.1252 121.735 28.0455C121.55 19.4111 116.176 12.5184 108.32 10.4802Z" fill="#E4B302" />
                                    <path d="M196.406 41.7579H126.07C129.109 38.7933 130.999 33.3088 130.999 27.9354C130.999 22.5621 128.887 16.8923 126.07 14.113H196.406V41.7579ZM200 45.2784V10.5554H117.325C122.735 13.5941 125.922 18.8934 126.811 25.045C126.96 25.9343 127.071 26.9349 127.071 27.8984C127.071 28.8989 126.997 29.8624 126.811 30.7518C125.922 36.9034 122.735 42.2026 117.325 45.2414H200V45.2784Z" fill="#272E71" />
                                </svg>

                            </figure>
                            <div className="flex gap-2 items-center mt-6  w-full ml-auto">
                                <img className="h-10 w-10 rounded-full" src={productData.user?.profilePicture} />

                                <div className="flex flex-col">
                                    <span className="text-lg font-medium">{productData.user?.firstName}</span>
                                    <span className='text-sm leading-3'>{productData.user?.position}</span>
                                </div>

                            </div>
                            <div className='flex gap-2 items-center text-gray-800 leading-4 mt-8'>
                                <figure>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                    </svg>

                                </figure>
                                <p><span>{productData.company?.address.street}</span>,<span>{productData.company?.address.zipCode},<br />{productData.company?.address.city.name}, {productData.company?.address.country.name}</span></p>
                            </div>
                            <div className='rounded-md mt-3 overflow-hidden '>
                                {/* <img src="https://media.wired.com/photos/59269cd37034dc5f91bec0f1/191:100/w_1280,c_limit/GoogleMapTA.jpg"  alt="" /> */}
                                <iframe className=' object-contain map2' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2522.501096013114!2d6.107154776073541!3d50.78482137165796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c0994656d11507%3A0x5b2c8d5cd107d71b!2sJ%C3%BClicher%20Str.%2C%2052070%20Aachen%2C%20Germany!5e0!3m2!1sen!2sin!4v1688237559700!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                    </div>
                    <Video />
                    <Offer />
                </div>

            </div>
        </>
    )
}

export default Product
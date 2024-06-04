import React from 'react'
import Heading from './Heading'
import chefCap from '../../assets/Chef Cap.png'
import cartoonChef from '../../assets/Cartoon Chef.png'
import execChef from '../../assets/Vasant Patil.png'
import swingChef from '../../assets/Vivan Joshi.png'
import grillChef from '../../assets/Manish Paul.png'
import stationChef from '../../assets/Navya Sharma.png'
import Chef from './Chef'
import knifeHandArt from '../../assets/Pencil Hand Knife.png'
import spoonForkArt from '../../assets/Pencil Knife Spoon.png'
import hotPan from '../../assets/Fry Pan.png'
import cookingSpoon from '../../assets/Spoon.png'
import Lottie from "lottie-react";
import chefAnimation from './../../assets/lottie/chefAnimation.json'

const Section2 = () => {
  return (
    <div>
        {/* Meet Our Chef Head */}
        <div className='bg-orange-blob py-4 md:py-10 px-5 md:px-20 flex flex-col md:flex-row'>

            <div className='flex flex-col items-center md:items-start gap-6'>
                <div className='relative mt-14 flex'>
                    <img src={chefCap} className='absolute -right-[2rem] md:-right-[5rem] -top-10 md:-top-20 rotate-[25] h-16 md:h-min' />
                    <Heading text={"Meet Our Chefs"} />
                </div>
                <div>
                    <p className='font-notomusic text-grey-text text-xl md:text-2xl leading-normal w-full md:w-[75%]'>
                        Our chefs are a talented and diverse group of individuals with a passion for food and creativity. They come from all over the world and bring with them a wealth of experience and knowledge. The team is known for their innovative and creative dishes, which are made with the freshest ingredients and prepared with the utmost care.
                    </p>
                </div>
            </div>

            <div className='md:w-[145%]'>
                <Lottie animationData={chefAnimation} loop={true} />
            </div>
            

        </div>

        {/* Meet Our Chef Body */}
        <div className='bg-chefBg min-h-[1960px] md:min-h-[1550px]'>
            <div className='px-16 flex flex-col gap-32 md:gap-10 relative h-[1550px] pt-10 md:pt-0'>
                <div className="md:absolute top-14 left-[11.5rem] z-10">
                    <Chef img={execChef} name={"Vasant Patil"} title={"Executive Chef"} />
                </div>
                <div className='md:absolute top-[26.5rem] right-[13rem]'>
                    <Chef img={swingChef} name={"Vivan Joshi"} title={"Swing Chef"} />
                </div>
                <div className='md:absolute top-[41.5rem] left-[23rem]'>
                    <Chef img={grillChef} name={"Manish Paul"} title={"Grill Chef"} />
                </div>
                <div className='md:absolute bottom-[6.5rem] right-[11rem] z-10'>
                    <Chef img={stationChef} name={"Navya Agrawal"} title={"Station Chef"} />
                </div> 
                <div className='hidden md:absolute right-0 top-12'>
                    <img src={knifeHandArt} alt='Knife in hand art' />
                </div>
                <div className='hidden md:absolute left-0 bottom-36'>
                    <img src={spoonForkArt} alt='Spoon Fork art' />
                </div>
                <div className='hidden md:absolute left-6 top-[37rem]'>
                    <img src={hotPan} alt='Spoon'></img>
                </div>
                <div className='hidden md:absolute right-16 bottom-[34rem]'>
                    <img src={cookingSpoon} alt='Spoon'></img>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Section2
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductList = () => {
  return (
    <div className="mt-12 flex  gap-x-8 gap-y-16 justify-between flex-wrap">
      <Link href="/test" className=" w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
      <div className="relative w-full h-80">
        <Image
          src="https://images.pexels.com/photos/3031396/pexels-photo-3031396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=" "
          fill
          sizes="25vw"
          className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
        />
         <Image
          src="https://images.pexels.com/photos/3118214/pexels-photo-3118214.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=" "
          fill
          sizes="25vw"
          className="absolute object-cover rounded-md"
        />
        
        
        </div>
        <div className="flex justify-between">
            <span className="font-medium" >Nigga</span>    
            <span className="font-semibold"> $49,99</span>    
        </div>
        <div className="text-sm text-gray-500">My description </div>
        <button className="rounded-2xl ring-1 ring-mta text-mta py-2 px-4 text-xm hover:bg-mta hover:text-white"> Add to Cart</button>

      </Link>
      <Link href="/test" className=" w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
      <div className="relative w-full h-80">
        <Image
          src="https://images.pexels.com/photos/3031396/pexels-photo-3031396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=" "
          fill
          sizes="25vw"
          className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
        />
         <Image
          src="https://images.pexels.com/photos/3118214/pexels-photo-3118214.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=" "
          fill
          sizes="25vw"
          className="absolute object-cover rounded-md"
        />
        
        
        </div>
        <div className="flex justify-between">
            <span className="font-medium" >Nigga</span>    
            <span className="font-semibold"> $49,99</span>    
        </div>
        <div className="text-sm text-gray-500">My description </div>
        <button className="rounded-2xl ring-1 ring-mta text-mta py-2 px-4 text-xm hover:bg-mta hover:text-white"> Add to Cart</button>

      </Link>
      <Link href="/test" className=" w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
      <div className="relative w-full h-80">
        <Image
          src="https://images.pexels.com/photos/3031396/pexels-photo-3031396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=" "
          fill
          sizes="25vw"
          className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
        />
         <Image
          src="https://images.pexels.com/photos/3118214/pexels-photo-3118214.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=" "
          fill
          sizes="25vw"
          className="absolute object-cover rounded-md"
        />
        
        
        </div>
        <div className="flex justify-between">
            <span className="font-medium" >Nigga</span>    
            <span className="font-semibold"> $49,99</span>    
        </div>
        <div className="text-sm text-gray-500">My description </div>
        <button className="rounded-2xl ring-1 ring-mta text-mta py-2 px-4 text-xm hover:bg-mta hover:text-white"> Add to Cart</button>

      </Link>
      <Link href="/test" className=" w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
      <div className="relative w-full h-80">
        <Image
          src="https://images.pexels.com/photos/3031396/pexels-photo-3031396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=" "
          fill
          sizes="25vw"
          className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
        />
         <Image
          src="https://images.pexels.com/photos/3118214/pexels-photo-3118214.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=" "
          fill
          sizes="25vw"
          className="absolute object-cover rounded-md"
        />
        
        
        </div>
        <div className="flex justify-between">
            <span className="font-medium" >Nigga</span>    
            <span className="font-semibold"> $49,99</span>    
        </div>
        <div className="text-sm text-gray-500">My description </div>
        <button className="rounded-2xl ring-1 ring-mta text-mta py-2 px-4 text-xm hover:bg-mta hover:text-white"> Add to Cart</button>

      </Link>
    </div>
  );
};

export default ProductList;

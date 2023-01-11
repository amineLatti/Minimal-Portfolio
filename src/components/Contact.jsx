import React from 'react';
import Title from './Title';
/*
function Contact() {
   return (
      <div className="flex flex-col mb-10 mx-auto">
         <div className="flex justify-center items-center">
            <form
               action="https://getform.io/f/(customSlugHere)"
               method="POST"
               className="flex flex-col w-full md:w-7/12"
            >
               <Title>Contact</Title>
               <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="p-2 bg-transparent border-2 rounded-md focus:outline-none"
               />
               <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  className="my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none"
               />
               <textarea
                  name="message"
                  placeholder="Message"
                  rows="10"
                  className="p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none"
               />
               <button
                  type="button"
                  className="text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-gradient-to-r from-green-500 to-green-700 drop-shadow-md hover:stroke-white"
               >
                  Work With Me
               </button>
            </form>
         </div>
      </div>
   )
}
*/

function Contact() {
   return (
      <div className="flex flex-col mb-10 mx-auto">
         <div className="flex justify-center items-center">
            <form
               action="https://getform.io/f/04aee7d6-d0ec-4263-989a-cd8c48cd940e"
               enctype="multipart/form-data"
               method="POST"
               target="_blank"
               className="flex flex-col w-full md:w-7/12"
            >
               <div class="form-group">
                  <input
                     type="text"
                     name="name"
                     placeholder="Full name"
                     className="p-2 bg-transparent border-2 rounded-md focus:outline-none w-full"
                  />
               </div>
               <div class="form-group">
                  <input
                     type="email"
                     name="email"
                     placeholder="Email"
                     className="my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none w-full"
                  />
               </div>
               <textarea
                  name="message"
                  placeholder="Message"
                  rows="10"
                  className="p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none"
               />
                  <input
                     type="file"
                     name="file"
                     className="my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none"
                  />
               <button 
                  type="submit"
                  className="text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-gradient-to-r from-green-500 to-green-700 drop-shadow-md hover:stroke-white"
                  >
                  Send
               </button>
            </form>
         </div>
      </div>)
}

export default Contact;
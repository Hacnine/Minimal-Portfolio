import React from "react";
import Title from "./Title";

function Contact() {
    return(
            <div className="flex flex-col mb-10 mx-auto">
                <div className="flex justify-center items-center">
                    <form action="https://getform.io/f/ea08b9f3-3fd5-491b-bed3-801f824b66c4"
                    method="POST"
                    className="flex flex-col w-full md:w-7/12">
                        <Title className="text-start font-bold">Conatct</Title>

                        
                        <input type="text" name="name"
                        placeholder="Name"
                        className="p-2 bg-transparent border-2 rounded-md focus:outline-none" />

                        <input type="text" name="email"
                        placeholder="Email"
                        className="my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none" />
                        
                        <textarea
                        name="message"
                        placeholder="Message"
                        rows="10"
                        className="p-2 bg-transparent border-2 rounded-md focus:outline-none mb-4
                        " />
                         <button type="button"
                         className="text-center inline-block px-8 py-3 w-max text-base font-medium rounded bg-gradient-to-t from-yellow-500 to-pink-500">
                            Work With Me
                         </button>
                    </form>

                </div>
            </div>
        )
}

export default Contact;
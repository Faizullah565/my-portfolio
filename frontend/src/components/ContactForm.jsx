import { axisEqualsRounded } from 'framer-motion'
import React, { useState } from 'react'
import { FaLocationArrow } from 'react-icons/fa'
import axios from 'axios'
import { toast } from 'react-toastify'
const ContacthtmlForm = () => {
    const [userMessage, setUserMessage] = useState({
        name: "",
        email: "",
        message: ""
    })
    const handleMessage=async(event)=>{
        event.preventDefault()
        if(
            userMessage.name==''||
            userMessage.email==''||
            userMessage.message==''
        ){
            toast.warn("All fields are required")
            return
        }
        // console.log(userMessage)
        try {
            const response = await axios.post("http://localhost:5000/api/message",
                userMessage
            )
            toast.success(response?.data?.message)
        } catch (error) {
            toast.error(error.response.message)
        }
    }
    return (
        <>
            <form className="text-cyan-400 max-w-md md:max-w-md p-2 mx-auto">
                <h3 className='text-3xl font-serif text-center my-5 py-2 text-cyan-500'>Send a Message</h3>
                <div class="mb-5">
                    <label htmlFor="email-alternative" className="block mb-2.5 text-sm font-medium text-heading">Name</label>
                    <input
                        type="text"
                        id="name-alternative"
                        value={userMessage.name}
                        className="rounded-lg bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow placeholder:text-body"
                        placeholder="Your Name"
                        required
                        minLength={2}
                        onChange={(e) => setUserMessage({...userMessage, name:e.target.value})}
                    />
                </div>
                <div class="mb-5">
                    <label htmlFor="email-alternative" className="block mb-2.5 text-sm font-medium text-heading">Email</label>
                    <input
                        type="email"
                        value={userMessage.email}
                        id="email-alternative"
                        className="rounded-lg bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow placeholder:text-body"
                        placeholder="Your Email"
                        required
                        onChange={(e) => setUserMessage({...userMessage, email:e.target.value})}
                    />
                </div>
                <div class="mb-5">
                    <label htmlFor="message" className="block mb-2.5 text-sm font-medium text-heading">Your message</label>
                    <textarea
                        id="message"
                        rows="4"
                        value={userMessage.message}
                        className="rounded-lg bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full p-3.5 shadow-xs placeholder:text-body"
                        placeholder="Your Message"
                        onChange={(e) => setUserMessage({...userMessage, message:e.target.value})}
                        required>
                    </textarea>
                </div>

                <button 
                type="submit" 
                onClick={handleMessage}
                className=" flex justify-center items-center w-full cursor-pointer text-black bg-cyan-400 rounded-xl box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-3 focus:outline-none">
                    <span className='mr-1'>
                        <FaLocationArrow />
                    </span>
                    Submit
                </button>
            </form>


        </>
    )
}

export default ContacthtmlForm
import foodAi from '../assets/aI-food.PNG'
import advocate from '../assets/advocate-connect.png'
import eCommerce from '../assets/e-commerce.PNG'
import event from '../assets/event.PNG'
import tourism from '../assets/tour.PNG'

export const practicalWorkData = [
    {
        id: 1,
        title: "AI Food Recognition",
        desc: "AI-based food detection and calorie counter using MERN + TensorFlow.",
        tech: "MERN + Python",
        image: foodAi,
        details:
            "This project detects food from images and calculates calories using a trained AI model integrated with MERN stack.",
    },
    {
        id: 2,
        title: "Tourism Booking System",
        desc: "Full MERN stack trip booking platform with admin dashboard.",
        tech: "Full Stack",
        image: tourism,
        link:"https://traveling-website-sha6.vercel.app/",
        details:
        "Users can book trips, hotels, and transport. Includes admin analytics and secure authentication.",
    },
    {
        id: 3,
        title: "E-Commerce Website",
        desc: "Full-stack MERN e-commerce platform with secure payments and admin panel.",
        link:"https://e-commerce-beta-three-96.vercel.app/",
        tech: "Full Stack",
        image: eCommerce,
        details:
            "A complete MERN stack e-commerce solution featuring product browsing, cart management, secure Stripe payments, order tracking, and a powerful admin dashboard for managing products, users, and orders."
    },
    {
        id: 4,
        title: "Event Management System",
        desc: "Smart event booking and management platform with real-time updates.",
        tech: "Frontend",
        image: event,
        link:"https://featured-events-lovat.vercel.app/",
        details:
            "An event management platform where users can explore events, book tickets, and receive notifications. Includes admin controls for creating events, managing bookings, and monitoring user activity with secure JWT authentication."
    },
    {
        id: 5,
        title: "Advocate Connect Platform",
        desc: "Legal-tech platform connecting clients with verified lawyers online.",
        tech: "Backend",
        link:"https://advocate-connect.vercel.app/",
        image: advocate,
        details:
            "Advocate Connect is a MERN stack legal-tech platform that allows users to find and connect with verified lawyers. It includes secure authentication, lawyer profile management, specialization filtering, appointment requests, and an admin dashboard for user and lawyer management."
    }
];

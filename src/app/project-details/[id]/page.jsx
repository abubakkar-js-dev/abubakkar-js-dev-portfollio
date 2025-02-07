"use client"
import Navbar from '@/app/components/Navbar/Navbar';
import { useParams } from 'next/navigation';
import React from 'react';

const ProjectDetailsPage = () => {
    const {id} = useParams();
    return (
        <div>
            {/* Navbar */}
            <Navbar />
            {/* Project Details */}
            <div className='container mx-auto pt-20'>
                Project Details
            </div>
        </div>
    );
};

export default ProjectDetailsPage;
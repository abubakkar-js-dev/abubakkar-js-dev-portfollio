import Navbar from '@/app/components/Navbar/Navbar';
import React from 'react';

const ProjectDetailsPage = () => {
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
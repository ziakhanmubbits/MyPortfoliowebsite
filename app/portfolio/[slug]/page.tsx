"use client"
import { useRouter } from 'next/router';
import React from 'react';

const PortfolioDetail = () => {
  const router = useRouter();
  const { slug } = router.query; // Access the dynamic slug from the URL

  // You can use the slug to fetch the specific portfolio item data
  // For now, let's mock the data based on the slug

  const portfolioItems = [
    {
      id: 1,
      title: "Full Project 2",
      image: "https://lmpixels.com/wp/leven-wp/full-width/wp-content/uploads/sites/3/2019/12/12.jpg",
      category: "Detailed",
      description: "This is a full description of Project 2.",
    },
    {
      id: 2,
      title: "YouTube Video 2",
      image: "https://lmpixels.com/wp/leven-wp/full-width/wp-content/uploads/sites/3/2019/12/7.jpg",
      category: "Video, YouTube Video",
      description: "This is a YouTube Video with amazing content.",
    },
    {
      id: 3,
      title: "Image 2",
      image: "https://lmpixels.com/wp/leven-wp/full-width/wp-content/uploads/sites/3/2019/12/1.jpg",
      category: "Image",
      description: "This is a beautiful image.",
    }
  ];

  const item = portfolioItems.find((i:any) => i.slug === slug);

  if (!item) {
    return <p>Loading...</p>; // Show loading state if the item isn't found
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-semibold">{item.title}</h1>
      <p className="text-lg text-gray-700">{item.category}</p>
      <div className="my-6">
        <img src={item.image} alt={item.title} className="w-full h-auto rounded-md shadow-lg" />
      </div>
      <p className="text-lg text-gray-800">{item.description}</p>
    </div>
  );
};

export default PortfolioDetail;

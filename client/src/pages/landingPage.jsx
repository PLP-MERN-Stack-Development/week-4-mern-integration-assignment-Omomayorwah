import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import BlogCard from '@/components/ui/blogCard';

function LandingPage() {
     const sample = [{
    featuredImage:"https://www.mooc.org/hubfs/applications-of-computer-programming.jpg",
    title: "Introduction to Programing",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    category: "Tech"
  }, 
  {
    featuredImage:"https://nevadahotelsandsuites.com/wp-content/uploads/2025/06/Nightlife-in-Lagos.webp",
    title: "Lagos Night Life",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    category: "Socials"
  }, 
  {
    featuredImage:"https://www.mckinsey.com/~/media/mckinsey/mckinsey%20global%20institute/our%20research/reimagining%20economic%20growth%20in%20africa%20turning%20diversity%20into%20opportunity/mgi-africa-growth-1412466945-standard-1536x1536.jpg?mw=677&car=42:25",
    title: "Africa Emerging Economies",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    category: "Economy"
  },
  ]
 return (
  <div>
    <div className='w-full'>
      <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>MyBlog</NavigationMenuItem>
        <NavigationMenuLink>Home</NavigationMenuLink>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink>Tech</NavigationMenuLink>
            <NavigationMenuLink>Socials</NavigationMenuLink>
            <NavigationMenuLink>Economy</NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuLink>Contact Us</NavigationMenuLink>
      </NavigationMenuList>
    </NavigationMenu>
    </div>
    <div className="container bg-blue-300 dark:bg-blue-600 h-60 flex justify-center items-center flex-col mt-4 w-full">
      <div >
        <h1 className='text-3xl font-bold text-gray-800 '>Welcome to MyBlog</h1>
        <p className='text-gray-600 mt-2'> Explore our different categories</p>
      </div>
      <div className='flex justify-center items-center gap-4 mb-8'>
        <Input placeholder="Search your blogs here.." className="p-3 w-full max-w-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-100" />
        <Button variant="outline" className="flex items-center gap-2">Search</Button>
      </div>
    </div>
    <div>
      <Row xs={1} md={3} className="g-4">
        {sample.map((item, idx) => (
          <Col key={idx}>
            <BlogCard {...item}/>
          </Col>
        ))}
      </Row>
    </div>  
   </div>
  )
}

export default LandingPage

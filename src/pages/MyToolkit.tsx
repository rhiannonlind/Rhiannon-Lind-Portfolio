import React from 'react'
import ReactLogo from '../assets/react.svg'
import JavaScriptLogo from '../assets/Javascript.png'
import TypeScriptLogo from '../assets/Typescript.png'
import TailwindLogo from '../assets/Tailwind.png'
import CSSHTMLLogo from '../assets/CSS3_HTML5.jpeg'
import BootstrapLogo from '../assets/Bootstrap.svg'
import SquarespaceLogo from '../assets/Squarespace.svg'
import StoryblokLogo from '../assets/Storyblok.png'
import FigmaLogo from '../assets/Figma.svg'
import ToolkitItem from '../components/ToolkitItem'
import '../styles/MyToolkit.css'

const MyToolkit: React.FC = () => {
  return (
    <section id="toolkit" className="min-h-screen py-12 ">
      <div className="container mx-auto px-16 max-w-7xl mt-16">
        <div className="text-center">
          <h1 className="text-3xl font-bold toolkit-heading-1">My Toolkit</h1>
          <hr className="my-4 max-w-[150px] mx-auto border-secondary border-2" />
        </div>
        <div className="flex justify-center my-16">
          <div className="grid grid-cols-3 gap-16 toolkit-grid">
            <ToolkitItem 
              title="React" 
              imageSrc={ReactLogo} 
              imageAlt="React Logo" 
              itemClass="toolkit-item"
              imgClass="toolkit-img"
            />
            <ToolkitItem 
              title="JavaScript" 
              imageSrc={JavaScriptLogo} 
              imageAlt="JavaScript Logo" 
              itemClass="toolkit-item"
              imgClass="toolkit-img"
            />
            <ToolkitItem 
              title="Typescript" 
              imageSrc={TypeScriptLogo} 
              imageAlt="Typescript Logo" 
              itemClass="toolkit-item"
              imgClass="toolkit-img"
            />
            <ToolkitItem 
              title="Tailwind" 
              imageSrc={TailwindLogo} 
              imageAlt="Tailwind Logo" 
              itemClass="toolkit-item"
              imgClass="toolkit-img"
            />
            <ToolkitItem 
              title="CSS3 + HTML5" 
              imageSrc={CSSHTMLLogo} 
              imageAlt="CSS3 + HTML5 Logo" 
              itemClass="toolkit-item"
              imgClass="toolkit-img"
            />
            <ToolkitItem 
              title="Bootstrap" 
              imageSrc={BootstrapLogo} 
              imageAlt="Bootstrap Logo" 
              itemClass="toolkit-item"
              imgClass="toolkit-img"
            />
            <ToolkitItem 
              title="Squarespace" 
              imageSrc={SquarespaceLogo} 
              imageAlt="Squarespace Logo" 
              itemClass="toolkit-item"
              imgClass="toolkit-img"
            />
            <ToolkitItem 
              title="Storyblok" 
              imageSrc={StoryblokLogo} 
              imageAlt="Storyblok Logo" 
              itemClass="toolkit-item"
              imgClass="toolkit-img"
            />
            <ToolkitItem 
              title="Figma" 
              imageSrc={FigmaLogo} 
              imageAlt="Figma Logo" 
              itemClass="toolkit-item"
              imgClass="toolkit-img"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default MyToolkit 
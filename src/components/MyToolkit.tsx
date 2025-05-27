import React from 'react'
import ReactLogo from '../assets/react.svg'
import JavaScriptLogo from '../assets/Javascript.png'
import TypeScriptLogo from '../assets/Typescript.png'
import TailwindLogo from '../assets/Tailwind.png'
import CSSHTMLLogo from '../assets/CSS3_HTML5.jpeg'
import BootstrapLogo from '../assets/Bootstrap.png'
import SquarespaceLogo from '../assets/Squarespace.png'
import StoryblokLogo from '../assets/Storyblok.png'
import FigmaLogo from '../assets/Figma.png'
import ToolkitItem from './ToolkitItem'

const MyToolkit = () => {
  return (
    <div className="max-w-6xl mx-auto my-32">
      <div className="text-center">
        <h1 className="heading-1">My Toolkit</h1>
        <hr className="my-4 max-w-[150px] mx-auto border-secondary border-2" />
      </div>
      <div className="grid grid-cols-3 gap-8 my-16">
        <ToolkitItem 
          title="React" 
          imageSrc={ReactLogo} 
          imageAlt="React Logo" 
        />
        <ToolkitItem 
          title="JavaScript" 
          imageSrc={JavaScriptLogo} 
          imageAlt="JavaScript Logo" 
        />
        <ToolkitItem 
          title="Typescript" 
          imageSrc={TypeScriptLogo} 
          imageAlt="Typescript Logo" 
        />
        <ToolkitItem 
          title="Tailwind" 
          imageSrc={TailwindLogo} 
          imageAlt="Tailwind Logo" 
        />
        <ToolkitItem 
          title="CSS3 + HTML5" 
          imageSrc={CSSHTMLLogo} 
          imageAlt="CSS3 + HTML5 Logo" 
        />
        <ToolkitItem 
          title="Bootstrap" 
          imageSrc={BootstrapLogo} 
          imageAlt="Bootstrap Logo" 
        />
        <ToolkitItem 
          title="Squarespace" 
          imageSrc={SquarespaceLogo} 
          imageAlt="Squarespace Logo" 
        />
        <ToolkitItem 
          title="Storyblok" 
          imageSrc={StoryblokLogo} 
          imageAlt="Storyblok Logo" 
        />
        <ToolkitItem 
          title="Figma" 
          imageSrc={FigmaLogo} 
          imageAlt="Figma Logo" 
        />
      </div>
    </div>
  )
}

export default MyToolkit 
import React from 'react'

interface ToolkitItemProps {
  title: string;
  imageSrc: string;
  imageAlt: string;
  itemClass?: string;
  imgClass?: string;
}

const ToolkitItem: React.FC<ToolkitItemProps> = ({ title, imageSrc, imageAlt, itemClass = '', imgClass = '' }) => {
  return (
    <div className={`bg-white rounded-lg w-[300px] h-auto flex flex-col pb-4 ${itemClass}`}>
      <div className="h-[60px] flex items-center justify-center">
        <h4 className="text-center heading-4">{title}</h4>
      </div>
      <div className="flex-1 flex items-start justify-center px-4 py-2">
        <div className={`w-[120px] h-[120px] flex items-center justify-center ${imgClass}`}>
          <img 
            src={imageSrc} 
            alt={imageAlt} 
            className="w-full h-full object-contain" 
          />
        </div>
      </div>
    </div>
  )
}

export default ToolkitItem 
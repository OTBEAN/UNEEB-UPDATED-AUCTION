import React from 'react'

const SectionContainer = ({ title, subtitle, children, className = '' }) => {
  return (
    <section className={`section-container py-12 ${className}`}>
      <div className="container mx-auto px-4">
        {(title || subtitle) && (
          <div className="text-center mb-10">
            {title && <h2 className="text-3xl font-bold text-gray-800 mb-2">{title}</h2>}
            {subtitle && <p className="text-gray-600 max-w-2xl mx-auto">{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}

export default SectionContainer
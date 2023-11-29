import React from 'react'

const HeroSection = () => {
  return (
    <main className='grid grid-cols-3 text-white m-8'>
        {/* Left Component */}
        <div className=' col-span-2'>
            <div>
                <h1 className=' text-2xl font-bold'>SIGNIFICANCE OF MENTAL HEALTH </h1>
            </div>
            <div>
                <h2 className=' text-xl'>Understanding the Significance of Mental Health</h2>
                <p>Mental health, a vital aspect of overall well-being, profoundly influences our thoughts, emotions, and behavior. It determines how we handle stress, relate to others, and make decisions. Good mental health isn’t merely the absence of mental illness; it embodies a positive state of emotional and psychological well-being.</p>
                <p>A strong mental state enables us to enjoy life, build strong relationships, and adapt to change and adversity. It fosters resilience, helping us to bounce back from life's challenges and maintain a sense of purpose and fulfillment. In today's fast-paced and often stressful world, mental health is increasingly recognized as key to maintaining both emotional and physical health.</p>
                <p>Prioritizing mental health is essential. It affects every aspect of our lives, from how we cope with difficulties to how we engage in relationships and make choices. It's as crucial as physical health for a balanced, productive life, forming the foundation of overall well-being and happiness.</p>
            </div>
        </div>
        {/* Right Component */}
        <div className='col-span-1'>
            <p>Testing</p>
        </div>
    </main>
  )
}

export default HeroSection

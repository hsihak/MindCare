import React from 'react'

const HeroSection = () => {
  return (
    <main className='grid grid-cols-4 text-white m-8'>
        {/* Left Component */}
        <div className=' col-span-3 grid gap-4'>
            <div>
                <h1 className=' text-3xl font-semibold'>SIGNIFICANCE OF MENTAL HEALTH </h1>
            </div>
            <div className='grid gap-4'>
                <h2 className=' text-xl'>Understanding the Significance of Mental Health</h2>
                <p>Mental health, a vital aspect of overall well-being, profoundly influences our thoughts, emotions, and behavior. It determines how we handle stress, relate to others, and make decisions. Good mental health isn’t merely the absence of mental illness; it embodies a positive state of emotional and psychological well-being.</p>
                <p>A strong mental state enables us to enjoy life, build strong relationships, and adapt to change and adversity. It fosters resilience, helping us to bounce back from life's challenges and maintain a sense of purpose and fulfillment. In today's fast-paced and often stressful world, mental health is increasingly recognized as key to maintaining both emotional and physical health.</p>
                <p>Prioritizing mental health is essential. It affects every aspect of our lives, from how we cope with difficulties to how we engage in relationships and make choices. It's as crucial as physical health for a balanced, productive life, forming the foundation of overall well-being and happiness.</p>
            </div>

            <div className=' text-2xl font-bold mt-4 pl-4'>
                <h4>IMPORTANT HELPLINES:</h4>
                <h4>1. 988</h4>
                <h4>2. 911</h4>
            </div>
        </div>
        {/* Right Component */}
        <div className='col-span-1 flex flex-col items-center'>
            <div className='bg-subheaderBg text-2xl w-9/12 py-10 rounded-2xl text-center'>
                <p>There is a hope even</p>
                <p>when your brain tells</p>
                <p>you there isn't</p>
                <p>-John Green</p>
            </div>
        </div>
    </main>
  )
}

export default HeroSection

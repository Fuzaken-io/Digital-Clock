import React from "react";

const ClockDisplay = ({ clockData }) => {
  const { 
    hours, 
    minutes, 
    seconds, 
    ampm, 
    day, 
    month, 
    date, 
    isPaused, 
    is24HourFormat,
    togglePause, 
    toggleFormat 
  } = clockData;
  
  return (
    // <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
    //   <div className="text-center mb-8">
    //     <h1 className="text-5xl font-bold tracking-tight mb-4">Digital Clock</h1>
    //   </div>
      
    //   <div className="bg-white rounded-3xl shadow-lg p-8 w-full max-w-xl relative overflow-hidden">
    //     {!is24Hour && (
    //       <span className="absolute top-6 right-8 text-gray-300">{ampm}</span>
    //     )}
        
    //     <div className="text-gray-400 text-center mb-6">
    //       {day}, {month} {date}
    //     </div>
        
    //     <div className="flex justify-center items-center text-8xl seven-segment">
    //       <div className="flex flex-col items-center">
    //         <div className="flex items-center">
    //           <span className="text-black">{hours}</span>
    //           <span className="text-blue-400 mx-2 mb-5">:</span>
    //           <span className="text-black">{minutes}</span>
    //           <span className="text-blue-400 mx-2 mb-5">:</span>
    //           <span className="text-black">{seconds}</span>
    //         </div>
    //         <div className="flex justify-between w-full mt-1">
    //           <span className="text-xs text-gray-400 ml-6">HR</span>
    //           <span className="text-xs text-gray-400">MIN</span>
    //           <span className="text-xs text-gray-400 mr-6">SEC</span>
    //         </div>
    //       </div>
    //     </div>
        
    //     <div className="flex justify-center mt-8 space-x-4">
    //       <button 
    //         onClick={togglePause}
    //         className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors"
    //         aria-label={isPaused ? "Play" : "Pause"}
    //       >
    //         {isPaused ? (
    //           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    //             <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
    //           </svg>
    //         ) : (
    //           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    //             <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
    //           </svg>
    //         )}
    //       </button>
          
    //       <button 
    //         onClick={toggleFormat}
    //         className="px-4 py-2 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors text-sm"
    //         aria-label="Toggle time format"
    //       >
    //         {is24Hour ? "12H" : "24H"}
    //       </button>
    //     </div>
    //   </div>
  
    //  </div>

    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-900 p-4">
  <div className="text-center mb-8">
    <h1 className="text-5xl font-bold tracking-tight mb-4 text-white">Digital Clock</h1>
  </div>

  <div className="rounded-3xl shadow-lg p-8 w-full max-w-xl relative overflow-hidden 
                  bg-white/10 backdrop-blur-xl border border-white/30">
    {!is24HourFormat && (
      <span className="absolute top-6 right-8 text-gray-200">{ampm}</span>
    )}

    <div className="text-gray-300 text-center mb-6">
      {day}, {month} {date}
    </div>

    <div className="flex justify-center items-center text-8xl text-white seven-segment">
      <div className="flex flex-col items-center">
        <div className="flex items-center">
          <span>{hours}</span>
          <span className="text-blue-400 mx-2 mb-5">:</span>
          <span>{minutes}</span>
          <span className="text-blue-400 mx-2 mb-5">:</span>
          <span>{seconds}</span>
        </div>
        <div className="flex justify-between w-full mt-1 text-xs text-gray-300 font-sans">
          <span className="ml-6">HR</span>
          <span>MIN</span>
          <span className="mr-6">SEC</span>
        </div>
      </div>
    </div>

    <div className="flex justify-center mt-8 space-x-4">
      <button 
        onClick={togglePause}
        className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/30 
                  flex items-center justify-center text-gray-300 hover:bg-white/30 transition-colors"
        aria-label={isPaused ? "Play" : "Pause"}
      >
        {isPaused ? (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
          </svg>
        )}
      </button>

      <button 
        onClick={toggleFormat}
        className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/30 
                  text-gray-300 hover:bg-white/30 transition-colors text-sm"
        aria-label="Toggle time format"
      >
        {is24HourFormat ? "12H" : "24H"}
      </button>
    </div>
  </div>
</div>

   );
 };

export default ClockDisplay;
import { useRef } from 'react';
import { PHOTOS } from './photos';

const isVideo = (url: string) => /\.(mp4|webm|ogg|mov)$/i.test(url);

function App() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col justify-center overflow-hidden font-sans">
      {/* Header */}
      <div className="px-6 py-8 text-center">
        <h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-800">
          sricharan bidai yojana 🫡 😭 😞
        </h1>
        <p className="text-slate-400 text-sm mt-1">California Bound</p>
      </div>

      {/* Carousel Container */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar px-[10vw] md:px-[25vw] pb-10"
      >
        {PHOTOS.map((item) => (
          <div
            key={item.id}
            className="flex-none w-[80vw] md:w-[50vw] snap-center"
          >
            {/* 1. Fixed aspect ratio container (aspect-video or aspect-[4/3]) 
                2. h-[50vh] ensures it fits vertically on any phone/laptop screen 
            */}
            <div className="relative h-[50vh] md:h-[60vh] w-full rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden flex items-center justify-center">

              {isVideo(item.url) ? (
                <video
                  src={item.url}
                  className="max-w-full max-h-full object-contain" // "contain" ensures no cropping
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              ) : (
                <img
                  src={item.url}
                  alt={item.title}
                  className="max-w-full max-h-full object-contain p-2" // "contain" ensures full image is visible
                />
              )}

            </div>

            {/* Title below the card for a cleaner "gallery" look */}
            <div className="mt-4 px-2">
              <h2 className="text-sm font-medium text-slate-700">{item.title}</h2>
            </div>
          </div>
        ))}
      </div>

      {/* Progress Line */}
      <div className="flex justify-center mt-4">
        <div className="h-1 w-24 bg-slate-200 rounded-full overflow-hidden">
          <div className="h-full bg-slate-400 w-1/3 animate-pulse" />
        </div>
      </div>
    </div>
  );
}

export default App;
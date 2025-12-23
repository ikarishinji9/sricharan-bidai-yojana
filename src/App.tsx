import { useRef, useState } from 'react';
import { PHOTOS } from './photos';

const isVideo = (url: string) => /\.(mp4|webm|ogg|mov)$/i.test(url);

function App() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeVideoId, setActiveVideoId] = useState<number | null>(null);

  const toggleVideoMute = (id: number) => {
    const video = document.getElementById(`video-${id}`) as HTMLVideoElement;
    if (video) {
      video.muted = !video.muted;
      // Force a re-render to update the icon
      setActiveVideoId(video.muted ? null : id);
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col justify-center overflow-hidden font-sans">
      {/* Header */}
      <div className="px-6 py-8 text-center">
        <h1 className="text-2xl font-semibold text-slate-800">sricharan bidai yojana 🫡 😭 😞</h1>
        <p className="text-slate-400 text-xs uppercase tracking-[0.2em] mt-2">california is lucky to have you king</p>
      </div>

      {/* Carousel */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar px-[10vw] md:px-[25vw] pb-10"
      >
        {PHOTOS.map((item) => (
          <div key={item.id} className="flex-none w-[80vw] md:w-[50vw] snap-center group">
            <div className="relative h-[50vh] md:h-[60vh] w-full rounded-2xl border border-slate-200 bg-black shadow-sm overflow-hidden flex items-center justify-center">

              {isVideo(item.url) ? (
                <div className="relative w-full h-full group">
                  <video
                    id={`video-${item.id}`}
                    src={item.url}
                    className="w-full h-full object-contain cursor-pointer"
                    autoPlay
                    muted // Essential for autoplay to work
                    loop
                    playsInline
                    onClick={() => toggleVideoMute(item.id)}
                  />

                  {/* Video Controls Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    <div className="bg-white/20 backdrop-blur-md p-4 rounded-full text-white text-2xl">
                      {activeVideoId === item.id ? "🔊" : "🔇"}
                    </div>
                  </div>

                  {/* Top Label */}
                  <div className="absolute top-4 left-4 z-20">
                    <button
                      onClick={() => toggleVideoMute(item.id)}
                      className="bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase border border-slate-200 shadow-sm"
                    >
                      {activeVideoId === item.id ? "Mute Audio" : "Play with Sound"}
                    </button>
                  </div>
                </div>
              ) : (
                <img
                  src={item.url}
                  alt={item.title}
                  className="max-w-full max-h-full object-contain p-2 bg-white"
                />
              )}
            </div>

            <div className="mt-4 px-2 flex justify-between items-center">
              <h2 className="text-sm font-medium text-slate-700">{item.title}</h2>
              <span className="text-[10px] text-slate-400 font-mono">0{item.id}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center text-[10px] text-slate-300 uppercase tracking-widest">
        Tap videos for sound • Swipe to navigate
      </div>
    </div>
  );
}

export default App;
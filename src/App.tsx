import { useState } from 'react';

interface Photo {
  id: number;
  url: string;
  title: string;
}

const PHOTOS: Photo[] = [
  {
    id: 1,
    url: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Memory 1',
  },
  {
    id: 2,
    url: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Memory 2',
  },
  {
    id: 3,
    url: 'https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Memory 3',
  },
  {
    id: 4,
    url: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Memory 4',
  },
  {
    id: 5,
    url: 'https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Memory 5',
  },
  {
    id: 6,
    url: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Memory 6',
  },
  {
    id: 7,
    url: 'https://images.pexels.com/photos/3965857/pexels-photo-3965857.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Memory 7',
  },
  {
    id: 8,
    url: 'https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Memory 8',
  },
];

function App() {
  const [selectedId, setSelectedId] = useState < number | null > (null);
  const selectedPhoto = PHOTOS.find((p) => p.id === selectedId);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 mb-4">
            See You Soon
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            A collection of memories from before the big California adventure. We'll miss you!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {PHOTOS.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setSelectedId(photo.id)}
              className="group cursor-pointer relative overflow-hidden rounded-lg aspect-square shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={photo.url}
                alt={photo.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>

      {selectedPhoto && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50 backdrop-blur-sm"
          onClick={() => setSelectedId(null)}
        >
          <div
            className="max-w-2xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-white rounded-lg overflow-hidden shadow-2xl">
              <img
                src={selectedPhoto.url}
                alt={selectedPhoto.title}
                className="w-full h-auto"
              />
              <div className="p-6 bg-slate-50">
                <h2 className="text-2xl font-semibold text-slate-900">
                  {selectedPhoto.title}
                </h2>
                <button
                  onClick={() => setSelectedId(null)}
                  className="mt-4 w-full bg-slate-900 text-white py-2 rounded-lg hover:bg-slate-800 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

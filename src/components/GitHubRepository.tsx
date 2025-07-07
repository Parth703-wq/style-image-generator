
import { useState } from 'react';
import { Upload } from 'lucide-react';

export const GitHubRepository = () => {
  const [repositoryUrl, setRepositoryUrl] = useState('');
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      console.log('Files dropped:', e.dataTransfer.files);
    }
  };

  const handleGenerate = () => {
    console.log('Generating documentation for repository:', repositoryUrl);
  };

  return (
    <div className="backdrop-blur-sm rounded-xl p-8 shadow-xl border border-slate-600" style={{ backgroundColor: '#334155' }}>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold text-white">GitHub Repository Analysis</h2>
        <button
          onClick={handleGenerate}
          className="text-white px-6 py-2 rounded-lg font-medium transition-all hover:opacity-90"
          style={{ background: 'linear-gradient(135deg, #8b5cf6 0%, #a855f7 100%)' }}
        >
          Generate Documentation
        </button>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-white font-medium mb-3">
            GitHub Repository URL
          </label>
          <input
            type="url"
            value={repositoryUrl}
            onChange={(e) => setRepositoryUrl(e.target.value)}
            placeholder="https://github.com/username/repository"
            className="w-full border border-slate-500 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:border-transparent transition-all"
            style={{ 
              backgroundColor: '#1e293b',
              focusRingColor: '#8b5cf6'
            }}
          />
        </div>

        <div className="flex items-center justify-center">
          <span className="text-slate-400 px-3 py-1 rounded-full text-sm" style={{ backgroundColor: '#1e293b' }}>OR</span>
        </div>

        <div>
          <label className="block text-white font-medium mb-3">
            Upload Repository Files
          </label>
          <div
            className={`border-2 border-dashed rounded-xl p-12 text-center transition-all ${
              dragActive
                ? 'bg-purple-400/10'
                : 'hover:border-slate-400'
            }`}
            style={{ 
              borderColor: dragActive ? '#8b5cf6' : '#64748b'
            }}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            <Upload className="w-12 h-12 text-slate-400 mx-auto mb-4" />
            <p className="text-white font-medium mb-2">Click to upload files or drag and drop</p>
            <p className="text-slate-400 text-sm">Supports .js, .jsx, .ts, .tsx files</p>
          </div>
        </div>
      </div>
    </div>
  );
};

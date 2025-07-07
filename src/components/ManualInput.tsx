
import { useState } from 'react';

export const ManualInput = () => {
  const [code, setCode] = useState('');
  const [lineCount, setLineCount] = useState(1);
  const [charCount, setCharCount] = useState(0);

  const handleCodeChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setCode(value);
    setLineCount(value.split('\n').length);
    setCharCount(value.length);
  };

  const handleGenerate = () => {
    console.log('Generating documentation for code:', code);
    // Add generation logic here
  };

  return (
    <div className="bg-slate-800 rounded-xl p-8 shadow-xl">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold text-white">Code Input</h2>
        <button
          onClick={handleGenerate}
          className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
        >
          Generate Documentation
        </button>
      </div>

      <div className="space-y-4">
        <div className="relative">
          <textarea
            value={code}
            onChange={handleCodeChange}
            placeholder="Paste your code here..."
            className="w-full h-96 bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-400 font-mono text-sm leading-6 resize-none focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
            style={{ fontSize: '14px', lineHeight: '1.5' }}
          />
        </div>

        <div className="flex justify-between items-center text-sm text-slate-400">
          <span>Lines: {lineCount}</span>
          <span>Characters: {charCount}</span>
        </div>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { ContentArea } from './components/ContentArea';
import { pythonContent } from './data/pythonContent';
import { Code2, GraduationCap } from 'lucide-react';

export default function App() {
  const [selectedTopic, setSelectedTopic] = useState('intro-python');

  return (
    <div className="min-h-screen bg-slate-950 text-gray-100">
      {/* Header */}
      <header className="bg-slate-900 border-b border-slate-700 sticky top-0 z-50">
        <div className="max-w-[2000px] mx-auto px-8 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="relative group">
                <div className="p-3 bg-blue-600 rounded-xl">
                  <Code2 className="text-white" size={28} strokeWidth={2.5} />
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">
                  Python Mastery
                </h1>
                <p className="text-sm text-blue-200 mt-0.5 flex items-center gap-2">
                  <GraduationCap size={14} />
                  Complete Learning Platform
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex max-w-[2000px] mx-auto">
        <Sidebar 
          selectedTopic={selectedTopic} 
          onSelectTopic={setSelectedTopic}
        />
        <ContentArea 
          content={pythonContent[selectedTopic]} 
        />
      </div>
    </div>
  );
}
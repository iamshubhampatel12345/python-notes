import React, { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';

interface SidebarProps {
  selectedTopic: string;
  onSelectTopic: (topic: string) => void;
}

interface Phase {
  id: string;
  title: string;
  topics: { id: string; title: string }[];
}

const phases: Phase[] = [
  {
    id: 'phase1',
    title: 'Phase 1: Python Fundamentals',
    topics: [
      { id: 'intro-python', title: 'Introduction to Python' },
      { id: 'python-basics', title: 'Python Basics' },
      { id: 'operators', title: 'Operators' },
      { id: 'control-flow', title: 'Control Flow' },
    ],
  },
  {
    id: 'phase2',
    title: 'Phase 2: Core Python',
    topics: [
      { id: 'data-structures', title: 'Data Structures' },
      { id: 'functions', title: 'Functions' },
      { id: 'modules', title: 'Modules & Packages' },
    ],
  },
  {
    id: 'phase3',
    title: 'Phase 3: OOP',
    topics: [
      { id: 'oop-concepts', title: 'OOP Concepts' },
      { id: 'oop-principles', title: 'OOP Principles' },
      { id: 'advanced-oop', title: 'Advanced OOP' },
    ],
  },
  {
    id: 'phase4',
    title: 'Phase 4: Advanced Python',
    topics: [
      { id: 'exception-handling', title: 'Exception Handling' },
      { id: 'file-handling', title: 'File Handling' },
      { id: 'regex', title: 'Regular Expressions' },
      { id: 'memory-management', title: 'Memory Management' },
    ],
  },
  {
    id: 'phase5',
    title: 'Phase 5: OS and System',
    topics: [
      { id: 'os-system', title: 'OS & System Programming' },
    ],
  },
  {
    id: 'phase6',
    title: 'Phase 6: Databases',
    topics: [
      { id: 'sql-fundamentals', title: 'SQL Fundamentals' },
      { id: 'python-databases', title: 'Python with Databases' },
    ],
  },
];

export function Sidebar({ selectedTopic, onSelectTopic }: SidebarProps) {
  const [expandedPhases, setExpandedPhases] = useState<string[]>(['phase1']);

  const togglePhase = (phaseId: string) => {
    setExpandedPhases((prev) =>
      prev.includes(phaseId)
        ? prev.filter((id) => id !== phaseId)
        : [...prev, phaseId]
    );
  };

  return (
    <aside className="w-[320px] bg-slate-900 border-r border-slate-700 h-[calc(100vh-89px)] overflow-y-auto sticky top-[89px]">
      <div className="p-5">
        <div className="mb-5">
          <h2 className="text-xs font-semibold text-blue-300 uppercase tracking-wider mb-2">Course Curriculum</h2>
          <div className="h-1 w-14 bg-blue-500 rounded-full"></div>
        </div>
        
        <div className="space-y-3">
          {phases.map((phase) => (
            <div key={phase.id} className="group">
              <button
                onClick={() => togglePhase(phase.id)}
                className="w-full flex items-center justify-between p-3 rounded-xl bg-slate-800 border border-slate-700"
              >
                <span className="text-sm font-semibold text-slate-100">
                  {phase.title}
                </span>
                {expandedPhases.includes(phase.id) ? (
                  <ChevronDown size={18} className="text-blue-400" />
                ) : (
                  <ChevronRight size={18} className="text-slate-400" />
                )}
              </button>
              {expandedPhases.includes(phase.id) && (
                <div className="mt-2 space-y-1.5 pl-2">
                  {phase.topics.map((topic) => (
                    <button
                      key={topic.id}
                      onClick={() => onSelectTopic(topic.id)}
                      className={`w-full text-left px-4 py-2.5 rounded-lg text-sm ${
                        selectedTopic === topic.id
                          ? 'bg-blue-600 text-white font-semibold'
                          : 'text-slate-300 bg-slate-800'
                      }`}
                    >
                      <span className="block">{topic.title}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
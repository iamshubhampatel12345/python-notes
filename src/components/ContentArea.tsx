import React from 'react';
import { CodeBlock } from './CodeBlock';
import { BookOpen, Lightbulb, Target } from 'lucide-react';

interface ContentSection {
  type: 'text' | 'code' | 'list' | 'note' | 'heading';
  content: string | string[];
  language?: string;
  title?: string;
}

interface Content {
  title: string;
  description: string;
  sections: ContentSection[];
}

interface ContentAreaProps {
  content: Content;
}

export function ContentArea({ content }: ContentAreaProps) {
  if (!content) {
    return (
      <main className="flex-1 p-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center py-24">
            <div className="relative inline-block mb-5">
              <BookOpen className="w-20 h-20 text-blue-400 mx-auto" strokeWidth={1.5} />
            </div>
            <h2 className="text-xl font-bold text-slate-200 mb-2">Welcome to Python Mastery</h2>
            <p className="text-base text-slate-400">Select a topic from the curriculum to begin your learning journey</p>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="flex-1 p-8 overflow-y-auto h-[calc(100vh-89px)] bg-slate-950">
      <div className="max-w-5xl mx-auto">
        {/* Title Card */}
        <div className="relative mb-10 p-8 rounded-xl bg-slate-900 border border-slate-700">
          <div className="flex items-start gap-5">
            <div className="p-4 bg-blue-600 rounded-xl">
              <BookOpen className="text-white" size={30} strokeWidth={2} />
            </div>
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-white mb-3">
                {content.title}
              </h2>
              <p className="text-base text-slate-300">
                {content.description}
              </p>
            </div>
          </div>
        </div>

        {/* Sections */}
        <div className="space-y-8">
          {content.sections.map((section, index) => (
            <div key={index}>
              {section.type === 'heading' && (
                <div className="flex items-center gap-3 mb-6 mt-12">
                  <div className="p-2 bg-slate-800 rounded-lg">
                    <Target className="text-blue-400" size={22} strokeWidth={2} />
                  </div>
                  <h3 className="text-2xl font-bold text-blue-400">
                    {section.content}
                  </h3>
                </div>
              )}
              
              {section.type === 'text' && (
                <p className="text-slate-200 text-base mb-5">
                  {section.content}
                </p>
              )}
              
              {section.type === 'code' && (
                <CodeBlock
                  code={section.content as string}
                  language={section.language || 'python'}
                  title={section.title}
                />
              )}
              
              {section.type === 'list' && (
                <ul className="space-y-3">
                  {(section.content as string[]).map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-200 bg-slate-800 p-4 rounded-lg border border-slate-700">
                      <span className="flex-shrink-0 w-7 h-7 bg-blue-600 rounded-lg flex items-center justify-center text-white text-sm font-bold">
                        {i + 1}
                      </span>
                      <span className="flex-1 pt-0.5 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              )}
              
              {section.type === 'note' && (
                <div className="p-5 rounded-xl bg-slate-900 border border-blue-500">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="p-2.5 bg-blue-900 rounded-lg">
                        <Lightbulb className="text-blue-400" size={20} strokeWidth={2} />
                      </div>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-blue-300 mb-2 uppercase tracking-wider">💡 Pro Tip</p>
                      <p className="text-slate-200 text-sm">
                        {section.content}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom spacing */}
        <div className="h-20"></div>
      </div>
    </main>
  );
}
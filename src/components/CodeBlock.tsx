import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  language?: string;
  title?: string;
}

export function CodeBlock({ code, language = 'python', title }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      // Try modern clipboard API first
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } else {
        // Fallback for older browsers or blocked clipboard API
        fallbackCopyTextToClipboard(code);
      }
    } catch (err) {
      // If clipboard API fails, use fallback method
      fallbackCopyTextToClipboard(code);
    }
  };

  const fallbackCopyTextToClipboard = (text: string) => {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.top = '0';
    textArea.style.left = '0';
    textArea.style.opacity = '0';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
      document.execCommand('copy');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text:', err);
    }

    document.body.removeChild(textArea);
  };

  return (
    <div className="my-6">
      {/* Program Title */}
      <div className="mb-2.5">
        <h4 className="text-base font-semibold text-blue-300 flex items-center gap-2">
          <span className="text-blue-400">📝</span>
          {title || 'Program Example'}
        </h4>
      </div>
      
      <div className="relative rounded-xl overflow-hidden bg-slate-900 border border-slate-700">
        {/* Decorative top bar */}
        <div className="absolute top-0 left-0 right-0 h-9 bg-slate-800"></div>
        <div className="absolute top-3.5 left-4 flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3 pt-11 bg-slate-800 border-b border-slate-700">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
            <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">
              {language}
            </span>
          </div>
          <button
            onClick={handleCopy}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-xs font-semibold"
          >
            {copied ? (
              <>
                <Check size={16} className="text-white" strokeWidth={2.5} />
                <span className="text-white">Copied!</span>
              </>
            ) : (
              <>
                <Copy size={16} className="text-white" strokeWidth={2.5} />
                <span className="text-white">Copy Code</span>
              </>
            )}
          </button>
        </div>
        
        {/* Code */}
        <pre className="p-6 overflow-x-auto bg-slate-950">
          <code className="text-sm text-slate-100 font-mono">
            {code}
          </code>
        </pre>
      </div>
    </div>
  );
}
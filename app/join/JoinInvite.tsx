'use client';

import { useEffect, useState } from 'react';

const APP_STORE_URL = 'https://apps.apple.com/app/id6758370961';

export default function JoinInvite() {
  const [code, setCode] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const match = window.location.pathname.match(/\/join\/(\d{6})/);
    setCode(match ? match[1] : null);
  }, []);

  const copyCode = async () => {
    if (!code) return;
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard unavailable; the code is visible on screen anyway
    }
  };

  return (
    <div className="min-h-screen py-32 px-4 sm:px-8 relative z-10">
      <div className="max-w-xl mx-auto pt-8 sm:pt-20">
        <div className="bg-fridge-cream/80 backdrop-blur-md border-2 border-fridge-brown rounded-[40px] p-8 md:p-12 shadow-2xl text-center">
          <img src="/fridge_hi.png" alt="" className="w-28 h-28 mx-auto mb-6 animate-float" />
          <h1 className="text-4xl md:text-5xl font-black mb-4 text-fridge-brown font-poppins tracking-tight">
            You&apos;re invited!
          </h1>
          <p className="text-lg font-medium text-fridge-brown/70 font-inter mb-8">
            Join this fridge to share your grocery list and notes in real time.
          </p>

          {code && (
            <div className="mb-8">
              <p className="text-sm font-bold uppercase tracking-widest text-fridge-brown/50 mb-2">Fridge code</p>
              <button
                onClick={copyCode}
                className="inline-block bg-white border-2 border-fridge-brown rounded-2xl pl-[calc(2rem+0.3em)] pr-8 py-4 text-4xl font-black tracking-[0.3em] text-fridge-brown font-poppins"
              >
                {code}
              </button>
              <p className="text-sm text-fridge-brown/50 mt-2">{copied ? 'Copied!' : 'Tap to copy'}</p>
            </div>
          )}

          <div className="flex flex-col gap-3">
            <a
              href={APP_STORE_URL}
              className="bg-fridge-brown text-white px-8 py-4 rounded-2xl font-black text-lg shadow-xl hover:scale-105 transition-all active:scale-95"
            >
              Get Our Fridge
            </a>
            {code && (
              <a
                href={`ourfridge://join/${code}`}
                className="border-2 border-fridge-brown text-fridge-brown px-8 py-4 rounded-2xl font-black text-lg hover:scale-105 transition-all active:scale-95"
              >
                I have the app, open it
              </a>
            )}
          </div>

          <ol className="text-left text-fridge-brown/80 font-inter mt-10 space-y-2 max-w-xs mx-auto">
            <li><span className="font-black">1.</span> Download Our Fridge</li>
            <li><span className="font-black">2.</span> Tap &ldquo;Have an invite code?&rdquo;</li>
            <li><span className="font-black">3.</span> Enter {code ? <span className="font-black">{code}</span> : 'your code'} and you&apos;re in</li>
          </ol>
        </div>
      </div>
    </div>
  );
}

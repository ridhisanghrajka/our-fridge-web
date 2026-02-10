import Link from 'next/link';

export const metadata = {
  title: "Support - Our Fridge",
};

export default function SupportPage() {
  return (
    <div className="min-h-screen py-32 px-8 relative z-10">
      <div className="max-w-3xl mx-auto pt-20">
        <div className="bg-fridge-cream/80 backdrop-blur-md border-2 border-fridge-brown rounded-[40px] p-8 md:p-12 shadow-2xl">
          <h1 className="text-4xl md:text-5xl font-black mb-8 text-fridge-brown font-poppins tracking-tight">Contact Support</h1>
          
          <div className="space-y-8 text-fridge-brown/80 font-inter leading-relaxed text-center py-8">
            <div className="mb-12">
              <div className="w-24 h-24 bg-fridge-peach/20 rounded-full flex items-center justify-center mx-auto mb-6 animate-float">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#6B4B3E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
              </div>
              <h2 className="text-3xl font-black mb-4 text-fridge-brown font-poppins tracking-tight">We're here to help!</h2>
              <p className="max-w-md mx-auto text-lg font-medium opacity-70">
                Have a question, feedback, or need help with your fridge? Send us a message and we'll get back to you as soon as possible.
              </p>
            </div>

            <a 
              href="mailto:ourfridgeapp@gmail.com" 
              className="inline-block bg-fridge-brown text-white px-12 py-5 rounded-2xl font-black text-xl shadow-xl hover:scale-105 transition-all active:scale-95"
            >
              Email Support
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

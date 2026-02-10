import Link from 'next/link';

export const metadata = {
  title: "Terms & Conditions - Our Fridge",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen py-32 px-8 relative z-10">
      <div className="max-w-3xl mx-auto pt-20">
        <div className="bg-fridge-cream/80 backdrop-blur-md border-2 border-fridge-brown rounded-[40px] p-8 md:p-12 shadow-2xl">
          <h1 className="text-4xl md:text-5xl font-black mb-8 text-fridge-brown font-poppins tracking-tight">Terms & Conditions</h1>
          
          <div className="space-y-8 text-fridge-brown/80 font-inter leading-relaxed">
            <section>
              <p className="font-bold mb-4 text-fridge-brown">Effective Date: January 30, 2026</p>
              <p>
                Welcome to Our Fridge. By accessing or using our application, you agree to be bound by these Terms & Conditions. If you do not agree to these terms, please do not use the application.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black mb-4 text-fridge-brown font-poppins">1. Acceptance of Terms</h2>
              <p>
                By creating an account or using Our Fridge, you agree to these Terms and our Privacy Policy. Our service allows you to sync grocery lists and kitchen notes with other users ("Partners") in real-time.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black mb-4 text-fridge-brown font-poppins">2. Subscription and Payments</h2>
              <p className="mb-4">
                Access to certain premium features ("Our Fridge Pro") requires a paid subscription.
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li><strong>Billing:</strong> Subscriptions are processed through the Apple App Store or Google Play Store. We use RevenueCat to manage subscription status.</li>
                <li><strong>Auto-Renewal:</strong> Subscriptions automatically renew unless cancelled at least 24 hours before the end of the current period.</li>
                <li><strong>Management:</strong> You can manage and cancel your subscription directly through your device's app store settings.</li>
                <li><strong>Refunds:</strong> All refund requests are handled by the respective app store in accordance with their policies.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-black mb-4 text-fridge-brown font-poppins">3. Shared Content and Ownership</h2>
              <p>
                You retain ownership of the content you create, including grocery items, photos, drawings, and notes. However, by using the app, you grant your paired partners access to view, edit, and delete this content as part of the shared fridge experience.
              </p>
              <p className="mt-4">
                You are responsible for ensuring that any content you share does not violate the rights of others or contain prohibited material.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black mb-4 text-fridge-brown font-poppins">4. Smart Reminders and Location</h2>
              <p>
                Our Fridge provides "Smart Reminders" using location-based geofencing. These reminders are provided as a convenience. We do not guarantee the accuracy of location-based alerts, as they depend on your device's GPS signal and system settings.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black mb-4 text-fridge-brown font-poppins">5. User Responsibilities</h2>
              <p className="mb-2 font-bold text-fridge-brown">You are responsible for:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Maintaining the security of your account and pairing code.</li>
                <li>Any activity that occurs under your account.</li>
                <li>Respecting the privacy and consent of your paired partners.</li>
                <li>Ensuring your use of the app complies with all applicable laws.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-black mb-4 text-fridge-brown font-poppins">6. Disclaimer of Warranties</h2>
              <p>
                Our Fridge is provided "as is" and "as available." We do not warrant that the service will be uninterrupted, error-free, or that your grocery lists will never experience sync delays. We are not responsible for any household decisions or purchases made based on the app's content.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black mb-4 text-fridge-brown font-poppins">7. Termination</h2>
              <p>
                We reserve the right to suspend or terminate your access to the service at our discretion if we believe you have violated these Terms. You may delete your account and data at any time through the app settings.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black mb-4 text-fridge-brown font-poppins">8. Contact Us</h2>
              <p>
                If you have any questions about these Terms, please contact us at: <a href="mailto:ourfridgeapp@gmail.com" className="underline font-bold">ourfridgeapp@gmail.com</a>
              </p>
            </section>
          </div>
          
          <div className="mt-12 pt-8 border-t-2 border-fridge-brown/10 text-center">
            <Link href="/" className="text-fridge-brown font-bold hover:opacity-70 transition-opacity">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

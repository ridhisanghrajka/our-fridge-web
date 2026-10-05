import Link from 'next/link';

export const metadata = {
  title: "Privacy Policy - Our Fridge",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen py-32 px-8 relative z-10">
      <div className="max-w-3xl mx-auto pt-20">
        <div className="bg-fridge-cream/80 backdrop-blur-md border-2 border-fridge-brown rounded-[40px] p-8 md:p-12 shadow-2xl">
          <h1 className="text-4xl md:text-5xl font-black mb-8 text-fridge-brown font-poppins tracking-tight">Privacy Policy</h1>
          <div className="space-y-8 text-fridge-brown/80 font-inter leading-relaxed">
            <section>
              <p className="font-bold mb-4 text-fridge-brown">Last Updated: February 16, 2026</p>
              <p>
                At Our Fridge, we take your privacy seriously. This Privacy Policy outlines our practices concerning the handling of user data for our mobile application and related services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black mb-4 text-fridge-brown font-poppins">Data Collection and Storage</h2>
              <p className="mb-4">
                Our Fridge is designed to help you and your partner stay synchronized. Your shared grocery lists, fridge notes, and profile information are stored securely in our Firebase database. We use industry-standard encryption and security measures to protect your data.
              </p>
              <p className="mb-2 font-bold text-fridge-brown">We collect and store the following types of data:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li><strong className="text-fridge-brown">Account Information:</strong> Name, email address, and profile photo.</li>
                <li><strong className="text-fridge-brown">Fridge Content:</strong> Grocery items (including names, quantities, emojis, and item photos) and shared notes (including drawings, text, and digital magnets).</li>
                <li><strong className="text-fridge-brown">Pairing Data:</strong> Information used to connect your account with your partner's account.</li>
                <li><strong className="text-fridge-brown">Device Information:</strong> We collect device identifiers (such as your iPhone's unique ID) and push notification tokens to deliver service-related alerts and synchronize data across your devices.</li>
                <li><strong className="text-fridge-brown">App Usage Data:</strong> Anonymous diagnostic and usage data to improve app performance and user experience.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-black mb-4 text-fridge-brown font-poppins">Location Services</h2>
              <p>
                Our Fridge uses background geofencing for grocery reminders. Users are first prompted for <strong>"While In Use"</strong> location permissions. To enable background alerts (e.g., notifying you when you arrive at a grocery store), the app provides a clear educational prompt and a direct link to the System Settings where users can select <strong>"Always"</strong> as required by iOS guidelines.
              </p>
              <p className="mt-4">
                This allows the app to process your location even when it is closed or not in use. We store your designated reminder locations securely in our database to keep your settings synchronized, but we do not track or store a history of your continuous movements or real-time location.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black mb-4 text-fridge-brown font-poppins">Recipe Importing & AI Processing</h2>
              <p>
                When you use our "Import Recipe" feature, the app processes the public URL you provide to extract recipe information (such as ingredients and instructions). This processing is performed by our secure backend and may involve third-party service providers (such as OpenAI) to structure the data. No personal information, such as your name, email, or location, is shared with these third-party AI providers during this process. We only process the content of the public recipe URL to provide you with the recipe management service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black mb-4 text-fridge-brown font-poppins">Subscription and Payment Data</h2>
              <p>
                When you purchase a premium subscription, payment processing is handled securely by the Apple App Store or Google Play Store. We use <strong>RevenueCat</strong> to manage subscription status. We do not have access to or store your credit card details or payment information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black mb-4 text-fridge-brown font-poppins">Data Usage</h2>
              <p className="mb-2 font-bold text-fridge-brown">Your data is used to:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Provide and maintain the Our Fridge service.</li>
                <li>Synchronize lists and notes between paired partners.</li>
                <li>Send relevant notifications (item updates, geofence reminders).</li>
                <li>Improve app functionality and provide customer support.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-black mb-4 text-fridge-brown font-poppins">Data Sharing and Security</h2>
              <p>
                We do not sell or share your personal data with third parties for marketing purposes. Your shared content remains private between you and your paired partner.
              </p>
              <p className="mt-4">
                We implement industry-standard security measures, including secure Firebase authentication and encrypted database access, to protect your information from unauthorized access.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black mb-4 text-fridge-brown font-poppins">Children's Privacy</h2>
              <p>
                Our service is not directed to children under 13 years of age. We do not knowingly collect data from children under 13. If you are under 13, please do not use Our Fridge.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black mb-4 text-fridge-brown font-poppins">Data Retention & Deletion</h2>
              <p className="mb-4">
                Users may delete their account and all associated personal data at any time directly through the app's Settings menu. Upon deletion, your profile information is permanently removed from our databases.
              </p>
              <p>
                <strong>Shared Content:</strong> Because Our Fridge is a collaborative service, content shared within a "Fridge" (such as grocery items, notes, and recipes) may remain accessible to other members of that Fridge even after you delete your individual account, unless the entire Fridge is deleted by the owner.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black mb-4 text-fridge-brown font-poppins">Your Rights</h2>
              <p className="mb-2">You have the right to:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Access your personal data stored in our systems.</li>
                <li>Request correction of inaccurate data.</li>
                <li><strong>Request deletion of your account and all associated data</strong> (available within the app settings).</li>
                <li>Withdraw consent for location or notification processing at any time.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-black mb-4 text-fridge-brown font-poppins">Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at: <a href="mailto:ourfridgeapp@gmail.com" className="underline font-bold">ourfridgeapp@gmail.com</a>
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

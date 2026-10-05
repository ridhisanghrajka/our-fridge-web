import JoinInvite from './JoinInvite';

export const metadata = {
  metadataBase: new URL('https://our-fridge-5b835.web.app'),
  title: "You're invited to a fridge - Our Fridge",
  description: 'Join my fridge on Our Fridge so we can share our grocery list and notes in real time.',
  openGraph: {
    title: "You're invited to a fridge 🧊",
    description: 'Join me on Our Fridge so we can share our grocery list and notes in real time.',
    images: ['/fridge_hi.png'],
  },
};

// Served for every /join/<code> URL via a Firebase Hosting rewrite;
// the code is read client-side from the path.
export default function JoinPage() {
  return <JoinInvite />;
}

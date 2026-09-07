import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  const [isOpening, setIsOpening] = useState(false);

  const openInvitation = () => {
    setIsOpening(true);
    window.setTimeout(() => router.push('/invitation'), 550);
  };

  return (
    <main className={`invitation-launcher${isOpening ? ' is-opening' : ''}`}>
      <video
        className="invitation-video"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
      >
        <source
          src="/Dancers_performing_at_traditiona…_202609080053.mp4"
          type="video/mp4"
        />
      </video>

      <div className="invitation-shade" aria-hidden="true" />
      <button
        className="open-invitation"
        type="button"
        onClick={openInvitation}
        disabled={isOpening}
      >
        විවෘත කරන්න
      </button>

      <style jsx>{`
        .invitation-launcher {
          align-items: center;
          background: #000;
          display: flex;
          justify-content: center;
          min-height: 100vh;
          overflow: hidden;
          position: relative;
          transition: opacity 550ms ease;
        }

        .invitation-launcher.is-opening {
          opacity: 0;
        }

        .invitation-video,
        .invitation-shade {
          inset: 0;
          height: 100%;
          position: absolute;
          width: 100%;
        }

        .invitation-video {
          object-fit: cover;
        }

        .invitation-shade {
          background: rgba(0, 0, 0, 0.3);
        }

        .open-invitation {
          appearance: none;
          background: rgba(51, 0, 0, 0.88);
          border: 1px solid #e3c888;
          border-radius: 3px;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
          color: #f1e6cf;
          cursor: pointer;
          font: inherit;
          font-size: 16px;
          min-height: 48px;
          padding: 0 28px;
          position: relative;
          transition: background 200ms ease, transform 200ms ease;
          z-index: 1;
        }

        .open-invitation:hover {
          background: #5a140c;
          transform: translateY(-2px);
        }

        .open-invitation:focus-visible {
          outline: 3px solid #e3c888;
          outline-offset: 4px;
        }

        .open-invitation:disabled {
          cursor: wait;
        }
      `}</style>
    </main>
  );
}

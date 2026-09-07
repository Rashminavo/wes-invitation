import { useEffect, useRef, useState } from 'react';

export default function Home() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;

    if (!isPlaying || !video) {
      return undefined;
    }

    const continueToInvitation = () => {
      window.location.assign('/invitation.html');
    };

    video.addEventListener('ended', continueToInvitation, { once: true });
    video.addEventListener('error', continueToInvitation, { once: true });
    video.play().catch(continueToInvitation);

    return () => {
      video.removeEventListener('ended', continueToInvitation);
      video.removeEventListener('error', continueToInvitation);
    };
  }, [isPlaying]);

  return (
    <main className="invitation-launcher">
      {!isPlaying && (
        <button
          id="විවෘත කරන්න"
          type="button"
          onClick={() => setIsPlaying(true)}
        >
          Open Invitation
        </button>
      )}

      <div
        id="video-overlay"
        className={isPlaying ? 'is-visible' : ''}
        aria-hidden={!isPlaying}
      >
        <video id="invitation-video" ref={videoRef} preload="auto" playsInline>
          <source
            src="/Dancers_performing_at_traditiona…_202609080053.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      <style jsx>{`
        .invitation-launcher {
          align-items: center;
          background: #f7f3ed;
          display: flex;
          justify-content: center;
          min-height: 100dvh;
          padding: 24px;
        }

        #open-invitation {
          appearance: none;
          background: #342d28;
          border: 0;
          border-radius: 0;
          box-shadow: 0 8px 20px rgba(52, 45, 40, 0.18);
          color: #fff;
          cursor: pointer;
          font: inherit;
          font-size: 16px;
          min-height: 48px;
          padding: 0 28px;
        }

        #open-invitation:focus-visible {
          outline: 3px solid #8b6f47;
          outline-offset: 4px;
        }

        #video-overlay {
          align-items: center;
          background: #000;
          display: none;
          inset: 0;
          justify-content: center;
          position: fixed;
          z-index: 10;
        }

        #video-overlay.is-visible {
          display: flex;
        }

        #invitation-video {
          height: 100%;
          object-fit: contain;
          width: 100%;
        }
      `}</style>
    </main>
  );
}

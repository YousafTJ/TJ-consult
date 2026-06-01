'use client'

export function WaitlistHeroBg() {
  return (
    <>
      <style>{`
        @keyframes spin-slow-w {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-slow-rev-w {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        .animate-spin-slow-w { animation: spin-slow-w 60s linear infinite; }
        .animate-spin-slow-rev-w { animation: spin-slow-rev-w 60s linear infinite; }
      `}</style>

      {/* 3D spinning decorative layer — same as WaitlistHero */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{
          perspective: '1200px',
          transform: 'perspective(1200px) rotateX(15deg)',
          transformOrigin: 'center bottom',
          opacity: 0.85,
        }}
      >
        {/* Outer ring — clockwise */}
        <div className="absolute inset-0 animate-spin-slow-w">
          <div
            className="absolute top-1/2 left-1/2"
            style={{ width: '2000px', height: '2000px', transform: 'translate(-50%, -50%) rotate(279.05deg)', zIndex: 0 }}
          >
            <img
              src="https://framerusercontent.com/images/oqZEqzDEgSLygmUDuZAYNh2XQ9U.png?scale-down-to=2048"
              alt=""
              className="w-full h-full object-cover"
              style={{ opacity: 0.75, filter: 'invert(1)' }}
            />
          </div>
        </div>

        {/* Middle ring — counter-clockwise */}
        <div className="absolute inset-0 animate-spin-slow-rev-w">
          <div
            className="absolute top-1/2 left-1/2"
            style={{ width: '1000px', height: '1000px', transform: 'translate(-50%, -50%) rotate(304.42deg)', zIndex: 1 }}
          >
            <img
              src="https://framerusercontent.com/images/UbucGYsHDAUHfaGZNjwyCzViw8.png?scale-down-to=1024"
              alt=""
              className="w-full h-full object-cover"
              style={{ opacity: 0.7, filter: 'invert(1)' }}
            />
          </div>
        </div>

        {/* Inner ring — clockwise */}
        <div className="absolute inset-0 animate-spin-slow-w">
          <div
            className="absolute top-1/2 left-1/2"
            style={{ width: '800px', height: '800px', transform: 'translate(-50%, -50%) rotate(48.33deg)', zIndex: 2 }}
          >
            <img
              src="https://framerusercontent.com/images/Ans5PAxtJfg3CwxlrPMSshx2Pqc.png"
              alt=""
              className="w-full h-full object-cover"
              style={{ opacity: 0.6, filter: 'invert(1)' }}
            />
          </div>
        </div>
      </div>

      {/* White gradient — fades into center so form is readable */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 45% 50% at 50% 50%, rgba(255,255,255,0.95) 20%, rgba(255,255,255,0.6) 50%, rgba(255,255,255,0) 100%)',
        }}
      />
    </>
  )
}

import './BubblesStyle.scss';

export default function Bubbles({ positions }) {
  return (
    <div className="floating-circles">
      {positions.map((pos, i) => (
        <span
          key={i}
          className="circle"
          style={{
            top: pos.top,
            left: pos.left,
            width: pos.size,
            height: pos.size,
            animationDelay: pos.delay,
          }}


          const headerbubbles = [
        { top: '10%', left: '22%', size: '8px', delay: '0s' },
        { top: '8%', left: '95%', size: '12px', delay: '1s' },
        { top: '8%', left: '50%', size: '6px', delay: '2s' },
        { top: '6%', left: '20%', size: '10px', delay: '3s' },
        { top: '9%', left: '70%', size: '14px', delay: '4s' },
        { top: '30%', left: '8%', size: '14px', delay: '4s' },
        
        
        ];

        <Bubbles positions={headerbubbles} /> 
        />
      ))}
    </div>
  );
}

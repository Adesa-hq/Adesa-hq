'use client';

export default function GridLine({show = false}) {
    return (
      <div>
        {/* Atmospheric depth layers */}
        {show && (
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-225 h-225 bg-adesa-700 rounded-full blur-[180px] opacity-40" />
            <div className="absolute -bottom-50 -right-50 w-150 h-150 bg-gold-500 rounded-full blur-[160px] opacity-10" />
          </div>
        )}

        {/* Subtle grid texture */}
        <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#E4E9F2_1px,transparent_1px),linear-gradient(to_bottom,#E4E9F2_1px,transparent_1px)] bg-size-[80px_80px]" />
      </div>
    );
}
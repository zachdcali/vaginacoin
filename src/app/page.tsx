import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/background.jpeg"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 min-h-screen bg-black/50 flex flex-col items-center justify-center p-4">
        {/* Main Title */}
        <h1 className="text-6xl md:text-8xl text-white font-bold mb-8 animate-fade-in">
          $VAGINACOIN
        </h1>

        {/* Wallet Address */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 max-w-full break-all text-center">
          <p className="text-white text-sm md:text-base font-mono">
            3RizjNqCcZdkSeXohDf5qL3QAL6xLoj6gQ9EYsyHpump
          </p>
        </div>
      </div>
    </div>
  );
}
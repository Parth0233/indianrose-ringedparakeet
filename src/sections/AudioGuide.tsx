import { useRef, useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, SkipBack, SkipForward, Headphones } from 'lucide-react';

interface AudioCardProps {
  title: string;
  subtitle: string;
  src: string;
  delay: number;
  onPlay: () => void;
}

function AudioCard({ title, subtitle, src, delay, onPlay }: AudioCardProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateProgress = () => {
      if (audio.duration && !isNaN(audio.duration)) {
        setProgress((audio.currentTime / audio.duration) * 100);
        setCurrentTime(audio.currentTime);
      }
    };

    const handleLoaded = () => {
      if (audio.duration && !isNaN(audio.duration)) {
        setDuration(audio.duration);
      }
      setIsLoading(false);
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setProgress(0);
      setCurrentTime(0);
    };

    const handleError = () => {
      setError('Audio file not available');
      setIsLoading(false);
    };

    audio.addEventListener('timeupdate', updateProgress);
    audio.addEventListener('loadedmetadata', handleLoaded);
    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('error', handleError);

    // Some browsers need this for cached files
    if (audio.readyState >= 2) {
      handleLoaded();
    }

    return () => {
      audio.removeEventListener('timeupdate', updateProgress);
      audio.removeEventListener('loadedmetadata', handleLoaded);
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('error', handleError);
    };
  }, []);

  const togglePlay = useCallback(() => {
    const audio = audioRef.current;
    if (!audio || error) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      onPlay();
      audio.play().catch(() => {
        setError('Unable to play audio');
      });
      setIsPlaying(true);
    }
  }, [isPlaying, error, onPlay]);

  const toggleMute = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.muted = !isMuted;
    setIsMuted(!isMuted);
  }, [isMuted]);

  const seek = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const audio = audioRef.current;
    const bar = progressRef.current;
    if (!audio || !bar || !duration) return;

    const rect = bar.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(1, clickX / rect.width));
    audio.currentTime = percentage * duration;
  }, [duration]);

  const skip = useCallback((seconds: number) => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = Math.max(0, Math.min(duration, audio.currentTime + seconds));
  }, [duration]);

  const handleVolumeChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (!audio) return;
    const newVol = parseFloat(e.target.value);
    audio.volume = newVol;
    setVolume(newVol);
    if (newVol > 0 && isMuted) {
      audio.muted = false;
      setIsMuted(false);
    }
  }, [isMuted]);

  const formatTime = (time: number) => {
    if (!time || isNaN(time)) return '0:00';
    const mins = Math.floor(time / 60);
    const secs = Math.floor(time % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="glass rounded-2xl p-5 sm:p-6 md:p-8 text-white"
    >
      <audio ref={audioRef} src={src} preload="metadata" />

      {/* Header */}
      <div className="flex items-center gap-3 sm:gap-4 mb-5 sm:mb-6">
        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-emerald-400/30 to-emerald-600/30 flex items-center justify-center shrink-0">
          <Headphones className="w-6 h-6 sm:w-7 sm:h-7 text-emerald-300" />
        </div>
        <div className="min-w-0">
          <h3 className="text-lg sm:text-xl font-semibold truncate">{title}</h3>
          <p className="text-white/60 text-xs sm:text-sm truncate">{subtitle}</p>
        </div>
      </div>

      {/* Error / Loading state */}
      {error ? (
        <div className="bg-red-500/20 border border-red-500/30 rounded-xl p-4 text-center mb-4">
          <p className="text-red-200 text-sm">{error}</p>
        </div>
      ) : isLoading ? (
        <div className="bg-white/10 rounded-xl p-4 text-center mb-4">
          <p className="text-white/60 text-sm">Loading audio...</p>
        </div>
      ) : null}

      {/* Progress bar */}
      <div className="mb-4">
        <div
          ref={progressRef}
          onClick={seek}
          className="w-full h-2.5 bg-white/15 rounded-full overflow-hidden cursor-pointer hover:bg-white/25 transition-colors"
        >
          <div
            className="h-full bg-gradient-to-r from-emerald-400 to-emerald-300 rounded-full transition-all duration-75 relative"
            style={{ width: `${progress}%` }}
          >
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-md opacity-0 hover:opacity-100 transition-opacity" />
          </div>
        </div>
        <div className="flex justify-between text-xs text-white/50 mt-2 font-mono">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={() => skip(-10)}
            disabled={!!error}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-30 flex items-center justify-center transition-colors"
            aria-label="Skip back 10 seconds"
          >
            <SkipBack className="w-4 h-4" />
          </button>

          <button
            onClick={togglePlay}
            disabled={!!error}
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 disabled:opacity-30 disabled:hover:bg-emerald-500 flex items-center justify-center transition-all shadow-lg shadow-emerald-500/30"
            aria-label={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? (
              <Pause className="w-5 h-5 sm:w-6 sm:h-6" />
            ) : (
              <Play className="w-5 h-5 sm:w-6 sm:h-6 ml-0.5" />
            )}
          </button>

          <button
            onClick={() => skip(10)}
            disabled={!!error}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-30 flex items-center justify-center transition-colors"
            aria-label="Skip forward 10 seconds"
          >
            <SkipForward className="w-4 h-4" />
          </button>
        </div>

        {/* Volume */}
        <div className="flex items-center gap-2">
          <button
            onClick={toggleMute}
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors shrink-0"
            aria-label={isMuted ? 'Unmute' : 'Mute'}
          >
            {isMuted || volume === 0 ? (
              <VolumeX className="w-4 h-4" />
            ) : (
              <Volume2 className="w-4 h-4" />
            )}
          </button>
          <input
            type="range"
            min="0"
            max="1"
            step="0.05"
            value={isMuted ? 0 : volume}
            onChange={handleVolumeChange}
            className="w-16 sm:w-24 h-1.5 bg-white/20 rounded-full appearance-none cursor-pointer accent-emerald-400 hidden sm:block"
            aria-label="Volume"
          />
        </div>
      </div>
    </motion.div>
  );
}

export default function AudioGuide() {
  const activeAudioRef = useRef<HTMLAudioElement | null>(null);

  const handlePlay = useCallback(() => {
    // Stop any other playing audio
    if (activeAudioRef.current) {
      activeAudioRef.current.pause();
      activeAudioRef.current.currentTime = 0;
    }
  }, []);

  return (
    <section id="audio" className="py-16 sm:py-20 bg-emerald-900 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-emerald-700/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-600/20 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-800/20 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-emerald-200 text-sm font-medium mb-4">
            <Headphones className="w-4 h-4" />
            Audio Guide
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Indian Rose-ringed Parakeet Audio Guide
          </h2>
          <div className="w-24 h-1 bg-emerald-400 mx-auto rounded-full mb-4" />
          <p className="text-emerald-200/80 max-w-2xl mx-auto text-sm sm:text-base">
            Learn about the Indian Rose-ringed Parakeet through audio narration available in English
            and Hindi.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
          <AudioCard
            title="Listen in English"
            subtitle="English narration about the Indian Rose-ringed Parakeet"
            src="/Indian Rose-Ring Parakeet.mp3"
            delay={0}
            onPlay={handlePlay}
          />
          <AudioCard
            title="हिंदी में सुनें"
            subtitle="भारतीय गुलाबी गले तोते के बारे में हिंदी में वर्णन"
            src="/indian red parakits.mp3"
            delay={0.15}
            onPlay={handlePlay}
          />
        </div>
      </div>
    </section>
  );
}

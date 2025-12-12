import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Timer = () => {
  const [workMinutes, setWorkMinutes] = useState(25);
  const [breakMinutes, setBreakMinutes] = useState(5);
  const [timeLeft, setTimeLeft] = useState(workMinutes * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [isBreak, setIsBreak] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const resetTimer = useCallback(() => {
    setTimeLeft(isBreak ? breakMinutes * 60 : workMinutes * 60);
    setIsRunning(false);
  }, [isBreak, breakMinutes, workMinutes]);

  const toggleMode = () => {
    setIsBreak(!isBreak);
    setTimeLeft(!isBreak ? breakMinutes * 60 : workMinutes * 60);
    setIsRunning(false);
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsRunning(false);
    }

    return () => clearInterval(interval);
  }, [isRunning, timeLeft]);

  useEffect(() => {
    if (!isRunning) {
      setTimeLeft(isBreak ? breakMinutes * 60 : workMinutes * 60);
    }
  }, [workMinutes, breakMinutes, isBreak, isRunning]);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Navigation */}
      <nav className="border-b border-border">
        <div className="max-w-3xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            ← Back
          </Link>
          <span className="text-sm font-medium tracking-wide">Pomodoro</span>
          <div className="w-12" />
        </div>
      </nav>

      {/* Timer */}
      <main className="flex-1 flex flex-col items-center justify-center px-6">
        <div className="text-center">
          {/* Mode indicator */}
          <div className="mb-8">
            <span className="text-xs uppercase tracking-widest text-muted-foreground">
              {isBreak ? "Break" : "Focus"}
            </span>
          </div>

          {/* Time display */}
          <div className="mb-12">
            <span className="text-8xl font-light tracking-tight tabular-nums">
              {formatTime(timeLeft)}
            </span>
          </div>

          {/* Controls */}
          <div className="flex gap-4 justify-center mb-16">
            <Button
              variant="outline"
              size="lg"
              onClick={() => setIsRunning(!isRunning)}
              className="min-w-28 border-border hover:bg-card"
            >
              {isRunning ? "Pause" : "Start"}
            </Button>
            <Button
              variant="ghost"
              size="lg"
              onClick={resetTimer}
              className="hover:bg-card"
            >
              Reset
            </Button>
          </div>

          {/* Settings */}
          <div className="space-y-6">
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
            >
              {isEditing ? "Done" : "Settings"}
            </button>

            {isEditing && (
              <div className="flex gap-8 justify-center text-sm">
                <div className="flex flex-col items-center gap-2">
                  <label className="text-muted-foreground text-xs">Work</label>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setWorkMinutes(Math.max(1, workMinutes - 5))}
                      className="w-8 h-8 border border-border rounded hover:bg-card transition-colors"
                    >
                      −
                    </button>
                    <span className="w-12 text-center tabular-nums">{workMinutes}m</span>
                    <button
                      onClick={() => setWorkMinutes(Math.min(60, workMinutes + 5))}
                      className="w-8 h-8 border border-border rounded hover:bg-card transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <label className="text-muted-foreground text-xs">Break</label>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setBreakMinutes(Math.max(1, breakMinutes - 1))}
                      className="w-8 h-8 border border-border rounded hover:bg-card transition-colors"
                    >
                      −
                    </button>
                    <span className="w-12 text-center tabular-nums">{breakMinutes}m</span>
                    <button
                      onClick={() => setBreakMinutes(Math.min(30, breakMinutes + 1))}
                      className="w-8 h-8 border border-border rounded hover:bg-card transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Mode toggle */}
            <button
              onClick={toggleMode}
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Switch to {isBreak ? "Focus" : "Break"}
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Timer;

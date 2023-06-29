export function timeAgo(dateParam: number | Date): string {
    const date: Date = typeof dateParam === 'object' ? dateParam : new Date(dateParam);
    const today: Date = new Date();
    const seconds: number = Math.round((today.getTime() - date.getTime()) / 1000);
    const minutes: number = Math.round(seconds / 60);
    const hours: number = Math.round(minutes / 60);
    const days: number = Math.round(hours / 24);
    const weeks: number = Math.round(days / 7);
    const months: number = Math.round(days / 30);
    const years: number = Math.round(months / 12);

    if (seconds < 60) {
        return `${seconds} seconds ago`;
    } else if (minutes < 60) {
        return `${minutes} minutes ago`;
    } else if (hours < 24) {
        return `${hours} hours ago`;
    } else if (days < 7) {
        return `${days} days ago`;
    } else if (weeks < 4) {
        return `${weeks} weeks ago`;
    } else if (months < 12) {
        return `${months} months ago`;
    } else {
        return `${years} years ago`;
    }
}

export function debounce<F extends (...args: any[]) => any, T>(func: F, delay: number): (this: T, ...args: Parameters<F>) => void {
  let debounceTimer: ReturnType<typeof setTimeout> | null = null;
  
  return function(this: T, ...args: Parameters<F>) {
    const context = this;
    clearTimeout(debounceTimer!);
    debounceTimer = setTimeout(() => func.apply(context, args), delay);
  };
}

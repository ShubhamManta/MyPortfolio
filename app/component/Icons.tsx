import React from "react";

export function GithubIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

export function LinkedinIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

export function TwitterIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export function JavaScriptIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <rect width="24" height="24" rx="4" fill="#F7DF1E" />
      <path
        d="M6.5 18.5l2-1.2c.4.7.7 1.1 1.4 1.1.7 0 1.1-.3 1.1-.9v-5.5h2.5v5.5c0 1.7-1.1 2.5-2.7 2.5-1.5 0-2.6-.7-3.3-2l-1 .5zm8.5-.1c.6.9 1.5 1.5 2.7 1.5 1.3 0 2.2-.7 2.2-1.7 0-1.1-.8-1.5-2.1-2.1l-.8-.3c-1.8-.8-3-1.6-3-3.6 0-1.9 1.5-3.3 3.6-3.3 1.6 0 2.8.6 3.5 1.9l-1.9 1.2c-.4-.7-1-1.1-1.7-1.1-.8 0-1.3.4-1.3 1 0 .7.5 1 1.7 1.5l.8.3c2.1.9 3.4 1.8 3.4 3.9 0 2.2-1.7 3.5-4.1 3.5-2.3 0-3.6-1.1-4.2-2.3l2.1-1.4z"
        fill="#000000"
      />
    </svg>
  );
}

export function TypeScriptIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <rect width="24" height="24" rx="4" fill="#3178C6" />
      <path
        d="M5.5 10.5h6v1.8h-2v6.2h-2v-6.2h-2v-1.8zm8.5 4.8c.4.4.9.7 1.5.7.6 0 .9-.2.9-.6 0-.4-.3-.6-1.1-1l-.6-.3c-1.3-.6-2-1.3-2-2.5 0-1.4 1.1-2.4 2.7-2.4 1.1 0 2 .4 2.5 1.2l-1.3 1c-.3-.4-.7-.6-1.2-.6-.5 0-.8.3-.8.6 0 .3.3.5 1 .8l.6.3c1.5.6 2.2 1.4 2.2 2.7 0 1.6-1.2 2.5-3 2.5-1.5 0-2.5-.6-3.1-1.6l1.3-1.1z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

export function ReactIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.5" />
      <ellipse
        cx="12"
        cy="12"
        rx="10"
        ry="4"
        transform="rotate(60 12 12)"
        stroke="#61DAFB"
        strokeWidth="1.5"
      />
      <ellipse
        cx="12"
        cy="12"
        rx="10"
        ry="4"
        transform="rotate(120 12 12)"
        stroke="#61DAFB"
        strokeWidth="1.5"
      />
      <circle cx="12" cy="12" r="1.8" fill="#61DAFB" />
    </svg>
  );
}

export function NextjsIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="11" fill="#000000" stroke="#FFFFFF" strokeWidth="1.5" />
      <path
        d="M8.5 7.5v9m0 0l7.5-9.5m-3.5 9.5h3.5v-5.5"
        stroke="#FFFFFF"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function NodejsIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path
        d="M12 2l8.5 5v10L12 22l-8.5-5V7L12 2zm0 2.2L5.5 8.7v6.6L12 19.8l6.5-4.5V8.7L12 4.2zm-2.5 6.3h5v1.8h-3v1.5h2.5v1.8h-2.5v1.9h3.2v1.8H9.5v-8.8z"
        fill="#5FA04E"
      />
    </svg>
  );
}

export function MongoDBIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path
        d="M12 1.5c-.3 0-.6.1-.8.3C8.5 4.5 5 9.2 5 13.8c0 4.2 3.1 7.7 7 8.2v-7.5c-.3-.2-.5-.5-.5-.9 0-.6.4-1 1-1s1 .4 1 1c0 .4-.2.7-.5.9v7.5c3.9-.5 7-4 7-8.2 0-4.6-3.5-9.3-6.2-12-.2-.2-.5-.3-.8-.3z"
        fill="#47A248"
      />
    </svg>
  );
}

export function PostgresIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 16.5c-3.5 0-6.2-2.2-6.2-5.5 0-2.8 2-5 5.2-5 1.5 0 2.8.5 3.8 1.4l-1.3 1.5c-.7-.6-1.5-.9-2.5-.9-1.9 0-3.1 1.3-3.1 3 0 1.9 1.4 3.2 3.5 3.2.7 0 1.4-.2 1.9-.5v-1.6h-2.2v-1.9h4.3v4.4c-1.1.9-2.6 1.4-4.4 1.4z"
        fill="#4169E1"
      />
    </svg>
  );
}

export function TailwindIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path
        d="M12 6c-3 0-4.5 1.5-4.5 4.5 1-1.5 2.25-2 3.75-1.5 1.05.35 1.8 1.15 2.65 2 1.35 1.4 2.95 3 6.1 3 3 0 4.5-1.5 4.5-4.5-1 1.5-2.25 2-3.75 1.5-1.05-.35-1.8-1.15-2.65-2-1.35-1.4-2.95-3-6.1-3zm-6 6c-3 0-4.5 1.5-4.5 4.5 1-1.5 2.25-2 3.75-1.5 1.05.35 1.8 1.15 2.65 2 1.35 1.4 2.95 3 6.1 3 3 0 4.5-1.5 4.5-4.5-1 1.5-2.25 2-3.75 1.5-1.05-.35-1.8-1.15-2.65-2-1.35-1.4-2.95-3-6.1-3z"
        fill="#38BDF8"
      />
    </svg>
  );
}

export function GitIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path
        d="M21.6 10.8l-8.4-8.4a2.4 2.4 0 00-3.4 0L7.4 4.8l3.4 3.4a2.4 2.4 0 012.7 2.7l3.3 3.3a2.4 2.4 0 11-1.4 1.4l-3.1-3.1v4.7a2.4 2.4 0 11-2 0V11a2.4 2.4 0 01-1.2-2.1L5.7 5.5 2.4 8.8a2.4 2.4 0 000 3.4l8.4 8.4a2.4 2.4 0 003.4 0l7.4-7.4a2.4 2.4 0 000-3.4z"
        fill="#F05032"
      />
    </svg>
  );
}

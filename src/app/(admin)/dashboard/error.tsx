'use client';
export interface ErrorProps {
  error: Error;
}

export default function ErrorComponent({ error }: ErrorProps) {
  return (
    <div>
      <p>{`Something went wrong: ${error.message}`}</p>
    </div>
  );
}

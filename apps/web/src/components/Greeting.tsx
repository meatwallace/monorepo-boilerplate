import * as React from 'react';
import { useGreeting } from '../hooks/useGreeting';

export function Greeting() {
  const query = useGreeting();

  return (
    <main>
      <span>
        {query.isLoading && <span>Loading!</span>}
        {query.isError && <span>Oh no...</span>}
        {query.data && <span>{query.data.greeting}</span>}
      </span>
    </main>
  );
}

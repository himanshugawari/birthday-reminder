import React from 'react';
import './style.css';
import List from './List';
import data from './data';

export default function App() {
  const [people, setPeople] = React.useState(data);
  return (
    <main>
      <section className="container">
        <h3>{people.length} Birthday's Today</h3>
        <List people={people} setPeople={setPeople} />
        <button onClick={() => setPeople([])}>Clear All</button>
      </section>
    </main>
  );
}

type NewLifeProps = {
  onStart: () => void;
};

function NewLife({ onStart }: NewLifeProps) {
  return (
    <main>
      <h1>Student Life Simulator</h1>

      <p>
        A new student life is waiting for you.
      </p>

      <button onClick={onStart}>
        ✨ New Life
      </button>
    </main>
  );
}

export default NewLife;

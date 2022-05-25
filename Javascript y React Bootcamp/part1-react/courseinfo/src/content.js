import Part from "./part";

const Content = ({ parts }) => (
  <div>
    {parts.map(({ name, exercises }, index) => (
      <div key={index + 1}>
        <Part name={name} exercises={exercises} />
      </div>
    ))}
  </div>
);

export default Content;

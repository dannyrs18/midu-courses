
const Total = ({parts}) => <p>Number of exercises {parts.reduce((last, curr) => last + curr.exercises, 0)}</p>

export default Total;

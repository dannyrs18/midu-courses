import Stadistic from "./Stadistic";

const Stadistics = ({good, neutral, bad}) => {
    const countAllValues = good + neutral + bad;
    const averageValues = (good + neutral + bad) / 3;
    const positiveValuesPercent = ((good * 100) / (good + neutral + bad) || 0) + " %";
    if ( good || neutral || bad )
        return (
            <div>
                <h3>Stadistics</h3>
                <table>
                    <tbody>
                        <Stadistic name="neutral" value={neutral} />
                        <Stadistic name="bad" value={bad} />
                        <Stadistic name="all" value={countAllValues} />
                        <Stadistic name="average" value={averageValues} />
                        <Stadistic name="positive" value={positiveValuesPercent} /> 
                    </tbody>
                </table>
            </div>
        );
    return (
        <div>
            <h3>Stadistics</h3>
            <div>No feedback given</div>
        </div>
    )
}

export default Stadistics;
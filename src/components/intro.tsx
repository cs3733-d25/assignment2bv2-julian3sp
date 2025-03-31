
type introProps = {
    name1: string;
    name2: string;
};
export function Intro( {name1, name2} : introProps) {
    return(
        <>
            <h3>Introduction:</h3>
            <p> Hello, my name is {name1}, and this is {name2}. We are both Computer Science Students at Worcester Polytechnic Institute.</p>
        </>
    )
}
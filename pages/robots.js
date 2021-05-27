import Link from "next/link";
// import fetch from "isomorphic-fetch";

const Robots = (props) => (
    <div>
        <h1>Robots</h1>
        <Link href="/">
            <button>Home</button>
        </Link>
        <div>
            {props.data.map((robot) => (
                <li key={robot.id}>
                    <Link href={`robots/${robot.id}`}>
                        <a>{robot.name}</a>
                    </Link>
                </li>
            ))}
        </div>
    </div>
);

export async function getServerSideProps() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    return {
        props: { data },
    };
}

export default Robots;

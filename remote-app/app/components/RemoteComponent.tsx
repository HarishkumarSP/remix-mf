import Button from "./Button";
import useCount from "~/store";

function RemoteComponent() {
	const [count, setCount] = useCount();

	return (
		<div className='App'>
			<h1>Remote Application</h1>
			<Button />
			<div className='card p-[10px] bg-black mt-3'>
				<button onClick={() => setCount(count => count + 1)}>
					count is {count}
				</button>
			</div>
		</div>
	);
}

export default RemoteComponent;

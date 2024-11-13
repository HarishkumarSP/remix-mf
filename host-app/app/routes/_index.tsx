import type { MetaFunction } from "@remix-run/node";
import { useState } from "react";

import Button from "remoteApp/Button";

export const meta: MetaFunction = () => {
	return [
		{ title: "New Remix App" },
		{ name: "description", content: "Welcome to Remix!" },
	];
};

export default function Index() {
	const [count, setCount] = useState(0);

	return (
		<div className='flex h-screen items-center justify-center'>
			<div className='flex flex-col items-center gap-16'>
				<header className='flex flex-col items-center gap-9'>
					<h1 className='leading text-2xl font-bold text-gray-800 dark:text-gray-100'>
						Welcome to <span className='sr-only'>Remix</span>
					</h1>
					<div className='h-[144px] w-[434px]'>
						<img
							src='/logo-light.png'
							alt='Remix'
							className='block w-full dark:hidden'
						/>
						<img
							src='/logo-dark.png'
							alt='Remix'
							className='hidden w-full dark:block'
						/>
					</div>
				</header>
				<div className='App'>
					<h1>Host Application</h1>
					<Button />
					<div className='card'>
						<button onClick={() => setCount(count => count + 1)}>
							count is {count}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

import React, {FC} from 'react';

const PreChat = () => {
	return (
		<div className='w-full'>
			<div className='flex flex-col gap-2'>
				<div className='flex flex-row gap-3'>
					<PreChatContent title='What is react?' content='Explain react and its main features' />
					<PreChatContent title='What are components in react?' content='Describe the concept of components' />
				</div>
				<div className='flex flex-row gap-3'>
					<PreChatContent title='What is JSX?' content='Explain JSX and its advantages in React.' />
					<PreChatContent
						title='What are props in React?'
						content='Explain the purpose of props and how to pass them to a component'
					/>
				</div>
			</div>
		</div>
	);
};

const PreChatContent: FC<{title: string; content: string}> = ({title, content}) => {
	return (
		<div className='border-solid border p-2 rounded-lg flex w-1/2'>
			<div className='flex-grow'>
				<p className='text-md'>{title}</p>
				<p className='text-sm font-extralight'>{content}</p>
			</div>
		</div>
	);
};

export default PreChat;

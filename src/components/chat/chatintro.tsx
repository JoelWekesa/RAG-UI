import Image from 'next/image';
import React from 'react';
import PreChat from './prechat';

const ChatInto = () => {
	return (
		<div className='flex h-full flex-col'>
			<div className='flex flex-col justify-center items-center h-full'>
				<div>
					<Image src='/bot.png' alt='logo' width={100} height={100} />
				</div>
				<div>
					<p className='text-center text-3xl'>How can I help you today?</p>
				</div>
			</div>
			<div className='items-end'>
				<PreChat />
			</div>
		</div>
	);
};

export default ChatInto;

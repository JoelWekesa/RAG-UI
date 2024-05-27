import {Input} from '../ui/input';
import ChatInto from './chatintro';

const ChatPage = () => {
	return (
		<div className='flex min-h-screen'>
			<div className='flex flex-col w-full mb-5'>
				<div className='flex-grow overflow-y-auto px-6'>
					<ChatInto />
				</div>
				<div className='sticky bottom-0'>
					<div className="px-4 m-2">
						<Input placeholder='Ask me anything about react' />
					</div>
				</div>
			</div>
		</div>
	);
};

export default ChatPage;

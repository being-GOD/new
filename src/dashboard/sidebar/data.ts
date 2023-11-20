import EventsIcon from './icons/EventsIcon.svelte';
import GuidesIcon from './icons/GuidesIcon.svelte';
import MessagesIcon from './icons/MessagesIcon.svelte';
import PicturesIcon from './icons/PicturesIcon.svelte';
import DocumentsIcon from './icons/DocumentsIcon.svelte';
import StatisticsIcon from './icons/StatisticsIcon.svelte';

export const data = [
	{
		section: 'Documents',
		icon: DocumentsIcon,
		content: [
			{
				title: 'Taxes',
				link: '/myAdmin'
			},
			{
				title: 'Travel',
				link: '/myAdmin/documents/travel'
			},
			{
				title: 'Insurance',
				link: '/myAdmin/documents/insurance'
			}
		]
	},
	{
		section: 'Messages',
		icon: MessagesIcon,
		content: [
			{
				title: 'Unbox',
				link: '/myAdmin/messages/unbox'
			},
			{
				title: 'Unread',
				link: '/myAdmin/messages/unread'
			},
			{
				title: 'Archived',
				link: '/myAdmin/messages/archived'
			}
		]
	},
	{
		section: 'Pictures',
		icon: PicturesIcon,
		content: [
			{
				title: 'Vacations',
				link: '/myAdmin/pictures/vacations'
			},
			{
				title: 'Anniversary',
				link: '/myAdmin/pictures/anniversary'
			},
			{
				title: 'University',
				link: '/myAdmin/pictures/university'
			}
		]
	},
	{
		section: 'Statistics',
		icon: StatisticsIcon,
		content: [
			{
				title: 'Finances',
				link: '/myAdmin/statistics/finances'
			},
			{
				title: 'Call Stats',
				link: '/myAdmin/statistics/call-stats'
			},
			{
				title: 'Trip Logs',
				link: '/myAdmin/statistics/trip-logs'
			}
		]
	},
	{
		section: 'Events',
		icon: EventsIcon,
		content: [
			{
				title: 'Weddings',
				link: '/myAdmin/events/weddings'
			},
			{
				title: 'Networking',
				link: '/myAdmin/events/networking'
			}
		]
	},
	{
		section: 'Guides',
		icon: GuidesIcon,
		content: [
			{
				title: 'Documentation',
				link: '/myAdmin/guides/documentation'
			}
		]
	}
];

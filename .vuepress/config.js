module.exports = {
	base: '/',
	locales: {
		'/': {
			lang: 'zh-CN'
		}
	},
	title: "Asushiny\'s Blog",
	description: 'Yesterday has passed, tomorrow is still on the road, cherish the present.',
	dest: 'public',
	head: [
		['link', {
			rel: 'icon',
			href: 'https://asushiny.oss-cn-guangzhou.aliyuncs.com/images/logo.ico'
		}],
		['meta', {
			name: 'viewport',
			content: 'width=device-width,initial-scale=1,user-scalable=no'
		}],
	],
	theme: 'reco',
	themeConfig: {
		nav: [{
				text: '主页',
				link: '/',
				icon: 'reco-home'
			},
			{
				text: '时间轴',
				link: '/timeline/',
				icon: 'reco-date'
			},
			{
				text: '日记',
				link: '/blogs/category1/Genshin/',
				icon: 'reco-suggestion',
			},
			{
				text: '歌词',
				link: '/blogs/category2/lyric/xiju/xiju/',
				icon: 'reco-document',
			},
			{
				text: '回顾',
				link: '/docs/',
				icon: 'reco-blog',
			}
		],
		type: 'blog',
		// 博客设置
		blogConfig: {
			category: {
				location: 2, // 在导航栏菜单中所占的位置，默认2
				text: '分类' // 默认 “分类”
			},
			tag: {
				location: 3, // 在导航栏菜单中所占的位置，默认3
				text: '标签' // 默认 “标签”
			}
		},
		// 友情链接
		// friendLink: [{
		// 	title: 'Asushiny\'s Blog',
		// 	desc: '记录，成为更好的自己。',
		// 	logo: 'https://asushiny.oss-cn-guangzhou.aliyuncs.com/images/hoteru.png',
		// 	link: 'https://asukksk.vercel.app/'
		// }, ],
		logo: 'https://asushiny.oss-cn-guangzhou.aliyuncs.com/images/logo.ico',
		// 搜索设置
		search: true,
		searchMaxSuggestions: 10,
		// 自动形成侧边导航
		sidebar: {
			'/blogs/category1/': [{
				title: '私の日记2022',
				path: '',
				sidebarDepth: 2,
				children: [{
					title: '原神',
					path: '/blogs/category1/Genshin/',
				},{
					title: '一月',
					path: '',
					children: [{
						title: '12号',
						path: '/blogs/category1/2022/01/12/',
						
					}]
				},{
					title: '四月',
					path: '',
					children: [{
						title: '28号',
						path: '/blogs/category1/2022/04/28/',
						
					}]
				}]
			}],
			'/blogs/category2/lyric/': [{
				title: '歌词本',
				path: '',
				sidebarDepth: 2,
				children: [{
					title: '喜剧',
					path: '/blogs/category2/lyric/xiju/xiju',
				},{
					title: '小小恋歌',
					path: '/blogs/category2/lyric/xxlg/xxlg',
				},{
					title: '光るなら(若能绽放光芒)',
					path: '/blogs/category2/lyric/april/rnzfgm',
				}]
			}]
		},
		// sidebar: 'auto',
		//显示所有页面的标题链接
		displayAllHeaders: true,
		// 最后更新时间
		lastUpdated: '上次更新',
		// 作者
		author: 'Asushiny',
		// 作者头像
		// authorAvatar: 'https://asushiny.oss-cn-guangzhou.aliyuncs.com/images/hoteru.png',
		authorAvatar: 'https://asushiny.oss-cn-guangzhou.aliyuncs.com/images/authorAvatar.png',
		// 备案号
		record: 'xxxx',
		// 项目开始时间
		startYear: '2021',
		/**
		 * 密钥 (if your blog is private)
		 */

		// keyPage: {//密码为kksk
		//   keys: ['20532b5e1938a876574725991a04e721'],  // 1.3.0 版本后需要设置为密文
		//   color: '#42b983',
		//   lineColor: '#42b983'
		// },

		/**
		 * valine 设置 (if you need valine comment )
		 */

		// valineConfig: {
		//   appId: '...',// your appId
		//   appKey: '...', // your appKey
		// }
	},
	markdown: {
		lineNumbers: true
	},
	plugins: [
		[ //图片放大插件
			//先安装在配置， npm install vuepress-plugin-dynamic-title --save
			'@vuepress/plugin-medium-zoom', {
				selector: 'img.medium-zoom-image',
				delay: 1000,
				options: {
					margin: 16,
					background: 'rgba(25,18,25,0.9)',
					scrollOffset: 40
				}
			}
		],
		// [ //看板娘
		// 	//npm install @vuepress-reco/vuepress-plugin-kan-ban-niang --save
		// 	"@vuepress-reco/vuepress-plugin-kan-ban-niang",
		// 	{
		// 		theme: [ 'whiteCat','miku', 'wanko', 'blackCat', 'haruto', 'koharu', 'shizuku', 'z16'],
		// 		clean: true,
		// 		messages: {
		// 			welcome: '你是我的master吗?',
		// 			home: '回主页啦。',
		// 			theme: '好吧，希望你能喜欢我的其他小伙伴。',
		// 			close: '再见哦'
		// 		},
		// 		modelStyle: {
		// 			right: '15px',
		// 			bottom: '15px'
		// 		},
		// 		width: 200,
		// 		height: 295
		// 	}
		// ],
		// [ //音乐播放器
		// 	//npm install @vuepress-reco/vuepress-plugin-bgm-player --save
		// 	'@vuepress-reco/vuepress-plugin-bgm-player',
		// 	{
		// 		position: {
		// 			left: '10px',
		// 			bottom: '10px',
		// 			'z-index': '999999'
		// 		},
		// 		floatStyle: {
		// 			left: '10px',
		// 			bottom: '10px',
		// 			'z-index': '999999'
		// 		},
		// 		audios: [
		// 			// 本地文件示例
		// 			// {
		// 			//   name: '장가갈 수 있을까',
		// 			//   artist: '咖啡少年',
		// 			//   url: '/bgm/1.mp3',
		// 			//   cover: '/bgm/1.jpg'
		// 			// },
		// 			// 网络文件示例
		// 			{
		// 				name: '未来は風のように',
		// 				artist: 'Liella!',
		// 				url: 'https://music.163.com//song/media/outer/url?id=1866489156.mp3',
		// 				cover: 'http://p1.music.126.net/tswV4pcizY4ZVFasVwu0rw==/109951166333333684.jpg?param=130y130'
		// 			}
		// 		]
		// 	}
		// ],
		// [ //鼠标点击特效
		// 	//先安装在配置， npm install vuepress-plugin-cursor-effects --save
		// 	"cursor-effects",
		// 	{
		// 		size: 3, // size of the particle, default: 2
		// 		shape: ['circle'], // shape of the particle, default: 'star'
		// 		zIndex: 999999999 // z-index property of the canvas, default: 999999999
		// 	}
		// ],
	]
}

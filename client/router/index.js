import Vue from 'vue';
import VueRouter from 'vue-router';

const routes = [
	{
		path: '/',
		meta: {
			title: 'Image Cards List'
		},
		component: () => import('../views/CardsGrid')
	},
	{
		path: '/card/details',
		meta: {
			title: 'Image Card Details'
		},
		component: () => import('../views/ImageCardDetail')
	},
	{
		path: '*',
		redirect: '/'
	}
];

Vue.use(VueRouter);

const router = new VueRouter({
	routes,
	mode: 'history'
});

router.beforeEach((to, from, next) => {

	//set page title
	if (to.matched.some(record => record.meta.title)) {
		document.title = to.meta.title;
		next();
	}
});

export default router;
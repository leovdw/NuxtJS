const middleware = {}

middleware['init_menu'] = require('@/middleware/init_menu.js');
middleware['init_menu'] = middleware['init_menu'].default || middleware['init_menu']

export default middleware

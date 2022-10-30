import setup from '../public/assets/wp-pics/category/wp-setup.jpg'
import dev from '../public/assets/wp-pics/category/wp-dev.jpg'
import woo from '../public/assets/wp-pics/category/wp-woocom.jpg'
import opti from '../public/assets/wp-pics/category/wp-optimize.jpg'

export const WordpressCategory=[
    {
        id: 1,
        name: "Wordpress Set up",
        description: "Setting up wordpress for development", 
        img:setup,
        url:"wordpress/setup"

    },
    {
        id: 2,
        name: "Site Development",
        description: "Complete guide to building a wordpress website",
        img:dev,
        url: "wordpress/sitedevelopment"

    },
    {
        id: 3,
        name: "WooCommerce Integration",
        description: "Add woocommerce to your site to sell globally",
        img:woo,
        url:"wordpress/woocommerce"

    },
    {
        id: 4,
        name: "Optimization",
        description: "Speed up your site to rank higher in search engines",
        img:opti,
        url:"wordpress/optimization"
    }
]
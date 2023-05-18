import React from 'react';
import Helmet from 'react-helmet';
import Products from '../components/Products';
import initialState from '../initialState';
import Extra from '../components/extra';

const Home = () => {
    return ( 
        <>
            <Helmet>
                <title>Temazcalli - Productos</title>  
                <meta name="twitter:card" content="summary_large_image"/>
                <meta name="twitter:site" content="@LeonelV12038172"/>
                <meta name="twitter:creator" content="@LeonelV12038172"/>
                <meta name="twitter:title" content="temazcalli"/>
                <meta name="twitter:description" content="temazcalli"/>
                <meta
                name="twitter:image"
                content="https://scontent.fcvj3-1.fna.fbcdn.net/v/t39.30808-6/271741640_1598892470476687_6916775880349367700_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=KADE3YXP9NMAX_oScY2&_nc_ht=scontent.fcvj3-1.fna&oh=00_AfCgANF3jx_zjMWKVKjPR7pVizmHmuCW8U7w8Cdmwc3RkA&oe=64246D19"
                />
                <meta property="og:title" content="temazcalli"/>
                <meta property="og:description" content="temazcalli"/>
                <meta
                property="og:image"
                content="https://scontent.fcvj3-1.fna.fbcdn.net/v/t39.30808-6/271741640_1598892470476687_6916775880349367700_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=KADE3YXP9NMAX_oScY2&_nc_ht=scontent.fcvj3-1.fna&oh=00_AfCgANF3jx_zjMWKVKjPR7pVizmHmuCW8U7w8Cdmwc3RkA&oe=64246D19"
                />
                <meta property="og:url" content="platzi-store-merch-55409.web.app" />
                <meta property="og:site_name" content="temazcalli" />
                <meta property="og:locale" content="es_ES" />
                <meta property="og:type" content="article" />
                <meta property="fb:app_id" content="ID_APP_FACEBOOK" />  
            </Helmet>    
            <Products products={initialState.products} />
            <Extra />
        </> 
    );
}
 
export default Home;
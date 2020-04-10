import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import serialize from 'serialize-javascript';
import { Helmet } from 'react-helmet';
import Routes from '../client/Routes';

export default (req, store, context) => {
	const content = renderToString(
		<Provider store={store}>
			<StaticRouter location={req.path} context={context}>
				<div>{renderRoutes(Routes)}</div>
			</StaticRouter>
		</Provider>,
	);
	const helmet = Helmet.renderStatic();
	return `<!DOCTYPE html>
            <head>
                ${helmet.title.toString()}
                ${helmet.meta.toString()}
                ${helmet.link.toString()}
                <link
  rel="stylesheet"
  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
  integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
  crossorigin="anonymous"
/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            </head>
            <body>
                <div id="root">${content}</div>
                <script>
                    window.__PRELOADED_STATE__ = ${serialize(
											store.getState(),
										).replace(/</g, '\\u003c')}
                </script>
                <script src="/bundle.js"></script>
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
            </body>
    </html>`;
};

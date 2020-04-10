# React With Wordpress
This is a simple blog built with the help of Wordpress Rest API and React.

## Getting Started
This project created as an assignment for rTcamp

### Installing
```sh
$ git clone https://github.com/navins94/rtcamp-react.git
$ cd rtcamp-react
$ npm install
```

Find Api.js in Service folder and update the url.

```javascript
const api = axios.create({
	baseURL: 'http://localhost:10010/'
});
```

Run on local

```sh
$ npm run dev
```

Navigate to [http://localhost:3000](http://localhost:3000)

## Built With

- [React](https://reactjs.org/)
- [React Redux](https://redux.js.org/)
- [Node.js](https://nodejs.org/)

*The theme uses Bootstrap for styling its views and components.

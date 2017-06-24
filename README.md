# Server-Monitorting-Dashboard

Dashboard to monitors various servers. Using material design and vuejs.

## Technologies Used
1. [Vuejs](https://vuejs.org/)
2. [Vuex](https://github.com/vuejs/vuex) for data management. 
3. [Axios](https://github.com/mzabriskie/axios) for http calls.
	* Http calls are not used as data is static for demonstration purposes. 
	* The code exists but is commented out. 
4. [Normalizr](https://github.com/paularmstrong/normalizr) for normlaizing data received from the backend. 
	* There is no backend but the dummy data is not normalized so this is used as it would have been in prescence of a backend. 
5. [Materialize](http://materializecss.com/) css library for material design.   
6. [Vue-cli](https://github.com/vuejs/vue-cli) for generating the project template. 

For [TypeScript](https://www.typescriptlang.org/) see the typescript branch. All stores(vuex) and components(vue) and javascript is written in typescript there. 

## How to build and run	
```
npm install && npm run dev			
```
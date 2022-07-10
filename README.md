# Graphql Service


## Run application

#### 1. Installation

1. Clone repo

```bash
git clone https://github.com/taleatg/graphql-service.git
cd graphql-service
git checkout develop
```
2. Install the dependencies
```bash
npm install
```

#### 2. Rename

* rename .env.example to .env

#### 3. Run app

Development:
```bash
npm run start:dev
```

Production:
```bash
npm run start
```

#### 4. Run services

* Follow the link to start the services [Musicify microservices](https://github.com/rolling-scopes-school/node-graphql-service)

#### 5. Open  Apollo Studio Explorer

* Open your browser and follow the link http://localhost:3000/
* Click on the "Query your server" button


## Examples of how the app works

### 1. Queries

**1.1 Get all items of the selected type**

![img.png](src/assets/getAll.png)

**1.2 Get item by id**

![img.png](src/assets/getById.png)

### 2. Mutation

**2.1 Register**

* Create a new user

![img.png](src/assets/register.png)

* Get token

![img.png](src/assets/token.png)

* Copy this jwt-token and add it to the headers

![img.png](src/assets/jwt.png)

**2.2 Add a new item**

![img.png](src/assets/add.png)

**2.3 Update item by id**

![img.png](src/assets/update.png)

**2.4 Delete item by id**

![img.png](src/assets/delete.png)

**2.5 Add track to favourites**

![img.png](src/assets/favourites.png)

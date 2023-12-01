# 🚀 Salezi Project

## Table of Contents

- [Overview](#overview)
- [Installation](#installation)
  - [Prerequisites](#prerequisites)
  - [Installing Strapi & Dependencies](#installing-strapi--dependencies)
- [Running the Project](#running-the-project)
  - [Start Without Auto-Reload](#start-without-auto-reload)
  - [Start with Auto-Reload](#start-with-auto-reload)
- [API Documentation](#api-documentation)
- [Postman Collection](#postman-collection)
- [Grafana](#install-grafana)

## 📝 Overview

The Cloudly Backend project is the backend application for Cloudly, a platform providing an API for managing stocks and sales of products for FNAC's sales partners. The project includes three different roles: Super Admin, FNAC Manager, and Seller, with role-based access control for enhanced security. The backend is built using Strapi with an SQLite database.

A category of items is referred to a "collection." Each collection comprises a set of individual products, and each product is characterized by a set of attributes. These attributes may include simple characteristics or more intricate ones, which are denoted as components and, in turn, consist of their own set of attributes.

3 collections are already created in the system so that you can see an example of how the system works. These collections are: Books, CDs and Electronics.

## 📦 Installation

### Prerequisites

Before getting started, ensure you have the following installed on your system:

- Node.js
- NPM (Node Package Manager)
- Git

### Installing Strapi & Dependencies

1. Clone the repository

```bash
git clone https://github.com/AntoineL2028/Salezi.git
```

2. Navigate to the project directory and install the project dependencies:

```bash
npm install
```

or

```bash
yarn install
```

## Running the Project

### Start Without Auto-Reload
To run the project without auto-reload, use the following command:

```bash
npm run start
```

### Start with Auto-Reload
To run the project with auto-reload, use the following command:

```bash
npm run develop
```

or
```bash
yarn develop
```

### API Documentation

Find the documentation of the API with the following link : http://localhost:1337/documentation/

### Postman Collection

For testing and covering all relevant routes for sellers, import the provided Postman collection: ./postman-collection/Salezi.postman_collection.json

### Install Grafana

You are provided with a Grafana dashboard to help you visualize the data in the system.

Install and start [Grafana](https://grafana.com/docs/grafana/latest/installation/)

Add the sqlite plugin to Grafana, in the terminal do :

```bash
grafana cli plugins install frser-sqlite-datasource
```

Add the sqlite datasource connection to Grafana

Import the `./Dashboard/Salezi-dashboard.json` file and create the datasource from the `./.tmp/data.db` file.
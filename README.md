# Cloudly Backend

## Table of Contents

- [Overview](#overview)
- [Installation](#installation)
  - [Prerequisites](#prerequisites)
  - [Installing Strapi](#installing-strapi)
  - [Installing Dependencies](#installing-dependencies)
- [Define Roles and Permissions](#define-roles-and-permissions)
- [Running the Project](#running-the-project)
  - [Start Without Auto-Reload](#start-without-auto-reload)
  - [Start with Auto-Reload](#start-with-auto-reload)
- [Postman Collection](#postman-collection)
- [Grafana](#install-grafana)

## Overview

The Cloudly Backend project is the backend application for Cloudly, a platform providing an API for managing stocks and sales of products for FNAC's sales partners. The project includes three different roles: Super Admin, FNAC Manager, and Seller, with role-based access control (RBAC) for enhanced security. The backend is built using Strapi with an SQLite database.


## Installation

### Prerequisites

Before getting started, ensure you have the following installed on your system:

- Node.js (version x.x.x)
- NPM (Node Package Manager)
- Git

### Installing Strapi

To install Strapi globally, use the following command:

### Installing Dependencies

```bash
npm install -g strapi
```
Navigate to the project directory and install the project dependencies:

```bash
Copy code
npm install
```
### Define Roles and Permissions
In Strapi Admin Panel, navigate to "Roles & Permissions" and create three roles: superAdmin, fnacManager, and seller.
Super Admin Role: Grant all permissions.
Fnac Manager Role: Allow access to relevant sections and actions.
Seller Role: Allow access and actions only on their own products and transactions.

### Running the Project

### Start Without Auto-Reload
To run the project without auto-reload, use the following command:

```bash
Copy code
npm run start
```
### Start with Auto-Reload
To run the project with auto-reload, use the following command:

```bash
Copy code
npm run develop
```
### Postman Collection

For testing and covering all relevant routes for sellers, import the provided Postman collection: Cloudly Backend Postman Collection.

### Install Grafana

Follow this link to install grafana:
https://grafana.com/docs/grafana/latest/setup-grafana/installation/
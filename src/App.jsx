/* eslint-disable max-len */
/* eslint-disable arrow-body-style */
import React, { useState } from 'react';
import classNames from 'classnames';
import './App.scss';

import usersFromServer from './api/users';
import categoriesFromServer from './api/categories';
import productsFromServer from './api/products';

const products = productsFromServer.map((product) => {
  const category = categoriesFromServer.find(
    categor => categor.id === product.categoryId,
  );

  const user = usersFromServer.find(
    person => person.id === category.ownerId,
  );

  return {
    ...product,
    categoryName: category.title,
    userName: user.name,
    categoryIcon: category.icon,
    userSex: user.sex,
    userId: user.id,
    categoryTitle: category.title,
  };
});

export const App = () => {
  const [query, setQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedUserId, setSelectedUserId] = useState(null);
  // const [selectedProducts, setSelectedProducts] = useState(null);

  const handleChange = (userId) => {
    const filtered = products.filter(product => product.userId === userId);

    setFilteredProducts(filtered);
    setSelectedUserId(userId);
  };

  const filterByquery = (event) => {
    const { value } = event.target;

    setQuery(value);

    const filtered = products.filter(prod => prod.name.toLowerCase().includes(value.toLowerCase()));

    setFilteredProducts(filtered);
  };

  const resetAll = () => {
    setFilteredProducts(products);
    setSelectedUserId(null);
    setQuery('');
  };

  const isVisibleProducts = filteredProducts.length === 0;

  const filterByCategory = (categoryName) => {
    const filteredBycategor = products.filter(category => category.categoryTitle === categoryName);

    setFilteredProducts(filteredBycategor);
  };

  return (
    <div className="section">
      <div className="container">
        <h1 className="title">Product Categories</h1>

        <div className="block">
          <nav className="panel">
            <p className="panel-heading">Filters</p>

            <p className="panel-tabs has-text-weight-bold">
              <a
                data-cy="FilterAllUsers"
                href="#/"
                onClick={() => setFilteredProducts(products)}
              >
                All
              </a>

              {usersFromServer.map(user => (
                <a
                  data-cy="FilterUser"
                  href="#/"
                  id={user.id}
                  key={Math.random()}
                  onClick={() => handleChange(user.id)}
                  className={selectedUserId === user.id ? 'is-active' : ''}
                >
                  {user.name}
                </a>
              ))}
            </p>

            <div className="panel-block">
              <p className="control has-icons-left has-icons-right">
                <input
                  data-cy="SearchField"
                  type="text"
                  className="input"
                  placeholder="Search"
                  value={query}
                  onChange={filterByquery}
                />

                <span className="icon is-left">
                  <i className="fas fa-search" aria-hidden="true" />
                </span>

                <span className="icon is-right">
                  <button
                    data-cy="ClearButton"
                    type="button"
                    className="delete"
                    onClick={() => setQuery('')}
                  />
                </span>
              </p>
            </div>

            <div className="panel-block is-flex-wrap-wrap">
              <a
                href="#/"
                data-cy="AllCategories"
                className="button is-success mr-6 is-outlined"
                onClick={() => setFilteredProducts(products)}
              >
                All
              </a>

              {categoriesFromServer.map(category => (
                <a
                  data-cy="Category"
                  className="button mr-2 my-1 is-info"
                  href="#/"
                  onClick={() => filterByCategory(category.title)}
                  key={Math.random()}
                >
                  {category.title}
                </a>
              ))}
            </div>

            <div className="panel-block">
              <a
                data-cy="ResetAllButton"
                href="#/"
                className="button is-link is-outlined is-fullwidth"
                onClick={resetAll}
              >
                Reset all filters
              </a>
            </div>
          </nav>
        </div>

        <div className="box table-container">
          {isVisibleProducts
            && (
            <p data-cy="NoMatchingMessage">
              No products matching selected criteria
            </p>
            )
          }

          <table
            data-cy="ProductTable"
            className="table is-striped is-narrow is-fullwidth"
          >
            <thead>
              <tr>
                <th>
                  <span className="is-flex is-flex-wrap-nowrap">
                    ID

                    <a href="#/">
                      <span className="icon">
                        <i data-cy="SortIcon" className="fas fa-sort" />
                      </span>
                    </a>
                  </span>
                </th>

                <th>
                  <span className="is-flex is-flex-wrap-nowrap">
                    Product

                    <a href="#/">
                      <span className="icon">
                        <i data-cy="SortIcon" className="fas fa-sort-down" />
                      </span>
                    </a>
                  </span>
                </th>

                <th>
                  <span className="is-flex is-flex-wrap-nowrap">
                    Category

                    <a href="#/">
                      <span className="icon">
                        <i data-cy="SortIcon" className="fas fa-sort-up" />
                      </span>
                    </a>
                  </span>
                </th>

                <th>
                  <span className="is-flex is-flex-wrap-nowrap">
                    User

                    <a href="#/">
                      <span className="icon">
                        <i data-cy="SortIcon" className="fas fa-sort" />
                      </span>
                    </a>
                  </span>
                </th>
              </tr>
            </thead>

            <tbody>
              {filteredProducts.map(product => (
                <tr data-cy="Product" key={Math.random()}>
                  <td className="has-text-weight-bold" data-cy="ProductId">
                    {product.id}
                  </td>

                  <td data-cy="ProductName">{product.name}</td>
                  <td data-cy="ProductCategory">
                    {`${product.categoryIcon} - ${product.categoryName}`}
                  </td>

                  <td
                    data-cy="ProductUser"
                    key={Math.random()}
                    className={classNames({
                      'has-text-link': product.userSex === 'm',
                      'has-text-danger': product.userSex === 'f',
                    })
                    }
                  >
                    {product.userName}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
